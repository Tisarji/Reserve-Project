"use client";

import Image from 'next/image';
import MutLogo from '../../image/homepage/logo-full.png';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from 'react';

const SearchForm = () => {
	const capVal = [
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
	];

	const classVal = [
		{ value: 'Normal', label: 'Normal' },
		{ value: 'Vip', label: 'Vip' },
	];

	const [capacity, setCapacity] = useState("");
	const [roomClass, setRoomClass] = useState("");

	return (
		<div className="flex flex-col items-center bg-gray-100 py-10">
			<div className="mb-6">
				<Image src={MutLogo} alt="MUT Logo" width={200} height={50} />
			</div>

			<div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
				<input
					type="text"
					placeholder="Choose your room"
					className="border border-gray-300 p-2 rounded-md w-80"
				/>

				<div className="flex flex-wrap gap-4">
					<input type="date" className="border border-gray-300 p-2 rounded-md" />
					<input type="time" className="border border-gray-300 p-2 rounded-md" />
					<input type="time" className="border border-gray-300 p-2 rounded-md" />

					{/* Capacity Select */}
					<Select onValueChange={setCapacity}>
						<SelectTrigger className="w-40 h-12 border-gray-300">
							<SelectValue placeholder="Capacity" />
						</SelectTrigger>
						<SelectContent>
							{capVal.map((cap) => (
								<SelectItem key={cap.value} value={cap.value}>
									{cap.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					{/* Class Select */}
					<Select onValueChange={setRoomClass}>
						<SelectTrigger className="w-40 h-12 border-gray-300">
							<SelectValue placeholder="Class" />
						</SelectTrigger>
						<SelectContent>
							{classVal.map((cls) => (
								<SelectItem key={cls.value} value={cls.value}>
									{cls.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

				</div>

				<button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
					FIND
				</button>
			</div>
		</div>
	);
};

export default SearchForm;
