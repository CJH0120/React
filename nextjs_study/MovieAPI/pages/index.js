
import { useEffect, useState } from "react";
import Seo from "../components/Seo"

export default function Home(){
const API_Key ="84681a7022280cff3021d07fe9117b39";
const [movies,setMovies] = useState([]);
useEffect(() => {
  (async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}`
      )
    ).json();
    console.log(results)
    setMovies(results);
   })();
  }, []);
  return (
    <>
     <div className="AVA">
      <Seo title="Home" />
      
      <div className="AAA">
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="BBB"key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
       </div>
    </div>

        <style jsx>{`
        div{
          background:#ddd;
          margin-top:50px;
        }
        .AVA{
          width:1000px;
          margin:0 auto;
          text-align: center;
        

        }
        h4{
          width:300px;
        }
       .AAA{
       
        display :flex;
        flex-wrap:wrap;
        
       }
        .BBB{
         
          text-align: center;
          
      
        }
     
      
        img{
          border-radius:12px;
          width:150px;
          
          
        }
        img:hover{
          width:170px;
        }
        `}</style>
    </>
    )

    

}
