import Home from "../view/home"
import Discover from "../view/discover"
import Order from "../view/order"
import Mine from "../view/mine"
export default [
    {
        path:"/",
        exact:true,
        component:Home
    },{
        path:"/discover",
        component:Discover
    },{
        path:"/order",
        component:Order
    },{
        path:"/mine",
        component:Mine
    }
]