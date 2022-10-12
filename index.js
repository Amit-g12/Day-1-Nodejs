const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send([1,2,3]);
})
app.listen('9000',(req, res)=>{
    console.log(req);
})