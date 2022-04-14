import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import MoiveHead from "./MovieHeda";



const Movie = () =>{

  const APIKEY= "5e8873805f6127f9d1140d87d485398e";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const show = await (
        await fetch(
          `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${APIKEY}&targetDt=20220413`
        )
      ).json();
      console.log(show.boxOfficeResult.dailyBoxOfficeList)
      setMovies(show.boxOfficeResult.dailyBoxOfficeList)
    })();
  }, []);




  return (
    <>
      <Seo title="Today"/>
      <MoiveHead  movies={movies}/> 
  
   
     
   </>
    
  );

}

export default Movie