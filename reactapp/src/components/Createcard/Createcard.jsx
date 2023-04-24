import React from 'react'
import Singlecard from './Singlecard'
import 'swiper/css';
import logo from '../../logo.svg'
const Createcard = (props) => {
  return (
    props.item.map(obj=>{
      return(
        <Singlecard 
        key={obj.id} 
        id ={obj.id} 
        src ={obj.src}
        description={obj.description}
        myId={obj.myId}
        />
      )
    })
  )
}

export default Createcard