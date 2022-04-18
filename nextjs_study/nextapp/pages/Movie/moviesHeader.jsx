const MoviesHeader =(poster) =>{
console.log(poster)
return(
    <div>
        <img src={`https://image.tmdb.org/t/p/w500/${poster.poster}`} alt="" />
    </div>
)
}
export default MoviesHeader