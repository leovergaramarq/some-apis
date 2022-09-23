const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

mongoose
    .connect('mongodb+srv://admin:alapastruka@veterinary.uialjpc.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Exito');
    })
    .catch(e => {
        console.log(e)
        console.log('Jumbo')
    });
// 
app.use('/clients', require('./routes/client'));
app.use('/pets', require('./routes/pet'));
app.use('/appointments', require('./routes/appointment'));
app.use('/veterinaries', require('./routes/veterinary'));
app.use('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Veterinary API, please use the endpoints to access the data',
        endpoints: {
            clients: '/clients',
            pets: '/pets',
            appointments: '/appointments',
            veterinaries: '/veterinaries'
        },
        status: 200
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
