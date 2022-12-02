import React from 'react';
import classes from './MyButton.Module.css';

const Mybutton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}

        </button>
    );
};

export default Mybutton;