"use client";
import React, { useState } from "react";
import { Plus, Edit, Trash2, Search, X, AlertCircle } from "lucide-react";

interface PositionItem {
	id: string;
	name: string;
	access: string;
}

const Position = () => {
	const [positions, setPositions] = useState<PositionItem[]>([
		{ id: "POS001", name: "เจ้าหน้าที่", access: "110000" },
		{ id: "POS002", name: "ผู้ดูแลระบบ", access: "111111" },
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [mode, setMode] = useState<"add" | "edit" | "delete" | null>(null);
	const [selectedPosition, setSelectedPosition] = useState<PositionItem | null>(null);
	const [formData, setFormData] = useState({ id: "", name: "", access: "" });
	const [showModal, setShowModal] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(false);

	const filteredPositions = positions.filter(
		(pos) =>
			pos.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
			pos.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleAddClick = () => {
		setMode("add");
		setFormData({ id: `POS00${positions.length + 1}`, name: "", access: "" });
		setShowModal(true);
	};

	const handleEditClick = (pos: PositionItem) => {
		setMode("edit");
		setSelectedPosition(pos);
		setFormData({ ...pos });
		setShowModal(true);
	};

	const handleDeleteClick = (pos: PositionItem) => {
		setMode("delete");
		setSelectedPosition(pos);
		setConfirmDelete(true);
	};

	const handleFormSubmit = () => {
		if (mode === "add") {
			setPositions([...positions, formData]);
		} else if (mode === "edit" && selectedPosition) {
			setPositions(positions.map((p) => (p.id === selectedPosition.id ? formData : p)));
		}
		closeModal();
	};

	const handleConfirmDelete = () => {
		if (selectedPosition) {
			setPositions(positions.filter((p) => p.id !== selectedPosition.id));
		}
		closeModal();
	};

	const closeModal = () => {
		setShowModal(false);
		setConfirmDelete(false);
		setMode(null);
		setSelectedPosition(null);
	};

	return (
		<div className="min-h-screen bg-gray-50 p-6">
			<div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
				<h1 className="text-2xl font-bold text-gray-800 mb-6">ตำแหน่ง</h1>

				<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
					<button
						onClick={handleAddClick}
						className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
					>
						<Plus size={18} />
						เพิ่มตำแหน่ง
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
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ชื่อตำแหน่ง</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">สิทธิ์</th>
								<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">จัดการ</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{filteredPositions.length > 0 ? (
								filteredPositions.map((position) => (
									<tr key={position.id} className="hover:bg-gray-50 transition">
										<td className="px-6 py-4 text-sm text-gray-900">{position.id}</td>
										<td className="px-6 py-4 text-sm text-gray-700">{position.name}</td>
										<td className="px-6 py-4 text-sm text-gray-700">{position.access}</td>
										<td className="px-6 py-4 text-right">
											<div className="flex justify-end gap-2">
												<button
													onClick={() => handleEditClick(position)}
													className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-gray-100"
													title="แก้ไข"
												>
													<Edit size={18} />
												</button>
												<button
													onClick={() => handleDeleteClick(position)}
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
									<td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-500">
										<div className="flex flex-col items-center gap-2">
											<AlertCircle size={24} className="text-gray-400" />
											<p>ไม่พบตำแหน่ง</p>
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
								{mode === "add" ? "เพิ่มตำแหน่ง" : "แก้ไขตำแหน่ง"}
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
								<label className="block text-sm font-medium text-gray-700">ชื่อตำแหน่ง</label>
								<input
									type="text"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">สิทธิ์</label>
								<input
									type="text"
									value={formData.access}
									onChange={(e) => setFormData({ ...formData, access: e.target.value })}
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
			{confirmDelete && selectedPosition && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
						<div className="text-center">
							<AlertCircle size={36} className="text-red-600 mx-auto mb-3" />
							<h3 className="text-lg font-medium text-gray-900 mb-2">ยืนยันการลบ</h3>
							<p className="text-sm text-gray-600 mb-6">
								คุณแน่ใจหรือไม่ว่าต้องการลบตำแหน่ง “{selectedPosition.name}”?
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

export default Position;
