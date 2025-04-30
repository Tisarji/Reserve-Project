'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Bookmark, ChevronLeft, Trash } from 'lucide-react';
import meet1 from '../../assets/meet1.jpg';

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

interface Booking {
	id: number;
	building: string;
	image: string | StaticImageData;
	openDays: string;
	capacity: string;
	class: string;
	time: string;
	date: string;
	bookingDetail: string;
	bookTerm: string;
}

const RoomBooking: React.FC = () => {
	const [selectAll, setSelectAll] = useState(false);
	const [selectedItems, setSelectedItems] = useState<number[]>([]);
	const [bookingsList, setBookingsList] = useState<Booking[]>([
		{
			id: 1,
			building: 'Building K K102',
			image: meet1,
			openDays: 'Monday - Friday',
			capacity: '7 - 8 People',
			class: 'Normal',
			time: '09:00 - 12:00',
			date: '17 September 2024',
			bookingDetail: 'Tutorial',
			bookTerm: 'Auto verify',
		},
		{
			id: 2,
			building: 'Building K K102',
			image: meet1,
			openDays: 'Monday - Friday',
			capacity: '7 - 8 People',
			class: 'Normal',
			time: '09:00 - 12:00',
			date: '17 September 2024',
			bookingDetail: 'Tutorial',
			bookTerm: 'Auto verify',
		},
	]);

	const [confirmingBooking, setConfirmingBooking] = useState(false);
	const [deletingId, setDeletingId] = useState<number | null>(null);

	const addBooking = (newBooking: Booking) => {
		setBookingsList((prev) => [...prev, newBooking]);
	};

	const removeBooking = (id: number) => {
		setBookingsList((prev) => prev.filter((booking) => booking.id !== id));
	};

	const handleSelectAll = () => {
		setSelectAll(!selectAll);
		setSelectedItems(!selectAll ? bookingsList.map((b) => b.id) : []);
	};

	const handleSelectItem = (id: number) => {
		setSelectedItems((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
		);
	};

	return (
		<div className="min-h-screen bg-gray-100 py-10 px-6">
			<div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
				<header className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-semibold">My Lists</h1>
					<button
						className="flex items-center gap-2 text-blue-600 hover:underline"
						onClick={() => (window.location.href = '/mylists')}
					>
						<span>My lists</span>
						<Bookmark size={20} />
					</button>
				</header>

				<button
					className="flex items-center gap-2 text-gray-500 mb-4 hover:text-gray-700"
					onClick={() => (window.location.href = '/reserve')}
				>
					<ChevronLeft size={20} />
					<span>Back</span>
				</button>

				<div className="mb-4">
					<label className="flex items-center space-x-2">
						<input
							type="checkbox"
							checked={selectAll}
							onChange={handleSelectAll}
							className="form-checkbox h-4 w-4"
						/>
						<span className="text-sm">Select All</span>
					</label>
				</div>

				<div className="space-y-6">
					{bookingsList.map((booking) => (
						<div
							key={booking.id}
							className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm"
						>
							<div className="w-40 h-28 relative mr-4">
								<Image
									src={booking.image}
									alt="Room"
									fill
									className="rounded-md object-cover"
								/>
							</div>
							<div className="flex-1 grid grid-cols-2 gap-4">
								<div>
									<h3 className="font-medium text-lg">{booking.building}</h3>
									<p className="text-sm">Open: {booking.openDays}</p>
									<p className="text-sm">Room Capacity: {booking.capacity}</p>
									<p className="text-sm">Class: {booking.class}</p>
								</div>
								<div>
									<p className="text-sm">
										<strong>Time:</strong> {booking.time}
									</p>
									<p className="text-sm">
										<strong>Date:</strong> {booking.date}
									</p>
									<p className="text-sm">
										<strong>Booking Detail:</strong> {booking.bookingDetail}
									</p>
									<p className="text-sm">
										<strong>Book Term:</strong> {booking.bookTerm}
									</p>
								</div>
							</div>
							<div className="ml-4 mt-1">
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<button
											onClick={() => setDeletingId(booking.id)}
											className="text-red-500 hover:text-red-700"
										>
											<Trash size={20} />
										</button>
									</AlertDialogTrigger>
									<AlertDialogContent>
										<AlertDialogHeader>
											<AlertDialogTitle>Do you want to remove your booking?</AlertDialogTitle>
											<AlertDialogDescription>
												This action cannot be undone.
											</AlertDialogDescription>
										</AlertDialogHeader>
										<AlertDialogFooter>
											<AlertDialogCancel>Cancel</AlertDialogCancel>
											<AlertDialogAction
												onClick={() => {
													if (deletingId !== null) {
														removeBooking(deletingId);
														setDeletingId(null);
													}
												}}
											>
												Yes, Remove
											</AlertDialogAction>
										</AlertDialogFooter>
									</AlertDialogContent>
								</AlertDialog>
							</div>
						</div>
					))}
				</div>

				<div className="mt-8 flex justify-end">
					<AlertDialog open={confirmingBooking} onOpenChange={setConfirmingBooking}>
						<AlertDialogTrigger asChild>
							<button
								onClick={() => setConfirmingBooking(true)}
								className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
							>
								Confirm Booking
							</button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									Your booking request will be sent to DQ Staff
								</AlertDialogTitle>
								<AlertDialogDescription>
									Are you sure about your information?
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction
									onClick={() => {
										console.log('Booking confirmed!');
										setConfirmingBooking(false);
										// You can add toast or redirect here
									}}
								>
									Yes, Confirm
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			</div>
		</div>
	);
};

export default RoomBooking;
