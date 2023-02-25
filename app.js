require('express-async-errors');
const express = require('express');
const app = express();


const port = process.env.PORT || 3000;

const start = async () => {
    try{
    app.listen(port,console.log(`Listening on port ${port}`));
    } catch (err){
        console.log(err);
    }
}

start();