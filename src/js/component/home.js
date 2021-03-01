import React from "react";

import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron";
import CardsContainer from "./cardscontainer";
import Footer from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<CardsContainer />
			</div>
			<Footer />
		</div>
	);
}
