const express = require("express");
const http = express();
http.listen(8080,()=>{
    console.log("run")
})
http.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    next()
})
http.use(express.static("./"))
http.get("/address",(req,res)=>{
    res.send({
        state:"1",
        code:"ok",
        data:{
            address:"北京市昌平区",
            lat:40,
            lng:118
        }
    })
})

http.get("/shop",(req,res)=>{
    let data = req.query;
    if(data.lat == 40&& data.lng==118){
        res.send({
            state:"1",
            code:"ok",
            data:{
                shopArr:[{
                    shopName:"Tina 老师红烧肉"
                },{
                    shopName:"昌平食府"
                }]
            }
        })
    }else{
        res.send({
            state:"-1",
            code:"超出配送范围"
        })
    }

    
})

http.get("/step1",(req,res)=>{
    setTimeout(()=>{
        res.send("1")
    },1000)
    
})

http.get("/step2",(req,res)=>{
    setTimeout(()=>{
        res.send("2")
    },1500)
})

http.get("/step3",(req,res)=>{
    setTimeout(()=>{
        res.send("3")
    },500)
})

http.get("/step4",(req,res)=>{
    res.send("4")
})