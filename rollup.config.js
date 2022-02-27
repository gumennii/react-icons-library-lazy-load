import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import filesize from "rollup-plugin-filesize";
import svgr from "@svgr/rollup";

const packageJson = require("./package.json");

export default {
  input: "src/index.tsx",
  output: [
    {
      dir: packageJson.main,
      format: "esm",
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    filesize(),
    svgr(),
  ],
};
