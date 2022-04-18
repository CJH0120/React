
import { index } from "cheerio/lib/api/traversing";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const MoviesImg = (movieid) =>{
  
   
 
    const PopularURL = `  https://api.themoviedb.org/3/movie/${movieid.movieid}/videos?api_key=84681a7022280cff3021d07fe9117b39&language=ko-KR`;
  
   
    const [moviess, setMoviess] =useState([]);
    useEffect(() => {
      (async () => {
        const {results} = await (
          await fetch(
            PopularURL
            )
            ).json();
            setMoviess(results);
          })();
        }, []);
      
         
      const id = moviess.slice(0,1);
      


        
        
        
        
      return(
      <>
       
      { id?.map((movie)=>(
      <ReactPlayer url={`https://www.youtube.com/watch?v=${movie.key}`}/>
      ))}


           </> 
        )
        

}
export default MoviesImg