import React from 'react';
import './HeroSection.scss';
import stones from '../../../assets/imgs/hero1-removebg-preview.png';
import jewelery from '../../../assets/imgs/hero2-removebg-preview.png';
import ExploreButton from "../exploreButton/ExploreButton";

const HeroSection = () => {
	return (
			<section className="hero">
				<div className="container">
					<div className="first">
						<img src={stones} alt=""/>
						<h1>Stones tells a freat story</h1>
					</div>
					<div className="second">
						<h2>Our story</h2>
						<p>Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi molestie at amet praesent tortor. Maecenas non
							tempus at consequat ac est varius. Tortor aliquet nulla consequat risus.</p>
						<img src={jewelery} alt=""/>
					</div>
					<ExploreButton additionalClass='hero__explore' />
				</div>
			</section>
	);
};

export default HeroSection;