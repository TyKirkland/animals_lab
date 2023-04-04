//import mongoose
const mongoose = require('mongoose');

//database configuration
const DATABASE_URL = 'mongodb+srv://TKirkland:Elephant1@sei.plcjjl5.mongodb.net/?retryWrites=true&w=majority';

//mongoose connect to url
mongoose.connect(DATABASE_URL);

//export mongoose to models folder
module.exports = { mongoose };