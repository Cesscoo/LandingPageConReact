import React from "react";
import Nav from "./Navbar/nav.jsx"
import Card from "./Card/card.jsx"
import Rights from "./Rights/rights.jsx"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div>
			<Nav></Nav>
			<Card></Card>
			<Rights></Rights>
		</div>
	);
};

export default Home;
