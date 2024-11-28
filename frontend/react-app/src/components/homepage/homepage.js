import React from 'react';
import SearchForm from './SearchForm';
import BuildingGrid from './BuildingGrid';
import RoomGrid from './RoomGrid';

const HomePage = () => {
	return (
		<div className="home-page">
			<SearchForm />
			<h3>Buildings</h3>
			<BuildingGrid />
			<h3>Rooms</h3>
			<RoomGrid />
		</div>
	);
};

export default HomePage;
