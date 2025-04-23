"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';

interface Room {
	rnumber: string;
	rname: string;
	bname: string;
	flname: string;
	sname: string;
	vip: string;
	capacity: number;
}

const columns = [
	"รหัสห้อง",
	"ชื่อห้อง",
	"รหัสตึก",
	"ชั้น",
	"สถานะ",
	"ระดับห้อง",
	"ความจุ"
];

const RoomManagement: React.FC = () => {
	const [rooms, setRooms] = useState<Room[]>([{
		rnumber: "R101",
		rname: "ห้องประชุมใหญ่",
		bname: "B1",
		flname: "1",
		sname: "ว่าง",
		vip: "0",
		capacity: 20
	}]);

	const [searchTerm, setSearchTerm] = useState("");
	const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
	const [mode, setMode] = useState<"edit" | "delete" | null>(null);

	const handleRowClick = (room: Room) => {
		if (mode === "edit") {
			alert(`Edit: ${room.rname}`);
		} else if (mode === "delete") {
			alert(`Delete: ${room.rname}`);
		}
	};

	const filteredRooms = rooms.filter((room) =>
		Object.values(room).some((val) =>
			val.toString().toLowerCase().includes(searchTerm.toLowerCase())
		)
	);

	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<div className="mb-6 flex justify-between items-center">
				<div className="space-x-2">

					<button
						onClick={() => alert("Add Room")}
						className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
					>
						<FontAwesomeIcon icon={faPlus} className="mr-2" />
						Add
					</button>
					<button
						onClick={() => setMode(mode === "edit" ? null : "edit")}
						className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100"
					>
						<FontAwesomeIcon icon={faEdit} className="mr-2" />
						{mode === "edit" ? "Cancel Edit" : "Edit"}
					</button>

					<button
						onClick={() => setMode(mode === "delete" ? null : "delete")}
						className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
					>
						<FontAwesomeIcon icon={faTrash} className="mr-2" />
						{mode === "delete" ? "Cancel Delete" : "Delete"}
					</button>

				</div>
				<div className="flex items-center gap-2">
					<input
						type="text"
						placeholder="Search..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-64 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<FontAwesomeIcon icon={faSearch} className="text-gray-500" />
				</div>
			</div>

			<div className="overflow-auto rounded-lg shadow">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-100">
						<tr>
							{columns.map((col, idx) => (
								<th key={idx} className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
									{col}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{filteredRooms.map((room) => (
							<tr
								key={room.rnumber}
								className={`hover:bg-gray-100 transition ${mode ? 'cursor-pointer' : ''}`}
								onClick={() => handleRowClick(room)}
							>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{room.rnumber}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{room.rname}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{room.bname}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{room.flname}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{room.sname}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{room.vip === "1" ? "VIP" : "Normal"}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{room.capacity}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RoomManagement;
