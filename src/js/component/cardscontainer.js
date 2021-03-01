import React from "react";
import Card from "./card";

const CardsContainer = () => {
	return (
		<div className="row mb-4">
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
		</div>
	);
};

export default CardsContainer;
