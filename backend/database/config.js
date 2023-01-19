const {createPool} = require('mysql2/promise');
require('dotenv').config()

const conn = createPool({
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    user:'root',
    host: 'localhost',
})

module.exports = {
    query : async (query) => {
        try {
           const [execute] = await conn.query(query);
           return execute;
        } catch (error) {
            console.log(error);
        }
    }
}