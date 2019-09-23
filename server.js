const express = require("express");
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
    })
   // create an object to that contains methods for mongoose to interface with MongoDB
    const User = mongoose.model('User', UserSchema);