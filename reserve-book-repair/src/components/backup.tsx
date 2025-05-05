// components/roomcard/RoomCard.tsx
// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { CalendarDays, Users, ArrowRight } from 'lucide-react';

// interface Room {
// 	rnumber: string;
// 	rname: string;
// 	bname: string;
// 	flname: string;
// 	sname: string;
// 	capacity: number;
// 	vip: number;
// }

// interface Props {
// 	room: Room;
// }

// const RoomCard: React.FC<Props> = ({ room }) => {
// 	const router = useRouter();

// 	const handleBookingRedirect = () => {
// 		const encoded = encodeURIComponent(JSON.stringify(room));
// 		router.push(`/booking?room=${encoded}`);
// 	};

// 	return (
// 		<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
// 			<div className="relative w-full h-48">
// 				<Image
// 					src="/api/placeholder/800/600"
// 					alt={room.rname}
// 					fill
// 					className="object-cover"
// 					priority
// 				/>
// 				<div className="absolute top-3 right-3">
// 					{room.vip === 1 ? (
// 						<Badge className="bg-amber-500 hover:bg-amber-600">VIP</Badge>
// 					) : (
// 						<Badge className="bg-blue-500 hover:bg-blue-600">Standard</Badge>
// 					)}
// 				</div>
// 			</div>

// 			<div className="p-5">
// 				<h3 className="text-xl font-bold mb-2">{`${room.bname} ${room.rname}`}</h3>

// 				<div className="space-y-2 mb-4">
// 					<div className="flex items-center text-gray-600">
// 						<Users size={18} className="mr-2" />
// 						<span>Capacity: {room.capacity} people</span>
// 					</div>
// 					<div className="flex items-center text-gray-600">
// 						<CalendarDays size={18} className="mr-2" />
// 						<span>{room.flname}</span>
// 					</div>
// 				</div>

// 				<Button
// 					onClick={handleBookingRedirect}
// 					className="w-full flex items-center justify-center gap-2 mt-2"
// 				>
// 					Book Room <ArrowRight size={16} />
// 				</Button>
// 			</div>
// 		</div>
// 	);
// };

// export default RoomCard;

// reserve/page.tsx
// 'use client';
// import React, { useState } from 'react';
// import RoomCard from '@/components/roomcard/RoomCard';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Search, Building, Users } from 'lucide-react';

// const mockRooms = [
// 	{
// 		rnumber: '101',
// 		rname: 'K102',
// 		bname: 'Building K',
// 		flname: '2nd Floor',
// 		sname: 'Status A',
// 		capacity: 20,
// 		vip: 0,
// 	},
// 	{
// 		rnumber: '102',
// 		rname: 'K201',
// 		bname: 'Building K',
// 		flname: '2nd Floor',
// 		sname: 'Status B',
// 		capacity: 30,
// 		vip: 1,
// 	},
// 	{
// 		rnumber: '103',
// 		rname: 'A101',
// 		bname: 'Building A',
// 		flname: '1st Floor',
// 		sname: 'Status A',
// 		capacity: 15,
// 		vip: 0,
// 	},
// 	{
// 		rnumber: '104',
// 		rname: 'A205',
// 		bname: 'Building A',
// 		flname: '2nd Floor',
// 		sname: 'Status B',
// 		capacity: 25,
// 		vip: 1,
// 	},
// 	{
// 		rnumber: '105',
// 		rname: 'B301',
// 		bname: 'Building B',
// 		flname: '3rd Floor',
// 		sname: 'Status A',
// 		capacity: 10,
// 		vip: 0,
// 	},
// 	{
// 		rnumber: '106',
// 		rname: 'B202',
// 		bname: 'Building B',
// 		flname: '2nd Floor',
// 		sname: 'Status C',
// 		capacity: 40,
// 		vip: 1,
// 	},
// ];

// const ReservePage = () => {
// 	const [searchTerm, setSearchTerm] = useState('');
// 	const [buildingFilter, setBuildingFilter] = useState('');
// 	const [capacityFilter, setCapacityFilter] = useState('');

// 	const filteredRooms = mockRooms.filter(room => {
// 		const matchesSearch =
// 			`${room.bname} ${room.rname}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// 			room.flname.toLowerCase().includes(searchTerm.toLowerCase());

// 		const matchesBuilding = buildingFilter ? room.bname === buildingFilter : true;

// 		const matchesCapacity = capacityFilter ?
// 			(capacityFilter === '<15' && room.capacity < 15) ||
// 			(capacityFilter === '15-25' && room.capacity >= 15 && room.capacity <= 25) ||
// 			(capacityFilter === '>25' && room.capacity > 25) : true;

// 		return matchesSearch && matchesBuilding && matchesCapacity;
// 	});

// 	const buildings = [...new Set(mockRooms.map(room => room.bname))];

// 	return (
// 		<div className="p-6 max-w-7xl mx-auto">
// 			<div className="bg-white rounded-lg shadow-md p-6 mb-8">
// 				<h1 className="text-3xl font-bold mb-6">Available Meeting Rooms</h1>

// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// 					<div className="relative">
// 						<Search className="absolute left-3 top-3 text-gray-400" size={18} />
// 						<Input
// 							placeholder="Search rooms..."
// 							value={searchTerm}
// 							onChange={(e) => setSearchTerm(e.target.value)}
// 							className="pl-10"
// 						/>
// 					</div>

// 					<div className="flex items-center space-x-2">
// 						<Building size={18} className="text-gray-500" />
// 						<Select value={buildingFilter} onValueChange={setBuildingFilter}>
// 							<SelectTrigger>
// 								<SelectValue placeholder="Filter by building" />
// 							</SelectTrigger>
// 							<SelectContent>
// 								<SelectItem value="">All Buildings</SelectItem>
// 								{buildings.map(building => (
// 									<SelectItem key={building} value={building}>{building}</SelectItem>
// 								))}
// 							</SelectContent>
// 						</Select>
// 					</div>

// 					<div className="flex items-center space-x-2">
// 						<Users size={18} className="text-gray-500" />
// 						<Select value={capacityFilter} onValueChange={setCapacityFilter}>
// 							<SelectTrigger>
// 								<SelectValue placeholder="Filter by capacity" />
// 							</SelectTrigger>
// 							<SelectContent>
// 								<SelectItem value="">Any Capacity</SelectItem>
// 								<SelectItem value="<15">Less than 15</SelectItem>
// 								<SelectItem value="15-25">15 to 25</SelectItem>
// 								<SelectItem value=">25">More than 25</SelectItem>
// 							</SelectContent>
// 						</Select>
// 					</div>
// 				</div>
// 			</div>

// 			{filteredRooms.length > 0 ? (
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// 					{filteredRooms.map((room, i) => (
// 						<RoomCard key={i} room={room} />
// 					))}
// 				</div>
// 			) : (
// 				<div className="text-center p-12 bg-white rounded-lg shadow-md">
// 					<h3 className="text-xl font-medium text-gray-600">No matching rooms found</h3>
// 					<p className="text-gray-500 mt-2">Try adjusting your search filters</p>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default ReservePage;

// components/bookinglist/BookingList.tsx
// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { CalendarDays, Clock, Trash2, Building, Users, AlertCircle } from 'lucide-react';
// import {
// 	AlertDialog,
// 	AlertDialogTrigger,
// 	AlertDialogContent,
// 	AlertDialogHeader,
// 	AlertDialogTitle,
// 	AlertDialogDescription,
// 	AlertDialogFooter,
// 	AlertDialogCancel,
// 	AlertDialogAction,
// } from '@/components/ui/alert-dialog';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// interface Booking {
// 	id: number;
// 	building: string;
// 	room: string;
// 	capacity: number;
// 	vip: boolean;
// 	image: any;
// 	date: string;
// 	time: string;
// 	status: 'approved' | 'pending' | 'rejected';
// }

// const BookingList = () => {
// 	const [bookings, setBookings] = useState<Booking[]>([
// 		{
// 			id: 1,
// 			building: 'Building K',
// 			room: 'K102',
// 			capacity: 20,
// 			vip: false,
// 			image: '/api/placeholder/800/600',
// 			date: '17 September 2024',
// 			time: '09:00 - 12:00',
// 			status: 'approved'
// 		},
// 		{
// 			id: 2,
// 			building: 'Building A',
// 			room: 'A205',
// 			capacity: 25,
// 			vip: true,
// 			image: '/api/placeholder/800/600',
// 			date: '24 September 2024',
// 			time: '13:00 - 15:00',
// 			status: 'pending'
// 		},
// 	]);

// 	const removeBooking = (id: number) => {
// 		setBookings(prev => prev.filter(b => b.id !== id));
// 	};

// 	const getStatusBadge = (status: string) => {
// 		switch (status) {
// 			case 'approved':
// 				return <Badge className="bg-green-500 hover:bg-green-600">Approved</Badge>;
// 			case 'pending':
// 				return <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>;
// 			case 'rejected':
// 				return <Badge className="bg-red-500 hover:bg-red-600">Rejected</Badge>;
// 			default:
// 				return null;
// 		}
// 	};

// 	return (
// 		<div className="max-w-5xl mx-auto p-8">
// 			<div className="bg-white rounded-lg shadow-md p-6 mb-6">
// 				<h1 className="text-3xl font-bold mb-2">My Bookings</h1>
// 				<p className="text-gray-500 mb-6">Manage your room reservations</p>

// 				{bookings.length === 0 ? (
// 					<div className="text-center py-16 bg-gray-50 rounded-lg">
// 						<AlertCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
// 						<h3 className="text-xl font-medium text-gray-600">No bookings yet</h3>
// 						<p className="text-gray-500 mt-2 mb-6">Your booked rooms will appear here</p>
// 						<Button
// 							onClick={() => window.location.href = '/reserve'}
// 							className="mt-2"
// 						>
// 							Browse Available Rooms
// 						</Button>
// 					</div>
// 				) : (
// 					<div className="space-y-6">
// 						{bookings.map((booking) => (
// 							<div key={booking.id} className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
// 								<div className="w-full md:w-1/4 h-48 md:h-auto relative">
// 									<Image
// 										src={booking.image}
// 										alt="Room"
// 										fill
// 										className="object-cover"
// 									/>
// 								</div>

// 								<div className="flex-1 p-6">
// 									<div className="flex justify-between items-start">
// 										<div>
// 											<h3 className="text-xl font-bold mb-2">{`${booking.building} ${booking.room}`}</h3>
// 											{booking.vip && <Badge className="bg-amber-500 mb-3">VIP Room</Badge>}
// 										</div>
// 										{getStatusBadge(booking.status)}
// 									</div>

// 									<div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 mt-4">
// 										<div className="flex items-center">
// 											<Building size={18} className="text-gray-500 mr-2" />
// 											<span>{booking.building}</span>
// 										</div>
// 										<div className="flex items-center">
// 											<Users size={18} className="text-gray-500 mr-2" />
// 											<span>Capacity: {booking.capacity}</span>
// 										</div>
// 										<div className="flex items-center">
// 											<CalendarDays size={18} className="text-gray-500 mr-2" />
// 											<span>{booking.date}</span>
// 										</div>
// 										<div className="flex items-center">
// 											<Clock size={18} className="text-gray-500 mr-2" />
// 											<span>{booking.time}</span>
// 										</div>
// 									</div>

// 									<div className="mt-6 flex justify-end">
// 										<AlertDialog>
// 											<AlertDialogTrigger asChild>
// 												<Button variant="destructive" size="sm" className="flex items-center gap-2">
// 													<Trash2 size={16} />
// 													Cancel Booking
// 												</Button>
// 											</AlertDialogTrigger>
// 											<AlertDialogContent>
// 												<AlertDialogHeader>
// 													<AlertDialogTitle>Cancel Booking?</AlertDialogTitle>
// 													<AlertDialogDescription>
// 														Are you sure you want to cancel your reservation for {booking.building} {booking.room} on {booking.date}? This action cannot be undone.
// 													</AlertDialogDescription>
// 												</AlertDialogHeader>
// 												<AlertDialogFooter>
// 													<AlertDialogCancel>Keep Booking</AlertDialogCancel>
// 													<AlertDialogAction
// 														onClick={() => removeBooking(booking.id)}
// 														className="bg-red-500 hover:bg-red-600"
// 													>
// 														Yes, Cancel Booking
// 													</AlertDialogAction>
// 												</AlertDialogFooter>
// 											</AlertDialogContent>
// 										</AlertDialog>
// 									</div>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default BookingList;

// booking/page.tsx
// 'use client';
// import React, { useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import Image from 'next/image';
// import { CalendarDays, Clock, Users, Building, CheckCircle } from 'lucide-react';
// import { format } from 'date-fns';
// import { Calendar } from '@/components/ui/calendar';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import {
// 	AlertDialog,
// 	AlertDialogTrigger,
// 	AlertDialogContent,
// 	AlertDialogHeader,
// 	AlertDialogTitle,
// 	AlertDialogDescription,
// 	AlertDialogFooter,
// 	AlertDialogCancel,
// 	AlertDialogAction,
// } from '@/components/ui/alert-dialog';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Label } from '@/components/ui/label';

// const BookingPage = () => {
// 	const router = useRouter();
// 	const searchParams = useSearchParams();
// 	const roomParam = searchParams.get('room');
// 	const room = roomParam ? JSON.parse(roomParam) : null;

// 	const [date, setDate] = useState<Date | undefined>(new Date());
// 	const [timeSlot, setTimeSlot] = useState<string>('morning');

// 	const handleConfirm = () => {
// 		// In a real app, you would send the booking data to your backend here
// 		router.push('/mylist');
// 	};

// 	if (!room) {
// 		return (
// 			<div className="flex items-center justify-center min-h-[70vh]">
// 				<Card className="w-96 text-center">
// 					<CardHeader>
// 						<CardTitle>No Room Selected</CardTitle>
// 						<CardDescription>Please select a room from the available options</CardDescription>
// 					</CardHeader>
// 					<CardFooter>
// 						<Button className="w-full" onClick={() => router.push('/reserve')}>
// 							Browse Rooms
// 						</Button>
// 					</CardFooter>
// 				</Card>
// 			</div>
// 		);
// 	}

// 	const timeSlots = {
// 		morning: '09:00 - 12:00',
// 		afternoon: '13:00 - 16:00',
// 		evening: '17:00 - 20:00'
// 	};

// 	return (
// 		<div className="max-w-5xl mx-auto p-8">
// 			<h1 className="text-3xl font-bold mb-6">Complete Your Booking</h1>

// 			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// 				{/* Room Details Card */}
// 				<Card className="lg:col-span-1">
// 					<div className="relative w-full h-48">
// 						<Image
// 							src="/api/placeholder/800/600"
// 							alt={room.rname}
// 							fill
// 							className="object-cover rounded-t-lg"
// 							priority
// 						/>
// 						{room.vip === 1 && (
// 							<div className="absolute top-3 right-3">
// 								<Badge className="bg-amber-500">VIP</Badge>
// 							</div>
// 						)}
// 					</div>

// 					<CardHeader>
// 						<CardTitle className="text-xl">{`${room.bname} ${room.rname}`}</CardTitle>
// 						<CardDescription>{room.flname}</CardDescription>
// 					</CardHeader>

// 					<CardContent>
// 						<div className="space-y-4">
// 							<div className="flex items-center">
// 								<Building className="h-5 w-5 mr-2 text-gray-500" />
// 								<span>{room.bname}</span>
// 							</div>
// 							<div className="flex items-center">
// 								<Users className="h-5 w-5 mr-2 text-gray-500" />
// 								<span>Capacity: {room.capacity} people</span>
// 							</div>
// 							<div className="flex items-center">
// 								<Badge className={room.vip === 1 ? "bg-amber-500" : "bg-blue-500"}>
// 									{room.vip === 1 ? 'VIP' : 'Standard'} Room
// 								</Badge>
// 							</div>
// 						</div>
// 					</CardContent>
// 				</Card>

// 				{/* Booking Form Card */}
// 				<Card className="lg:col-span-2">
// 					<CardHeader>
// 						<CardTitle>Booking Details</CardTitle>
// 						<CardDescription>Select your preferred date and time</CardDescription>
// 					</CardHeader>

// 					<CardContent>
// 						<div className="space-y-6">
// 							{/* Date Picker */}
// 							<div>
// 								<Label className="text-base font-medium mb-2 block">Select Date</Label>
// 								<div className="flex items-center gap-4">
// 									<Popover>
// 										<PopoverTrigger asChild>
// 											<Button variant="outline" className="w-full justify-start text-left font-normal">
// 												<CalendarDays className="mr-2 h-4 w-4" />
// 												{date ? format(date, 'PPP') : 'Select a date'}
// 											</Button>
// 										</PopoverTrigger>
// 										<PopoverContent className="w-auto p-0">
// 											<Calendar
// 												mode="single"
// 												selected={date}
// 												onSelect={setDate}
// 												initialFocus
// 												disabled={(date) => {
// 													// Disable dates in the past
// 													const now = new Date();
// 													now.setHours(0, 0, 0, 0);
// 													return date < now;
// 												}}
// 											/>
// 										</PopoverContent>
// 									</Popover>
// 								</div>
// 							</div>

// 							{/* Time Slots */}
// 							<div>
// 								<Label className="text-base font-medium mb-2 block">Select Time Slot</Label>
// 								<RadioGroup
// 									value={timeSlot}
// 									onValueChange={setTimeSlot}
// 									className="grid grid-cols-1 md:grid-cols-3 gap-4"
// 								>
// 									<div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
// 										<RadioGroupItem value="morning" id="morning" />
// 										<Label htmlFor="morning" className="flex items-center cursor-pointer">
// 											<Clock className="mr-2 h-4 w-4" />
// 											{timeSlots.morning}
// 										</Label>
// 									</div>

// 									<div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
// 										<RadioGroupItem value="afternoon" id="afternoon" />
// 										<Label htmlFor="afternoon" className="flex items-center cursor-pointer">
// 											<Clock className="mr-2 h-4 w-4" />
// 											{timeSlots.afternoon}
// 										</Label>
// 									</div>

// 									<div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
// 										<RadioGroupItem value="evening" id="evening" />
// 										<Label htmlFor="evening" className="flex items-center cursor-pointer">
// 											<Clock className="mr-2 h-4 w-4" />
// 											{timeSlots.evening}
// 										</Label>
// 									</div>
// 								</RadioGroup>
// 							</div>
// 						</div>
// 					</CardContent>

// 					<CardFooter className="flex justify-between">
// 						<Button
// 							variant="outline"
// 							onClick={() => router.back()}
// 						>
// 							Back to Rooms
// 						</Button>

// 						<AlertDialog>
// 							<AlertDialogTrigger asChild>
// 								<Button className="flex items-center gap-2">
// 									<CheckCircle className="h-4 w-4" />
// 									Confirm Booking
// 								</Button>
// 							</AlertDialogTrigger>
// 							<AlertDialogContent>
// 								<AlertDialogHeader>
// 									<AlertDialogTitle>Confirm Your Booking</AlertDialogTitle>
// 									<AlertDialogDescription>
// 										<div className="space-y-2 mt-2">
// 											<p>You are about to book the following:</p>
// 											<ul className="list-disc pl-5 space-y-1">
// 												<li><strong>Room:</strong> {room.bname} {room.rname}</li>
// 												<li><strong>Date:</strong> {date ? format(date, 'PPP') : 'No date selected'}</li>
// 												<li><strong>Time:</strong> {timeSlots[timeSlot as keyof typeof timeSlots]}</li>
// 											</ul>
// 											<p className="mt-4">Do you want to proceed with this booking?</p>
// 										</div>
// 									</AlertDialogDescription>
// 								</AlertDialogHeader>
// 								<AlertDialogFooter>
// 									<AlertDialogCancel>Cancel</AlertDialogCancel>
// 									<AlertDialogAction
// 										onClick={handleConfirm}
// 										className="bg-green-600 hover:bg-green-700"
// 									>
// 										Yes, Book Now
// 									</AlertDialogAction>
// 								</AlertDialogFooter>
// 							</AlertDialogContent>
// 						</AlertDialog>
// 					</CardFooter>
// 				</Card>
// 			</div>
// 		</div>
// 	);
// };

// export default BookingPage;

// mylist/page.tsx
// import BookingList from '@/components/bookinglist/BookingList';

// const MyListsPage = () => {
// 	return <BookingList />;
// };

// export default MyListsPage;
