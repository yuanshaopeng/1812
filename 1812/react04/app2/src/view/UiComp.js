import React from "react";
import {Icon,Button} from "antd";
export default class extends React.Component {
    render(){
        return <div>
            <Button>按钮</Button>
            <Icon type="qq" style={{fontSize:"200px",color:"blue"}} />  
        </div>
    }
}