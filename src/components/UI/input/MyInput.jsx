import React from 'react';
import classes from './MyInput.Module.css'

const MyInput = (props) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};

export default MyInput;