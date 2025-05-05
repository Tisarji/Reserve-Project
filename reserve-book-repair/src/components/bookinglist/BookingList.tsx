'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CalendarDays, Clock, Trash2, Building, Users, AlertCircle } from 'lucide-react';
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogCancel,
	AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import meetImg from '../../app/image/booking/meet1.jpg';

interface Booking {
	id: number;
	building: string;
	room: string;
	capacity: number;
	vip: boolean;
	image: any;
	date: string;
	time: string;
	status: 'approved' | 'pending' | 'rejected';
}

const BookingList = () => {
	const [bookings, setBookings] = useState<Booking[]>([
		{
			id: 1,
			building: 'Building K',
			room: 'K102',
			capacity: 20,
			vip: false,
			image: meetImg,
			date: '17 September 2024',
			time: '09:00 - 12:00',
			status: 'approved'
		},
		{
			id: 2,
			building: 'Building A',
			room: 'A205',
			capacity: 25,
			vip: true,
			image: meetImg,
			date: '24 September 2024',
			time: '13:00 - 15:00',
			status: 'pending'
		},
	]);

	const removeBooking = (id: number) => {
		setBookings(prev => prev.filter(b => b.id !== id));
	};

	const getStatusBadge = (status: string) => {
		switch (status) {
			case 'approved':
				return <Badge className="bg-green-500 hover:bg-green-600">Approved</Badge>;
			case 'pending':
				return <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>;
			case 'rejected':
				return <Badge className="bg-red-500 hover:bg-red-600">Rejected</Badge>;
			default:
				return null;
		}
	};

	return (
		<div className="max-w-5xl mx-auto p-8">
			<div className="bg-white rounded-lg shadow-md p-6 mb-6">
				<h1 className="text-3xl font-bold mb-2">My Bookings</h1>
				<p className="text-gray-500 mb-6">Manage your room reservations</p>

				{bookings.length === 0 ? (
					<div className="text-center py-16 bg-gray-50 rounded-lg">
						<AlertCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
						<h3 className="text-xl font-medium text-gray-600">No bookings yet</h3>
						<p className="text-gray-500 mt-2 mb-6">Your booked rooms will appear here</p>
						<Button
							onClick={() => window.location.href = '/reserve'}
							className="mt-2"
						>
							Browse Available Rooms
						</Button>
					</div>
				) : (
					<div className="space-y-6">
						{bookings.map((booking) => (
							<div key={booking.id} className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
								<div className="w-full md:w-1/4 h-48 md:h-auto relative">
									<Image
										src={booking.image}
										alt="Room"
										fill
										className="object-cover"
									/>
								</div>

								<div className="flex-1 p-6">
									<div className="flex justify-between items-start">
										<div>
											<h3 className="text-xl font-bold mb-2">{`${booking.building} ${booking.room}`}</h3>
											{booking.vip && <Badge className="bg-amber-500 mb-3">VIP Room</Badge>}
										</div>
										{getStatusBadge(booking.status)}
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 mt-4">
										<div className="flex items-center">
											<Building size={18} className="text-gray-500 mr-2" />
											<span>{booking.building}</span>
										</div>
										<div className="flex items-center">
											<Users size={18} className="text-gray-500 mr-2" />
											<span>Capacity: {booking.capacity}</span>
										</div>
										<div className="flex items-center">
											<CalendarDays size={18} className="text-gray-500 mr-2" />
											<span>{booking.date}</span>
										</div>
										<div className="flex items-center">
											<Clock size={18} className="text-gray-500 mr-2" />
											<span>{booking.time}</span>
										</div>
									</div>

									<div className="mt-6 flex justify-end">
										<AlertDialog>
											<AlertDialogTrigger asChild>
												<Button variant="destructive" size="sm" className="flex items-center gap-2">
													<Trash2 size={16} />
													Cancel Booking
												</Button>
											</AlertDialogTrigger>
											<AlertDialogContent>
												<AlertDialogHeader>
													<AlertDialogTitle>Cancel Booking?</AlertDialogTitle>
													<AlertDialogDescription>
														Are you sure you want to cancel your reservation for {booking.building} {booking.room} on {booking.date}? This action cannot be undone.
													</AlertDialogDescription>
												</AlertDialogHeader>
												<AlertDialogFooter>
													<AlertDialogCancel>Keep Booking</AlertDialogCancel>
													<AlertDialogAction
														onClick={() => removeBooking(booking.id)}
														className="bg-red-500 hover:bg-red-600"
													>
														Yes, Cancel Booking
													</AlertDialogAction>
												</AlertDialogFooter>
											</AlertDialogContent>
										</AlertDialog>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default BookingList;
