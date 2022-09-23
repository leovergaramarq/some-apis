const mongoose = require('mongoose');

module.exports = mongoose.model('Pet', new mongoose.Schema({
    // id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, sparse: true },
    species: { type: String, sparse: true },
    bites: { type: Boolean, sparse: true }
}));
