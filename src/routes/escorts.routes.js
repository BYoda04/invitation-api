const express = require('express');

//controllers
const { create, reActive, deleted, getQuery } = require('../controllers/escorts');

//validators

//utils

//middleware
const { guestExists } = require('../middlewares/guests');
const { escortExists } = require('../middlewares/escorts');

const escortsRouter = express.Router();

//htttp://localhost:port/api/v1/user GET,POST,DELET,PUT
escortsRouter.post("/create/:id", guestExists,create);
escortsRouter.patch("/update/:id", escortExists,reActive);
escortsRouter.delete("/delete/:id", escortExists,deleted);
escortsRouter.get("/get/query",getQuery);

module.exports = { escortsRouter };