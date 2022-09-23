const express = require('express');
const router = express.Router();
const Veterinary = require('../models/Veterinary');

router.get('/', (req, res) => {
    Veterinary.find({}, (err, veterinary) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(veterinary);
        }
    });
});

router.get('/:id', (req, res) => {
    Veterinary.findById(req.params.id, (err, veterinary) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(veterinary);
        }
    });
});

router.post('/', async (req, res) => {
    const veterinary = new Veterinary({
        // id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        id_doc: req.body.id_doc,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
    });
    try {
        await veterinary.save();
        res.status(200).json(veterinary);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
    Veterinary.findByIdAndDelete(req.params.id, (err, veterinary) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(veterinary);
        }
    });
});

router.put('/:id', (req, res) => {
    Veterinary.findByIdAndUpdate(req.params.id, req.body, (err, veterinary) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(veterinary);
        }
    });
});

module.exports = router;
