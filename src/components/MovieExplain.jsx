import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Trailer from "./Trailer";

const MovieExplain = ({item}) => {
  let star_array = [];

  for (let i = 0; i < Math.floor(item.vote_average / 2); i++) {
    star_array.push(<BsStarFill color="#febb02"/>);
  }

  if (item.vote_average - Math.floor(item.vote_average) >= 0.5) {
    star_array.push(<BsStarHalf  color="#febb02"/>);
  }
  return (
    <div className="trailer">
        <Container>
        <Row>
            <Col>
                <img
                className="detail-img"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt=""
                />
            </Col>
            <Col>
                {item.genres.map((item)=>(
                    <Badge
                    bg = "danger" 
                    key = {item.id}>{item.name}
                    </Badge>
                ))}
                <h1>{item.title}</h1>
                <p>{item.tagline}</p>
                <div>
                    평점 :
                    {star_array.map((star) => (
                    <span>{star}</span>
                    ))}
                    <span>{Math.round(item.vote_average * 10) / 10}</span>
                    <span>👥 {item.popularity} </span>
                </div>
                <div>
                    {item.adult ? (
                    <span>🔞(미성년자 관람불가)</span>
                    ) : (
                    <span>👪(미성년자 관람가능)</span>
                    )}
                    <div className="detail-overview">{item.overview}</div>
                </div>
                <Trailer color = "red" className = "trailer-btn"/>
            </Col>
        </Row>
    </Container>
    </div>
    );
};

export default MovieExplain;
