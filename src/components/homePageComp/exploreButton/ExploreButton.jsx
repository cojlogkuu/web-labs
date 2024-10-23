import React from 'react';
import './exploreButton.scss';

const ExploreButton = ({additionalClass}) => {
	return (
			<button className={`explore ${additionalClass}`}>
				<span>Explore</span>
			</button>
	);
};

export default ExploreButton;