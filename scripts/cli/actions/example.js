module.exports = (program) => {
	program
		.command("example")
		.argument("[param]", "nested object log depth default = 1")
		.action(async (param) => {
			console.info("run with param: ", param)
		})
}
