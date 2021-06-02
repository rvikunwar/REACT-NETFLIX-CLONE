import React, { useEffect, useState } from 'react'
import data from './getdata';
import requests from "./requests"
import "./Banner.css"
function Banner() {

    const [ movie,setMovie ] =useState([]);
    
    function truncate(str,n){
        return str?.length>n ? str.substring(0,n-1)+"..." : str;
    }

    useEffect(() => {
          async function fetchData(){
               const request =await data(requests.fetchNetflixOriginals);
               setMovie(request.results[Math.floor(Math.random() *request.results.length-1)])
               console.log(movie)
               return request
          }
          fetchData()
    },[])
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}>
            <div className="banner_content">
                <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>
                 <div className="button_1">
                     <button className="btn-1">Play</button>
                     <button className="btn-1">My List</button>

                 </div>
                 <h1 className="description">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="div_bottom"/>
        </header>
    )
}

export default Banner
