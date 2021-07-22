import React from 'react' 
import useCounter from './hooks/useCounter'

const CounterTwo = () => {
    const [count, increamentCount, decreamentCount, reset] = useCounter(10, 10)
    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={increamentCount}>Increament</button>
            <button onClick={decreamentCount}>Decreament</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo
