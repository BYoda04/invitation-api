const express = require('express');

//controllers
const { create, getAll, deleted, confirmate, getMe, getQuery } = require('../controllers/guests');
const { guestExists } = require('../middlewares/guests');

//validators
const { guestValidator } = require('../validators/guests');

//utils

//middleware

const guestsRouter = express.Router();

//htttp://localhost:port/api/v1/user GET,POST,DELET,PUT
guestsRouter.post("/create", guestValidator,create);
guestsRouter.patch("/update/:id", guestExists,confirmate);
guestsRouter.delete("/delete/:id", guestExists,deleted);
guestsRouter.get("/",getAll);
guestsRouter.get("/invitation/:id", guestExists,getMe);
guestsRouter.get("/get/query",getQuery);

module.exports = { guestsRouter };