## Getting Started

## env
Nodejs version: 20
```bash 
cp .env.example .env
```

## scripts
First, run the development server:
```bash
npm run dev
```
to see available project components and how to use them run 
```bash
npm run storybook
```

styling: taliwendcss with shadcn components
note we are using tailwend v4 
https://tailwindcss.com/blog/tailwindcss-v4

guide:
docs/code-style
- page builder
  - [link](src/components/page-builder/page-builder.jsx)
- dynamic pages
  - [link](src/app/(pages)/[slug]/dynamic-slug-page.jsx)
- other features

localization:
we followed this guide to setup localization
https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing