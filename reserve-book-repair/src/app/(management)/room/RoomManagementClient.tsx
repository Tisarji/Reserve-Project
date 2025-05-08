"use client";

import React, { useState } from "react";
import { Plus, Edit, Trash2, Search, X, AlertCircle } from "lucide-react";

type Room = {
	rnumber: string;
	rname: string;
	bname: string;
	flname: { FlName: string };
	sname: string;
	vip: string;
	capacity: number;
};

type Props = {
	rooms: Room[];
};

export default function RoomManagementClient({ rooms }: Props) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredRooms = rooms.filter((room) =>
		Object.entries(room).some(([_, val]) => {
			if (val == null) return false;
			if (typeof val === "object") {
				return Object.values(val).some(v =>
					String(v).toLowerCase().includes(searchTerm.toLowerCase())
				);
			}
			return String(val).toLowerCase().includes(searchTerm.toLowerCase());
		})
	);

	return (
		<div className="min-h-screen bg-gray-50 p-6">
			<div className="max-w-6xl mx-auto">
				<div className="bg-white rounded-xl shadow-md p-6 mb-6">
					<h1 className="text-2xl font-bold text-gray-800 mb-6">จัดการห้อง</h1>

					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
						<div className="flex flex-wrap gap-2">
							<button
								onClick={() => alert("Add Room")}
								className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 text-sm font-medium"
							>
								<Plus size={18} />
								เพิ่มห้อง
							</button>
						</div>

						<div className="relative w-full md:w-auto">
							<div className="relative">
								<input
									type="text"
									placeholder="ค้นหา..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
								<Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
								{searchTerm && (
									<button
										onClick={() => setSearchTerm("")}
										className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
									>
										<X size={16} />
									</button>
								)}
							</div>
						</div>
					</div>

					<div className="overflow-hidden rounded-lg border border-gray-200">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รหัสห้อง</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อห้อง</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รหัสตึก</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชั้น</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">สถานะ</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ระดับห้อง</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ความจุ</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">จัดการ</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{filteredRooms.length > 0 ? (
									filteredRooms.map((room) => (
										<tr key={room.rnumber} className="hover:bg-gray-50 transition">
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{room.rnumber}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{room.rname}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{room.bname}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{room.flname.FlName}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{room.sname}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{room.vip === "1" ? "VIP" : "ปกติ"}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{room.capacity}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
												<div className="flex gap-2">
													<button
														onClick={() => alert(`Edit ${room.rnumber}`)}
														className="text-blue-600 hover:text-blue-800"
													>
														<Edit size={18} />
													</button>
													<button
														onClick={() =>
															confirm(`ยืนยันการลบห้อง ${room.rnumber}?`) && alert(`Delete ${room.rnumber}`)
														}
														className="text-red-600 hover:text-red-800"
													>
														<Trash2 size={18} />
													</button>
												</div>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan={8} className="px-6 py-8 text-center text-sm text-gray-500">
											<div className="flex flex-col items-center justify-center gap-2">
												<AlertCircle size={24} className="text-gray-400" />
												<p>ไม่พบข้อมูลห้อง</p>
												{searchTerm && (
													<button
														onClick={() => setSearchTerm("")}
														className="text-blue-600 hover:underline text-sm mt-1"
													>
														ล้างการค้นหา
													</button>
												)}
											</div>
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>

					{filteredRooms.length > 0 && (
						<div className="mt-4 text-sm text-gray-500 px-2">
							แสดง {filteredRooms.length} จาก {rooms.length} รายการ
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
