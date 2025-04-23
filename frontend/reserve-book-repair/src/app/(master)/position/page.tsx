"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";

interface PositionItem {
	id: string;
	name: string;
	access: string;
}

const columns = ["รหัสตำแหน่ง", "ชื่อตำแหน่ง", "สิทธิ์การเข้าใช้"];

const Position: React.FC = () => {
	const [positions, setPositions] = useState<PositionItem[]>([
		{ id: "POS001", name: "เจ้าหน้าที่", access: "110000" },
		{ id: "POS002", name: "ผู้ดูแลระบบ", access: "111111" },
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [mode, setMode] = useState<"edit" | "delete" | null>(null);

	const handleRowClick = (position: PositionItem) => {
		if (mode === "edit") {
			alert(`Edit: ${position.name}`);
		} else if (mode === "delete") {
			alert(`Delete: ${position.name}`);
		}
	};

	const filteredPositions = positions.filter((pos) =>
		pos.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<div className="mb-6 flex justify-between items-center">
				<div className="space-x-2">
					<button
						onClick={() => alert("Add Position")}
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
						className="border px-3 py-2 rounded w-64"
					/>
					<FontAwesomeIcon icon={faSearch} className="text-gray-500" />
				</div>
			</div>

			<div className="overflow-auto rounded-lg shadow">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-100">
						<tr>
							{columns.map((col, idx) => (
								<th
									key={idx}
									className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
								>
									{col}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{filteredPositions.map((position) => (
							<tr
								key={position.id}
								className={`hover:bg-gray-100 transition ${mode ? "cursor-pointer" : ""}`}
								onClick={() => handleRowClick(position)}
							>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{position.id}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{position.name}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{position.access}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Position;
