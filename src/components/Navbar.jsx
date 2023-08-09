import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
function Navbar() {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()

  async function handleLogOut() {
    try {
        await logOut()
        navigate('/')
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div className='flex justify-between items-center p-4  w-full absolute z-[100]'>
      <Link to="/" >
        <h1 className=' text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      {user?.email ? 
      (<div>
        <Link to='/accounts'>
          <button className='text-white pr-4'>Account</button>
        </Link>

          <button onClick={handleLogOut} className='text-white bg-red-600 rounded px-6 py-2 cursor-pointer'>Log Out</button>
        </div>
      ) 
          : 
      (<div>
        <Link to='/login'>
          <button className='text-white pr-4'>Sign In</button>
        </Link>

        <Link to="/signup">
          <button className='text-white bg-red-600 rounded px-6 py-2 cursor-pointer'>Sign Up</button>
        </Link>
      </div>)}
    </div>
  )
}

export default Navbar