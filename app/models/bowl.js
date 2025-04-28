const mongoose = require('mongoose');
// this is only for password hashing
// const bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
const bowlSchema = new mongoose.Schema({

    title : {
        // type of input/selection 
        type : String, 
        // if this selection is required to move on to the next step
        required : true,
        // max number of characters
        maxlength : 50
    },
    base : {
        // this type is for array
        type : [String], 
        // pick at least one item but multiples can be selected 
        required : true  
    },
    protein : {
        type : [String],
         // pick at least one item but multiples can be selected 
        required : true
    },
    veggies : {
        type : [String],
        required : true
    },
    toppings : {
        type : [String],
        required : false
    }

})

// create the model for users and expose it to our app
module.exports = mongoose.model('bowl', bowlSchema);