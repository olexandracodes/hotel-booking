import React from "react";
import Header from "../components/Header";
import DatePickerSection from "../components/DatePickerSection";
import HeroSection from "../components/HeroSection";
import RoomGrid from "../components/RoomGrid";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div>
			<Header />
			<DatePickerSection />
			<HeroSection />
			<RoomGrid />
			<Footer />
		</div>
	);
};

export default Home;
