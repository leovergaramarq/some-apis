const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.get('/', (req, res) => {
    Appointment.find({}, (err, appointment) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(appointment);
        }
    });
});

router.get('/:id', (req, res) => {
    Appointment.findById(req.params.id, (err, appointment) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(appointment);
        }
    });
});

router.post('/', async (req, res) => {
    const appointment = new Appointment({
        // id: req.body.id,
        date: req.body.date,
        time: req.body.time,
        pet: req.body.pet,
        client: req.body.client,
        veterinary: req.body.veterinary
    });
    try {
        await appointment.save();
        res.status(200).json(appointment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
    Appointment.findByIdAndDelete(req.params.id, (err, appointment) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(appointment);
        }
    });
});

router.put('/:id', (req, res) => {
    Appointment.findByIdAndUpdate(req.params.id, req.body, (err, appointment) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(appointment);
        }
    });
});

module.exports = router;
