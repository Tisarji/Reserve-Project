"use client";

import React, { useState } from "react";
import { Search, Plus, Edit, Trash2, AlertCircle, X, Check } from "lucide-react";

interface BookingStatusItem {
	id: string;
	name: string;
}

const BookingStatus = () => {
	const [statuses, setStatuses] = useState<BookingStatusItem[]>([
		{ id: "S001", name: "กำลังดำเนินการ" },
		{ id: "S002", name: "จองแล้ว" },
		{ id: "S003", name: "ยกเลิกการจอง" },
		{ id: "S004", name: "เสร็จสิ้น" }
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [mode, setMode] = useState<"add" | "edit" | "delete" | null>(null);
	const [selectedStatus, setSelectedStatus] = useState<BookingStatusItem | null>(null);
	const [formData, setFormData] = useState({ id: "", name: "" });
	const [showModal, setShowModal] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(false);

	const filteredStatuses = statuses.filter((status) =>
		status.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
		status.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleAddClick = () => {
		setMode("add");
		setFormData({ id: `S00${statuses.length + 1}`, name: "" });
		setShowModal(true);
	};

	const handleEditClick = (status: BookingStatusItem) => {
		setMode("edit");
		setSelectedStatus(status);
		setFormData({ ...status });
		setShowModal(true);
	};

	const handleDeleteClick = (status: BookingStatusItem) => {
		setMode("delete");
		setSelectedStatus(status);
		setConfirmDelete(true);
	};

	const handleFormSubmit = (e: React.MouseEvent) => {
		e.preventDefault();

		if (mode === "add") {
			setStatuses([...statuses, formData]);
		} else if (mode === "edit" && selectedStatus) {
			setStatuses(
				statuses.map((status) =>
					status.id === selectedStatus.id ? formData : status
				)
			);
		}

		setShowModal(false);
		setMode(null);
		setSelectedStatus(null);
	};

	const handleConfirmDelete = () => {
		if (selectedStatus) {
			setStatuses(statuses.filter((status) => status.id !== selectedStatus.id));
		}
		setConfirmDelete(false);
		setMode(null);
		setSelectedStatus(null);
	};

	const closeModal = () => {
		setShowModal(false);
		setConfirmDelete(false);
		setMode(null);
		setSelectedStatus(null);
	};

	return (
		<div className="min-h-screen bg-gray-50 p-6">
			<div className="max-w-6xl mx-auto">
				<div className="bg-white rounded-xl shadow-md p-6 mb-6">
					<h1 className="text-2xl font-bold text-gray-800 mb-6">สถานะการจอง</h1>

					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
						<div className="flex flex-wrap gap-2">
							<button
								onClick={handleAddClick}
								className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 text-sm font-medium"
							>
								<Plus size={18} />
								เพิ่มสถานะ
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
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รหัสสถานะ</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">สถานะการจอง</th>
									<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">จัดการ</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{filteredStatuses.length > 0 ? (
									filteredStatuses.map((status) => (
										<tr key={status.id} className="hover:bg-gray-50 transition">
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{status.id}</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{status.name}</td>
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<div className="flex justify-end gap-2">
													<button
														onClick={() => handleEditClick(status)}
														className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-gray-100"
														title="แก้ไข"
													>
														<Edit size={18} />
													</button>
													<button
														onClick={() => handleDeleteClick(status)}
														className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-gray-100"
														title="ลบ"
													>
														<Trash2 size={18} />
													</button>
												</div>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan={3} className="px-6 py-8 text-center text-sm text-gray-500">
											<div className="flex flex-col items-center justify-center gap-2">
												<AlertCircle size={24} className="text-gray-400" />
												<p>ไม่พบข้อมูลสถานะการจอง</p>
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

					{filteredStatuses.length > 0 && (
						<div className="mt-4 text-sm text-gray-500 px-2">
							แสดง {filteredStatuses.length} จาก {statuses.length} รายการ
						</div>
					)}
				</div>
			</div>

			{/* Add/Edit Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
					<div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
						<div className="flex justify-between items-center p-6 border-b">
							<h3 className="text-lg font-medium text-gray-900">
								{mode === "add" ? "เพิ่มสถานะการจอง" : "แก้ไขสถานะการจอง"}
							</h3>
							<button
								onClick={closeModal}
								className="text-gray-400 hover:text-gray-600"
							>
								<X size={20} />
							</button>
						</div>
						<div className="p-6 space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									รหัสสถานะ
								</label>
								<input
									type="text"
									value={formData.id}
									onChange={(e) => setFormData({ ...formData, id: e.target.value })}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									ชื่อสถานะ
								</label>
								<input
									type="text"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
							</div>
						</div>
						<div className="bg-gray-50 px-6 py-4 flex justify-end gap-2">
							<button
								type="button"
								onClick={closeModal}
								className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
							>
								ยกเลิก
							</button>
							<button
								onClick={handleFormSubmit}
								className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
							>
								{mode === "add" ? "เพิ่ม" : "บันทึก"}
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Delete Confirmation Modal */}
			{confirmDelete && selectedStatus && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
					<div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
						<div className="p-6">
							<div className="flex items-center justify-center mb-4 text-red-600">
								<AlertCircle size={40} />
							</div>
							<h3 className="text-lg font-medium text-center text-gray-900 mb-2">
								ยืนยันการลบ
							</h3>
							<p className="text-center text-gray-600 mb-6">
								คุณต้องการลบสถานะ "{selectedStatus.name}" ใช่หรือไม่?
							</p>
							<div className="flex justify-center gap-3">
								<button
									onClick={closeModal}
									className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
								>
									ยกเลิก
								</button>
								<button
									onClick={handleConfirmDelete}
									className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700"
								>
									ลบ
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default BookingStatus;
