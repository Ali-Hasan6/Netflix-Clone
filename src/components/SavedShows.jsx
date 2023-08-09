import React, {useState, useEffect} from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase' 
import {doc, updateDoc, onSnapshot} from 'firebase/firestore'
import {AiOutlineClose} from "react-icons/ai"
function SavedShows() {
  const [movies, setMovies] = useState([])
  const {user} = UserAuth()

  function slideLeft() {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  function slideRight() {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShow);
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`)

  async function deleteShow(passedID) {
    try {
      const result = movies.filter((item) => item.id !== passedID)
      await updateDoc(movieRef, {
        savedShow: result
      })
    } catch(error) {
      console.log(error)
    }
  }

  return (

    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className=' relative flex items-center group'>
        <MdChevronLeft size={40} onClick={slideLeft} className=' rounded-full bg-white absolute left-0 z-10 hidden group-hover:block opacity-50 hover:opacity-100 cursor-pointer' />

        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>

          {movies?.map((item) => (
            <div key={item.id} className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className=" absolute left-0 top-0 opacity-0 hover:opacity-100 w-full h-full bg-black/80 text-white">
                <p className=" flex justify-center items-center text-center h-full whitespace-normal font-bold text-xs md:text-sm">
                  {item?.title}
                </p>
                <p  onClick={() => deleteShow(item.id)} className=' absolute top-5 right-5 text-2xl text-gray-300'><AiOutlineClose></AiOutlineClose></p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight size={40} onClick={slideRight} className=' rounded-full bg-white absolute right-0 z-10 hidden group-hover:block opacity-50 hover:opacity-100 cursor-pointer' />
      </div>
    </div>
  )
}

export default SavedShows