const path = require("path")
const fs = require("fs")
const { toCamelCase } = require("../../helpers/strings")
const inquirer = require("inquirer")
const { exec } = require("child_process")

module.exports = (program) => {
	program
		.command("create-component")
		.argument("[name]", "file name in kebab-case format")
		.action(async (name) => {
			if (!name) {
				do {
					const { answer } = await inquirer.prompt([
						{
							type: "input",
							name: "answer",
							message: "Please enter the name of the component in kebab-case format (e.g. my-component)"
						}
					])
					name = answer
				} while (!name || name.trim() === "")
			}
			const CamelCaseName = toCamelCase(name)
			// paths
			const filePath = path.join(process.cwd(), "src/components", name + ".jsx")

			fs.writeFileSync(filePath, getComponentContent(CamelCaseName), "utf8")

			exec(`code ${filePath}`)
		})
}

function getComponentContent(CamelCaseName) {
	return `import { Typography, Button } from "@/components/ui"
export default function ${CamelCaseName}() {
	return (
		<div>
			<Typography variant="h1">text</Typography>
			<Button>Click me</Button>
		</div>
	)
}`
}
