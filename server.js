'use strict'

const port = process.env.PORT || 5000

// Require the framework
const Fastify = require('fastify')
const cors = require("fastify-cors")

// Instantiate Fastify with some config
const app = Fastify({
    logger: true,
    pluginTimeout: 10000
});
app.register(cors, {
    origin: true
})
// Register your application as a normal plugin.
app.register(require('./app.js'))

// Start listening.
app.listen({ port: port, host: `0.0.0.0` });