import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import HeaderTop from "./headerTop.jsx";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<div>
				<HeaderTop></HeaderTop>
			</div>
			<div>
				<Navbar></Navbar>
			</div>
		</div>
	);
};

export default Home;
