import React from "react";
import classes from './MyButton.module.css'; 

function MyButton({ active = false, children, ...props }) {
    let cl = [classes.myBtn]
    if (active) {
        cl.push(classes.active)
    }

    return (
        <button {...props} className={cl.join(" ")}>
            {children}
        </button>
    );
}

export default MyButton;