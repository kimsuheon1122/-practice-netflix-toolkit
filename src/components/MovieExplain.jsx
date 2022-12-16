import React from "react";
import { Badge, Button, Col, Container, Image, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Trailer from "./Trailer";

const MovieExplain = ({item,videoId}) => {
    console.log('item',item);
  let star_array = [];

  for (let i = 0; i < Math.floor(item.vote_average / 2); i++) {
    star_array.push(<BsStarFill color="#febb02"/>);
  }

  if ((item.vote_average - Math.floor(item.vote_average)) >= 0.5) {
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
                    bg="dark"
                    key = {item.id}> # {item.name}
                    </Badge>
                ))}
                <h1>{item.title}</h1>
                <p>{item.tagline}</p>
                <span>
                    {item.adult ? (
                        <OverlayTrigger
                            placement="right"
                            overlay={
                                <Tooltip id="button-tooltip-2">미성년자 관람불가</Tooltip>
                            }>
                            {({ ref, ...triggerHandler }) => (
                                <span 
                                className="ms-1"
                                ref={ref}
                                {...triggerHandler}
                                > 🔞
                                </span>
                            )}
                        </OverlayTrigger>
                    ) : 
                    (
                        <OverlayTrigger
                            placement="right"
                            overlay={
                                <Tooltip id="button-tooltip-2">미성년자 관람가능</Tooltip>
                            }>
                            {({ ref, ...triggerHandler }) => (
                                <span 
                                className="ms-1"
                                ref={ref}
                                {...triggerHandler}
                                > 👪
                                </span>
                            )}
                        </OverlayTrigger>
                    )}
                </span>
                <span>
                    <OverlayTrigger
                            placement="right"
                            overlay={
                                <Tooltip id="button-tooltip-2">
                                    어썸 사용자들은 이 영화를 추천해요!
                                </Tooltip>
                            }>
                            {({ ref, ...triggerHandler }) => (
                                <span 
                                className="ms-1"
                                ref={ref}
                                {...triggerHandler}
                                > 
                                {star_array.map((star) => (
                                <span>{star}</span>)
                                )}
                                </span>
                            )}
                        </OverlayTrigger>
                    <span>({Math.round(item.vote_average * 10) / 10})</span>
                </span>
                <p>👥 {(item.popularity).toLocaleString("ko-KR")} 명</p>
                <div className="detail-overview">{item.overview}…</div>

                <Trailer 
                className = "trailer-btn"
                item = {videoId}/>
            </Col>
        </Row>
    </Container>

    </div>
    );
};

export default MovieExplain;
