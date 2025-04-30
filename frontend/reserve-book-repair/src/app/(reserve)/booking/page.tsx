"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle, ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface RoomData {
	rname: string;
	bname: string;
	capacity: number;
	vip: number;
}

const months = [
	"January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
];

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function Booking({ roomData }: { roomData: RoomData }) {
	const router = useRouter();
	const [selectedDate, setSelectedDate] = useState(19);
	const [currentMonthIndex, setCurrentMonthIndex] = useState(10);
	const [currentYear, setCurrentYear] = useState(2024);
	const [daysInMonth, setDaysInMonth] = useState(31);
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [detail, setDetail] = useState("");
	const status = roomData.vip === 1 ? "Verifying" : "Approved";

	const existingBookings = [
		{ date: 19, startTime: '10:00', endTime: '11:30' },
		{ date: 19, startTime: '14:00', endTime: '15:30' },
	];

	const timeToMinutes = (timeStr: string) => {
		const [hours, minutes] = timeStr.split(':').map(Number);
		return hours * 60 + minutes;
	};

	const isTimeSlotBooked = (time: string, isStartTime = true) => {
		const timeInMinutes = timeToMinutes(time);
		return existingBookings.some(booking => {
			if (booking.date !== selectedDate) return false;
			const bookingStart = timeToMinutes(booking.startTime);
			const bookingEnd = timeToMinutes(booking.endTime);
			if (isStartTime) {
				return timeInMinutes >= bookingStart && timeInMinutes < bookingEnd;
			} else {
				const selectedStartMinutes = timeToMinutes(startTime);
				return (selectedStartMinutes < bookingEnd && timeInMinutes > bookingStart);
			}
		});
	};

	const generateTimeSlots = () => {
		const slots = [];
		for (let hour = 9; hour <= 18; hour++) {
			for (let minutes of ['00', '30']) {
				if (hour === 18 && minutes === '30') continue;
				const formattedHour = hour.toString().padStart(2, '0');
				slots.push(`${formattedHour}:${minutes}`);
			}
		}
		return slots;
	};

	const getAvailableEndTimes = () => {
		if (!startTime) return [];
		const timeSlots = generateTimeSlots();
		const startIndex = timeSlots.indexOf(startTime);
		return timeSlots.slice(startIndex + 1);
	};

	const handleMonthChange = (direction: 'next' | 'prev') => {
		if (direction === 'next') {
			if (currentMonthIndex === 11) {
				setCurrentMonthIndex(0);
				setCurrentYear(currentYear + 1);
			} else {
				setCurrentMonthIndex(currentMonthIndex + 1);
			}
		} else {
			if (currentMonthIndex === 0) {
				setCurrentMonthIndex(11);
				setCurrentYear(currentYear - 1);
			} else {
				setCurrentMonthIndex(currentMonthIndex - 1);
			}
		}
	};

	const handleDateSelect = (day: number) => {
		setSelectedDate(day);
		setStartTime('');
		setEndTime('');
	};

	useEffect(() => {
		const getDaysInMonth = (monthIndex: number, year: number) => {
			switch (monthIndex) {
				case 1: return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;
				case 3:
				case 5:
				case 8:
				case 10:
					return 30;
				default:
					return 31;
			}
		};
		setDaysInMonth(getDaysInMonth(currentMonthIndex, currentYear));
	}, [currentMonthIndex, currentYear]);

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
				<header className="flex justify-between items-center mb-4">
					<h1 className="text-2xl font-bold">{roomData.bname} {roomData.rname}</h1>
					<button onClick={() => router.push('/mylists')} className="flex items-center gap-2 text-blue-600">
						<span>My Lists</span>
						<Bookmark size={20} />
					</button>
				</header>

				<div className="flex items-center gap-2 mb-6 cursor-pointer text-gray-600" onClick={() => router.push('/reserve')}>
					<ChevronLeft size={20} /> Back
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="col-span-1">
						<Image src="/meet1.jpg" alt="Meeting Room" width={400} height={300} className="rounded-lg" />
					</div>

					<div className="col-span-1">
						<h2 className="text-xl font-semibold mb-2">Room Information</h2>
						<p>Open: Monday - Friday</p>
						<p>Open time: 09:00 - 18:00</p>
						<p>Room Capacity: {roomData.capacity} People</p>
						<p>Class: {roomData.vip === 1 ? 'VIP' : 'Normal'}</p>
						<textarea
							className="w-full mt-4 p-2 border rounded-md"
							placeholder="Booking Detail"
							rows={3}
							onChange={(e) => setDetail(e.target.value)}
						/>
						<div className="flex items-center text-green-600 mt-2">
							<CheckCircle className="mr-2" size={20} /> Auto verify after booking
						</div>
					</div>

					<div className="col-span-1">
						<div className="mb-4">
							<label className="block mb-1">Start Time</label>
							<select
								className="w-full p-2 border rounded-md"
								value={startTime}
								onChange={(e) => setStartTime(e.target.value)}
							>
								<option value="">Select time</option>
								{generateTimeSlots().map(time => (
									<option key={time} value={time} disabled={isTimeSlotBooked(time, true)}>
										{time} {isTimeSlotBooked(time, true) ? '(Unavailable)' : ''}
									</option>
								))}
							</select>
						</div>
						<div className="mb-4">
							<label className="block mb-1">End Time</label>
							<select
								className="w-full p-2 border rounded-md"
								value={endTime}
								onChange={(e) => setEndTime(e.target.value)}
								disabled={!startTime}
							>
								<option value="">Select time</option>
								{getAvailableEndTimes().map(time => (
									<option key={time} value={time} disabled={isTimeSlotBooked(time, false)}>
										{time} {isTimeSlotBooked(time, false) ? '(Unavailable)' : ''}
									</option>
								))}
							</select>
						</div>

						<div className="mb-4">
							<div className="flex justify-between items-center mb-2">
								<ChevronLeft size={20} className="cursor-pointer" onClick={() => handleMonthChange('prev')} />
								<span>{months[currentMonthIndex]} {currentYear}</span>
								<ChevronRight size={20} className="cursor-pointer" onClick={() => handleMonthChange('next')} />
							</div>
							<div className="grid grid-cols-7 gap-1 text-center text-sm">
								{daysOfWeek.map(day => (
									<div key={day} className="font-semibold text-gray-500">{day}</div>
								))}
								{Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
									<div
										key={day}
										onClick={() => handleDateSelect(day)}
										className={`p-2 rounded-lg cursor-pointer hover:bg-blue-100 ${selectedDate === day ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
									>
										{day}
									</div>
								))}
							</div>
						</div>

						<button className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
							Book now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
