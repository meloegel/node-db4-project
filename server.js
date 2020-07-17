const express = require('express');

const server = express();

const RecipesRouter = require('./recipes/recipes-router')

server.use(express.json());

server.use('/api/recipes', RecipesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'its working' })
})

module.exports = server;