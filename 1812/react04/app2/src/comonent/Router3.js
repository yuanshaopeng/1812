import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom";
import React from "react";
import View1 from "../view/view1"
import View2 from "../view/view2"
import View3 from "../view/view3"
import View4 from "../view/view4"

export default class MyRouter extends React.Component {
    render(){
        return <div>
            <Router>
            <div>
                <Route path="/" exact={true} component={View1}></Route>
                {/* 路径传值 path传值 */}
                <Route path="/v2/:id" component={View2}></Route>
                {/* query传值 */}
                <Route path="/v3" component={View3}></Route>
                <Route path="/v4" component={View4}></Route>    
            </div>
            <div>
                <NavLink to="/" exact={true}>1</NavLink>
                {/* path传值
                    1、传输量小
                    2、刷新页面数据不会丢失
                */}
                <NavLink to="/v2/123">2</NavLink>
                {/* query传值  
                    1、传输量大
                    2、刷新页面数据丢失
                */}
                <NavLink to={{pathname:"/v3",query:{name:"lee",age:"18"}}}>3</NavLink>
                {/* 
                    state传值
                    1、传输量大
                    2、刷新页面数据不会丢失
                */}
                <NavLink to={{pathname:"/v4",state:{name:"zhang",age:18}}}>4</NavLink>  
            </div>
            </Router>
        </div>
    } 
}