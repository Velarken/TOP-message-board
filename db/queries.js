const pool = require('./pool');
require('dotenv').config

async function getAllMessages() {
    await pool.query(`SELECT * FROM user_messages`)
}

async function addMessage(message, user, timestamp) {
    await pool.query(`INSERT INTO ___ (___) VALUES ($1)`, [username])
}

async function deleteMessage() {
    await pool.query('DELETE FROM user_messages WHERE ____')
}

module.exports = {
    getAllMessages,
    addMessage,
    deleteMessage
}