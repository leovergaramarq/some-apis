const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

router.get('/', (req, res) => {
    Pet.find({}, (err, pet) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(pet);
        }
    });
});

router.get('/:id', (req, res) => {
    Pet.findById(req.params.id, (err, pet) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(pet);
        }
    });
});

router.post('/', async (req, res) => {
    const pet = new Pet({
        // id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        species: req.body.species,
        bites: req.body.bites
    });
    try {
        await pet.save();
        res.status(200).json(pet);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
    Pet.findByIdAndDelete(req.params.id, (err, pet) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(pet);
        }
    });
});

router.put('/:id', (req, res) => {
    Pet.findByIdAndUpdate(req.params.id, req.body, (err, pet) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(pet);
        }
    });
});

module.exports = router;
