const express = require("express");
const http = express();
http.listen(8080);

http.use((req,res,next)=>{
    res.header({
        "Access-Control-Allow-Origin":"*"
    })
    next();
})

const list=[{
    id:"1",
    title:"中美贸易战第三轮开始",
    content:"神仙打架凡人遭殃,希望双方克制一下"
},{
    id:'2',
    title:"吉利大学抽烟问题",
    content:"全校师生，只允许在抽烟区之内抽烟，发现罚款50"
},{
    id:'3',
    title:"十一阅兵准备",
    content:"看到当没看到，千万别逼逼"
}]

http.get("/list",(req,res)=>{
    res.send(list.map((item)=>{
        return {
            id:item.id,
            title:item.title
        }
    }))
})

//
http.get("/item/:id",(req,res)=>{
    let id = req.params.id;
    res.send(list.filter(item=>{
        return item.id ==id;
    })[0])
})