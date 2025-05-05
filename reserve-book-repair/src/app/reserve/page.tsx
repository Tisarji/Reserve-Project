'use client';

import React, { useState, useEffect } from 'react';
import RoomCard from '@/components/roomcard/RoomCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
	Search,
	Building,
	Users,
	Calendar,
	Filter,
	ChevronDown,
	ArrowUpDown,
	Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockRooms = [
	{
		rnumber: '101',
		rname: 'K102',
		bname: 'Building K',
		flname: '2nd Floor',
		sname: 'Available',
		capacity: 20,
		vip: 0,
		amenities: ['Projector', 'Whiteboard', 'Video Conference']
	},
	{
		rnumber: '102',
		rname: 'K201',
		bname: 'Building K',
		flname: '2nd Floor',
		sname: 'Occupied',
		capacity: 30,
		vip: 1,
		amenities: ['Projector', 'Video Conference', 'Catering Service']
	},
	{
		rnumber: '103',
		rname: 'A101',
		bname: 'Building A',
		flname: '1st Floor',
		sname: 'Available',
		capacity: 15,
		vip: 0,
		amenities: ['Whiteboard', 'Coffee Machine']
	},
	{
		rnumber: '104',
		rname: 'A205',
		bname: 'Building A',
		flname: '2nd Floor',
		sname: 'Maintenance',
		capacity: 25,
		vip: 1,
		amenities: ['Projector', 'Whiteboard', 'Video Conference', 'Smart TV']
	},
	{
		rnumber: '105',
		rname: 'B301',
		bname: 'Building B',
		flname: '3rd Floor',
		sname: 'Available',
		capacity: 10,
		vip: 0,
		amenities: ['Whiteboard']
	},
	{
		rnumber: '106',
		rname: 'B202',
		bname: 'Building B',
		flname: '2nd Floor',
		sname: 'Reserved',
		capacity: 40,
		vip: 1,
		amenities: ['Projector', 'Video Conference', 'Catering Service', 'Smart TV']
	},
];

const ReservePage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [buildingFilter, setBuildingFilter] = useState('all');
	const [capacityFilter, setCapacityFilter] = useState('any');
	const [statusFilter, setStatusFilter] = useState('all');
	const [vipFilter, setVipFilter] = useState('all');
	const [sortBy, setSortBy] = useState('name');
	const [sortDirection, setSortDirection] = useState('asc');
	const [showFilters, setShowFilters] = useState(false);
	const [activeTab, setActiveTab] = useState('all');

	const buildings = [...new Set(mockRooms.map(room => room.bname))];
	const statuses = [...new Set(mockRooms.map(room => room.sname))];

	const handleSort = (field: SortBy): void => {
		if (sortBy === field) {
			setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
		} else {
			setSortBy(field);
			setSortDirection('asc');
		}
	};

	interface Room {
		rnumber: string;
		rname: string;
		bname: string;
		flname: string;
		sname: string;
		capacity: number;
		vip: number;
		amenities: string[];
	}

	type SortBy = 'name' | 'capacity' | 'building';
	type SortDirection = 'asc' | 'desc';

	const sortRooms = (rooms: Room[]): Room[] => {
		return [...rooms].sort((a, b) => {
			let valueA: string | number, valueB: string | number;

			switch (sortBy) {
				case 'name':
					valueA = `${a.bname} ${a.rname}`;
					valueB = `${b.bname} ${b.rname}`;
					break;
				case 'capacity':
					valueA = a.capacity;
					valueB = b.capacity;
					break;
				case 'building':
					valueA = a.bname;
					valueB = b.bname;
					break;
				default:
					valueA = a.rname;
					valueB = b.rname;
			}

			if (sortDirection === 'asc') {
				return valueA > valueB ? 1 : -1;
			} else {
				return valueA < valueB ? 1 : -1;
			}
		});
	};

	const filteredRooms = mockRooms.filter(room => {
		const matchesSearch =
			`${room.bname} ${room.rname}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
			room.flname.toLowerCase().includes(searchTerm.toLowerCase()) ||
			(room.amenities && room.amenities.some(amenity =>
				amenity.toLowerCase().includes(searchTerm.toLowerCase())
			));

		const matchesBuilding = buildingFilter !== 'all' ? room.bname === buildingFilter : true;

		const matchesCapacity = capacityFilter !== 'any' ?
			(capacityFilter === '<15' && room.capacity < 15) ||
			(capacityFilter === '15-25' && room.capacity >= 15 && room.capacity <= 25) ||
			(capacityFilter === '>25' && room.capacity > 25) : true;

		const matchesStatus = statusFilter !== 'all' ? room.sname === statusFilter : true;

		const matchesVip = vipFilter !== 'all' ?
			(vipFilter === 'vip' && room.vip === 1) ||
			(vipFilter === 'standard' && room.vip === 0) : true;

		const matchesTab = activeTab === 'all' ||
			(activeTab === 'available' && room.sname === 'Available') ||
			(activeTab === 'vip' && room.vip === 1);

		return matchesSearch && matchesBuilding && matchesCapacity && matchesStatus && matchesVip && matchesTab;
	});

	const sortedRooms = sortRooms(filteredRooms);

	// Reset page to top when filters change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [activeTab, buildingFilter, capacityFilter, statusFilter, vipFilter]);

	return (
		<div className="bg-gray-50 min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="bg-white rounded-xl shadow-md p-6 mb-8">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
						<h1 className="text-3xl font-bold text-gray-800 flex items-center">
							<Calendar className="mr-3 text-blue-600 hidden sm:block" size={28} />
							Meeting Room Reservation
						</h1>
						<Tabs
							defaultValue="all"
							value={activeTab}
							onValueChange={setActiveTab}
							className="mt-4 md:mt-0"
						>
							<TabsList className="grid grid-cols-3 w-[300px]">
								<TabsTrigger value="all">All Rooms</TabsTrigger>
								<TabsTrigger value="available">Available</TabsTrigger>
								<TabsTrigger value="vip">VIP</TabsTrigger>
							</TabsList>
						</Tabs>
					</div>

					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
						<div className="relative w-full sm:w-96 mb-4 sm:mb-0">
							<Search className="absolute left-3 top-3 text-gray-400" size={18} />
							<Input
								placeholder="Search by name, location, amenities..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
							/>
						</div>
						<div className="flex items-center space-x-2">
							<Button
								variant="outline"
								className="flex items-center text-gray-700 border-gray-300"
								onClick={() => setShowFilters(!showFilters)}
							>
								<Filter size={16} className="mr-2 text-gray-500" />
								Filters
								<ChevronDown size={16} className="ml-2 text-gray-500" />
							</Button>

							<Button
								variant="outline"
								className="flex items-center text-gray-700 border-gray-300"
								onClick={() => handleSort(sortBy === 'capacity' ? 'name' : 'capacity')}
							>
								<ArrowUpDown size={16} className="mr-2 text-gray-500" />
								Sort by {sortBy === 'capacity' ? 'Capacity' : 'Name'}
							</Button>
						</div>
					</div>

					{showFilters && (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 p-4 bg-gray-50 rounded-lg">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Building</label>
								<Select value={buildingFilter} onValueChange={setBuildingFilter}>
									<SelectTrigger className="w-full">
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

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
								<Select value={capacityFilter} onValueChange={setCapacityFilter}>
									<SelectTrigger className="w-full">
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

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
								<Select value={statusFilter} onValueChange={setStatusFilter}>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Filter by status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">All Statuses</SelectItem>
										{statuses.map(status => (
											<SelectItem key={status} value={status}>{status}</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
								<Select value={vipFilter} onValueChange={setVipFilter}>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Filter by type" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">All Types</SelectItem>
										<SelectItem value="standard">Standard</SelectItem>
										<SelectItem value="vip">VIP</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					)}
				</div>

				{sortedRooms.length > 0 ? (
					<div>
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-lg font-semibold text-gray-700">
								Found {sortedRooms.length} {sortedRooms.length === 1 ? 'room' : 'rooms'}
							</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{sortedRooms.map((room, i) => (
								<RoomCard key={i} room={room} />
							))}
						</div>
					</div>
				) : (
					<div className="text-center p-12 bg-white rounded-xl shadow-md">
						<div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 mb-4">
							<Search size={24} className="text-gray-400" />
						</div>
						<h3 className="text-xl font-medium text-gray-800">No matching rooms found</h3>
						<p className="text-gray-500 mt-2 max-w-md mx-auto">
							Try adjusting your search filters or try a different search term
						</p>
						<Button
							variant="outline"
							className="mt-4"
							onClick={() => {
								setSearchTerm('');
								setBuildingFilter('all');
								setCapacityFilter('any');
								setStatusFilter('all');
								setVipFilter('all');
								setActiveTab('all');
							}}
						>
							Reset all filters
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default ReservePage;
