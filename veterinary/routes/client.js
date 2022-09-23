const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

router.get('/', (req, res) => {
    Client.find({}, (err, clients) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(clients);
        }
    });
});

router.get('/:id', (req, res) => {
    Client.findById(req.params.id, (err, client) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(client);
        }
    });
});

// router.post('/', (req, res) => {
//     const client = new Client({
//         name: req.body.name,
//         age: req.body.age,
//         id_doc: req.body.id_doc,
//         address: req.body.address,
//         phone: req.body.phone,
//         email: req.body.email
//     });
//     client.save((err, client) => {
//         if (err) {
//             res.status(500).json(err);
//         } else {
//             res.status(200).json(client);
//         }
//     });
// });

router.post('/', async (req, res) => {
    const client = new Client({
        // id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        id_doc: req.body.id_doc,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
    });
    try {
        await client.save();
        res.status(200).json(client);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
    Client.findByIdAndDelete(req.params.id, (err, client) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(client);
        }
    });
});

router.put('/:id', (req, res) => {
    Client.findByIdAndUpdate(req.params.id, req.body, (err, client) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(client);
        }
    });
});

module.exports = router;
