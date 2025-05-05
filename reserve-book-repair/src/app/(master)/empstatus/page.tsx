"use client";
import React, { useState } from "react";
import { Plus, Edit, Trash2, Search, X, AlertCircle } from "lucide-react";

interface StatusItem {
	id: string;
	name: string;
}

const Status = () => {
	const [statuses, setStatuses] = useState<StatusItem[]>([
		{ id: "EMP001", name: "พนักงานประจำ" },
		{ id: "EMP002", name: "พนักงานพาร์ทไทม์" },
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [mode, setMode] = useState<"add" | "edit" | "delete" | null>(null);
	const [selectedStatus, setSelectedStatus] = useState<StatusItem | null>(null);
	const [formData, setFormData] = useState({ id: "", name: "" });
	const [showModal, setShowModal] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(false);

	const filteredStatuses = statuses.filter((status) =>
		status.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
		status.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleAddClick = () => {
		setMode("add");
		setFormData({ id: `EMP00${statuses.length + 1}`, name: "" });
		setShowModal(true);
	};

	const handleEditClick = (status: StatusItem) => {
		setMode("edit");
		setSelectedStatus(status);
		setFormData({ ...status });
		setShowModal(true);
	};

	const handleDeleteClick = (status: StatusItem) => {
		setMode("delete");
		setSelectedStatus(status);
		setConfirmDelete(true);
	};

	const handleFormSubmit = () => {
		if (mode === "add") {
			setStatuses([...statuses, formData]);
		} else if (mode === "edit" && selectedStatus) {
			setStatuses(
				statuses.map((s) => (s.id === selectedStatus.id ? formData : s))
			);
		}
		closeModal();
	};

	const handleConfirmDelete = () => {
		if (selectedStatus) {
			setStatuses(statuses.filter((s) => s.id !== selectedStatus.id));
		}
		closeModal();
	};

	const closeModal = () => {
		setShowModal(false);
		setConfirmDelete(false);
		setMode(null);
		setSelectedStatus(null);
	};

	return (
		<div className="min-h-screen bg-gray-50 p-6">
			<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
				<h1 className="text-2xl font-bold text-gray-800 mb-6">สถานะพนักงาน</h1>

				<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
					<button
						onClick={handleAddClick}
						className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
					>
						<Plus size={18} />
						เพิ่มสถานะ
					</button>

					<div className="relative w-full md:w-auto">
						<input
							type="text"
							placeholder="ค้นหา..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

				<div className="overflow-hidden border border-gray-200 rounded-lg">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">รหัส</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ชื่อสถานะ</th>
								<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">จัดการ</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{filteredStatuses.length > 0 ? (
								filteredStatuses.map((status) => (
									<tr key={status.id} className="hover:bg-gray-50 transition">
										<td className="px-6 py-4 text-sm text-gray-900">{status.id}</td>
										<td className="px-6 py-4 text-sm text-gray-700">{status.name}</td>
										<td className="px-6 py-4 text-right">
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
										<div className="flex flex-col items-center gap-2">
											<AlertCircle size={24} className="text-gray-400" />
											<p>ไม่พบสถานะ</p>
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
			</div>

			{/* Modal Add/Edit */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
						<div className="flex justify-between items-center mb-4">
							<h3 className="text-lg font-medium text-gray-900">
								{mode === "add" ? "เพิ่มสถานะ" : "แก้ไขสถานะ"}
							</h3>
							<button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
								<X size={20} />
							</button>
						</div>
						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">รหัส</label>
								<input
									type="text"
									value={formData.id}
									onChange={(e) => setFormData({ ...formData, id: e.target.value })}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">ชื่อสถานะ</label>
								<input
									type="text"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div className="mt-6 flex justify-end gap-2">
							<button
								onClick={closeModal}
								className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md"
							>
								ยกเลิก
							</button>
							<button
								onClick={handleFormSubmit}
								className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
							>
								{mode === "add" ? "เพิ่ม" : "บันทึก"}
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Confirm Delete Modal */}
			{confirmDelete && selectedStatus && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
						<div className="text-center">
							<AlertCircle size={36} className="text-red-600 mx-auto mb-3" />
							<h3 className="text-lg font-medium text-gray-900 mb-2">ยืนยันการลบ</h3>
							<p className="text-sm text-gray-600 mb-6">
								คุณแน่ใจหรือไม่ว่าต้องการลบสถานะ “{selectedStatus.name}”?
							</p>
							<div className="flex justify-center gap-3">
								<button
									onClick={closeModal}
									className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md"
								>
									ยกเลิก
								</button>
								<button
									onClick={handleConfirmDelete}
									className="px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
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

export default Status;
