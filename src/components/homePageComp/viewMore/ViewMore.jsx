import React from 'react';
import './viewMore.scss';

const ViewMore = ({onClick, additionalClass = ''}) => {
	return (
			<button
					className={`viewMore ${additionalClass}`}
					onClick={onClick}
			>
				<span>View more</span>
			</button>
	);
};

export default ViewMore;