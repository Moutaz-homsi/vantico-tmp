const path = require("path")
const fs = require("fs")
const { toCamelCase } = require("../../helpers/strings")

module.exports = (program) => {
	program
		.command("create-page")
		.argument("[name]", "page name in kebab-case format")
		.action(async (name) => {
			const component_file_name = `${name}-page`
			const CamelCaseName = toCamelCase(name)
			// paths
			const directory_path = path.join(process.cwd(), `src/app/(pages)/${name}`)
			const index_file_path = path.join(directory_path, `page.jsx`)
			const page_file_path = path.join(directory_path, `${component_file_name}.jsx`)
			// files content
			const index_file_content = `export { default } from "./${component_file_name}"`
			const page_file_content = getComponentContent(CamelCaseName, component_file_name)

			// we should create directory with name inside src/app/(pages)
			console.log(`we should create directory with name inside path`, directory_path)
			fs.mkdirSync(directory_path, { recursive: true })
			// TODO if already exists

			console.log(`we should create page.jsx file inside path`, index_file_path)
			fs.writeFileSync(index_file_path, index_file_content)

			console.log(`we should create ${component_file_name} file inside path`, index_file_path)
			fs.writeFileSync(page_file_path, page_file_content)
		})
}

function getComponentContent(CamelCaseName, component_file_name) {
	return `import { Container } from "@/components/layout"
import { Typography, Button } from "@/components/ui"
export default function ${CamelCaseName}() {
	return (
		<Container>
			<Typography variant="h1">Title</Typography>
			<Typography variant="h2">Subtitle</Typography>
			<Button>Click me</Button>
		</Container>
	)
}`
}
