import React from "react";
import Pic from "./pic";

const Card = () => {
	return (
		<div className="card">
			<Pic />
			<div className="card-body text-center">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
			</div>
			<div className="card-footer text-center">
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};
export default Card;
