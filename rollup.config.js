import image from "@rollup/plugin-image"
// import peerDepsExternal from "rollup-plugin-peer-deps-external"
// import resolve from "@rollup/plugin-node-resolve"
// import commonjs from "@rollup/plugin-commonjs"
// import postcss from "rollup-plugin-postcss"
// import babel from "rollup-plugin-babel"

import pkg from "./package.json"

export default {
    input: pkg.source,
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        // peerDepsExternal(),
        // babel({
        //     exclude: "node_modules/**",
        // }),
        // resolve(),
        // commonjs(),
        // postcss(),
        image(),
    ],
}
