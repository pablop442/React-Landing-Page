import React from "react";
import Card from "./card.jsx";

import amsterdam from "../../img/AmsterdamOk.jpg";
import andorra from "../../img/AndorraOk.jpg";
import berlin from "../../img/BerlinOk.jpg";
import bilbao from "../../img/BilbaoOk.jpg";
import london from "../../img/LondonOk.jpg";
import malaga from "../../img/MalagaOk.jpg";
import newDelhi from "../../img/NewDelhiOk.jpg";
import newYork from "../../img/NewYorkOk.jpg";
import paris from "../../img/ParisOk.jpg";
import porto from "../../img/PortoOk.jpg";
import rome from "../../img/RomeOk.jpg";
import seville from "../../img/SevilleOk.jpg";

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
						Best Destinations
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
						Special Offers
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
							imgSrc={newYork}
							imgAlt="New York"
							title="New York"
							text="Flight from Madrid"
							buttonText="390€"></Card>
						<Card
							imgSrc={andorra}
							imgAlt="Andorra"
							title="Andorra"
							text="5 days and 3 nights"
							buttonText="299€"></Card>
						<Card
							imgSrc={newDelhi}
							imgAlt="Taj Mahal"
							title="New Delhi"
							text="Flight + 7 days and 5 nights"
							buttonText="799€"></Card>
						<Card
							imgSrc={porto}
							imgAlt="Porto Portugal"
							title="Porto"
							text="5 days and 3 nights"
							buttonText="249€ "></Card>
						<Card
							imgSrc={london}
							imgAlt="Westminster Palace"
							title="London"
							text="4 days and 2 nights"
							buttonText="199€ "></Card>
						<Card
							imgSrc={paris}
							imgAlt="Eiffel Tower"
							title="Paris"
							text="4 days and 2 nights"
							buttonText="199€ "></Card>
					</div>
				</div>
				<div
					className="tab-pane fade"
					id="pills-offers"
					role="tabpanel"
					aria-labelledby="pills-offers-tab">
					<div className="row">
						<Card
							imgSrc={amsterdam}
							imgAlt="Amsterdam"
							title="Amsterdam"
							text="3 days and 2 nights"
							buttonText="99€"></Card>
						<Card
							imgSrc={malaga}
							imgAlt="Malaga"
							title="Malaga"
							text="5 days with Manu - All inclusive"
							buttonText="49€ "></Card>
						<Card
							imgSrc={rome}
							imgAlt="Rome Colosseum"
							title="Rome"
							text="3 Nights - Five Stars Hotel"
							buttonText="249€ "></Card>
						<Card
							imgSrc={seville}
							imgAlt="Seville"
							title="Seville"
							text="3 days and 2 nights"
							buttonText="79€ "></Card>
						<Card
							imgSrc={berlin}
							imgAlt="Brandenburg gate"
							title="Berlin"
							text="5 days and 3 nights"
							buttonText="239€ "></Card>
						<Card
							imgSrc={bilbao}
							imgAlt="Guggenheim Museum"
							title="Bilbao"
							text="3 days and 2 nights"
							buttonText="149€ "></Card>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CardContainer;
