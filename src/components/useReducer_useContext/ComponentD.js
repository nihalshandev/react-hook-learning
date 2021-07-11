import React, { useContext } from 'react'
import { CountContext } from '../../App'
import ComponentB from './ComponentB'

const ComponentD = () => {
    const coutnContext = useContext(CountContext)
    return (
        <div>
            Component D - {coutnContext.countState}
            <button onClick={()=> coutnContext.countDispatch('increament')}>Increament</button>
            <button onClick={()=> coutnContext.countDispatch('decreament')}>Decreament</button>
            <button onClick={()=> coutnContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD
