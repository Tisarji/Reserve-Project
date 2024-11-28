import React from 'react';
import '../styles/SearchForm.css';
import backgroundImage from '../../assets/homepage/background.png';

const SearchCard = () => {
	return (
		<div className="search-card">
			<h1>MUT - Mahanakorn University of Technology</h1>
			<div className="search-form">
				<input type="text" placeholder="Choose your room" />
				<div className="search-options">
					<input type="date" placeholder="Start date" />
					<input type="time" placeholder="Start time" />
					<input type="time" placeholder="End time" />
					<input type="number" placeholder="Room capacity" />
					<input type="text" placeholder="Class" />
				</div>
				<button>Find</button>
			</div>
		</div>
	);
};

const SearchForm = () => {
	return (
		<div className="room-search-page">
			<SearchCard />
		</div>
	);
};

export default SearchForm;
