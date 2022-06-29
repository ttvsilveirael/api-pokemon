'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        return { hello: 'world' }
    })
}
// const CardController = require("../controllers/card.controller");
// const Card = require("../model/card");

// class CardRoutes {
//     static routes = [{
//         method: 'PUT',
//         url: '/card',
//         handler: async (request, reply) => {
//             let jsonCard = request.body;
//             let card = new Card(null, jsonCard['nome'], jsonCard['type'], jsonCard['image'], jsonCard['hp'],
//                 jsonCard['atk'], jsonCard['def'], jsonCard['weekness'], jsonCard['strength']);
//             return await CardController.insertCard(card);
//         }
//     },
//     {
//         method: 'DELETE',
//         url: '/card/:id',
//         handler: async (request, reply) => {
//             let id = request.params['id'];
//             return CardController.deleteCard(id)
//         }

//     }, {
//         method: 'DELETE',
//         url: '/card',
//         handler: async (request, reply) => {
//             return CardController.deleteCard(null)
//         }
//     }
//         , {
//         method: 'GET',
//         url: '/card',
//         handler: async (request, reply) => {
//             return CardController.getCard(null)
//         }

//     }
//         , {
//         method: 'GET',
//         url: '/card/:id',
//         handler: async (request, reply) => {
//             let id = request.params['id'];
//             return CardController.getCard(id)
//         }

//     }]
// }
// module.exports = CardRoutes