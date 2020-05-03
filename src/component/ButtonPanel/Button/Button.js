import React, { Component } from 'react';
import classes from './Button.module.css';

class Button extends Component {
    render(){
        let btnClass = [ classes.Button ]
        if(!this.props.show){
            btnClass.push( classes.hide )
        }
        return (
            <div 
                className={btnClass.join(' ')}
                onClick={this.props.clicked}>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Button;
