import React, { useState } from "react";
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { UserAuth } from "../context/AuthContext";

import {doc, arrayUnion, updateDoc} from "firebase/firestore"
import { db } from "../firebase";
function Movie({item}) {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const {user} = UserAuth()
    const movieID = doc(db, 'users', `${user?.email}`)

   async function savedShow() {
    if(user?.email) {
        setLike(!like)
        setSaved(true)
       await updateDoc(movieID, {
          savedShow: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path
          })
        })
    } else{
      alert('Please log in to save a movie')
    }
   }

  return (
    <div className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className=" absolute left-0 top-0 opacity-0 hover:opacity-100 w-full h-full bg-black/80 text-white">
        <p className=" flex justify-center items-center text-center h-full whitespace-normal font-bold text-xs md:text-sm">
          {item?.title}
        </p>
        <p onClick={savedShow}>
          {like ? (
            <FaHeart className=" absolute top-4 left-4 text-gray-400 " />
          ) : (
            <FaRegHeart className=" absolute top-4 left-4 text-gray-400 " />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movie;
