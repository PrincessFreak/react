import React from 'react'
import logo from '../../logo.svg'
const Childcom = (props) => {
  return (
    <div><img src = {logo} style ={{width:props.width}}/>
    <h2>{props.text}</h2></div>
  )
}

export default Childcom