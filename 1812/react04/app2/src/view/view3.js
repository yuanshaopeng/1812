import React from "react";

export default class View3 extends React.Component {

    render(){
        return <div>view3</div>
    }
    componentWillMount(){
        console.log(this.props.location.query);
    }
}