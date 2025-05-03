"use client";

import Image from "next/image";
import MutLogo from '../../image/homepage/logo-black-full.png';
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, Building, Search } from "lucide-react";

const SearchForm = () => {
	const capVal = [
		{ value: "1", label: "1 Person" },
		{ value: "2", label: "2 People" },
		{ value: "3", label: "3 People" },
		{ value: "4", label: "4+ People" }
	];

	const classVal = [
		{ value: "Normal", label: "Normal" },
		{ value: "Vip", label: "VIP" },
	];

	const [capacity, setCapacity] = useState("");
	const [roomClass, setRoomClass] = useState("");
	const [date, setDate] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [searchQuery, setSearchQuery] = useState("");

	interface SearchFormState {
		searchQuery: string;
		date: string;
		startTime: string;
		endTime: string;
		capacity: string;
		roomClass: string;
	}

	const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const searchState: SearchFormState = {
			searchQuery,
			date,
			startTime,
			endTime,
			capacity,
			roomClass,
		};
		console.log(searchState);
	};

	return (
		<section className="w-full bg-gray-900 py-16 px-4">
			<div className="flex justify-center">
				<Card className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border-0">
					<div className="bg-white py-6 flex justify-center items-center border-b">
						<Image
							src={MutLogo}
							alt="MUT Logo"
							width={200}
							height={50}
							className="object-contain"
						/>
					</div>

					<CardContent className="p-8">
						{/* <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Find Available Rooms</h2> */}

						<form onSubmit={handleSearch} className="space-y-6">
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Search className="h-5 w-5 text-gray-400" />
								</div>
								<Input
									type="text"
									placeholder="Search room by name or keywords"
									className="pl-10 py-6 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</div>

							<div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
								<div className="space-y-2">
									<label className="flex items-center text-sm font-medium text-gray-700">
										<Calendar className="h-4 w-4 mr-2 text-indigo-600" />
										Date
									</label>
									<Input
										type="date"
										className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
										value={date}
										onChange={(e) => setDate(e.target.value)}
									/>
								</div>

								<div className="space-y-2">
									<label className="flex items-center text-sm font-medium text-gray-700">
										<Clock className="h-4 w-4 mr-2 text-indigo-600" />
										Start Time
									</label>
									<Input
										type="time"
										className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
										value={startTime}
										onChange={(e) => setStartTime(e.target.value)}
									/>
								</div>

								<div className="space-y-2">
									<label className="flex items-center text-sm font-medium text-gray-700">
										<Clock className="h-4 w-4 mr-2 text-indigo-600" />
										End Time
									</label>
									<Input
										type="time"
										className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
										value={endTime}
										onChange={(e) => setEndTime(e.target.value)}
									/>
								</div>

								<div className="space-y-2">
									<label className="flex items-center text-sm font-medium text-gray-700">
										<Users className="h-4 w-4 mr-2 text-indigo-600" />
										Capacity
									</label>
									<Select onValueChange={setCapacity} value={capacity}>
										<SelectTrigger className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
											<SelectValue placeholder="Select capacity" />
										</SelectTrigger>
										<SelectContent>
											{capVal.map((cap) => (
												<SelectItem key={cap.value} value={cap.value}>
													{cap.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<label className="flex items-center text-sm font-medium text-gray-700">
										<Building className="h-4 w-4 mr-2 text-indigo-600" />
										Room Class
									</label>
									<Select onValueChange={setRoomClass} value={roomClass}>
										<SelectTrigger className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
											<SelectValue placeholder="Select room class" />
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
							</div>

							<div className="pt-4">
								<Button
									type="submit"
									className="w-full py-6 bg-gray-900 hover:bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center gap-2"
								>
									<Search className="h-5 w-5" />
									Find Available Rooms
								</Button>
							</div>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default SearchForm;
