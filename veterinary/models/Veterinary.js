const mongoose = require('mongoose');

module.exports = mongoose.model('Veterinary', new mongoose.Schema({
    // id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    id_doc: { type: String, sparse: true },
    age: { type: Number, sparse: true },
    specialty: { type: String, sparse: true },
    address: { type: String, sparse: true },
    phone: { type: String, sparse: true },
    email: { type: String, sparse: true }
}));
