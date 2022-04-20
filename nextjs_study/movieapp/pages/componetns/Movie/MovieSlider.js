import { useCallback, useEffect, useMemo, useState  } from "react";
import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Wrap} from '../Styled/CloneUIUX'
import Slider from "react-slick";


const MovieSlider =({poster,id}) =>{
const viedoURL=`https://api.themoviedb.org/3/movie/${id}/videos?api_key=84681a7022280cff3021d07fe9117b39&language=ko-KR`


const [Moive,SetMovie] =useState([]);
useEffect(() => {
    (async () => {
      const {results} = await (
        await fetch(
            viedoURL
          )
          ).json();
         
          SetMovie(results);
        })();
      }, []);

      const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const video = Moive.slice(0,1);
const useCallbackReturn = useCallback(() => {console.log(video)}, [video]);

useCallbackReturn();

return(
    <>  

        <div>
       
        <Slider {...settings}>
          <div >
          <img src={`https://image.tmdb.org/t/p/w500${poster}` } style={{width:"100%",height:"767.5px"}}/> 
          </div>
          <div className="videowrap">
              
            {!video && <h3> Loding</h3>}
          {video?.map((movie)=>
            <Wrap key={movie} className="video" >
            <iframe width="662" height="600" src={`https://www.youtube.com/embed/${movie.key}`} title="YouTube video player" />
             </Wrap>
           )} 
          </div>
          </Slider>
          </div>
        


 </>
)

}
export default  React.memo(MovieSlider);


