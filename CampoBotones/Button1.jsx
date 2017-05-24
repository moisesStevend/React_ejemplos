import React,{Component} from 'react';
import './style/Button1.css'

export default class Button1 extends Component {

    render() {
        return (
            <div className="but_conf">
                <div>{this.props.config}</div>
                <div><input id="my_input"></input></div>
                <div><button>{this.props.name}</button></div>
            </div>
        );
    }
}
