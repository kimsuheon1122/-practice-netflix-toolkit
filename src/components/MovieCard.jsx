import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const MovieCard = ({item, movieIndex}) => {
    let star_array = [];

    for(let i = 0; i<Math.floor(item.vote_average / 2); i++){
        star_array.push(<BsStarFill color="#febb02"/>);
    }

    if(item.vote_average - Math.floor(item.vote_average) >= 0.5){
        star_array.push(<BsStarHalf color="#febb02"/>);

    }

    const {genreList} = useSelector((state)=>state.movie)
    //store에서 genreList불러옴
    const navigate = useNavigate();


    //카드 클릭시 디테일 페이지로 전환
    const gotoDetail = () => {
        navigate(`/movies/${item.id}`);
    }

    //카드 over시 제목커짐
    const overTitle = {
        fontSize : "30px"
    }
  return (
    <div onClick={gotoDetail}>

        <div className='slide-card' 
        style={
        {backgroundImage:
        `url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/${item.backdrop_path}
        )`,
        }}
        >
            <div className="card-info"
                onMouseOver={()=>{
                    console.log("마우스오버");
                    document.querySelector(".card-title").style={overTitle}
                }}>
                <p>
                {item.genre_ids.map((id)=>(
                    <Badge bg = "danger">{genreList.find((item)=>item.id === id).name}</Badge>
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
            <h5 className='card-title'>
                <span className='card-index'>{movieIndex}</span>
                <span>{item.title}</span>
            </h5>
    </div>

  )
}

export default MovieCard