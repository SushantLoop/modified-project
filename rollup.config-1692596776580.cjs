'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('@rollup/plugin-typescript');
var dts = require('rollup-plugin-dts');
var postcss = require('rollup-plugin-postcss');
var terser = require('@rollup/plugin-terser');
var PeerDepsExternalPlugin = require('rollup-plugin-peer-deps-external');

var rollup_config = [
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/cjs/index.js",
                format: "cjs",
            },
            {
                file: "dist/esm/index.js",
                format: "esm",
            },
        ],
        plugins: [
            PeerDepsExternalPlugin(),
            resolve(),
            commonjs(),
            terser(),
            typescript({tsconfig: "./tsconfig.json"}),
            postcss({
                plugins: []
            })
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/]
    },
];

exports.default = rollup_config;
