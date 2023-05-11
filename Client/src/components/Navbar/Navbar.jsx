import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


import download from '../../assets/download.png'
import searchicon from '../../assets/searchicon.png'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
    const dispatch = useDispatch()
    const User = useSelector((state) => state);
    console.log(User);
    useEffect(() => {
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
    },[dispatch])
  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-btn' >
                 <img src={ download } alt='download' width="130"/>
            </Link>
            <Link to='/' className='nav-item nav-btn' >About</Link>
            <Link to='/' className='nav-item nav-btn' >Products</Link>
            <Link to='/' className='nav-item nav-btn' >For Teams</Link>
            <form>
                <input type='text' placeholder='Type here...'/>
                <img src={ searchicon } alt='searchicon' width="18" className='search-icon' />
            </form>
            { User === null?
                <Link to='/Auth' className='nav-item nav-links'>Log In</Link>:
                <>
                    <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'><Link to='/User' style={{color: 'white', textDecoration: 'none'}}>G</Link></Avatar>
                    <button className='nav-item nav-links'>Log Out</button>
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar
