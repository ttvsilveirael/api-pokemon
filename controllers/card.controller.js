const psdatabase = require("../psdb");
const Card = require("../model/card");

class CardController {

    static async insertCard(request) {
        let jsonCard = request.body;
        let newCard = new Card(null, jsonCard['nome'], jsonCard['type'], jsonCard['image'], jsonCard['hp'],
            jsonCard['atk'], jsonCard['def'], jsonCard['weekness'], jsonCard['strength']);

        return await psdatabase.insert('cards', "nome,type,image,hp,atk,def,weekness,strength",
            `'${newCard.nome}','${newCard.type}','${newCard.image}','${newCard.hp}','${newCard.atk}','${newCard.def}', 
            '${newCard.weekness}','${newCard.strength}'`);
    }

    static async deleteCard(id) {
        if (id == null)
            return await psdatabase.delete('cards')
        return await psdatabase.delete('cards', id)
    }

    static async getCard(id) {
        if (id == null)
            return await psdatabase.get('cards')
        return await psdatabase.get('cards', id)
    }
}

module.exports = CardController 