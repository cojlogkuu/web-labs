import React from 'react';
import HeroSection from "../homePageComp/heroSection/HeroSection";
import ViewSection from "../homePageComp/viewSection/ViewSection";

const HomePage = () => {
	return (
			<main className="HomePage">
				<HeroSection />
				<ViewSection />
			</main>
	);
};

export default HomePage;