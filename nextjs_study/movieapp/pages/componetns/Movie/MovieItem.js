import { useEffect, useState } from "react"
import { Sec_Header, Sec_Mainwrap, Sec_Img, Sec_Icon, Sec_Comment,Wrap } from "../Styled/CloneUIUX"
import { popularURL } from "../../api/MovieFetch";

import MovieSlider from "./MovieSlider";

const MovieItem = ()=>{

const [Moive,SetMovie] =useState([]);
useEffect(() => {
    (async () => {
      const {results} = await (
        await fetch(
          popularURL
          )
          ).json();
         
          SetMovie(results);
        })();
        
      }, []);


console.log(Moive)


    return(
      
        <>
        {Moive?.map((movie)=>
        <Sec_Mainwrap key={movie.id}>
         
         <Sec_Header>
         <img src={`https://image.tmdb.org/t/p/w154${movie.backdrop_path}` } 
         style={{borderRadius:"50px",width:"40px",height:"40px"}}
          />
            &nbsp;&nbsp;
         {movie.title}
         </Sec_Header>

         
         <Sec_Img>
             
             <MovieSlider poster= {movie.poster_path} id={movie.id}/>
         </Sec_Img>
         
         <Sec_Comment>
         @{movie.original_title}<br/>
         {movie.overview}</Sec_Comment>
         </Sec_Mainwrap>    
        )}
         </>
    )
}
export default MovieItem