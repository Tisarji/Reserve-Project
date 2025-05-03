"use client";

import React, { useState } from "react";
import {
	UserRound,
	Home,
	Clock,
	ChevronDown,
	Search,
	BarChart3,
	Calendar,
} from "lucide-react";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	BarChart,
	Bar,
	Legend,
} from "recharts";

function Report() {
	const [selectedRoom, setSelectedRoom] = useState("");
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("overview");

	const stats = {
		booking: 30,
		openRooms: 40,
		closingRooms: 20,
	};

	const roomOptions = ["MII101", "MII102", "MII103", "MII104", "MII105"];

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const selectRoom = (room: string): void => {
		setSelectedRoom(room);
		setDropdownOpen(false);
	};

	const roomUsageData = [
		{ date: "Mon", usage: 30 },
		{ date: "Tue", usage: 45 },
		{ date: "Wed", usage: 38 },
		{ date: "Thu", usage: 50 },
		{ date: "Fri", usage: 60 },
		{ date: "Sat", usage: 35 },
		{ date: "Sun", usage: 25 },
	];

	const bookingTrendsData = [
		{ month: "Jan", bookings: 80 },
		{ month: "Feb", bookings: 65 },
		{ month: "Mar", bookings: 95 },
		{ month: "Apr", bookings: 70 },
		{ month: "May", bookings: 100 },
	];

	return (
		<div className="flex h-screen bg-gray-100">
			<div className="hidden md:flex w-64 flex-col bg-white shadow-lg">
				<div className="px-6 py-8">
					<h2 className="text-xl font-bold text-blue-600">Room Dashboard</h2>
				</div>
				<nav className="flex-1 px-4 pb-4">
					<button
						className={`flex items-center w-full px-4 py-3 mb-2 rounded-lg ${activeTab === "overview"
							? "bg-blue-100 text-blue-600"
							: "text-gray-600 hover:bg-gray-100"
							}`}
						onClick={() => setActiveTab("overview")}
					>
						<BarChart3 className="mr-3 h-5 w-5" />
						<span>Overview</span>
					</button>
					<button
						className={`flex items-center w-full px-4 py-3 mb-2 rounded-lg ${activeTab === "bookings"
							? "bg-blue-100 text-blue-600"
							: "text-gray-600 hover:bg-gray-100"
							}`}
						onClick={() => setActiveTab("bookings")}
					>
						<Calendar className="mr-3 h-5 w-5" />
						<span>Bookings</span>
					</button>
					<button
						className={`flex items-center w-full px-4 py-3 mb-2 rounded-lg ${activeTab === "rooms"
							? "bg-blue-100 text-blue-600"
							: "text-gray-600 hover:bg-gray-100"
							}`}
						onClick={() => setActiveTab("rooms")}
					>
						<Home className="mr-3 h-5 w-5" />
						<span>Rooms</span>
					</button>
				</nav>
			</div>
			<div className="flex-1 overflow-y-auto">
				<header className="bg-white shadow-sm">
					<div className="flex justify-between items-center px-6 py-4">
						<h1 className="text-2xl font-bold text-gray-800">
							Room Management Dashboard
						</h1>
						<div className="flex items-center">
							<div className="relative mr-4">
								<input
									type="text"
									placeholder="Search..."
									className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
								<Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
							</div>
						</div>
					</div>
				</header>

				<main className="p-6">
					<div className="mb-8">
						<h2 className="text-xl font-semibold text-gray-800 mb-6">
							Overview
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-gray-500">
											Active Bookings
										</p>
										<p className="text-2xl font-bold text-gray-800 mt-1">
											{stats.booking} People
										</p>
									</div>
									<div className="bg-blue-100 p-3 rounded-full">
										<UserRound className="h-6 w-6 text-blue-600" />
									</div>
								</div>
							</div>

							<div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-gray-500">
											Open Rooms
										</p>
										<p className="text-2xl font-bold text-gray-800 mt-1">
											{stats.openRooms} Rooms
										</p>
									</div>
									<div className="bg-green-100 p-3 rounded-full">
										<Home className="h-6 w-6 text-green-600" />
									</div>
								</div>
							</div>

							<div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-gray-500">
											Closing Soon
										</p>
										<p className="text-2xl font-bold text-gray-800 mt-1">
											{stats.closingRooms} Rooms
										</p>
									</div>
									<div className="bg-amber-100 p-3 rounded-full">
										<Clock className="h-6 w-6 text-amber-600" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div className="bg-white rounded-xl shadow-md p-6">
							<h3 className="text-lg font-medium text-gray-800 mb-4">
								Room Selection
							</h3>

							<div className="mb-6">
								<div className="relative">
									<button
										onClick={toggleDropdown}
										className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
									>
										<span>{selectedRoom || "-- Select a Room --"}</span>
										<ChevronDown className="h-5 w-5 text-gray-400" />
									</button>

									{dropdownOpen && (
										<div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
											<div className="py-1">
												{roomOptions.map((room) => (
													<button
														key={room}
														onClick={() => selectRoom(room)}
														className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
													>
														{room}
													</button>
												))}
											</div>
										</div>
									)}
								</div>
							</div>

							<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-2 transition-colors duration-150">
								OK
							</button>
						</div>

						<div className="bg-white rounded-xl shadow-md p-6">
							<h3 className="text-lg font-medium text-gray-800 mb-4">
								Room Details
							</h3>

							{selectedRoom ? (
								<div>
									<p className="text-gray-600 mb-2">
										Selected Room:{" "}
										<span className="font-medium text-gray-800">
											{selectedRoom}
										</span>
									</p>
									<p className="text-gray-600 mb-4">
										Status:{" "}
										<span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
											Available
										</span>
									</p>
									<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-2 transition-colors duration-150">
										Book Now
									</button>
								</div>
							) : (
								<p className="text-gray-500">
									Please select a room to view details
								</p>
							)}
						</div>
					</div>

					<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div className="bg-white rounded-xl shadow-md p-6">
							<h3 className="text-lg font-medium text-gray-800 mb-4">
								Room Usage
							</h3>
							<div className="h-64">
								<ResponsiveContainer width="100%" height="100%">
									<LineChart data={roomUsageData}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="date" />
										<YAxis />
										<Tooltip />
										<Line type="monotone" dataKey="usage" stroke="#3b82f6" strokeWidth={2} />
									</LineChart>
								</ResponsiveContainer>
							</div>
						</div>
						<div className="bg-white rounded-xl shadow-md p-6">
							<h3 className="text-lg font-medium text-gray-800 mb-4">
								Booking Trends
							</h3>
							<div className="h-64">
								<ResponsiveContainer width="100%" height="100%">
									<BarChart data={bookingTrendsData}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="month" />
										<YAxis />
										<Tooltip />
										<Legend />
										<Bar dataKey="bookings" fill="#10b981" />
									</BarChart>
								</ResponsiveContainer>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Report;
