import React from "react";

const Banner = ({ movie }) => {
	console.log("movie", movie)
	const bannerOver = () => {
		console.log("배너마우스오버")
	}
	return (
		<div
			onMouseOver={bannerOver}
			className="banner"
			style={{
				backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces/${movie.backdrop_path})`,
			}}
		>
			<div className="banner-info">
				<h1>{movie.title}</h1>
				<p>{movie.overview}</p>
			</div>
		</div>
	);
};

export default Banner;
