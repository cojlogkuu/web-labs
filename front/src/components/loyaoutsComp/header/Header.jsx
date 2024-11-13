import React from 'react';
import {NavLink} from "react-router-dom";
import './header.scss';
import Search from '../../../assets/icons/search.svg';
import Basket from '../../../assets/icons/basket.svg';

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
						<NavLink
								to='catalog'
								end
								className={({isActive}) => isActive ? 'link active' : 'link'}
						>
							Catalog
						</NavLink>
						<NavLink
							to='cart'
							className={({isActive}) => isActive ? 'link active' : 'link'}
						>
							Cart
						</NavLink>
					</nav>
					<div className="icons">
						<img src={Search} alt="not visable"/>
						<img src={Basket} alt="not visable"/>
					</div>
				</div>
			</header>
	);
};

export default Header;