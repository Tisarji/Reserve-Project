import React from 'react';
import buildingImg from '../../assets/homepage/building.png';

const buildings = [
	{ name: 'Building Code:Chicken', img: buildingImg },
	{ name: 'Building D', img: buildingImg },
	{ name: 'Building T-ONE', img: buildingImg },
	{ name: 'Building SQUARE', img: buildingImg },
	{ name: 'Building F', img: buildingImg },
	{ name: 'Building MII', img: buildingImg },
	{ name: 'Building MIIX', img: buildingImg },
	{ name: 'Building K', img: buildingImg },
];

const BuildingGrid = () => {
	return (
		<div className="building-grid">
			{buildings.map((building, index) => (
				<div key={index} className="building-card">
					<img src={building.img} alt={building.name} />
					<h3>{building.name}</h3>
				</div>
			))}
		</div>
	);
};

export default BuildingGrid;
