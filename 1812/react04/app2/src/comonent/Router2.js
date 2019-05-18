import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom"
import React from "react";
import RouterConfig from "../router/index";
import { Button } from 'antd';
export default ()=>{
    return <div>
        <Button>按钮</Button>
        <Router>
            <div>
                {RouterConfig.map((item,index)=>{
                    return <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>   
                })}
            </div>
            <div>
                <NavLink to="/" exact={true}>首页</NavLink>
                <NavLink to="/discover">发现</NavLink>
                <NavLink to="/order">订单</NavLink>
                <NavLink to="/mine">我的</NavLink>
            </div>

        </Router>
    </div>
}