import babel from 'rollup-plugin-babel';

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/compiled.esm.js',
            format: 'esm',
            sourcemap: false,
        },
        external: ['styled-components'],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                compact: false,
                runtimeHelpers: false,
                plugins: [
                    [
                        "babel-plugin-styled-components",
                        {
                            minify: true,
                            transpileTemplateLiterals: true,
                            displayName: true,
                            pure: true,
                            fileName: false,
                            ssr: false,
                        },
                    ],
                ],
            }),
        ],
    },
];
