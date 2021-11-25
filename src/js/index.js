//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/carrousel.scss";
import "../styles/cardContainer.scss";
import "../styles/navbar.scss";
import "../styles/blogCard.scss";
import "../styles/parallaxContainer.scss";
//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
