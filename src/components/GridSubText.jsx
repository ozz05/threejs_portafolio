import React from 'react'

const GridSubText = ({hasBP = false, content}) => {
    return (
        <p className={`grid-subtext $${hasBP ? "pb-2" : "pb-0"}`}  >
            {content}
        </p>
    )
}
export default GridSubText
