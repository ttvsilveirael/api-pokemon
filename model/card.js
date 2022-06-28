const dbObject = require("./dbObject");

class Card {
    id;
    nome;
    type;
    image;
    hp;
    atk;
    def;
    weekness;
    strength;

    constructor(id,
        nome,
        type,
        image,
        hp,
        atk,
        def,
        weekness,
        strength
    ) {
        this.id = id;
        this.nome = nome;
        this.type = type;
        this.image = image;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.weekness = weekness;
        this.strength = strength;

    }

    static getDbObject() {
        return [
            new dbObject('ID', 'INT', true, true),
            new dbObject('NOME', 'VARCHAR(250)', false, false),
            new dbObject('TYPE', 'VARCHAR(250)', false, false),
            new dbObject('IMAGE', 'VARCHAR(250)', false, false),
            new dbObject('HP', 'VARCHAR(20)', false, false),
            new dbObject('ATK', 'VARCHAR(20)', false, false),
            new dbObject('DEF', 'VARCHAR(20)', false, false),
            new dbObject('WEEKNESS', 'VARCHAR(250)', false, false),
            new dbObject('STRENGTH', 'VARCHAR(250)', false, false),
        ]
    }
}

module.exports = Card