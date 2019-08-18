module.exports = {
    apps : [{
        name: "omega",
        script: "node index.js",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}