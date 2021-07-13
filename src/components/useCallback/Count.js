import React from 'react'

const Count = ({text, count}) => {
    console.log(`Rendaring ${text} count component`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count)
