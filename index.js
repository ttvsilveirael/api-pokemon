const fastify = require('fastify')({ logger: true })
const cors = require("fastify-cors")
const database = require('./controllers/db')
const Card = require('./model/card')
const CardRoutes = require('./routes/card.routes')
fastify.register(cors, {
    origin: true
})
CardRoutes.routes.forEach(route => fastify.route(route));

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start();