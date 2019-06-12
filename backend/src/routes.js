const express = require('express');
const PostController = require('./controllers/PostController');

const routes = new express.Router();

routes.post('/posts', (req, res) => {
    return res.send(`Olá ${req.query.name}`);
});

module.exports = routes;