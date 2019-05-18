import React from "react";
import Home from "../view/home"
import Discover from "../view/discover"
import Order from "../view/order"
import Mine from "../view/mine"
import {
    // 路由组件
    BrowserRouter as Router,
    // 路由入口组件
    NavLink,
    // 路由容器组件
    Route
} from "react-router-dom";
class MyRouter extends React.Component {
    render(){
        return (<div>
            <Router>
                <div>
                    <Route path="/" exact={true} component={Home}></Route>
                    <Route path="/discover" component={Discover}></Route>
                    <Route path="/order" component={Order}></Route>
                    <Route path="/mine" component={Mine}></Route>
                </div>
                <div>
                    <NavLink to="/" exact={true} >首页</NavLink>
                    <NavLink to="/discover">发现</NavLink>
                    <NavLink to="/order">订单</NavLink>
                    <NavLink to="/mine">我的</NavLink>
                </div>
            </Router>
        </div>)
    }
}
export default MyRouter;