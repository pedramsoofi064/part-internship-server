const express = require('express');
const app = express();
const routes = require('./routes/index')


app.use(express.json());
app.use('/internship' , routes);



app.listen(3000 , ()=>{
    console.log("listening to 3000..."); 
});