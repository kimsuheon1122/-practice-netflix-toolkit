import React from 'react'
import { useEffect } from 'react';
import { ModalFooter } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { SyncLoader } from 'react-spinners';
import Footer from '../components/Footer';
import MovieExplain from '../components/MovieExplain';
import { movieAction } from '../redux/action/movieAction';

const MovieDetail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {detailMovies, loading, trailerVideo} = useSelector((state)=>state.movie);
  
  useEffect(()=>{
    dispatch(movieAction.getDetailMovies(id));
    window.scrollTo(0,0)
  }, []);

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
    <div>
      <MovieExplain item = {detailMovies} videoId = {trailerVideo}/>
      <br />
      <br />
      <h1>영화리뷰를 넣을 곳</h1>
      <Footer></Footer>
    </div>
  )
}

export default MovieDetail