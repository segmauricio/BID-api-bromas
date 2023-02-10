const express = require("express");
const { findAllJokes, findJoke, newJoke, updateJoke, deleteJoke } = require("../controllers/jokes.controller");
const app = express();
//const Joke = require("../models/jokes.model");

app.get("/api/jokes/", findAllJokes);               //! MOSTRAR todas las bromas
app.get("/api/jokes/:id", findJoke)                 //! ENCONTRAR una broma
app.post("/api/jokes/new/", newJoke)                //! CREAR una broma
app.put("/api/jokes/:id", updateJoke)               //! ACTUALIZAR una broma
app.delete("/api/jokes/delete/:id", deleteJoke)     //! BORRAR una broma

module.exports = app;