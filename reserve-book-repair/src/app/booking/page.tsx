'use client';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { CalendarDays, Clock, Users, Building, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import meetImg from '../../app/image/booking/meet1.jpg';

const BookingPage = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const roomParam = searchParams.get('room');
	const room = roomParam ? JSON.parse(roomParam) : null;

	const [date, setDate] = useState<Date | undefined>(new Date());
	const [timeSlot, setTimeSlot] = useState<string>('morning');

	const handleConfirm = () => {
		router.push('/mylist');
	};

	if (!room) {
		return (
			<div className="flex items-center justify-center min-h-[70vh]">
				<Card className="w-96 text-center">
					<CardHeader>
						<CardTitle>No Room Selected</CardTitle>
						<CardDescription>Please select a room from the available options</CardDescription>
					</CardHeader>
					<CardFooter>
						<Button className="w-full" onClick={() => router.push('/reserve')}>
							Browse Rooms
						</Button>
					</CardFooter>
				</Card>
			</div>
		);
	}

	const timeSlots = {
		morning: '09:00 - 12:00',
		afternoon: '13:00 - 16:00',
		evening: '17:00 - 20:00'
	};

	return (
		<div className="max-w-5xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-6">Complete Your Booking</h1>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Room Details Card */}
				<Card className="lg:col-span-1">
					<div className="relative w-full h-48">
						<Image
							src={meetImg}
							alt={room.rname}
							fill
							className="object-cover rounded-t-lg"
							priority
						/>
						{room.vip === 1 && (
							<div className="absolute top-3 right-3">
								<Badge className="bg-amber-500">VIP</Badge>
							</div>
						)}
					</div>

					<CardHeader>
						<CardTitle className="text-xl">{`${room.bname} ${room.rname}`}</CardTitle>
						<CardDescription>{room.flname}</CardDescription>
					</CardHeader>

					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center">
								<Building className="h-5 w-5 mr-2 text-gray-500" />
								<span>{room.bname}</span>
							</div>
							<div className="flex items-center">
								<Users className="h-5 w-5 mr-2 text-gray-500" />
								<span>Capacity: {room.capacity} people</span>
							</div>
							<div className="flex items-center">
								<Badge className={room.vip === 1 ? "bg-amber-500" : "bg-blue-500"}>
									{room.vip === 1 ? 'VIP' : 'Standard'} Room
								</Badge>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Booking Form Card */}
				<Card className="lg:col-span-2">
					<CardHeader>
						<CardTitle>Booking Details</CardTitle>
						<CardDescription>Select your preferred date and time</CardDescription>
					</CardHeader>

					<CardContent>
						<div className="space-y-6">
							{/* Date Picker */}
							<div>
								<Label className="text-base font-medium mb-2 block">Select Date</Label>
								<div className="flex items-center gap-4">
									<Popover>
										<PopoverTrigger asChild>
											<Button variant="outline" className="w-full justify-start text-left font-normal">
												<CalendarDays className="mr-2 h-4 w-4" />
												{date ? format(date, 'PPP') : 'Select a date'}
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0">
											<Calendar
												selected={date}
												onSelect={setDate}
												disabled={(date: Date) => {
													const now = new Date();
													now.setHours(0, 0, 0, 0);
													return date < now;
												}}
											/>
										</PopoverContent>
									</Popover>
								</div>
							</div>

							{/* Time Slots */}
							<div>
								<Label className="text-base font-medium mb-2 block">Select Time Slot</Label>
								<RadioGroup
									value={timeSlot}
									onValueChange={setTimeSlot}
									className="grid grid-cols-1 md:grid-cols-3 gap-4"
								>
									<div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
										<RadioGroupItem value="morning" id="morning" label="Morning" />
										<Label htmlFor="morning" className="flex items-center cursor-pointer">
											<Clock className="mr-2 h-4 w-4" />
											{timeSlots.morning}
										</Label>
									</div>

									<div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
										<RadioGroupItem value="afternoon" id="afternoon" label="Afternoon" />
										<Label htmlFor="afternoon" className="flex items-center cursor-pointer">
											<Clock className="mr-2 h-4 w-4" />
											{timeSlots.afternoon}
										</Label>
									</div>

									<div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
										<RadioGroupItem value="evening" id="evening" label="Evening" />
										<Label htmlFor="evening" className="flex items-center cursor-pointer">
											<Clock className="mr-2 h-4 w-4" />
											{timeSlots.evening}
										</Label>
									</div>
								</RadioGroup>
							</div>
						</div>
					</CardContent>

					<CardFooter className="flex justify-between">
						<Button
							variant="outline"
							onClick={() => router.back()}
						>
							Back to Rooms
						</Button>

						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4" />
									Confirm Booking
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Confirm Your Booking</AlertDialogTitle>
									<AlertDialogDescription>
										<div className="space-y-2 mt-2">
											<p>You are about to book the following:</p>
											<ul className="list-disc pl-5 space-y-1">
												<li><strong>Room:</strong> {room.bname} {room.rname}</li>
												<li><strong>Date:</strong> {date ? format(date, 'PPP') : 'No date selected'}</li>
												<li><strong>Time:</strong> {timeSlots[timeSlot as keyof typeof timeSlots]}</li>
											</ul>
											<p className="mt-4">Do you want to proceed with this booking?</p>
										</div>
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Cancel</AlertDialogCancel>
									<AlertDialogAction
										onClick={handleConfirm}
										className="bg-green-600 hover:bg-green-700"
									>
										Yes, Book Now
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default BookingPage;
