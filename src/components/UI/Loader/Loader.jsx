import React from "react";
import classes from './Loader.module.css'; 

function Loader({ ...props }) {
    return (
        <div {...props} className={classes.myLoader}>

        </div>
    );
}

export default Loader;