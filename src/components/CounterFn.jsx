import React, { useRef, useState } from 'react'

let outerCounter = 0;

export default function CounterFn() {
    const [count, setCount] = useState(0);
    const counterRef = useRef(count);
    outerCounter = count
    const incrementCount = () => {
        setCount(count => count + 1)
        setCount(count => count + 1)
    }
    const decrementCount = () => {
        setCount(count => count - 1)
    }
    counterRef.current = count
    const alertAfter3 = () => {
        setTimeout(()=> {
            alert(counterRef.current)
        }, 3000)
    }
    return (
        <> 
        <div className="counterFn" style={{display: "flex", mb: "0px"}}> 
            <button  onClick={decrementCount}>-</button>
            <span style={{margin:"2%"}}>{count}</span>
            <button onClick={incrementCount}>+</button>
            </div>
            <button onClick={alertAfter3}>Alert count after 3s</button>
            </>
    )
}
