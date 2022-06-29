'use strict'

// Read the .env file.
require('dotenv').config()

// Require the framework
const Fastify = require('fastify')

// Instantiate Fastify with some config
const app = Fastify({
    logger: true,
    pluginTimeout: 10000
})

const CardRoutes = require('./routes/card.routes')
fastify.register(cors, {
    origin: true
})

CardRoutes.routes.forEach(route => fastify.route(route));

// Register your application as a normal plugin.
app.register(require('./app.js'))

// Start listening.
app.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})