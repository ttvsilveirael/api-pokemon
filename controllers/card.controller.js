const database = require("./db");

class CardController {

    static async insertCard(newCard) {
        return await database.insert('cards', "nome, type, image, hp, atk, def,weekness,strength",
            `"${newCard.nome}", "${newCard.type}", "${newCard.image}", "${newCard.hp}", "${newCard.atk}", "${newCard.def}", 
            "${newCard.weekness}", "${newCard.strength}"`);

    }

    static async deleteCard(id) {
        if (id == null)
            return await database.deleteAll('cards');
        return await database.delete('cards', id);
    }
}

module.exports = CardController 