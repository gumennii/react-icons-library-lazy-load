const fs = require("fs");
const path = require("path");
const camelcase = require("camelcase");

const category = process.argv.slice(2);

if (!category) {
  throw Error("Please specify a package");
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath, f);
  });
}

function getFileNames() {
  const names = [];

  walkDir(`svg`, function (dirPath, fileName) {
    const name = camelcase(fileName.replace(/\.svg/, ""), {
      pascalCase: true,
    });

    names.push(`"${name}"`);
  });

  return names;
}

function writeTypes(fileNames) {
  const r1 = "\n";
  const r2 = "export type TIconName = ";
  const types = fileNames.join(" | ");
  const content = [r2, types, r1].join("");
  const content2 = ["export const iconNames = ", "[", fileNames, "]"].join("");

  fs.writeFile(`./src/Icon.types.ts`, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  fs.appendFile(`./src/Icon.types.ts`, content2, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

function main() {
  const fileNames = getFileNames(category);
  writeTypes(fileNames);
}

main();
