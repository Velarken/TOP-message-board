const pool = require('./pool');

async function addMessage(message, user, timestamp) {
    await pool.query(`INSERT INTO ___ (___) VALUES ($1)`, [username])
}