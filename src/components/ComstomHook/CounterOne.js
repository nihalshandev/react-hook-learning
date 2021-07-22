import React from 'react'
import useCounter from './hooks/useCounter'

const CounterOne = () => {
    const [count, increamentCount, decreamentCount, reset] = useCounter(0, 1)
    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={increamentCount}>Increament</button>
            <button onClick={decreamentCount}>Decreament</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne
