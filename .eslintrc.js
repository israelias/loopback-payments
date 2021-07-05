module.exports = {
  extends: '@loopback/eslint-config',
  rules: {
    'object-curly-spacing': ['warn', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    strict: [2, 'never'],
    'no-nested-ternary': 'off',
    'react/no-array-index-key': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/semi': ['off'],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: [
    //       '**/*.test.js',
    //       '**/*.test.jsx',
    //       '**/*.test.ts',
    //       '**/*.test.tsx',
    //       'src/tests/**/*',
    //     ],
    //   },
    // ],
    'no-object-literal-type-assertion': [0, { 'allow-arguments': 0 }],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
  },
};
