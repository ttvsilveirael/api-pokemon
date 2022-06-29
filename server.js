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


// Register your application as a normal plugin.
// app.register(require('./app.js'))

app.listen(process.env.PORT || 5000, '0.0.0.0', (err) => {
    console.log("Express server listening on port %d in %s mode", app.settings.env);

    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})
// CardRoutes.routes.forEach(route => app.route(route));