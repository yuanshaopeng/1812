import React from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
export default class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            list:[]
        }
    }
    
    componentDidMount() {
        axios({
            url:"http://localhost:8080/list",
            method:"get"
        })
        .then(res=>{
            let {data} = res;
            this.setState({
                list:data
            })
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        return <div>
            <ul>
                {this.state.list.map((item,index)=>{
                    return <li key={index}>
                        <NavLink to={"/opt/"+item.id}>{item.title}</NavLink>
                    </li>
                })}
            </ul>
        </div>
    }
    
}