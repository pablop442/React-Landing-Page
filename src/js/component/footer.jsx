//Import React
import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
	return (
		<div>
			<footer className="bg-secondary bg-opacity-25 container py-4 ">
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4 text-center ">
						© 2021 Copyright: All rights reserved.
					</div>
					<div className="col-4 text-end">
						Contact us: <BsFacebook size="25px" />{" "}
						<BsInstagram size="25px" /> <BsTwitter size="25px" />
					</div>
				</div>
			</footer>
		</div>
	);
};
export default Footer;
