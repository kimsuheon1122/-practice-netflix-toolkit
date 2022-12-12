import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Movies from './pages/Movies'

export default function App() {

  return (
    <div>
      {/* 라우터를 감싸줌 */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/movies/:id' element={<MovieDetail />}></Route>
      </Routes>
    </div>
  )
}
