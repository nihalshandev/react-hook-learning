import React, { useContext } from 'react'
import { CountContext } from '../../App'
import ComponentB from './ComponentB'

const ComponentF = () => {
    const coutnContext = useContext(CountContext)
    return (
        <div>
            Component F - {coutnContext.countState}
            <button onClick={()=> coutnContext.countDispatch('increament')}>Increament</button>
            <button onClick={()=> coutnContext.countDispatch('decreament')}>Decreament</button>
            <button onClick={()=> coutnContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF
