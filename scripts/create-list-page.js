const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { toCamelCase } = require("./helpers/strings");

const pageName = process.argv[2];
const page_dir_path = path.join(
  process.cwd(),
  "app/[locale]/(pages)",
  pageName,
);

if (!fs.existsSync(page_dir_path)) {
  console.log(`Creating page directory: ${page_dir_path}`);
  fs.mkdirSync(page_dir_path);
}

const page_path = path.join(page_dir_path, "page.tsx");
const camelCasePageName = toCamelCase(pageName);
const page_content = `
import Link from "next/link";
import React from "react";
import DynamicList from "@/components/common/DynamicList";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";

export default function ${camelCasePageName}() {
  return (
    <div>
      <div className="flex flex-col pt-8 pl-4 sm:pl-0 border-t border-table-border sm:border-none sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <Heading title="${pageName}" info="Info about ${pageName}" />
        <div>
          <Button>
            <Link href="/${pageName}/new">Add ${pageName}</Link>
          </Button>
        </div>
      </div>

      <DynamicList
        api_route="${pageName}"
        // sortFields={[
        //   { value: "id", label: "Id" },
        //   { value: "name", label: "Name" },
        // ]}
        cols={[
          { key: "id", header: "Id" },
          { key: "name", header: "Name" },
        ]}
      />
    </div>
  );
}
`;

console.log(`Creating page file: "${page_path}"`);
fs.writeFileSync(page_path, page_content);
exec(`code "${page_path}"`);
