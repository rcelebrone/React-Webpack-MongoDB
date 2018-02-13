const express = require('express');

module.exports = (server) => {

    //api route
    const router = express.Router();
    server.use('/api', router);

    // => /api/todos[get,post,put,delete]
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos');


};