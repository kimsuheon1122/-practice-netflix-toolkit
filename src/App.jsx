import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Movies from './pages/Movies'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"

export default function App() {

  return (
    <div>
      {/* 라우터를 감싸줌 */}
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/movies/:id' element={<MovieDetail />}></Route>
      </Routes>
    </div>
  )
}
