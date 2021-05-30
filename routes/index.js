const { response } = require("express");
const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get('/users' , (reqeust , response)=>{
    let rawdata = fs.readFileSync('allUsers.json');
    let data = JSON.parse(rawdata);
    response.send({
        status: 'success',
        message: "users get successfully!",
        data: data
    })
});

router.get('/newUsers' , (request , response)=>{
    const rawdata = fs.readFileSync('newUsers.json');
    const newUsers = JSON.parse(rawdata);
    const returnCount = Math.floor(Math.random() * 10);
    const data = [];
    for(let i = 0 ; i<returnCount ; i++){
        data.push(newUsers[Math.floor(Math.random() * 1000)]);
    }
    response.send({
        status: 'success',
        message: "new Users get successfully!",
        data: data
    })
})




module.exports = router;
