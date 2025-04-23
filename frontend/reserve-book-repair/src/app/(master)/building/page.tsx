"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";

interface BuildingItem {
	id: string;
	name: string;
	floorCount: number;
}

const columns = ["รหัสชั้น", "ชื่อตึก", "จำนวนชั้น"];

const Building: React.FC = () => {
	const [buildingList, setBuildingList] = useState<BuildingItem[]>([
		{ id: "B001", name: "ตึก A", floorCount: 5 },
		{ id: "B002", name: "ตึก B", floorCount: 3 },
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [mode, setMode] = useState<"edit" | "delete" | null>(null);

	const handleRowClick = (building: BuildingItem) => {
		if (mode === "edit") {
			alert(`Edit: ${building.name}`);
		} else if (mode === "delete") {
			alert(`Delete: ${building.name}`);
		}
	};

	const filteredBuildings = buildingList.filter((building) =>
		building.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<div className="mb-6 flex justify-between items-center">
				<div className="space-x-2">
					<button
						onClick={() => alert("Add Building")}
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
						{filteredBuildings.map((building) => (
							<tr
								key={building.id}
								className={`hover:bg-gray-100 transition ${mode ? "cursor-pointer" : ""}`}
								onClick={() => handleRowClick(building)}
							>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{building.id}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{building.name}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{building.floorCount}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Building;
