const express = require('express');

const app = express();
app.use(express.json())

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300
    }
];

const sales = [
    {
        id: 1,
        userId: 1,
        productId: 1,
        quantity: 1,
        date: '2019-01-01'
    },
    {
        id: 2,
        userId: 1,
        productId: 2,
        quantity: 2,
        date: '2019-01-02'
    },
    {
        id: 3,
        userId: 1,
        productId: 3,
        quantity: 3,
        date: '2019-01-03'
    }
];

// USERS ********************************************************
app.get('/user/:id', async (req, res) => {
    const user = users.filter(user => {
        if (user.id != req.params.id) return false;
        for (let key in req.query) {
            if (user[key] != req.query[key]) return false;
        }
        return true;
    });

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/users', async (req, res) => {
    if (users) res.status(200).json(users);
    else res.status(404).send('Users not found');
});

app.delete('/user/:id', async (req, res) => {
    const i = users.findIndex(user => user.id == req.params.id);
    if (i != -1) {
        users.splice(i, 1);
        res.status(200).send('User deleted');
    }
    else res.status(404).send('User not found');
});

app.post('/user', async (req, res) => {
    const { name, username } = req.body;

    if (!name || !username) {
        res.status(400).send('Bad request');
    } else {
        users.push({
            id: Math.max(...users.map(user => user.id)) + 1,
            name, username
        });
        res.status(201).send('User created');
    }
});

app.put('/user/:id', async (req, res) => {
    if (!Object.keys(req.body).length) {
        res.status(400).send('Bad request: no body');
    } else {
        const i = users.findIndex(user => user.id == req.params.id);
        if (i != -1) {
            if (req.body.id) delete req.body.id;
            users[i] = {
                ...users[i],
                ...req.body
            };
            res.status(200).send('User updated');
        }
        else res.status(404).send('User not found');
    }
});

// PRODUCTS ********************************************************
app.get('/products', async (req, res) => {
    if (products) res.status(200).json(products);
    else res.status(404).send('products not found');
});

app.delete('/product/:id', async (req, res) => {
    const i = products.findIndex(product => product.id == req.params.id);
    if (i != -1) {
        products.splice(i, 1);
        res.status(200).send('Product deleted');
    }
    else res.status(404).send('Product not found');
});

app.post('/product', async (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        res.status(400).send('Bad request');
    } else {
        products.push({
            id: Math.max(...products.map(product => product.id)) + 1,
            name, price
        });
        res.status(201).send('Product created');
    }
});

app.put('/product/:id', async (req, res) => {
    if (!Object.keys(req.body).length) {
        res.status(400).send('Bad request: no body');
    } else {
        const i = products.findIndex(product => product.id == req.params.id);
        if (i != -1) {
            if (req.body.id) delete req.body.id;
            products[i] = {
                ...products[i],
                ...req.body
            };
            res.status(200).send('Product updated');
        }
        else res.status(404).send('Product not found');
    }
});

// SALES ********************************************************
app.get('/sales', async (req, res) => {
    if (sales) res.status(200).json(sales);
    else res.status(404).send('Sales not found');
});

app.delete('/sale/:id', async (req, res) => {
    const i = sales.findIndex(sale => sale.id == req.params.id);
    if (i != -1) {
        sales.splice(i, 1);
        res.status(200).send('Sale deleted');
    }
    else res.status(404).send('Sale not found');
});

app.post('/sale', async (req, res) => {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
        res.status(400).send('Bad request');
    } else {
        const user = users.find(user => user.id == userId);
        const product = products.find(product => product.id == productId);
        
        if (user && product) {
            sales.push({
                id: Math.max(...sales.map(sale => sale.id)) + 1,
                userId, productId
            });
        } else {
            res.status(404).send('User and product must exist');
        }
        res.status(201).send('Sale created');
    }
});

// 404 error ********************************************************
app.use((req, res) => {
    res.status(404).send('Not found');
});

app.listen(8080);
