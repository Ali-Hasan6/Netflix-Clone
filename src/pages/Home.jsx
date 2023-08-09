import React, { useState } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
function Home() {
    
  return (
    <div>
        <Main />
        <Row rowId = "1" title = "Up Coming" fetchURL ={requests.requestUpcoming} />
        <Row rowId = "2" title = "Top Rated" fetchURL ={requests.requestTopRated} />
        <Row rowId = "3" title = "Popular" fetchURL ={requests.requestPopular} />
        <Row rowId = "4" title = "New Shows" fetchURL ={requests.requestNew} />
        <Row rowId = "5" title = "Action" fetchURL ={requests.requestAction} />
    </div>
  )
}

export default Home

