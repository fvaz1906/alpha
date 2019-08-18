module.exports = {
    apps : [{
        name: "alpha",
        script: "nodemon --delay 5000ms index.js",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}