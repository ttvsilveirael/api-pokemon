
require('dotenv').config()
const { cli } = require('fastify-cli/start');
const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgres://hkwtiotatxxmxr:f4e432427a15be5992a23a6ac3e5dfa86cb01120deec8b723f7aea0fe5a99643@ec2-18-204-142-254.compute-1.amazonaws.com:5432/de8tbl1iclsprp',
    ssl: {
        rejectUnauthorized: false
    }
});
const pg = require('pg')
const pool = new pg.Pool({
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
        let conn = await pool.connect();
        const res = await conn.query(`create table ${name} ${sqlColumns}`);
        conn.end();
        return res.rows;
    }

    static async insert(table, columns, values) {
        let conn = await pool.connect();
        const res = await conn.query(`INSERT INTO ${table} (${columns}) VALUES (${values})`);
        conn.end();
        return res.rows;
    }

    static async get(table, id) {
        let conn = await pool.connect();
        let res;
        if (id != undefined) res = await conn.query(`SELECT * FROM ${table} WHERE ID = ${id}`);
        else res = await conn.query(`SELECT * FROM ${table}`);
        conn.end();
        return res.rows;
    }

    static async delete(table, id) {
        let conn = await pool.connect();
        let res;
        if (id != undefined) res = await conn.query(`DELETE FROM ${table} WHERE ID = ${id}}`);
        else res = await conn.query(`DELETE FROM ${table}`);
        conn.end();
        return res.rows;
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