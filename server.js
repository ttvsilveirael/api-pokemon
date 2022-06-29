'use strict'

const PORT = process.env.PORT || 5000

// Require the framework
const Fastify = require('fastify')

// Instantiate Fastify with some config
const app = Fastify({
    logger: true,
    pluginTimeout: 10000
});
// Register your application as a normal plugin.
app.register(require('./app.js'))

// Start listening.
app.listen({port: PORT, callback: () => console.log("Runing")});