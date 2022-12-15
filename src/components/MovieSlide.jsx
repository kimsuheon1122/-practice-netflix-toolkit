//react multi carousel 슬라이더 컴포넌트
//https://www.npmjs.com/package/react-multi-carousel

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1400 },
		items: 4,
		slidesToSlide: 1, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1400, min: 464 },
		items: 3,
		slidesToSlide: 1, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};


const MovieSlide = ({movie}) => {
let movieIndex = 0;

	return (
		<div>
      <Carousel responsive={responsive}>
				{movie.results.map((item) => (
					<div className="card-wrap">
						<MovieCard item={item} movieIndex = {movieIndex+=1}/>
					</div>
				)
        )
        }
      </Carousel>
		</div>
	);
};


export default MovieSlide;
