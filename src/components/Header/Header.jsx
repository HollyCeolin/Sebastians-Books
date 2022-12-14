import "./Header.css"
import React from 'react'
import { Link } from 'react-router-dom'
import {GoBook} from 'react-icons/go'
import {BsFillBasket2Fill} from 'react-icons/bs'
import {FcReading} from 'react-icons/fc'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {SiAwesomelists} from 'react-icons/si'
import {IoLogoTux} from 'react-icons/io'

const Header = () => {
  return (
    <div>
      <img className='headline-image' src="https://global.oup.com/education/promotional/images/children/childrens_picbooks_header_Nov12.jpg" alt="" />
      <nav className="nav-links">
      <Link to="/">
            <IoLogoTux color="white" size= "25px" /><br/>LogIn
        </Link>
      <Link to="/home">
            <GoBook color="white" size= "25px" /><br/>Home
        </Link>
      <Link to="/books">
            <BsFillBasket2Fill color="white" size= "25px" /><br/>Book Basket
        </Link>
      <Link to="/browsebooks">
            <FcReading color="white" size= "25px" /><br/>Browse Books
        </Link>
      <Link to="/myBooks">
            <MdOutlineFavoriteBorder color="white" size= "25px" /> <br/>Favorite Books
        </Link>
      <Link to="/bookList">
            <SiAwesomelists color="white" size= "25px" /><br/>My Book List
        </Link>
      </nav>
    </div>
  )
}

export default Header