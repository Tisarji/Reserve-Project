"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Room {
	rnumber: number;
	rname: string;
	bname: number;
	flname: { FlNumber: number; FlName: string; BNo: number };
	sname: string;
	vip: string;
	capacity: number;
}

interface Props {
	rooms: Room[];
}

const columns = [
	"รหัสห้อง", "ชื่อห้อง", "รหัสตึก", "ชั้น", "สถานะ", "ระดับห้อง", "ความจุ"
];

export default function RoomManagementClient({ rooms }: Props) {
	const [searchTerm, setSearchTerm] = useState("");
	const [mode, setMode] = useState<"none" | "add" | "edit" | "delete">("none");

	const filteredRooms = rooms.filter((room) =>
		Object.entries(room).some(([key, val]) => {
			if (val === null || val === undefined) return false;
			if (typeof val === "object") {
				return Object.values(val).some(v =>
					String(v).toLowerCase().includes(searchTerm.toLowerCase())
				);
			}
			return String(val).toLowerCase().includes(searchTerm.toLowerCase());
		})
	);

	const handleAdd = () => {
		setMode("add");
		console.log("Entering Add Mode...");
		// TODO: Open modal or show form
	};

	const handleEdit = () => {
		setMode("edit");
		console.log("Entering Edit Mode...");
		// TODO: Toggle edit UI
	};

	const handleDelete = () => {
		setMode("delete");
		console.log("Entering Delete Mode...");
		// TODO: Allow row selection and deletion
	};

	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<div className="mb-6 flex justify-between items-center flex-wrap gap-4">
				<div className="space-x-2">
					<Button onClick={handleAdd}>
						<FontAwesomeIcon icon={faPlus} className="mr-2" />
						เพิ่มห้อง
					</Button>
					<Button variant="outline" onClick={handleEdit}>
						<FontAwesomeIcon icon={faEdit} className="mr-2" />
						แก้ไข
					</Button>
					<Button variant="destructive" onClick={handleDelete}>
						<FontAwesomeIcon icon={faTrash} className="mr-2" />
						ลบ
					</Button>
				</div>
				<div className="flex items-center gap-2">
					<Input
						type="text"
						placeholder="ค้นหา..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-64"
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
							<tr key={room.rnumber} className="hover:bg-gray-100 transition">
								<td className="px-6 py-4 text-sm text-gray-900">{room.rnumber}</td>
								<td className="px-6 py-4 text-sm text-gray-900">{room.rname}</td>
								<td className="px-6 py-4 text-sm text-gray-900">{room.bname}</td>
								<td className="px-6 py-4 text-sm text-gray-900">{room.flname.FlName}</td>
								<td className="px-6 py-4 text-sm text-gray-900">{room.sname}</td>
								<td className="px-6 py-4 text-sm text-gray-900">{room.vip === "1" ? "VIP" : "Normal"}</td>
								<td className="px-6 py-4 text-sm text-gray-900">{room.capacity}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
