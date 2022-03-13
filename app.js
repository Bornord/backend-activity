//package imports
const express = require('express');

// config serveur
const app = express();
app.use(express.json());

// config des autorisations
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// instruction pour debug
app.use((req,res,next) => {
    console.log('instruction reçue');
    /*
    res.status(200).json({
        msg: 'bien reçu, le traitement va commencer !'
    });
    */
    next();
});


app.get('/api/products',(req,res,next) => {
    const products = [
        {
            name: "p1",
            description: 'd1',
            price: 10,
            inStock: true,
        },{
            name: 'p2',
            description: 'd2',
            price: 20,
            inStock: false,
        }
    ];
    res.status(300).json(products);
});

app.post('/api/products',(req,res,next) => {
    delete req.body._id;
    res.status(201).json({msg: 'produit créé !'});
});


module.exports = app;
