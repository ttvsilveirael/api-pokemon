
require('dotenv').config()
const { cli } = require('fastify-cli/start');
const { Client } = require('pg');

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
            }
            client.end();
        });
        return true;
    }

    static async insert(table, columns, values) {
        let rows = await client.query(`INSERT INTO ${table} (${columns}) VALUES (${values})`, (err, res) => {
            if (err) throw err;
            for (let row of res.rows) {
            }
            client.end();
        });
        return rows;
    }

    static async get(table, id) {
        client.connect();
        let response = [];
        let rows = [];
        rows = (await client.query(`SELECT * FROM ${table} WHERE ID = ${id}`)).rows;
        client.end();
        for (let row of rows) {
            response.push(row);
        }
        return response;
    }

    static async get(table) {
        client.connect();
        let response = [];
        let rows = [];
        rows = (await client.query(`SELECT * FROM ${table}`)).rows;
        client.end();
        for (let row of rows) {
            response.push(row);
        }
        return response;
    }
}

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


module.exports = psdatabase