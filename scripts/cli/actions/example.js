module.exports = (program) => {
	program
		.command("example")
		.argument("[param]", "nested object log depth default = 1")
		.action(async (param) => {
			console.log("run with param: ", param)
		})
}
