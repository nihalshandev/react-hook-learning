import React from 'react'

const Title = () => {
    console.log('Rendaring Title')
    return (
        <div>
            <h2>useCallback Hook</h2>
        </div>
    )
}

export default React.memo(Title)
