/* 
    미들웨어부분 
https://developers.themoviedb.org/3/movies/get-popular-movies

미들웨어는 함수가 함수를 return(reducer로 보내야 하기 때문)
*/

import api from "../api";
const APIkey = process.env.REACT_APP_APIKEY;
/* 받아온 key 값을 노출되지 않게 만든다 -> 루트에 .env 파일 */

function getMovies(){
    return async(dispatch) => {
        const popularMovieApi = await api.get(
            `/movie/popular?api_key=${APIkey}&language=en-US&page=1`,
        );

        const topRatedMovieApi = await api.get(
            `/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`,
        );

        const upComingMovieApi = await api.get(
            `/movie/upcoming?api_key=${APIkey}&language=en-US&page=1`,
        );
/*     let data = await Promise.all([
        popularMovieApi,
        topRatedMovieApi,
        upComingMovieApi
    ]); */
    //console.log("data는?", data);
    //따로 받아오기
    let [popularMovie, topRatedMovie, upComingMovie] = await Promise.all([
        popularMovieApi,
        topRatedMovieApi,
        upComingMovieApi
    ]); /* deconstructing 방식. 받아온 항목들을 하나씩 넣음. */
    console.log("popularMovie", popularMovie)
    }
}

/* 3개의 데이터를 병렬로 동시에 불러옴 */


export const movieAction = {getMovies};
/* 
    API호출하는 3가지 방법
    1. fetch(백엔드 쪽에서 못 씀) 
    2. ajax 
    3. axios(여기저기 막 쓸 수 있음, 기능이 더 많음)
    https://axios-http.com/kr/docs/intro
*/