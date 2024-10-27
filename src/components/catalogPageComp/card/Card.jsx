import React from 'react';
import './card.scss';
import Button from "../panel/button/Button";

const Card = ({name, img, carats, price, description}) => {
	return (
			<div className="card">
				<div className="img">
					<img src={img} alt=""/>
				</div>
				<div className="title">
					<h3>{name}</h3>
					<span>{carats} carats</span>
				</div>
				<p>{description}</p>
				<h4>{price}$</h4>
				<div className="buttonsContainer">
					<Button additionalClass="update">Update</Button>
					<Button additionalClass="delete">Delete</Button>
				</div>
			</div>
	);
};

export default Card;