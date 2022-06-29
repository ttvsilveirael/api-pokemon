const CardController = require("../controllers/card.controller");

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  });

  fastify.get('/card', async (req, rep) => await CardController.getCard());
  fastify.get('/card/:id', async (req, rep) => await CardController.getCard(req.params['id']));

  fastify.put('/card', async (req, rep) => await CardController.insertCard(req));

  fastify.delete('/card', async (req, rep) => await CardController.deleteCard());
  fastify.delete('/card/:id', async (req, rep) => await CardController.deleteCard(req.params['id']));
}