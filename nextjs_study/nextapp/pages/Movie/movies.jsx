import { useEffect, useState } from "react";
import styled from "styled-components";
import MoviesHeader from "./moviesHeader";

const SectionWrap=styled.div`
  margin:0 auto;
  margin-top:100px;
  width:80%;
`;

const HeaderWrap = styled.div`
  width: 614px;
  border:1px solid #ddd;
  height:60px;
  margin:0 auto;
  
`;
const ImgWrap = styled.div`
  width: 614px;
  border:1px solid black;
  height:614px;
  margin:0 auto;
  
`;
const FotterWrap = styled.div`
  width: 614px;
  border:1px solid black;
  height:177px;
  margin:0 auto;
  
`;
const Movies = ( ) =>{  

  
const PopularURL = `https://api.themoviedb.org/3/movie/popular?api_key=84681a7022280cff3021d07fe9117b39&language=ko-KR&page=all`;
    
    
    
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
   



    console.log(movies)
    return(
        <>
         { movies?.map((movie)=>(
           
        <SectionWrap key={movie.id}>
        <HeaderWrap>
        <MoviesHeader poster= {movie.poster_path}/>
        </HeaderWrap>

        <ImgWrap>이미지
        </ImgWrap>    
        <FotterWrap>
         </FotterWrap>
        </SectionWrap>
         ))}
        </>
    )
}
export default Movies