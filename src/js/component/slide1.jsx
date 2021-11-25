//Import React
import React from "react";

//Import PropTypes
import PropTypes from "prop-types";

//Import Image
import beachImg from "../../img/beach.jpg";

const SlideOne = props => {
	return (
		<div className="carousel-item active">
			<img
				src={beachImg}
				className="d-block w-100"
				alt="Maldives beach image"
			/>
			<div className="carousel-caption d-none d-md-block">
				<h5 className="title">{props.title}</h5>
				<p className="text">{props.text}</p>
			</div>
		</div>
	);
};

SlideOne.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};

export default SlideOne;
