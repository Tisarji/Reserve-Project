"use client";
import React, { useState } from "react";
import { Plus, Edit, Trash2, Search, X, AlertCircle } from "lucide-react";

interface DepartmentItem {
	id: string;
	name: string;
}

const Department = () => {
	const [departments, setDepartments] = useState<DepartmentItem[]>([
		{ id: "D001", name: "แผนกวิศวกรรม" },
		{ id: "D002", name: "แผนกบัญชี" }
	]);
	const [searchTerm, setSearchTerm] = useState("");
	const [mode, setMode] = useState<"add" | "edit" | "delete" | null>(null);
	const [selectedDepartment, setSelectedDepartment] = useState<DepartmentItem | null>(null);
	const [formData, setFormData] = useState<DepartmentItem>({ id: "", name: "" });
	const [showModal, setShowModal] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(false);

	const filteredDepartments = departments.filter((d) =>
		d.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
		d.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleAddClick = () => {
		setMode("add");
		setFormData({ id: `D00${departments.length + 1}`, name: "" });
		setShowModal(true);
	};

	const handleEditClick = (department: DepartmentItem) => {
		setMode("edit");
		setSelectedDepartment(department);
		setFormData({ ...department });
		setShowModal(true);
	};

	const handleDeleteClick = (department: DepartmentItem) => {
		setMode("delete");
		setSelectedDepartment(department);
		setConfirmDelete(true);
	};

	const handleFormSubmit = () => {
		if (mode === "add") {
			setDepartments([...departments, formData]);
		} else if (mode === "edit" && selectedDepartment) {
			setDepartments(
				departments.map((d) => (d.id === selectedDepartment.id ? formData : d))
			);
		}
		closeModal();
	};

	const handleConfirmDelete = () => {
		if (selectedDepartment) {
			setDepartments(departments.filter((d) => d.id !== selectedDepartment.id));
		}
		closeModal();
	};

	const closeModal = () => {
		setShowModal(false);
		setConfirmDelete(false);
		setMode(null);
		setSelectedDepartment(null);
	};

	return (
		<div className="min-h-screen bg-gray-50 p-6">
			<div className="max-w-6xl mx-auto">
				<div className="bg-white rounded-xl shadow-md p-6 mb-6">
					<h1 className="text-2xl font-bold text-gray-800 mb-6">ข้อมูลแผนก</h1>

					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
						<div className="flex flex-wrap gap-2">
							<button
								onClick={handleAddClick}
								className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 text-sm font-medium"
							>
								<Plus size={18} />
								เพิ่มแผนก
							</button>
						</div>

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

					<div className="overflow-hidden rounded-lg border border-gray-200">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รหัสแผนก</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อแผนก</th>
									<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">จัดการ</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{filteredDepartments.length > 0 ? (
									filteredDepartments.map((department) => (
										<tr key={department.id} className="hover:bg-gray-50 transition">
											<td className="px-6 py-4 text-sm font-medium text-gray-900">{department.id}</td>
											<td className="px-6 py-4 text-sm text-gray-700">{department.name}</td>
											<td className="px-6 py-4 text-right text-sm font-medium">
												<div className="flex justify-end gap-2">
													<button
														onClick={() => handleEditClick(department)}
														className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-gray-100"
														title="แก้ไข"
													>
														<Edit size={18} />
													</button>
													<button
														onClick={() => handleDeleteClick(department)}
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
												<p>ไม่พบข้อมูลแผนก</p>
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

					{filteredDepartments.length > 0 && (
						<div className="mt-4 text-sm text-gray-500 px-2">
							แสดง {filteredDepartments.length} จาก {departments.length} รายการ
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
								{mode === "add" ? "เพิ่มแผนก" : "แก้ไขข้อมูลแผนก"}
							</h3>
							<button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
								<X size={20} />
							</button>
						</div>
						<div className="p-6 space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">รหัสแผนก</label>
								<input
									type="text"
									value={formData.id}
									onChange={(e) => setFormData({ ...formData, id: e.target.value })}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">ชื่อแผนก</label>
								<input
									type="text"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
						</div>
						<div className="bg-gray-50 px-6 py-4 flex justify-end gap-2">
							<button
								onClick={closeModal}
								className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
							>
								ยกเลิก
							</button>
							<button
								onClick={handleFormSubmit}
								className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
							>
								{mode === "add" ? "เพิ่ม" : "บันทึก"}
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Delete Confirmation Modal */}
			{confirmDelete && selectedDepartment && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
					<div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
						<div className="p-6">
							<div className="flex items-center justify-center mb-4 text-red-600">
								<AlertCircle size={40} />
							</div>
							<h3 className="text-lg font-medium text-center text-gray-900 mb-2">ยืนยันการลบ</h3>
							<p className="text-center text-gray-600 mb-6">
								คุณต้องการลบแผนก "{selectedDepartment.name}" ใช่หรือไม่?
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
									className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
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

export default Department;
