import React from 'react';
import {NavLink} from "react-router-dom";
import './header.scss';

const Header = () => {
	return (
			<header>
				<div className="container">
					<h1 className="logo">
						<NavLink to='/' className="logo">S-Shop</NavLink>
					</h1>
					<nav className="nav">
						<NavLink
								to='/'
								className={({isActive}) => isActive ? 'link active' : 'link'}
						>
							Home
						</NavLink>
						<a href="#" className="link">Catalog</a>
						<a href="#" className="link">About</a>
						<a href="#" className="link">Contact</a>
					</nav>
					<div className="icons">
						<img src="../../../assets/imgs/search-normal.png" alt="not visable"/>
						<img src="../../../assets/icons/basket.svg" alt="not visable"/>
					</div>
				</div>
			</header>
	);
};

export default Header;