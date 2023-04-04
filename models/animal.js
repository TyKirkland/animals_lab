//import our database connection
const {mongoose} = require('../db/connection');

//import Schema
const Schema = mongoose.Schema;

//create a animal schema
const animalSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
});

//create animal model
const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;