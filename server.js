'use strict'

// Read the .env file.
require('dotenv').config()

// Require the framework
const Fastify = require('fastify')
const cors = require("fastify-cors")

// Instantiate Fastify with some config
const app = Fastify({
    logger: true,
    pluginTimeout: 10000
})
app.register(cors, {
    origin: true
})

// Register your application as a normal plugin.
app.register(require('./app.js'))
var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, (err) => {

    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})