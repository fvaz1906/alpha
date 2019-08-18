module.exports = {
    apps : [{
        name: "alpha",
        script: "nodemon --delay 8000ms index.js",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}