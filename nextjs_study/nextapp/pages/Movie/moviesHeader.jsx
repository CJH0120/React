import { useEffect, useState } from "react";

const MoviesHeader =(movie) =>{


const PopularURL = ` https://api.themoviedb.org/3/movie/${movie.movie}/images?api_key=84681a7022280cff3021d07fe9117b39&language=ko-KR`;
  
  
const [movieimg, setmovieimg] =useState([]);
useEffect(() => {
  (async () => {
    const {results} = await (
      await fetch(
        PopularURL
        )
        ).json();
        setmovieimg(results);
      })();
    }, []);
    
    console.log(movieimg)

return(
    <div>
       
    </div>
)
}
export default MoviesHeader