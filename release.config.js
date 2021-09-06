module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/mihinduranasinghe/GH_Demo",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'
    ]
};