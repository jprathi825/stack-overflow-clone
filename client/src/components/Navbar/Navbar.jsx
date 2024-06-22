import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import logo from '../../assets/logo.jpg'
import search from '../../assets/search.svg'
import dropdown from '../../assets/dropdown.svg'
import Avatar from '../../components/Avatar/Avatar.jsx'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser.js'
import { jwtDecode } from 'jwt-decode'

export const Navbar = () => {

  const dispatch = useDispatch()
  var User =useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()
  
  const handleLogOut = () => {
    dispatch({type:'LOGOUT'});
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {
    const token = User?.token;
    if(token){
      const decodedToken= jwtDecode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogOut();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])

  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' width="200"/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form action="">
                <input type="text" placeholder='Search....'/>
                <img src={search} alt='search' width="18" className="search-icon" />
            </form>
            {/* <div class="lang-box">
              <button class="dropbtn">Lang <img src={dropdown} width="18" /></button>
              <div class="langs">
                <a href="/Auth">English</a>
                <a href="/Users">Hindi</a>
                <a href="/Tags">Spanish</a>
                <a href="/Questions">Portugese</a>
                <a href="/Questions">Chinese</a>
                <a href="/Questions">French</a>
              </div>
            </div> */}
            <div>
              <Navbar.Brand></Navbar.Brand>
            </div>
            { User ==null ? 
                <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
                <>
                    <Link to={`/Users/${User?.result?._id}`} className=''><Avatar backgroundColor='#009dff' px='7px' py='13px' borderRadius='50%' color='white' fontSize={20}>{User.result.name.charAt(0).toUpperCase()}</Avatar></Link>
                    <button className='nav-item nav-links' onClick={handleLogOut}>Log out</button>
                </>
            }
        </div>
    </nav>
  )
}