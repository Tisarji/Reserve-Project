import React from 'react';
import roomImg from '../../assets/homepage/room.png';

const rooms = [
	{ name: 'Building D', room: 'D504', img: roomImg },
	{ name: 'Building F', room: 'F303', img: roomImg },
	{ name: 'Building K', room: 'K102', img: roomImg },
	{ name: 'Building MII', room: 'MII208', img: roomImg },
	{ name: 'Building Code:Chicken', room: 'CC810', img: roomImg },
	{ name: 'Building T-ONE', room: 'T709', img: roomImg },
	{ name: 'Building SQUARE', room: 'S106', img: roomImg },
	{ name: 'Building MIIX', room: 'MIIX302', img: roomImg },
];

const RoomGrid = () => {
	return (
		<div className="room-grid">
			{rooms.map((room, index) => (
				<div key={index} className="room-card">
					<img src={room.img} alt={`${room.name} ${room.room}`} />
					<h3>{room.name} {room.room}</h3>
				</div>
			))}
		</div>
	);
};

export default RoomGrid;
