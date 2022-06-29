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

const CardRoutes = require('./routes/card.routes')
app.register(cors, {
    origin: true
})

CardRoutes.routes.forEach(route => app.route(route));

// Register your application as a normal plugin.
// app.register(require('./app.js'))

// Start listening.
app.listen(process.env.PORT || 5000, 'silveirael-pokemon.herokuapp.com', (err) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})