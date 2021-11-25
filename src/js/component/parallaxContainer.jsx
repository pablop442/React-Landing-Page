import React from "react";
import discover from "../../img/discoverTheWorldBlue.jpg";

import { Parallax } from "react-parallax";

const ParallaxContainer = () => (
	<div className="container">
		<Parallax
			blur={{ min: -15, max: 15 }}
			bgImage={discover}
			bgImageAlt="Discover the World"
			strength={400}>
			<div
				className="text-white d-flex justify-content-center align-items-center display-1 fw-bold"
				style={{ height: "300px" }}>
				#discoverTheWorld
			</div>
		</Parallax>
	</div>
);
export default ParallaxContainer;
