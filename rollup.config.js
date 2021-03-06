import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import css from 'rollup-plugin-css-only'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
    css({ output: 'bundle.css' })
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
