module.exports = {
    extends: '@it-incubator/eslint-config',
    rules: {
        "react/no-unknown-property": ['error', { ignore: ['css'] }]
    }
}