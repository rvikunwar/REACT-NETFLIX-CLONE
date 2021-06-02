import data from './getdata';
import React ,{useState,useEffect} from 'react'
import "./Row.css"


const imgurl="https://image.tmdb.org/t/p/w500";
function Row(props) {

    const [movies,setMovies]=useState([]);

    useEffect(() => {
        async function fetchData() {
            const request=await data(props.fetchUrl);
            setMovies(request.results)
            console.log(request.results)
           
            return request;
        }
        fetchData();
    }, [props.fetchUrl]);
   
    return (
        <div className="row">
            <h2 class="row_title">{props.title}</h2>

            <div className="row_posters">
                {movies.map(movie=>(
                   
                   
                    <img  key={movie.id} className={`poster ${props.isLargeRow && "poster_larger"}`} 
                     src={props.isLargeRow ?imgurl+movie.poster_path : imgurl+movie.backdrop_path}
                      alt={movie.name}>

                    </img>
                   
                ))}
            </div>
            
        </div>
    )
}

export default Row
