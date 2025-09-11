// // const express = require('express'); //when using commingjs
// import express from 'express' // when using module(This is the recommended ways)
// const app = express();  

// const PORT = 8090;

// // single get endpoint to say heelo world

// app.get('/', (req, res) => {
//   res.send('Hello World!');         // respond when someone visits 
// });

// app.get('/list', (req, res) => {
//     res.send("List items are [Mango, Banana, Phone]")
// })

// app.listen(PORT, () => {
//   console.log('Server is running at http://localhost:${PORT}');
// });







import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();

app.use(express.json())

app.use('/api/products', productRoutes);

const PORT = process.env.APP_PORT || 8090 ;

sequelize.sync({alter: true})
    .then(()=>{
        console.log("DATABASE CONNECTION SUCCESSFUL")
        app.listen(PORT, () => {
            console.log('SERVER IS RUNNING ON PORT ${PORT')
        })
    })
    .catch(err => {
        console.error("DB CONNECTION FAILED: ", err)
    })