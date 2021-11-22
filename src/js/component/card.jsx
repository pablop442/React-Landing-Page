import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="col-12 col-md-6 col-lg-4">
			<div className="card text-white mb-4">
				<img
					src={props.imgSrc}
					className="card-img"
					alt={props.imgAlt}
				/>
				<div className="card-img-overlay">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a
						type="button"
						className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
						Reserva ahora
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
};

export default Card;
