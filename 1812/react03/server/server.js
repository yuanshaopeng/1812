const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const http = express();

http.listen(8080);
http.use(bodyParser.urlencoded({extended:false}));
http.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    next();
})

http.get("/cs",(req,res)=>{
    res.send(req.query);
})

http.post("/cs",(req,res)=>{
    res.send(req.body);
})
http.get("/list",(req,res)=>{
    fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err) throw err;
        res.send(JSON.parse(data));
    })
})