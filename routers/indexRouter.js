// imports
const express = require('express')
const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController.js');

//data

indexRouter.get('/', indexController.getAllMessages)
indexRouter.get('/new', indexController.showNewMessageForm)

indexRouter.post('/new', indexController.createNewMessage)
indexRouter.post('/delete', indexController.deleteMessages)


module.exports = indexRouter;