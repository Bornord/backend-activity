//package imports
const express = require('express');

// config
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use((req,res,next) => {
    console.log('instruction reçue');
    res.status(200).json({
        msg: 'bien reçu, le traitement va commencer !'
    });
    next();
});

module.exports = app;
