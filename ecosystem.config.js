module.exports = {
    apps : [{
        name: "alpha",
        script: "nodemon index.js",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}