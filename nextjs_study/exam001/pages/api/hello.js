import React, { useEffect, useReducer } from 'react';
import axios from 'axios';


const ApiKey ='84681a7022280cff3021d07fe9117b39';
             
const baseURL="https://api.themoviedb.org/3/movie"
const popularURL=`${baseURL}/popular?api_key=${ApiKey}&language=ko-KR&page=1`


function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

console.log(popularURL)


function Users() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    state:[],
    error: null
  });

  const fetchUsers = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get(
        popularURL
      );
      dispatch({ type: 'SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const { loading, data: movies, error } = state; // state.data 를 users 키워드로 조회
  

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!movies) return null;
  return (
    <>
         {movies?.results.map((movie) =>
         <div key={movie.id}>
         <h2>{movie.title}</h2>
         <h3>평점:{movie.vote_average}</h3>
         </div>
         )}


      <button onClick={fetchUsers}>다시 불러오기</button> 
    </>
  );
}

export default Users;