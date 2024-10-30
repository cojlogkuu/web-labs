import React from 'react';
import './card.scss';
import NavButton from "../panel/navButton/NavButton";

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
				<NavButton additionalClass="viewMore" to={`/catalog/${id}`}>View more</NavButton>
			</div>
	);
};

export default Card;