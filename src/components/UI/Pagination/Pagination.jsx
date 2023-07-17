import React from "react";
import classes from './Pagination.module.css'; 
import MyButton from "../button/MyButton";

function Pagination({ paheArray, changePage, page, ...props }) {
    return (
        <div className={classes.pagination}>
          {paheArray.map(p => 
            <MyButton
              active={p === page} 
              key={p}
              onClick={() => changePage(p)}
            >{p}</MyButton>
            )}
        </div>
    );
}

export default Pagination;