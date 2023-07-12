import { useState } from "react";
import React from "react";

function Counter() {
    const [count, setCount] = useState(2);

    function increment() {
        setCount(count*2)
      };

    return (
        <div className="Counter">
            <button onClick={(increment)}>++{count}</button>
        </div>
    );
}

export default Counter;