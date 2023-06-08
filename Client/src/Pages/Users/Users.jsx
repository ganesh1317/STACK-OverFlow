import React from 'react'
// import { useLocation } from 'react-router-dom'
import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'


import UserList from './UserList'

const Users = () => {
  // const location = useLocation()
  // console.log(location)
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2" style={{marginTop:'30px'} } >  
          <h1 style={{fontWeight: '400'}}>Users</h1> 
          <UserList/>
        </div>
    </div>
  )
}

export default Users
