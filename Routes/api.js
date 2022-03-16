const api = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
api.get('/api/notes', (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = api;