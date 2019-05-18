import React from "react";

export default class View4 extends React.Component {

    render(){
        return <div>view4</div>
    }
    componentWillMount(){
        console.log(this.props.location.state);
    }
}