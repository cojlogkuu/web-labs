import React from 'react';
import {Link} from "react-router-dom";
import './navButton.scss';

const NavButton = ({to, children, additionalClass=''}) => {
	return (
		<Link className={`navButton ${additionalClass}`} to={to}>
			{children}
		</Link>
	);
};

export default NavButton;