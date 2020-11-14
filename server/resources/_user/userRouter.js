var userRouter = require('express').Router();
var userController = require('./userController');

// Create route handlers for each of the six methods in pokemonController
userRouter.route('/')

userRouter.route('/:number')

module.exports = userRouter;