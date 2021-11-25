//Import React
import React from "react";

//Import PropTypes
import PropTypes from "prop-types";

//Import Images
import mountainImg from "../../img/mountain.jpg";

const SlideTwo = props => {
	return (
		<div className="carousel-item">
			<img
				src={mountainImg}
				className="d-block w-100"
				alt="Mountain image"
			/>
			<div className="carousel-caption d-none d-md-block">
				<h5 className="title">{props.title}</h5>
				<p className="text">{props.text}</p>
			</div>
		</div>
	);
};
SlideTwo.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};

export default SlideTwo;
