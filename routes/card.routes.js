const CardController = require("../controllers/card.controller");

module.exports = async function (fastify, opts) {
  app.get('/', async function (request, reply) {
    return 'this is an example'
  });

  app.get('/card', async (req, rep) => await CardController.getCard());
  app.get('/card/:id', async (req, rep) => await CardController.getCard(req.params['id']));

  app.put('/card', async (req, rep) => await CardController.insertCard(req));

  app.delete('/card', async (req, rep) => await CardController.deleteCard());
  app.delete('/card/:id', async (req, rep) => await CardController.deleteCard(req.params['id']));
}