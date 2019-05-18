function ajax(config){
    // config.method:请求方式
    // config.url:请求路径
    // config.data:post请求数据
    // config.params:get请求时携带的数据
    // {
    //     name:"lee",
    //     age:18
    // }
    // name=lee&age=18
    function changeRequest(obj){
        let arr = [];
        for(let k in obj){
            arr.push(k+"="+obj[k]);
        }
        return arr.join("&")
    }
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        if(config.method.toLowerCase()=="get"){
            xhr.open("get",config.url+"?"+changeRequest(config.params),true);
            xhr.send()
        }else{
            xhr.open(config.method,config.url,true);
            xhr.send(changeRequest(config.data))
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState ==4){
                if(xhr.status == 200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject(xhr.status);
                }
            }
        }
    })
}
// ajax.get = function(){
//     return new Promise((resolve,reject)=>{

//     })
// }

// ajax.get(url,data).then().catch()
// ajax.post(url,data).then().catch();
// ajax.jsonp(url,data).then().catch();

ajax.jsonp = function(url,data){
    let sc = document.createElement("script");
    function changeRequest(obj){
        let arr = [];
        for(let k in obj){
            arr.push(k+"="+obj[k]);
        }
        return arr.join("&")
    }
    return new Promise((resolve,reject)=>{
        window._callBack = function(data){
            resolve(data);
        }
        sc.src = url+"?"+changeRequest(data)+"&callback=_callBack";
        document.body.appendChild(sc);
        sc.remove()
    })
}
// ajax.jsonp("xxx",{name:lee})
// .then(res=>{})