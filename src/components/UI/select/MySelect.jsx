import React from "react";


function MySelect({ options, defaultValue, onChange, value }) {

    return (
        <select
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