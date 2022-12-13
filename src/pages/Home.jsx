import React, { useEffect } from 'react';
import { movieAction } from '../redux/action/movieAction';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
/* 켜지자마자 데이터가 불러와져야 함, 리덕스 미들웨어 이용 */
  useEffect(()=>{
    dispatch(movieAction.getMovies());
  },[])
  return (
    <div>Home - 대문페이지입니다</div>
  )
}

export default Home;