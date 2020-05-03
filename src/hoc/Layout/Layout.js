import React from 'react';
import classes from './Layout.module.css';
import Panel from '../../component/Panel/Panel';

const layout = (props) => (
    <div className={classes.Layout}>
        <h3 style={{marginLeft: '25px' }}> FEST@C MINI CALCULATOR</h3>
        <Panel />
    </div>
);

export default layout;