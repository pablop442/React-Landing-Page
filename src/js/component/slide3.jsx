//Import React
import React from "react";

//Import PropTypes
import PropTypes from "prop-types";

//Import Image
import cityImg from "../../img/city.jpg";

const SlideThree = props => {
	return (
		<div className="carousel-item">
			<img src={cityImg} className="d-block w-100" alt="City image" />
			<div className="carousel-caption d-none d-md-block">
				<h5 className="title">{props.title}</h5>
				<p className="text">{props.text}</p>
			</div>
		</div>
	);
};

SlideThree.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};

export default SlideThree;
