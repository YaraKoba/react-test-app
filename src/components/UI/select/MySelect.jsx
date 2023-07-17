import React from "react";
import cl from "./MySelect.module.css"

function MySelect({ options, defaultValue, onChange, value }) {

    return (
        <select
            className={cl.mySelect}
            onChange={e => onChange(e.target.value)}
            value={value}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option value={option.value} key={option.value}>{option.name}</option>)}

        </select>
    );
}

export default MySelect;