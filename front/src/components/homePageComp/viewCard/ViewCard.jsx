import React from 'react';
import './viewCard.scss';

const ViewCard = ({name, children, img, carats}) => {
	return (
			<div className="viewCard">
				<div className="img">
					<img src={img} />
				</div>
				<div className="title">
					<h2>{name}</h2>
					<span>{+carats} carats</span>
				</div>
				<p>{children}</p>
			</div>
	);
};

export default ViewCard;