import React from 'react'
import SavedShows from '../components/SavedShows';

function Accounts() {
  return (
    <div>
      <div className='w-full text-white'>
        <img
          className=' w-full h-[400px] object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/3d2976c5-a86e-4502-ba0b-f7b6cf950781/IQ-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/" 
          />
        <div className=' fixed top-0 left-0 w-full h-[550px] bg-black/50'>
          <div className=' absolute top-[20%] p-4 md:p-8'>
            <h1 className=' text-3xl md:text-5xl font-bold'>My Shows</h1>
          </div>
        </div>
      </div>
      <SavedShows />
    </div>
  )
}

export default Accounts