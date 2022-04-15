import React from 'react'
import ReactPlayer from 'react-player'
const ShortMovies = (movie) =>{
console.log(movie)
return(
    <div>
        <ReactPlayer url={`https://api.themoviedb.org/3/movie/406759/similar?api_key=84681a7022280cff3021d07fe9117b39&language=ko-KR&page=1`}/>
   
    </div>
    )
}
export default ShortMovies