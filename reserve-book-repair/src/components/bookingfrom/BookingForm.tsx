'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';

const BookingForm = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const roomParam = searchParams.get('room');
	const room = roomParam ? JSON.parse(roomParam) : null;

	const handleConfirmBooking = () => {
		console.log('Confirmed booking for:', room);
		router.push('/mylist');
	};

	if (!room) return <p>No room selected</p>;

	return (
		<div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
			<h2 className="text-xl font-bold mb-4">Confirm Your Booking</h2>
			<p><strong>Room:</strong> {room.bname} {room.rname}</p>
			<p><strong>Capacity:</strong> {room.capacity}</p>
			<p><strong>Class:</strong> {room.vip === 1 ? 'VIP' : 'Normal'}</p>
			<div className="mt-6">
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<button className="bg-blue-600 text-white px-4 py-2 rounded">Confirm Booking</button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Send request to DQ Staff</AlertDialogTitle>
							<AlertDialogDescription>Are you sure about your information?</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction onClick={handleConfirmBooking}>Yes, Confirm</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</div>
	);
};

export default BookingForm;
