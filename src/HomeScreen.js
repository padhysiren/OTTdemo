import React from 'react'
import "./HomeScreen.css"
import Navbar from './Navbar'
import Banner from './Banner'
import Row from './Row'
import Request from './Request'
const HomeScreen = () => {
  return (
    <div className='homeScreen'>
          <Navbar/>
          <Banner/>

      <Row
         title="Trending Now" 
         fetchUrl={Request.fetchTrending}
        //  isLargeRow 
       />
       <Row
         title="Top Rated" 
         fetchUrl={Request.fetchTopRated}
       />
       <Row
         title="Action Movies" 
         fetchUrl={Request.fetchActionMovies}
       />
       <Row
         title="Comedy Movies" 
         fetchUrl={Request.fetchComedyMovies}
       />
       <Row
         title="Adventure Movies" 
         fetchUrl={Request.fetchAdventureMovies}
       />
        <Row
         title="Romance Movies" 
         fetchUrl={Request.fetchRomanceMovies}
       />
       <Row
         title="Documentation" 
         fetchUrl={Request.fetchDocumentaries}
       />
    
    </div>
  )
}

export default HomeScreen