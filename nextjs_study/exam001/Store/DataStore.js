import React,{createContext,useState,useEffect} from "react";
import Movies from "../pages/Movies";


export const DataContext =createContext()
const ApiKey ="84681a7022280cff3021d07fe9117b39"

const MovieListURL=`
https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=ko-KR&page=1`


const DataStore =(props) =>{


 const [Moive,SetMovie] =useState([]);
 const [video,Setvideo] =useState([]);
 useEffect(() => {
     (async () => {
         const results = await (
             await fetch(
                MovieListURL
                 )
                 ).json();
                 
                 SetMovie(results);
                })();
            }, []);

console.log(Moive)
                
let MovieId = Moive.results?.map((movies)=>movies.id)  
console.log(MovieId)       

useEffect(() => {
    for(let i=0; i<MovieId?.length; i++){
         viedoURL=`https://api.themoviedb.org/3/movie/${MovieId[i]}/videos?api_key=84681a7022280cff3021d07fe9117b39&language=ko-KR`
         (async () => {
             const results = await (
                 await fetch(
                     viedoURL
                     )
                     ).json();
                     
                     Setvideo(results);
                    })();
                    
                }
            }, [video]);
            console.log(viedoURL)




    return <DataContext.Provider value={Moive}>{props.children}</DataContext.Provider>;
}

export default DataStore