const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { toCamelCase } = require("./helpers/strings");
const askYesNoQuestion = require("./helpers/askYesOrNo");

const [
  singularName,
  pluralName = singularName + "s",
  shouldCreatePages = "ask",
] = process.argv.slice(2);

const camelCaseName = toCamelCase(pluralName);
const formName = `${camelCaseName}Form`;

// TODO create "@/actions/${pluralName}"
// TODO create "@/schemas/${pluralName}"

// =================================================
// CREATE SCHEMA FILE
const schemaName = `${singularName}Schema`;
const schema_content = `
import { z } from "zod";

export const ${schemaName} = z.object({
  name: z.string().min(3, "Name is required"),
});
`;

const schema_path = path.join(process.cwd(), "schemas", `${pluralName}.ts`);
console.log(`Creating schema file: "${schema_path}"`);
fs.writeFileSync(schema_path, schema_content);

// =================================================
// CREATE ACTIONS FILE
const add_action = toCamelCase(`add-${singularName}-action`, false);
const update_action = toCamelCase(`update-${singularName}-action`, false);

const actions_content = `
"use server";

import runFormAction from "./runFormAction";
import { ${schemaName} } from "@/schemas/${pluralName}";

export async function ${add_action}(
  formData: any,
): Promise<{ success: boolean; data?: any; message: string }> {
  return runFormAction({
    schema: ${schemaName},
    formData,
    route: "${pluralName}",
    actionName: "${add_action}",
  });
}

export async function ${update_action}(
  formData: any,
): Promise<{ success: boolean; data?: any; message: string }> {
  return runFormAction({
    formData,
    route: \`${pluralName}/\${formData.id}\`,
    actionName: "${update_action}",
    method: "PUT",
  });
}

`;

const actions_path = path.join(process.cwd(), "actions", `${pluralName}.ts`);
console.log(`Creating actions file: "${actions_path}"`);
fs.writeFileSync(actions_path, actions_content);

// =================================================
// CREATE FORM FILE
const file_content = `
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ${add_action}, ${update_action} } from "@/actions/${pluralName}";
import { ${schemaName} } from "@/schemas/${pluralName}";

export default function ${formName}({ initialData }) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const formTitle = initialData ? "Edit ${singularName}" : "Add ${singularName}";
  const formInfo = initialData
    ? "Info About Editing the ${singularName}"
    : "Info about adding the ${singularName}";

  const form = useForm({
    resolver: zodResolver(${schemaName}),
    defaultValues: {
      name: initialData?.name || "",
    },
    mode: "all",
  });

  const handleSubmit = (formData) => {
    startTransition(async () => {
      try {
        let result;
        const apiData = formData;

        if (initialData?.id) {
          result = await ${update_action}({
            ...apiData,
            id: initialData.id,
          });
        } else {
          result = await ${add_action}(apiData);
        }

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        if (result.success) {
          toast.success(result.message);
          // form.formState.dirtyFields = {};

          // form.reset(data);
          router.refresh();
          !initialData && router.push(\`/${pluralName}/edit/\${result.data.id}\`);
          const currentValues = form.getValues();
          form.reset(currentValues, {
            keepValues: true,
            keepDirty: false,
          });
        }
      } catch (error) {
        toast.error("Error Uploading the ${singularName}!");
      }
    });
  };

  console.log("form state", form.formState);
  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="pb-5 border-b border-table-border mx-4">
          <Button
            variant="link"
            className="pl-0 mb-4"
             onClick={() => router.push("/${pluralName}")}
            type="button"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
             Back to ${pluralName}
          </Button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Heading title={formTitle} info={formInfo} />
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                 onClick={() => router.push("/${pluralName}")}
                type="button"
              >
                Cancel
              </Button>
               <Button variant="primary" type="submit" disabled={isPending}>
                Save ${singularName}
              </Button>
            </div>
          </div>
        </div>

        <Input
          label="name"
          placeholder="name"
          {...form.register("name")}
          error={form.formState.errors?.name}
        />
      </form>
    </div>
  );
}

`;

const dir_path = path.join(process.cwd(), "app/[locale]/(pages)", pluralName);

if (!fs.existsSync(dir_path)) {
  console.log(`Creating page directory: ${dir_path}`);
  fs.mkdirSync(dir_path);
}

const form_path = path.join(dir_path, `${formName}.jsx`);

console.log(`Creating form file: "${form_path}"`);
fs.writeFileSync(form_path, file_content);

// =================================================
// CREATE FORM PAGES (new/edit)
const createPages = () => {
  const create_dir_path = path.join(dir_path, "new");
  if (!fs.existsSync(create_dir_path)) {
    console.log(`Creating page directory: ${create_dir_path}`);
    fs.mkdirSync(create_dir_path);
  }
  const create_page_path = path.join(create_dir_path, "page.jsx");
  const create_component_name = toCamelCase(`new-${singularName}-page`);
  const create_page_content = `
import ${formName} from "../${formName}";
import React from "react";

export default function ${create_component_name}() {
return (
  <>
    <${formName} />
  </>
);
}
`;

  console.log(`Creating page file: "${create_page_path}"`);
  fs.writeFileSync(create_page_path, create_page_content);

  const edit_dir_path = path.join(dir_path, "edit/[id]");
  if (!fs.existsSync(edit_dir_path)) {
    console.log(`Creating page directory: ${edit_dir_path}`);
    fs.mkdirSync(edit_dir_path, { recursive: true });
  }

  const edit_page_path = path.join(edit_dir_path, "page.jsx");
  const edit_component_name = toCamelCase(`edit-${singularName}-page`);
  const edit_page_content = `
import ${formName} from "../../${formName}";
import React from "react";
import { notFound } from "next/navigation";
import { serverFetcher } from "@/actions/serverFetcher";


export default async function ${edit_component_name}({ params:{id} }) {
  const result = await serverFetcher(\`/api/${pluralName}/\${id}\`);

  if (!result) {
    return notFound();
  }

return (
  <>
    <${formName} initialData={result} />
  </>
);
}
`;

  console.log(`Creating page file: "${edit_page_path}"`);
  fs.writeFileSync(edit_page_path, edit_page_content);
};

const finish = () => {
  console.log("✅ Done!");
  exec(`code "${form_path}"`);
};

if (shouldCreatePages === "ask") {
  askYesNoQuestion("Do you want to create new/edit pages?").then((answer) => {
    if (answer) {
      createPages();
    }
    finish();
  });
} else if (
  shouldCreatePages.toLowerCase() === "y" ||
  shouldCreatePages.toLowerCase() === "yes"
) {
  createPages();
  finish();
} else {
  finish();
}
