import React from 'react'

import { Link } from "react-router-dom";
const Header = () => {
  return (
  
    <div >
        <nav className='header'>
            <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className ="header__logo">
                <img src={require('../../images/logoimg.png')} alt="logo" />
                <p className="linktext">Навбар с целой одной ссылкой, на это даже элемента жаль</p>
            </Link >
        </nav>
    </div>

  )
}

export default Header