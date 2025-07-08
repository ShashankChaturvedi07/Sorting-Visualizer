import React from 'react'
import "./Bar.css"


const Bar = ({array}) => {

  return (

    
    <div className='array-container'>
        {array.map((item, index)=> (
            <div key={index} className='bar' style={{height : `${item}px`}}>
                {item}
            </div>
        ))}
    </div>
  )
}

export default Bar