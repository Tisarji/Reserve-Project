"use client";

import Image from "next/image";
import Img from '../../image/homepage/room.png';
import { useState } from "react";
import {
	DoorOpen,
	Users,
	Circle,
	Monitor,
	Wifi,
	ChevronDown,
	ChevronUp,
	Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";

const mockRooms = [
	{
		bname: "A",
		rname: "101",
		capacity: 30,
		type: "Lecture Hall",
		equipment: ["Projector", "Smart Board", "Audio System"],
		available: true,
		class: "Normal"
	},
	{
		bname: "A",
		rname: "102",
		capacity: 20,
		type: "Computer Lab",
		equipment: ["Computers", "Projector", "Printer Access"],
		available: true,
		class: "VIP"
	},
	{
		bname: "B",
		rname: "201",
		capacity: 10,
		type: "Meeting Room",
		equipment: ["Whiteboard", "Conference Phone"],
		available: false,
		class: "Normal"
	},
	{
		bname: "C",
		rname: "301",
		capacity: 40,
		type: "Auditorium",
		equipment: ["Stage", "Audio System", "Lighting Control"],
		available: true,
		class: "VIP"
	},
	{
		bname: "D",
		rname: "401",
		capacity: 25,
		type: "Seminar Room",
		equipment: ["Projector", "Whiteboard"],
		available: true,
		class: "Normal"
	},
	{
		bname: "B",
		rname: "202",
		capacity: 15,
		type: "Group Study",
		equipment: ["Smart TV", "Whiteboard"],
		available: true,
		class: "Normal"
	},
];

const RoomGrid = () => {
	const [filters, setFilters] = useState({
		available: false,
		vip: false,
		normal: false
	});

	const [isFilterVisible, setIsFilterVisible] = useState(false);

	const toggleFilter = () => setIsFilterVisible(!isFilterVisible);

	interface Filters {
		available: boolean;
		vip: boolean;
		normal: boolean;
	}

	type FilterName = keyof Filters;

	const handleFilterChange = (filterName: FilterName): void => {
		setFilters({
			...filters,
			[filterName]: !filters[filterName]
		});
	};

	// Apply filters to rooms
	const filteredRooms = mockRooms.filter(room => {
		if (filters.available && !room.available) return false;
		if (filters.vip && room.class !== "VIP") return false;
		if (filters.normal && room.class !== "Normal") return false;
		return true;
	});

	return (
		<div className="container mx-auto py-16 px-4 bg-gray-50">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
				<div className="flex items-center gap-3 mb-4 sm:mb-0">
					<DoorOpen className="h-6 w-6 text-indigo-600" />
					<h2 className="text-2xl font-bold text-gray-800">Available Rooms</h2>
				</div>

				<div className="relative">
					<Button
						onClick={toggleFilter}
						variant="outline"
						className="flex items-center gap-2 border-indigo-200 text-indigo-700"
					>
						<Filter className="h-4 w-4" />
						Filters
						{isFilterVisible ?
							<ChevronUp className="h-4 w-4" /> :
							<ChevronDown className="h-4 w-4" />
						}
					</Button>

					{isFilterVisible && (
						<div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4 z-10 w-64">
							<div className="space-y-3">
								<label className="flex items-center space-x-2 cursor-pointer">
									<input
										type="checkbox"
										checked={filters.available}
										onChange={() => handleFilterChange('available')}
										className="rounded text-indigo-600 focus:ring-indigo-500"
									/>
									<span>Available Now</span>
								</label>

								<label className="flex items-center space-x-2 cursor-pointer">
									<input
										type="checkbox"
										checked={filters.vip}
										onChange={() => handleFilterChange('vip')}
										className="rounded text-indigo-600 focus:ring-indigo-500"
									/>
									<span>VIP Rooms</span>
								</label>

								<label className="flex items-center space-x-2 cursor-pointer">
									<input
										type="checkbox"
										checked={filters.normal}
										onChange={() => handleFilterChange('normal')}
										className="rounded text-indigo-600 focus:ring-indigo-500"
									/>
									<span>Normal Rooms</span>
								</label>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{filteredRooms.map((room, index) => (
					<div
						key={index}
						className={`bg-white rounded-xl overflow-hidden shadow border ${room.available ? 'border-green-100' : 'border-red-100'
							} hover:shadow-lg transition duration-300`}
						onClick={() => room.available && (window.location.href = `/booking/${room.bname}/${room.rname}`)}
					>
						<div className="relative">
							<Image
								src={Img}
								alt={`Room ${room.rname}`}
								width={400}
								height={250}
								className="w-full h-48 object-cover"
							/>

							<div className="absolute top-0 left-0 bg-indigo-600 text-white py-1 px-3 rounded-br-lg">
								{room.bname}-{room.rname}
							</div>

							<div className={`absolute top-0 right-0 ${room.class === "VIP" ? "bg-yellow-500" : "bg-blue-500"
								} text-white py-1 px-3 rounded-bl-lg`}>
								{room.class}
							</div>

							<div className={`absolute bottom-0 right-0 ${room.available ? "bg-green-500" : "bg-red-500"
								} text-white py-1 px-3 rounded-tl-lg text-sm font-medium`}>
								{room.available ? "Available" : "Occupied"}
							</div>
						</div>

						<div className="p-4">
							<h3 className="font-semibold text-lg mb-1">{room.type}</h3>

							<div className="flex items-center gap-1 text-gray-600 mb-3">
								<Users className="h-4 w-4" />
								<span className="text-sm">Capacity: {room.capacity}</span>
							</div>

							<div className="flex flex-wrap gap-2 mb-4">
								{room.equipment.map((item, i) => (
									<span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
										{item.includes("Projector") && <Monitor className="h-3 w-3" />}
										{item.includes("Wifi") && <Wifi className="h-3 w-3" />}
										{!item.includes("Projector") && !item.includes("Wifi") && <Circle className="h-3 w-3" />}
										{item}
									</span>
								))}
							</div>

							<button
								className={`w-full py-2 rounded-lg transition duration-300 ${room.available
										? "bg-indigo-600 hover:bg-indigo-700 text-white"
										: "bg-gray-200 text-gray-500 cursor-not-allowed"
									}`}
								disabled={!room.available}
							>
								{room.available ? "Book Now" : "Unavailable"}
							</button>
						</div>
					</div>
				))}
			</div>

			{filteredRooms.length === 0 && (
				<div className="text-center py-16">
					<p className="text-gray-500 text-lg">No rooms match your filter criteria</p>
					<button
						onClick={() => setFilters({ available: false, vip: false, normal: false })}
						className="mt-4 text-indigo-600 hover:text-indigo-800"
					>
						Clear all filters
					</button>
				</div>
			)}
		</div>
	);
};

export default RoomGrid;
