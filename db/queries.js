const pool = require('./pool');
require('dotenv').config

async function getAllMessages(req,res) {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM user_messages')
        res.render('index', {title: 'Mini Messageboard', messages:result.rows})
    } catch (error) {
        console.log(error);
    } finally {
        client.release(); // ends the db connection
    }
    res.status(404)
}

async function addMessage(messageContent, author) {
    const client = await pool.connect();
    try {
        await pool.query(`
            INSERT INTO user_messages (message_body, message_author) 
            VALUES ($1, $2)`,[messageContent, author])     
    } catch (error) {
        console.log(error)
    } finally {
        client.release();
    }
}

async function deleteAllMessages() {
    const client = await pool.connect();
    try {
        await pool.query('DELETE FROM user_messages')
    } catch (error) {
        console.log(error)
    } finally {
        client.release();
    }
    
    // use the id from the message to delete from db. author may be repeated and body may not match if it is long.
}

module.exports = {
    getAllMessages,
    addMessage,
    deleteAllMessages
}