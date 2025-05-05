'use client';
import React, { useState } from 'react';
import RoomCard from '@/components/roomcard/RoomCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Building, Users } from 'lucide-react';

const mockRooms = [
	{
		rnumber: '101',
		rname: 'K102',
		bname: 'Building K',
		flname: '2nd Floor',
		sname: 'Status A',
		capacity: 20,
		vip: 0,
	},
	{
		rnumber: '102',
		rname: 'K201',
		bname: 'Building K',
		flname: '2nd Floor',
		sname: 'Status B',
		capacity: 30,
		vip: 1,
	},
	{
		rnumber: '103',
		rname: 'A101',
		bname: 'Building A',
		flname: '1st Floor',
		sname: 'Status A',
		capacity: 15,
		vip: 0,
	},
	{
		rnumber: '104',
		rname: 'A205',
		bname: 'Building A',
		flname: '2nd Floor',
		sname: 'Status B',
		capacity: 25,
		vip: 1,
	},
	{
		rnumber: '105',
		rname: 'B301',
		bname: 'Building B',
		flname: '3rd Floor',
		sname: 'Status A',
		capacity: 10,
		vip: 0,
	},
	{
		rnumber: '106',
		rname: 'B202',
		bname: 'Building B',
		flname: '2nd Floor',
		sname: 'Status C',
		capacity: 40,
		vip: 1,
	},
];

const ReservePage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [buildingFilter, setBuildingFilter] = useState('all');
	const [capacityFilter, setCapacityFilter] = useState('any');

	const filteredRooms = mockRooms.filter(room => {
		const matchesSearch =
			`${room.bname} ${room.rname}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
			room.flname.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesBuilding = buildingFilter !== 'all' ? room.bname === buildingFilter : true;

		const matchesCapacity = capacityFilter !== 'any' ?
			(capacityFilter === '<15' && room.capacity < 15) ||
			(capacityFilter === '15-25' && room.capacity >= 15 && room.capacity <= 25) ||
			(capacityFilter === '>25' && room.capacity > 25) : true;


		return matchesSearch && matchesBuilding && matchesCapacity;
	});

	const buildings = [...new Set(mockRooms.map(room => room.bname))];

	return (
		<div className="p-6 max-w-7xl mx-auto">
			<div className="bg-white rounded-lg shadow-md p-6 mb-8">
				<h1 className="text-3xl font-bold mb-6">Available Meeting Rooms</h1>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
					<div className="relative">
						<Search className="absolute left-3 top-3 text-gray-400" size={18} />
						<Input
							placeholder="Search rooms..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-10"
						/>
					</div>

					<div className="flex items-center space-x-2">
						<Building size={18} className="text-gray-500" />
						<Select value={buildingFilter} onValueChange={setBuildingFilter}>
							<SelectTrigger>
								<SelectValue placeholder="Filter by building" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Buildings</SelectItem>
								{buildings.map(building => (
									<SelectItem key={building} value={building}>{building}</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className="flex items-center space-x-2">
						<Users size={18} className="text-gray-500" />
						<Select value={capacityFilter} onValueChange={setCapacityFilter}>
							<SelectTrigger>
								<SelectValue placeholder="Filter by capacity" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="any">Any Capacity</SelectItem>
								<SelectItem value="<15">Less than 15</SelectItem>
								<SelectItem value="15-25">15 to 25</SelectItem>
								<SelectItem value=">25">More than 25</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>

			{filteredRooms.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredRooms.map((room, i) => (
						<RoomCard key={i} room={room} />
					))}
				</div>
			) : (
				<div className="text-center p-12 bg-white rounded-lg shadow-md">
					<h3 className="text-xl font-medium text-gray-600">No matching rooms found</h3>
					<p className="text-gray-500 mt-2">Try adjusting your search filters</p>
				</div>
			)}
		</div>
	);
};

export default ReservePage;
