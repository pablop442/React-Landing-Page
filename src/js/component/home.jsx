import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import CardContainer from "./cardContainer.jsx";
import Carrousel from "./carrousel.jsx";
import HeaderTop from "./headerTop.jsx";
import Navbar from "./navbar.jsx";
import SearchBar from "./searchBar.jsx";
import Footer from "./footer.jsx";
import ParallaxContainer from "./parallaxContainer.jsx";

const Home = () => {
	return (
		<div>
			<HeaderTop></HeaderTop>

			<Navbar></Navbar>

			<div className="container">
				<Carrousel></Carrousel>
			</div>
			<SearchBar />
			<CardContainer></CardContainer>
			<ParallaxContainer />
			<Footer />
		</div>
	);
};

export default Home;
