import { createContext } from "react";
import { axios } from "axios";

const ApiKey ='84681a7022280cff3021d07fe9117b3';

const baseURL="https://api.themoviedb.org/3/movie"
const popularURL=`${baseURL}/popular?api_key=${ApiKey}&language=ko-KR&page=1`



export const MovieAPI = (dispatch) =>{
       dispatch ({ type :'Get_MoiveApi'});
       try{
        const  res = axios.get(
            popularURL

           );
           dispatch({ type:'Get_MovieApi_S', data: res.data});
       } catch(e){
           dispatch({type:'Get_MovieApi_E',error:e});
       }



       console.log(MovieAPI);
}
    