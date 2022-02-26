const fs = require("fs");
const camelcase = require("camelcase");

const category = process.argv.slice(2);

if (!category) {
  throw Error("Please specify a package");
}

function getFileNames(category) {
  const files = fs.readdirSync(`svg/${category}`);
  const names = [];

  for (const file of files) {
    const name = camelcase(file.replace(/\.svg/, ""), {
      pascalCase: true,
    });

    names.push(name);
  }

  return names;
}

function getLazyImports(fileNames) {
  const imports = [];

  for (const name of fileNames) {
    const lazyImport = `${name}: React.lazy(() => import('./${name}'))`;
    imports.push(lazyImport);
  }

  return imports.join(",\n");
}

function writeLazyImports(category, lazyImports) {
  const r1 = 'import React from "react";';
  const r2 = 'import { IconNameOptions } from "../../";\n';
  const r3 = "export const lazyImports: Partial<IconNameOptions> = {";
  const r4 = "};";

  const content = [r1, r2, r3, lazyImports, r4].join("\n");

  fs.writeFile(`./src/icons/${category}/lazy-imports.tsx`, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

function main() {
  const fileNames = getFileNames(category);
  const lazyImports = getLazyImports(fileNames);
  writeLazyImports(category, lazyImports);
}

main();
