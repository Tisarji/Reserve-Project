"use client";

import Image from "next/image";
import buildingImg from '../../image/homepage/building.png';
import { Building, MapPin, Users, Clock } from "lucide-react";

const mockBuildings = [
	{
		bname: "MII",
		description: "Engineering Faculty",
		floors: 5,
		roomCount: 24,
		openHours: "7:00 - 20:00"
	},
	{
		bname: "MIIX",
		description: "Science Department",
		floors: 4,
		roomCount: 18,
		openHours: "7:00 - 19:00"
	},
	{
		bname: "D",
		description: "Business School",
		floors: 6,
		roomCount: 30,
		openHours: "8:00 - 21:00"
	},
	{
		bname: "F",
		description: "Library & Study Areas",
		floors: 3,
		roomCount: 12,
		openHours: "9:00 - 22:00"
	},
];

const BuildingGrid = () => {
	return (
		<div className="container mx-auto py-16 px-4">
			<div className="flex items-center gap-3 mb-8">
				<Building className="h-6 w-6" style={{ color: '#2a80fe' }} />
				<h2 className="text-2xl font-bold text-gray-800">Campus Buildings</h2>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{mockBuildings.map((building, index) => (
					<div
						key={index}
						className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 cursor-pointer group"
						onClick={() => (window.location.href = `/building/${building.bname.toLowerCase()}`)}
					>
						<div className="relative">
							<Image
								src={buildingImg}
								alt={`Building ${building.bname}`}
								width={600}
								height={400}
								className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
							/>
							<div className="absolute top-0 right-0 font-bold text-xl py-2 px-4 rounded-bl-lg text-white" style={{ backgroundColor: '#2a80fe' }}>
								{building.bname}
							</div>
						</div>

						<div className="p-5">
							<h3 className="text-lg font-semibold mb-2">{building.description}</h3>

							<div className="space-y-2 text-sm text-gray-600">
								<div className="flex items-center gap-2">
									<MapPin className="h-4 w-4" style={{ color: '#2a80fe' }} />
									<span>{building.floors} Floors</span>
								</div>

								<div className="flex items-center gap-2">
									<Users className="h-4 w-4" style={{ color: '#2a80fe' }} />
									<span>{building.roomCount} Rooms Available</span>
								</div>

								<div className="flex items-center gap-2">
									<Clock className="h-4 w-4" style={{ color: '#2a80fe' }} />
									<span>{building.openHours}</span>
								</div>
							</div>

							<button
								className="w-full mt-4 font-medium py-2 rounded-lg transition duration-300"
								style={{ backgroundColor: '#e5f0ff', color: '#2a80fe' }}
								onMouseOver={(e) => {
									e.currentTarget.style.backgroundColor = '#d3e5ff';
								}}
								onMouseOut={(e) => {
									e.currentTarget.style.backgroundColor = '#e5f0ff';
								}}
							>
								View Rooms
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BuildingGrid;
