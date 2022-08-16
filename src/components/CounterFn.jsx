import React, { useState } from 'react'

export default function CounterFn() {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count => count + 1)
    }
    const decrementCount = () => {
        setCount(count => count - 1)
    }
    return (
        <>
            <button  onClick={decrementCount}>-</button>
            <span style={{margin:"2%"}}>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}
