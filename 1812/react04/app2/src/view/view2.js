import React from "react";

export default class View2 extends React.Component {

    render(){
        return <div>view2</div>
    }
    componentWillMount(){
        console.log(this.props.match.params.id);
        
    }
}