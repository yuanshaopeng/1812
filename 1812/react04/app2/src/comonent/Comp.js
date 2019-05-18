import React from "react";
class Comp extends React.Component {
    constructor(){
        super();
        this.state = {
            title:"我是comp"
        }
    }
    render(){
        return <h1>{this.state.title}</h1>
    }
}
export default Comp;