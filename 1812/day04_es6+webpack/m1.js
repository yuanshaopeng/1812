//生产div
function createEle(ele){
    return document.createElement(ele);
}
var a = 10;
var b = 20;
//默认导出  只允许出现一次
// export default createEle;
//单独导出 导出时的重命名
export {createEle as cE,a,b};