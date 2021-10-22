import React, { useState } from 'react'

function Counter () {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const handleChange = (e) => {
        setInputValue(parseInt(e.target.value));
    };

    return (
        <div>
            <h1 data-testid="header">My Counter</h1> 
            <div data-testid="counter">{counter}</div>
            <button data-testid="subtractBtn" onClick={() => setCounter(counter-inputValue)}>-</button>
            <input data-testid="input" type="number" value={inputValue} onChange={handleChange}/>
            <button data-testid="addBtn" onClick={() => setCounter(counter+inputValue)}>+</button>
        </div>
    )
}

export default Counter;
