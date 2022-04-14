

  import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
  import Seo from "../components/Seo"
export default function Home({results}){
const router = useRouter();
const onClick =(id,title) =>{
router.push({
  pathname:`/movies/${id}`,
  query:{
   
    title,
  }
},
`/movies/${id}`
)
}
  return (
    <>
     <div >
      <Seo title="Home" />
      
      <div className="wrap"  >
    
      {results?.map((movie) => (
     
     <div onClick={()=>onClick(movie.id,movie.original_title)} className="movielist" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
          <h4>
          <Link href={`/movies/${movie.id}`} >  
          <a>  {movie.original_title}</a>
          </Link>
          </h4>
          
        </div>
       
      ))}
       </div>
    </div>

        
    <style jsx global>{`
    .wrap{
     width:550px;
      margin :0 auto;
      display:flex;
      flex-wrap: wrap;
      text-align: center;
      
    }
    a{
      text-decoration: none;
    }
    *{
      padding:0;
      margin:0;
    }
    img{
      width:250px;
    }
    img:hover{
      width:260px;
    }
    h4{
      margin :10px 0;
    }
    .movielist{
      margin:0 20px 20px 0;
      margin-top:20px;

    }
    
    `}</style>
    </>
    )

}

export async function getServerSideProps(){
  const API_Key ="84681a7022280cff3021d07fe9117b39";

  const { results } = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}`
    )
  ).json();
  return{
    props:{
      results,
    },
  };
}