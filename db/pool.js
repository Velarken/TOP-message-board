const { Pool } = require('pg');

module.exports = new Pool({
    host: 'localhost',
    user: 'testing',
    pass: 'npg_lsCE9Jkd0Rqo',
    database: 'neondb',
    port: '5432',
    ssl: 'require'
})