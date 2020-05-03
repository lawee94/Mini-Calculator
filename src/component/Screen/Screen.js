import React from 'react';
import classes from './Screen.module.css';

const screen = (props) => (
    <div className={classes.Screen}>
        <span>{props.screenValue} </span> <br/><br/>
        <span>{props.total} </span>
    </div>
);

export default screen;