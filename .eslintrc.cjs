module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        // 'eslint object-curly-spacing': ['error', 'always', { arraysInObjects: false }],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': ['error', { code: 125 }],
        'eslint global-require': 'off',
        'global-require': 0,
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [0],
        'react/jsx-props-no-multi-spaces': [1],
        'react/no-unstable-nested-components': [0],
        'react/jsx-no-useless-fragment': [0],
        'no-plusplus': [0],
        'no-unused-expressions': [0],
        'consistent-return': [0],
        'no-nested-ternary': [1],
        'no-param-reassign': ['error', { props: false }],
        'react/style-prop-object': [0],
        'import/no-mutable-exports': [1],
        'no-inner-declarations': [0],
        'no-undef': 'off',
        // this is for sorting WITHIN an import
        'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
        // this is for sorting imports
        'import/order': [
            'error',
            {
                groups: [
                    ['external', 'builtin'],
                    'internal',
                    ['sibling', 'parent'],
                    'index',
                ],
                pathGroups: [
                    {
                        pattern: '@(react|react-native)',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@src/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['internal', 'react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};
