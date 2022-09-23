const mongoose = require('mongoose');

module.exports = mongoose.model('Client', new mongoose.Schema({
    // id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, sparse: true },
    id_doc: { type: String, sparse: true },
    address: { type: String, sparse: true },
    phone: { type: String, sparse: true },
    email: { type: String, sparse: true }
}));
