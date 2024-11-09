import React from 'react';
import './exploreButton.scss';
import {NavLink} from "react-router-dom";

const ExploreButton = ({additionalClass}) => {
	return (
			<NavLink to='catalog' className={`explore ${additionalClass}`}>
				Explore
			</NavLink>
	);
};

export default ExploreButton;