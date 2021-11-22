import React from "react";
import Card from "./card.jsx";

const CardContainer = () => {
	return (
		<div className="container mt-4">
			<ul
				className="nav nav-pills mb-3 d-flex justify-content-center"
				id="pills-tab"
				role="tablist">
				<li className="nav-item" role="presentation">
					<button
						className="nav-link active fw-bold"
						id="pills-home-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-home"
						type="button"
						role="tab"
						aria-controls="pills-home"
						aria-selected="true">
						Mejores destinos
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link fs-5 fw-bold"
						id="pills-offers-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-offers"
						type="button"
						role="tab"
						aria-controls="pills-offers"
						aria-selected="false">
						Ofertas
					</button>
				</li>
			</ul>
			<div className="tab-content" id="pills-tabContent">
				<div
					className="tab-pane fade show active"
					id="pills-home"
					role="tabpanel"
					aria-labelledby="pills-home-tab">
					<div className="row">
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
					</div>
				</div>
				<div
					className="tab-pane fade"
					id="pills-offers"
					role="tabpanel"
					aria-labelledby="pills-offers-tab">
					<div className="row">
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
						<Card
							imgSrc="http://lorempixel.com/300/200/nature"
							imgAlt="..."
							title="Málaga"
							text="5 días y 3 noches"
							buttonText="59€  >>"></Card>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CardContainer;
