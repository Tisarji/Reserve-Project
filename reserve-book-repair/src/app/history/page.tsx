"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import imgroom from "@/app/image/room.png";
import {
	Check,
	X,
	Clock,
	Shield,
	ShoppingBag,
	ThumbsDown,
	QrCode,
	Trash2,
	Search,
	Filter
} from "lucide-react";

interface HistoryStatusItem {
	img: StaticImageData;
	building: string;
	open: string;
	room: string;
	class: string;
	time: string;
	date: string;
	bookingdetail: string;
	bookterm: string;
	status: string;
}

const History: React.FC = () => {
	const [statuses, setStatuses] = useState<HistoryStatusItem[]>([
		{
			img: imgroom,
			building: "K101",
			open: "Monday - Friday",
			room: "7 - 8 people",
			class: "Normal",
			time: "09.00 - 12.00",
			date: "17 September 2024",
			bookingdetail: "Tutorial.",
			bookterm: "Auto Verify",
			status: "Booking accepted"
		},
		{
			img: imgroom,
			building: "K102",
			open: "Monday - Friday",
			room: "7 - 8 people",
			class: "Normal",
			time: "09.00 - 12.00",
			date: "17 September 2024",
			bookingdetail: "Tutorial.",
			bookterm: "Auto Verify",
			status: "Booking canceled"
		},
		{
			img: imgroom,
			building: "K103",
			open: "Monday - Friday",
			room: "7 - 8 people",
			class: "Normal",
			time: "09.00 - 12.00",
			date: "17 September 2024",
			bookingdetail: "Tutorial.",
			bookterm: "Auto Verify",
			status: "Booking rejected"
		}
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const statusOptions = [
		{ value: "", label: "All Statuses" },
		{ value: "Booking accepted", label: "Booking accepted", icon: <Check className="w-4 h-4 text-green-600" /> },
		{ value: "Booking canceled", label: "Booking canceled", icon: <X className="w-4 h-4 text-red-600" /> },
		{ value: "Booking on wait", label: "Booking on wait", icon: <Clock className="w-4 h-4 text-blue-600" /> },
		{ value: "Booking rejected", label: "Booking rejected", icon: <Shield className="w-4 h-4 text-orange-600" /> },
		{ value: "Booking completed", label: "Booking completed", icon: <ShoppingBag className="w-4 h-4 text-indigo-600" /> },
		{ value: "-1 TIG", label: "-1 TIG", icon: <ThumbsDown className="w-4 h-4 text-red-600" /> }
	];

	const filteredStatuses = statuses.filter((status) => {
		const matchesStatus = searchTerm === "" || status.status === searchTerm;
		const matchesSearch = searchQuery === "" ||
			status.building.toLowerCase().includes(searchQuery.toLowerCase()) ||
			status.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
			status.bookingdetail.toLowerCase().includes(searchQuery.toLowerCase());

		return matchesStatus && matchesSearch;
	});

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef]);

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "Booking accepted":
				return <Check className="w-5 h-5" />;
			case "Booking canceled":
				return <X className="w-5 h-5" />;
			case "Booking on wait":
				return <Clock className="w-5 h-5" />;
			case "Booking rejected":
				return <Shield className="w-5 h-5" />;
			case "Booking completed":
				return <ShoppingBag className="w-5 h-5" />;
			case "-1 TIG":
				return <ThumbsDown className="w-5 h-5" />;
			default:
				return null;
		}
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Booking accepted":
				return "bg-green-100 text-green-800";
			case "Booking canceled":
				return "bg-red-100 text-red-800";
			case "Booking on wait":
				return "bg-blue-100 text-blue-800";
			case "Booking rejected":
				return "bg-orange-100 text-orange-800";
			case "Booking completed":
				return "bg-indigo-100 text-indigo-800";
			case "-1 TIG":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const deleteBooking = (building: string) => {
		setStatuses(statuses.filter(status => status.building !== building));
	};

	const viewQRCode = (building: string) => {
		// Implement QR code view functionality
		alert(`Viewing QR code for ${building}`);
	};

	return (
		<div className="min-h-screen bg-gray-50 p-4 md:p-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-2xl font-bold text-gray-900 mb-6">Booking History</h1>

				<div className="mb-6 bg-white p-4 rounded-lg shadow">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
						<div className="relative flex-grow max-w-md">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Search className="h-5 w-5 text-gray-400" />
							</div>
							<input
								type="text"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								placeholder="Search by building, date or details..."
								className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<div className="relative">
							<div
								className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md cursor-pointer bg-white hover:bg-gray-50 transition-colors"
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							>
								<Filter className="h-5 w-5 text-gray-500" />
								<div className="flex-grow">
									{searchTerm === "" ? (
										<span className="text-gray-700">All Statuses</span>
									) : (
										<div className="flex items-center">
											{statusOptions.find(option => option.value === searchTerm)?.icon}
											<span className="ml-2">{searchTerm}</span>
										</div>
									)}
								</div>
								<svg
									className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
								</svg>
							</div>

							{isDropdownOpen && (
								<div className="absolute right-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
									<ul className="py-1 max-h-60 overflow-auto">
										{statusOptions.map((option) => (
											<li
												key={option.value}
												className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center ${option.value === searchTerm ? 'bg-blue-50' : ''}`}
												onClick={() => {
													setSearchTerm(option.value);
													setIsDropdownOpen(false);
												}}
											>
												{option.icon && <span className="mr-2">{option.icon}</span>}
												<span>{option.label}</span>
												{option.value === searchTerm && (
													<Check className="ml-auto w-4 h-4 text-blue-600" />
												)}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>

				{filteredStatuses.length === 0 ? (
					<div className="bg-white p-8 rounded-lg shadow text-center">
						<p className="text-gray-500">No booking history found.</p>
					</div>
				) : (
					<div className="space-y-4">
						{filteredStatuses.map((status, index) => (
							<div key={index} className="bg-white rounded-lg shadow overflow-hidden">
								<div className="md:flex">
									{/* Room Image */}
									<div className="md:w-1/4 p-4">
										<Image
											src={status.img}
											alt="Room image"
											width={300}
											height={200}
											className="rounded-lg object-cover w-full h-48"
										/>
									</div>

									{/* Booking Details */}
									<div className="md:w-2/4 p-4">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div>
												<h3 className="font-semibold text-lg text-gray-900">Room Details</h3>
												<div className="mt-2 space-y-1 text-sm text-gray-600">
													<div><span className="font-medium">Building:</span> {status.building}</div>
													<div><span className="font-medium">Open:</span> {status.open}</div>
													<div><span className="font-medium">Capacity:</span> {status.room}</div>
													<div><span className="font-medium">Class:</span> {status.class}</div>
												</div>
											</div>

											<div>
												<h3 className="font-semibold text-lg text-gray-900">Booking Info</h3>
												<div className="mt-2 space-y-1 text-sm text-gray-600">
													<div><span className="font-medium">Time:</span> {status.time}</div>
													<div><span className="font-medium">Date:</span> {status.date}</div>
													<div><span className="font-medium">Purpose:</span> {status.bookingdetail}</div>
													<div><span className="font-medium">Verification:</span> {status.bookterm}</div>
												</div>
											</div>
										</div>
									</div>

									{/* Status & Actions */}
									<div className="md:w-1/4 p-4 flex flex-col justify-between bg-gray-50">
										<div>
											<span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status.status)}`}>
												{getStatusIcon(status.status)}
												<span className="ml-2">{status.status}</span>
											</span>
										</div>

										{status.status === "Booking accepted" && (
											<div className="flex items-center gap-3 mt-4">
												<button
													onClick={() => viewQRCode(status.building)}
													className="flex items-center px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition"
												>
													<QrCode className="w-5 h-5 mr-2" />
													<span>View QR</span>
												</button>

												<button
													onClick={() => deleteBooking(status.building)}
													className="flex items-center px-3 py-2 bg-red-50 text-red-700 rounded-md hover:bg-red-100 transition"
												>
													<Trash2 className="w-5 h-5 mr-2" />
													<span>Cancel</span>
												</button>
											</div>
										)}
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

export default History;
