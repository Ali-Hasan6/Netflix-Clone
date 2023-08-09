import React, { useEffect,useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

function Main() {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=> {
        axios.get(requests.requestTopRated).then((res) => setMovies(res.data.results))
    }, [])

    function cuttingString(str, num) {
        if(str?.length > num) {
           return str.slice(0, num) + "..."
        } else {
            return str
        }
    }
  return (
    <div className='w-full h-[550px] text-white'>   
            <div className='w-full h-full'>
                <div className='w-full h-[550px] absolute bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

             <div className=' absolute top-[20%] p-4 md:p-8 '>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className=' space-x-6 my-4'>
                    <button className=' border border-gray-300 text-black bg-gray-300 py-2 px-5'>Play</button>
                    <button className=' border border-gray-300 text-gray-300  py-2 px-5'>Watch Later</button>
                </div>

                    <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{cuttingString(movie?.overview, 150)}</p>
             </div>
            </div>
    </div>
  )
}

export default Main