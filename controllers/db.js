const bluebird = require('bluebird')
const mysql = require('mysql2/promise')

conObject =
{
    host: 'localhost',
    user: 'root',
    password: "Test@123",
    database: "pokemonbatle",
    Promise: bluebird
}


class database {
    static async createDatabase() {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "Test@123",
            Promise: bluebird
        });
        connection.execute('create database pokemonbatle');
    }

    /**
       * Cria tabela no banco utilizando a funcao convertercolunas
       *
       * @param name Nome da tabela
       * @param columns Colunas em formato dbObject 
     */
    static async createTable(name, columns) {
        const connection = await mysql.createConnection(conObject);
        let sqlColumns = this.convertColumns(columns);
        let ret = await connection.execute(`create table ${name} ${sqlColumns}`);
        return true;
    }

    /**
     * Cria uma string a partir do objeto dbObject para nova tabela no banco.
     *
     * @param colunas Colunas em formato dbObject 
    */
    static convertColumns(columns) {
        {
            columns.forEach(column => {
                if (this.sqltext == '' || this.sqltext == undefined) this.sqltext = '(';
                else this.sqltext += ',';

                this.sqltext += `${column.key}  ${column.value}`;
                if (column.autoIncrement) this.sqltext += ` AUTO_INCREMENT`;
                if (column.pk) this.sqltext += ` PRIMARY KEY`;
                if (column.fk != null) this.sqltext += `, FOREIGN KEY (${column.key}) REFERENCES ${column.nomeTabela}(${column.fk}) `;
            })

            this.sqltext += ')';
            return this.sqltext;
        }
    }

    static async insert(table, columns, values) {
        const connection = await mysql.createConnection(conObject);
        const [rows, fields] = await connection.execute(`insert into ${table} (${columns}) values (${values})`);
        return rows;
    }

    static async delete(table, id) {
        const connection = await mysql.createConnection(conObject);
        const [rows, field] = await connection.execute(`delete from ${table} where id = ${id}`);
        return rows;
    }

    static async deleteAll(table) {
        const connection = await mysql.createConnection(conObject);
        const [rows, field] = await connection.execute(`delete from ${table}`);
        return rows;
    }

    static async getCard(table, id) {
        const connection = await mysql.createConnection(conObject);
        const [rows, field] = await connection.execute(`SELECT * from ${table} WHERE ID = ${id}`);
        return rows;
    }

    static async getCard(table) {
        const connection = await mysql.createConnection(conObject);
        const [rows, field] = await connection.execute(`SELECT * from ${table}`);
        return rows;
    }

}

module.exports = database