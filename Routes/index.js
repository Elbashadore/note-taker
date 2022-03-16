const route = require('express').Router();

// import the modular router /notes
const notesRouter = require('./notes');


// Current route /api/notes
route.use('/notes',notesRouter);

module.exports = route;