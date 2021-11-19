// Import React
import React from "react";
import PropTypes from "prop-types";
//Import Components
import SlideOne from "./slide1.jsx";
import SlideTwo from "./slide2.jsx";
import SlideThree from "./slide3.jsx";

const Carrousel = props => {
	return (
		<div
			id="carouselExampleCaptions"
			className="carousel slide"
			data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					aria-label="Slide 2"></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner">
				<SlideOne
					title="Agencia de Viajes"
					text="Te ayudamos a conseguir tu destino ideal."></SlideOne>
				<SlideTwo
					title="Agencia de Viajes"
					text="Te ayudamos a conseguir tu destino ideal."></SlideTwo>
				<SlideThree
					title="Agencia de Viajes"
					text="Te ayudamos a conseguir tu destino ideal."></SlideThree>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev">
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next">
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};
// Carrousel.PropTypes = {

// };
export default Carrousel;
