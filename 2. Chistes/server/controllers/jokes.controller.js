const Joke = require("../models/jokes.model");

//! MOSTRAR todas las bromas
const findAllJokes = async (req, res) => {
    const bromas = await Joke.find();
    res.json({resultado: 'ok', bromas})
};
//! ENCONTRAR una broma
const findJoke = async (req, res) => {
    const bromaEncontrada = await Joke.findOne({_id: req.params.id});
    res.json({resultado: 'ok', broma: bromaEncontrada, parametro: req.params.id});
}
//! CREAR una broma
const newJoke = async (req, res) => {
    try{
        const bromaCreado = await Joke.create(req.body);
        res.json({resultado: 'ok', broma_nueva:bromaCreado});
    }
    catch(error){
        res.json(error);
    }
}
//! ACTUALIZAR una broma
const updateJoke = async (req, res) => {
    const bromaActualizada = await Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
    res.json({resultado: 'ok', broma: bromaActualizada, parametro: req.params.id});
}
//! BORRAR una broma
const deleteJoke = async (req, res) => {
    const bromaEliminada = await Joke.deleteOne({_id: req.params.id});
    res.json({resultado: 'ok', broma: bromaEliminada, parametro: req.params.id});
}

module.exports = {
    findAllJokes,
    findJoke,
    newJoke,
    updateJoke,
    deleteJoke
}