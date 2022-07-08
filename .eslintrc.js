module.exports = {
    env: {
        browser: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'space-before-function-paren': 0,
        'multiline-ternary': 0,
        indent: 0,
        'object-curly-spacing': 0,
        'accessor-pairs': 'warn',
        'space-in-parens': ['error', 'always']
    }
}
