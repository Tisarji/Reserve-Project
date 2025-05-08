"use client";
import React, { useState } from "react";
import { Search, Plus, Edit, Trash2, AlertCircle, X } from "lucide-react";

interface User {
	enumber: string;
	fname: string;
	lname: string;
	dname: string;
	pname: string;
	sname: string;
	score: number;
}

interface Props {
	users: User[];
}

export default function UserManagementClient({ users }: Props) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredUsers = users.filter(user =>
		Object.values(user).some(val =>
			val.toString().toLowerCase().includes(searchTerm.toLowerCase())
		)
	);

	return (
		<div className="min-h-screen bg-gray-50 p-6">
			<div className="max-w-6xl mx-auto">
				<div className="bg-white rounded-xl shadow-md p-6 mb-6">
					<h1 className="text-2xl font-bold text-gray-800 mb-6">จัดการผู้ใช้</h1>

					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
						<div className="flex flex-wrap gap-2">
							<button
								onClick={() => alert("Add User")}
								className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 text-sm font-medium"
							>
								<Plus size={18} />
								เพิ่มผู้ใช้
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
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รหัสผู้ใช้</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อ</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">นามสกุล</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">แผนก</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ตำแหน่ง</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">สถานะ</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">คะแนน</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">จัดการ</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{filteredUsers.length > 0 ? (
									filteredUsers.map(user => (
										<tr key={user.enumber} className="hover:bg-gray-50 transition">
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.enumber}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.fname}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.lname}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.dname}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.pname}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.sname}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.score}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
												<div className="flex gap-2">
													<button
														onClick={() => alert(`Edit ${user.enumber}`)}
														className="text-blue-600 hover:text-blue-800"
													>
														<Edit size={18} />
													</button>
													<button
														onClick={() => confirm(`ยืนยันการลบผู้ใช้ ${user.enumber}?`) && alert(`Delete ${user.enumber}`)}
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
												<p>ไม่พบข้อมูลผู้ใช้</p>
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

					{filteredUsers.length > 0 && (
						<div className="mt-4 text-sm text-gray-500 px-2">
							แสดง {filteredUsers.length} จาก {users.length} รายการ
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
