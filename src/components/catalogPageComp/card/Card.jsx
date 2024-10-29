import React from 'react';
import './card.scss';
import Button from "../panel/button/Button";
import {Link} from "react-router-dom";

const Card = ({name, img, carats, price, description, id}) => {
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
					<Link to={`/catalog/${id}`}>View More</Link>
				</div>
			</div>
	);
};

export default Card;