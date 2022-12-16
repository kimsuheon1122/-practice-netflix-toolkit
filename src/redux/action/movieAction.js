/* 
    미들웨어부분 
https://developers.themoviedb.org/3/movies/get-popular-movies

미들웨어는 함수가 함수를 return(reducer로 보내야 하기 때문)

장르 추가
*/

import MovieDetail from "../../pages/MovieDetail";
import api from "../api";
const APIkey = process.env.REACT_APP_APIKEY;
/* 받아온 key 값을 노출되지 않게 만든다 -> 루트에 .env 파일 */

/* 영화 데이터 가져오기 */
function getMovies(){
    return async(dispatch) => {
        try{
            dispatch({
                type : "GET_GET_MOVIE_REQUEST"}) // 로딩전 던져줌
            const popularMovieApi = await api.get(
                `/movie/popular?api_key=${APIkey}&language=ko-US&page=1`,
            );
    
            const topRatedMovieApi = await api.get(
                `/movie/top_rated?api_key=${APIkey}&language=ko-US&page=1`,
            );
    
            const upComingMovieApi = await api.get(
                `/movie/upcoming?api_key=${APIkey}&language=ko-US&page=1`,
            );
            const genreApi = await api.get(
                `/genre/movie/list?api_key=${APIkey}&language=ko-US`,
            );

        let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([
            popularMovieApi,
            topRatedMovieApi,
            upComingMovieApi,
            genreApi
        ]); /* deconstructing 방식. 받아온 항목들을 하나씩 넣음. */

        /* 데이터 도착 후  */
        dispatch({
            type : "GET_MOVIE_SUCCESS",
            payload : {
                popularMovies: popularMovies.data,
                topRatedMovies: topRatedMovies.data,
                upcomingMovies: upcomingMovies.data,
                genreList : genreList.data.genres
            }
        })
        }catch(error){ //에러 핸들링
            dispatch({type:"GET_MOVIE_FAIL"})
        }
    }
}

/* 3개의 데이터를 병렬로 동시에 불러옴 */

/* 디테일 데이터 가져오기 */

function getDetailMovies(id){
    return async (dispatch) => {
        try{
            dispatch({type:"GET_D_MOVIE_REQUEST"})
            const detailMovieApi = await api.get(
            `/movie/${id}?api_key=${APIkey}&language=ko-US`
            );

            let [detailMovies] = await Promise.all(
                [detailMovieApi]);

            dispatch({
                type : "GET_D_MOVIE_SUCCESS",
                payload:{detailMovies : detailMovies.data}
            })
        }
        catch(error){
            dispatch({type:"GET_D_MOVIE_FAIL"}
            );
        }
    }
}

export const movieAction = {getMovies, getDetailMovies};
/* 
    API호출하는 3가지 방법
    1. fetch(백엔드 쪽에서 못 씀) 
    2. ajax 
    3. axios(여기저기 막 쓸 수 있음, 기능이 더 많음)
    https://axios-http.com/kr/docs/intro
*/