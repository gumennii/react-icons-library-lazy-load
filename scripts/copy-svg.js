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

function renameFiles() {
  if (!fs.existsSync("svg")) {
    fs.mkdirSync("svg");
  }

  walkDir(`assets`, function (dirPath, fileName) {
    const category = dirPath.split("/")[1];
    const nameWithPath = fileName + "_" + category;

    const name = camelcase(nameWithPath.replace(/\.svg/, ""), {
      pascalCase: true,
    });

    const newDir = `svg/${category}`;
    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir);
    }

    fs.copyFile(dirPath, `${newDir}/${name}.svg`, (err) => err);
  });
}

function main() {
  renameFiles();
}

main();
