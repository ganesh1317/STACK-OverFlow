import React from 'react'
import  { useSelector } from 'react-redux'

import User from './User'
import './Users.css'
const UserList = () => {

    const users = useSelector((state) => state.usersReducer)
    // console.log(users)
    return (
        <div className='user-List-container'>
            {
                users.map((user) =>(
                    <User user={user} key={user?._id}/>
                ))
            }
      
        </div>
  )
}

export default UserList
