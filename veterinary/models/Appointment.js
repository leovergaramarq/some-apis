const mongoose = require('mongoose');

module.exports = mongoose.model('Appointment', new mongoose.Schema({
    // id: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    veterinary: { type: mongoose.Schema.Types.ObjectId, ref: 'Veterinary', required: true },
    // pet: { type: String, required: true },
    // client: { type: String, required: true },
    // veterinary: { type: String, required: true },
    reason: { type: String, sparse: true }
}));
