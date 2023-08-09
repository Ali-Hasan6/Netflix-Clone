import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function SignUp() {
  const { user, signUp } = UserAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className='w-full h-screen'>
        <img className=' hidden sm:block w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/3d2976c5-a86e-4502-ba0b-f7b6cf950781/IQ-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="signUp Image" />
        <div className='fixed top-0 left-0 h-screen w-full bg-black/60'>

          <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className=' flex flex-col w-full py-4'>
                  <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email"
                    placeholder='Email' 
                    className='p-3 my-2 bg-gray-700 rounded' />
                  <input 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password"
                    placeholder='Password' 
                    className='p-3 my-2 bg-gray-700 rounded' />
                  <button className=' text-white bg-red-600 font-bold py-3 my-6 rounded '>Sign Up</button>

                  <div className='flex justify-between items-center text-sm text-gray-400'>
                    <p><input className='mr-2' type="checkbox" />Remember Me</p>
                    <p>Need Help?</p>
                  </div>

                  <p className='py-8'>
                    <span className='text-gray-400 mr-2'> Already subscribe to Netflix?</span>
                    <Link to="/login">Sign In</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp