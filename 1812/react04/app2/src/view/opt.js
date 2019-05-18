import React from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            content:'',
        }
    }
    
    render(){
        return <div>
            <NavLink to="/" exact={true}>&lt;</NavLink>
            <h1>{this.state.title}</h1>
            <p>{this.state.content}</p>
        </div>
    }
    
    componentWillMount() {
        let id = this.props.match.params.id;
        axios({
            url:"http://localhost:8080/item/"+id,
            method:"get"
        })
        .then(res=>{
            this.setState({
                title:res.data.title,
                content:res.data.content
            })
        })
    }
}