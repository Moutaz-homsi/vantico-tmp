#!/usr/bin/env node
// require("dotenv").config()
const { program } = require("commander")
const path = require("path")
const fs = require("fs")
const inquirer = require("inquirer")

const name = "cli"
// Function to dynamically load action modules
async function loadActions() {
	const actionsDir = path.join(__dirname, "actions")
	const actionFiles = fs.readdirSync(actionsDir)

	actionFiles.forEach((file) => {
		const actionPath = path.join(actionsDir, file)
		const action = require(actionPath)
		if (typeof action === "function") {
			action(program)
		} else {
			const { command, description, actionFn } = action
			program.command(command).description(description).action(actionFn)
		}
	})
	// we want to suggest a command when no arguments are provided
	// Check if no command-specific arguments are provided
	const available_commands = actionFiles.map((file) => file.replace(".js", ""))

	// Optional: Set up arguments if your application expects any
	program.arguments("[arguments]").action(async (options) => {
		if (!options) {
			// Code to execute when no arguments are provided
			console.log("No arguments provided!")

			const { command } = await inquirer.prompt([
				{
					type: "list",
					name: "command",
					choices: actionFiles.map((file) => file.replace(".js", "")),
					message: "Please select a command"
				}
			])

			console.log(name, command)
			program.parse([...process.argv, command])
		} else {
			// Code to execute when arguments are provided
			console.log("Arguments provided:", options)
		}
	})
}

program.name(name).description("CLI tool for Strapi developers")

// Load all actions
loadActions()

program.parse(process.argv)
