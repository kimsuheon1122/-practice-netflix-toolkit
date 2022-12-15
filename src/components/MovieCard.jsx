import React from 'react'
import { Badge } from 'react-bootstrap'


const MovieCard = ({item, movieIndex}) => {
    let star_array = [];

    for(let i = 0; i<Math.round(item.vote_average / 2); i++){
        star_array.push("⭐");
    }

  return (
    <>
        <div className='slide-card' 
    style={
        {backgroundImage:
        `url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/${item.backdrop_path}
        )`,
        }}
        >
            <div className="card-info">
                <p>
                {item.genre_ids.map((id)=>(
                    <Badge bg = "danger">{id}</Badge>
                ))}
                </p>
                <div className="card-infoSub">
                <p>
                    평점 : {star_array.map((star)=>(<span>{star}</span>))}
                    ({item.vote_average})
                </p>
                <span>{item.adult ? <span>🔞(미성년자 관람불가)</span> : <span>👪(미성년자 관람가능)</span>}</span>
                </div>
            </div>
            </div>
            <h3 className='card-title'>
                <span>{movieIndex}{item.title}</span>
            </h3>
    </>

  )
}

export default MovieCard