import React from 'react'
import './footer.scss';
import twitter from '../../../assets/icons/twitter.svg';
import tumblr from '../../../assets/icons/tumblr.svg';
import linkedin from '../../../assets/icons/linkedln.svg';

const Footer = () => {
	return (
			<footer className="footer">
				<div className="container">
					<span>Copyright 2021 j-shop.com,All rights reserved</span>
					<nav>
						<a href="#"><img src={twitter} alt=""/></a>
						<a href="#"><img src={tumblr} alt=""/></a>
						<a href="#"><img src={linkedin} alt=""/></a>
					</nav>
				</div>
			</footer>
	);
};

export default Footer;