'use strict'

const port = process.env.PORT || 5000

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
console.log(process.env.PORT);
console.log(process.env);
console.log(`v` + port);
app.listen({ port: port, host: `0.0.0.0` });