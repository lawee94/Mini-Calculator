import React, { Component } from 'react';
import ButtonPanel from '../ButtonPanel/ButtonPanel';
import Screen from '../Screen/Screen';
import Aux from '../../hoc/Aux/Aux';

//To perform the arithmentic calculation
let CALCULATE = {
    '+': (x,y) => { return x + y},
    '-': (x,y) => { return x - y},
    '*': (x,y) => { return x * y},
    '/': (x,y) => { return x / y},
}

class Panel extends Component {

    state = {
        buttons: ['RESET', '', '', 'CLR', 7, 8, 9, '+', 4, 5, 6, '-',  1, 2, 3, '*', '0', '.', '=', '/' ],
        total: 0,
        screenValue: []
    }

    //Function to invloke when a button is click
    btnClick = (value) => {
        let newValue = [...this.state.screenValue]
        switch(value){
            case 'RESET': this.setState({ total: [0], screenValue: [] })
                break
            case 'CLR': newValue.pop(); this.setState({ total: [0], screenValue: newValue })
                break
            case '=': typeof newValue[newValue.length-1] !== 'string' ? 
                                    this.setState({ screenValue: [this.state.total], total: [] }) : console.log()
                break
            case '0': value = +value; this.pushNumber(value) 
                break
            default:
                this.pushNumber(value) 
        }
    }
     
    //To push number to the screen
    pushNumber = (value) => {
        let newValue = [...this.state.screenValue]
        if(typeof newValue[newValue.length-1] === 'string' && typeof value === 'string' ){
            //TO Avoid Double operators to follow each other
        }else{
            if(  value === '+' || value === '-' || value === '/' || value === '*'){
                newValue.push(' '); newValue.push(value) ; newValue.push(' ')
            }else{
                newValue.push(value)
            }
            this.setState({ screenValue: newValue})
            this.checkNumber(newValue)
        }
        
    }

    //To check whether to perform any arithmetic operation
    checkNumber = (newValue) => {
        if(typeof newValue[newValue.length-1] === 'number'){
            let numberValue = newValue.join('').split(/\s[+-/*]\s/) //Split to values
            let signValue =  newValue.join('').match(/\s[+-/*]\s/g) //Split the operators
            let total = +numberValue[0]
            signValue === null ? signValue = [] :  signValue.map(( sign, index ) => {
                                                    return total = CALCULATE[sign.trim()]( +total, +numberValue[index+1])
                                                })
            this.setState({ total: +total})  
        }
    }

    render() {
        return (
            <Aux>
                <Screen
                    screenValue={this.state.screenValue}
                    total={this.state.total} />

                <ButtonPanel
                    button={this.state.buttons}
                    btnClick={this.btnClick}/>
            </Aux>
        );
    }
}

export default Panel;