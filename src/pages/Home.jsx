//api를 불러오기 위한 세팅
//로딩 스피너 사용 추가

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/action/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { SyncLoader } from "react-spinners";
import Footer from "../components/Footer";

const Home = () => {
	const dispatch = useDispatch();
	//켜지자 마자 데이타가 불러와져야 함,리덕스미들웨어 이용
  
	const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(
		(state) => state.movie,
	); 
  //store에서 가져옴, loading 상태도 추가

	useEffect(() => {
		dispatch(movieAction.getMovies());
	}, []);

  /* 로딩 true - 데이터 도착 전, 로딩스피너 보여줌
  로딩 false - 데이터 도착 후, 에러 - 데이터 보여줌, 에러 메세지 보여줌 */
  if(loading){
    return(
    <div className="loader-container">
      <SyncLoader 
        color="#36d7b7"
        loading = {loading}
        size={150}
        />
    </div>)
  }

	return (
    <>
      <div>
        {popularMovies.results && <Banner movie={upcomingMovies.results[13]} />}
        <div className="slide-container">
                <h2>인기 영화</h2>
                <MovieSlide movie={popularMovies}/>
                <h2>최신 영화</h2>
                <MovieSlide movie={topRatedMovies} />
                <h2>개봉예정 영화</h2>
                <MovieSlide movie={upcomingMovies} />
        </div>
      </div>
      <Footer />
    </>
	);
};
//조건부 렌더링을 걸지 않으면 데이타를 받아 오기 전엔 에러

export default Home;
