## criteria

- searchability ( we want to be able to search by file/function name easily )
- IDE and AI friendly: for example IDE will be able to import the component when we just provide part of the component name

## general rules:

- use index file to export related components or files to reduce import statements (example import all core ui component from src/components/ui )
- no code in index file or page file
-

## file names

- format: kebab-case ( easier to read )
- react component
  - ends with .jsx/.tsx
- use postfix to identify the file type and make it easy to remember and search
  - utils, page, form,
- no repeated file names
- for dynamic routes don't use something general like [id] be specific ex: [projectId] to help with search and navigation

## folder structure

app router directory structure
pages should be added into src/app/(pages) directory
`/page-name`

- `/_components`
  - `page-name-page.jsx`: this will be imported and exported by page.jsx (name ends with Page )
  - `sub-page-name-page.jsx`
- `/sub-page-name` (if needed, to avoid deep nesting we will not create `_components` in the sub pages )
  - ...
- `page.jsx`
- ... (any page specific code such: utils, hooks, forms, schema, ts-types)
  we will have folder for shared components between pages

src/components directory: components not for specific page

- layout ( header, footer, page-title, )
- ui ( Button, Card, Image ... )
- inputs
- modal
