import { useEffect, useState } from "react";
import ShortMovies from "./shortMovies";

const Movies = ( ) =>{  
    const PopularURL = "https://api.themoviedb.org/3/movie/popular?api_key=84681a7022280cff3021d07fe9117b39&language=ko-KR&page=1";
    const [movies, setMovies] =useState();
    useEffect(() => {
        (async () => {
          const {results} = await (
            await fetch(
              PopularURL
            )
          ).json();
        setMovies(results);
        })();
      }, []);
    
    return(
        <>
        {movies?.map((movie)=>(
            <div key={movie.id}>
             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
             <div> <ShortMovies movie={movie.id}/> </div>
                <h4>{movie.title}</h4>

            </div>
        ))}
        </>
    )
}
export default Movies