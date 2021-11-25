// Import React
import React from "react";
//Import Components
import SlideOne from "./slide1.jsx";
import SlideTwo from "./slide2.jsx";
import SlideThree from "./slide3.jsx";

const Carrousel = props => {
	return (
		<div className="container">
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
						title="The best destinations, competitive prices"
						text="In 4Geeks Travel our mission is to make you have a memorable vacation"></SlideOne>
					<SlideTwo
						title="Plane tickets, packages, hotels and more "
						text="Try our flight finder. Choose a destination and we will show you the best prices"></SlideTwo>
					<SlideThree
						title={
							<>
								Don´t miss our <i>All Inclusive</i> packages
							</>
						}
						text="Make your holiday a once in a lifetime adventure"></SlideThree>
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
		</div>
	);
};

export default Carrousel;
