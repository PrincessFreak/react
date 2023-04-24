import React from 'react'
import './card.css'

const Singlecard = (props) => {
  return (
    <div className='card'>
        <h3 className='card-title'>{props.name}</h3>
        <img src={props.src}/>
        <p className='card-subtitle'>{props.description}</p>
    </div>
  )
}

export default Singlecard