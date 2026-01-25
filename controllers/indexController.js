const db = require('../db/queries');
const { Client } = require('pg');
const pool = require('../db/pool.js');


async function getAllMessages(req,res) {
    await db.getAllMessages(req,res);
}
async function showNewMessageForm(req,res) {
  res.render('form')
}
async function createNewMessage(req,res) {
    const { messageContent, author } = req.body;
    await db.addMessage(messageContent, author)
    res.redirect('/')
}
async function deleteMessages(req,res) {
    await db.deleteAllMessages();
    res.redirect('/')
}

module.exports = {
    getAllMessages,
    showNewMessageForm,
    createNewMessage,
    deleteMessages
}