import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Carrousel from "./carrousel.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Carrousel></Carrousel>
		</div>
	);
};

export default Home;
