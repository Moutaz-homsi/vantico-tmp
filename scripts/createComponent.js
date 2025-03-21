const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { cwd } = require("process");

const filename = process.argv[2]; // Get the filename from the command-line arguments
if (filename) {
  const filePath = path.join(cwd(), "src/components", filename + ".jsx")

  const componentName = filename[0].toUpperCase() + filename.slice(1);
  fs.writeFileSync(
    filePath,
    `import React,{useState,useEffect} from 'react'

export default function ${componentName}() {
  const [state, setState] = useState()
  useEffect(()=>{},[])
  return (
    <div>${componentName}</div>
  )
}`,
    "utf8",
  );
  console.info(`File created at: ${filePath}`);
  exec(`code ${filePath}`);
} else {
  console.error("No filename provided.");
}
