'use strict'
const psdatabase = require('../psdb');
const Card = require('../model/card');

class CardController {

    static cardString(jsonCard) {
        return `('${jsonCard['nome'].replace("'", '*')}','${jsonCard['type'].replace("'", '*')}','${jsonCard['image'].replace("'", '*')}','${jsonCard['hp'].replace("'", '*')}','${jsonCard['atk'].replace("'", '*')}',
                '${jsonCard['def'].replace("'", '*')}','${jsonCard['weekness'].replace("'", '*')}','${jsonCard['strength'].replace("'", '*')}')`;
    }

    static async insertCard(request) {
        let jsonCard = request.body;
        if (jsonCard.length > 0) {
            return await this.insertCards(request);
        }
        return await psdatabase.insert('cards', 'nome,type,image,hp,atk,def,weekness,strength', cardString(this.jsonCard));
    }


    static async insertCards(request) {
        let jsonCard = request.body;
        let cString = '';
        (jsonCard).forEach((card) => {
            cString += (cString == '' ? '' : ', ') + this.cardString(card);
        })
        return await psdatabase.insert('cards', 'nome,type,image,hp,atk,def,weekness,strength', cString);
    }

    static async deleteCard(id) {
        if (id == undefined)
            return await psdatabase.delete('cards')
        return await psdatabase.delete('cards', id)
    }

    static async getCard(id) {
        if (id == undefined)
            return await psdatabase.get('cards')
        return await psdatabase.get('cards', id)
    }
}

module.exports = CardController 