import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'

import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

function Row({title, fetchURL,rowId}) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(fetchURL).then((res) => setMovies(res.data.results))
    },[fetchURL])

    function slideLeft() {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft =  slider.scrollLeft - 500
    }
    function slideRight() {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft =  slider.scrollLeft + 500
    }
  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className=' relative flex items-center group'>
            <MdChevronLeft size={40} onClick={slideLeft} className=' rounded-full bg-white absolute left-0 z-10 hidden group-hover:block opacity-50 hover:opacity-100 cursor-pointer' />

            <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>

                {movies.map((item,id) => (
                 <Movie key={id} item={item} />
                ))}
            </div>
            <MdChevronRight size={40} onClick={slideRight} className=' rounded-full bg-white absolute right-0 z-10 hidden group-hover:block opacity-50 hover:opacity-100 cursor-pointer' />

        </div>
    </div>
  )
}

export default Row