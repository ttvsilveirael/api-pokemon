'use strict'

// Read the .env file.
require('dotenv').config()

// Require the framework
const Fastify = require('fastify')
const cors = require("fastify-cors")

// Instantiate Fastify with some config
const fastify = Fastify({
    logger: true,
    pluginTimeout: 10000
})

fastify.register(cors, {
    origin: true
})

// Register your application as a normal plugin.
fastify.register(require('./app.js'))

// Start listening.
fastify.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})