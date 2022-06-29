const { Client } = require('pg');

console.log(process.env.DATABASE_URL);
const client = new Client({
    connectionString: 'postgres://hkwtiotatxxmxr:f4e432427a15be5992a23a6ac3e5dfa86cb01120deec8b723f7aea0fe5a99643@ec2-18-204-142-254.compute-1.amazonaws.com:5432/de8tbl1iclsprp',
    ssl: {
        rejectUnauthorized: false
    }
});

class psdatabase {
    /**
       * Cria tabela no banco utilizando a funcao convertercolunas
       *
       * @param name Nome da tabela
       * @param columns Colunas em formato dbObject 
     */
    static async createTable(name, columns) {
        client.connect();
        let sqlColumns = convertColumns(columns);
        client.query(`create table ${name} ${sqlColumns}`, (err, res) => {
            if (err) throw err;
            for (let row of res.rows) {
                console.log(JSON.stringify(row));
            }
            client.end();
        });
        return true;
    }

    static async insert(table, columns, values) {
        client.connect();
        console.log(`insert into ${table} (${columns}) values (${values})`);
        let rows = await client.query(`INSERT INTO ${table} (${columns}) VALUES (${values})`, (err, res) => {
            if (err) throw err;
            for (let row of res.rows) {
                console.log(JSON.stringify(row));
            }
            client.end();
        });
        return rows;
    }
}
// insert into 
// cards (nome, type, image, hp, atk, def,weekness,strength) 
// values ("Absol G", "Darkness", "https://images.pokemontcg.io/pl3/1_hires.png", "hp", "45", "50",
//             "Fighting", "Psychic")
/**
   * Cria uma string a partir do objeto dbObject para nova tabela no banco.
   *
   * @param colunas Colunas em formato dbObject 
  */
function convertColumns(columns) {
    {
        columns.forEach(column => {
            if (this.sqltext == '' || this.sqltext == undefined) this.sqltext = '(';
            else this.sqltext += ',';

            this.sqltext += `${column.key}  ${column.value}`;
            if (column.pk) this.sqltext += ` PRIMARY KEY`;
            if (column.fk != null) this.sqltext += `, FOREIGN KEY (${column.key}) REFERENCES ${column.nomeTabela}(${column.fk}) `;
        })

        this.sqltext += ')';
        return this.sqltext;
    }
}


// client.query('SELECT NOW()', (err, res) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//         console.log(JSON.stringify(row));
//     }
//     client.end();
// });

// static async createDatabase() {
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: "Test@123",
//         Promise: bluebird
//     });
//     connection.execute('create database pokemonbatle');
// }

module.exports = psdatabase