import React from "react";

import logo4Geeks from "../../img/logo-4geeks azul.png";

const HeaderTop = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid justify-content-center">
				<a className="navbar-brand" href="#">
					<img
						src={logo4Geeks}
						alt=""
						width="45"
						height="45"
						className="d-inline-block align-text-top me-3"
					/>
					<span className="align-middle fs-3 text">
						4Geeks Travel
					</span>
				</a>
			</div>
		</nav>
	);
};

export default HeaderTop;
