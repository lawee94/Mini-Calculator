import React, { Component } from 'react';
import classes from './ButtonPanel.module.css';
import Button from './Button/Button';

class ButtonPanel extends Component {
    
    render() {
        let button = this.props.button.map( (btnValue, i) => {
            return  btnValue ? 
                        <Button 
                            show 
                            key={i}
                            clicked={ () => this.props.btnClick(btnValue)}>
                            {btnValue}
                        </Button> 
                        : <Button key={i}>{btnValue}</Button> ;
        });
        
        return (
            <div className={classes.ButtonPanel}>
               {button}
             </div>
        )
    }
} 

export default ButtonPanel;