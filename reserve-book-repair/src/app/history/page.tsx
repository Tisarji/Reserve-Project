"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import imgroom from "@/app/image/room.png";
import { Check, X, Clock, Shield, ShoppingBag, ThumbsDown, QrCode, Trash2 } from "lucide-react";

interface HistoryStatusItem {
	img: StaticImageData

	buiding: string;
	open: string;
	room: string;
	class: string;

	time: string;
	date: string;
	bookingdetail: string;
	bookterm: string;

	status: string;
}

const columns = ["รูปภาพห้อง", "ข้อมูลการจอง", "สถานะการจอง"];

const History: React.FC = () => {
	const [statuses, setStatuses] = useState<HistoryStatusItem[]>([
		{
			img: imgroom,

			buiding: "K101",
			open: "Monday - Friday",
			room: "7 - 8 people",
			class: "Normal",

			time: "09.00 - 12.00",
			date: "17 September 2024",
			bookingdetail: "Tutorial.",
			bookterm: "Auto Verify",

			status: "Booking accepted"

		},
		{
			img: imgroom,

			buiding: "K102",
			open: "Monday - Friday",
			room: "7 - 8 people",
			class: "Normal",

			time: "09.00 - 12.00",
			date: "17 September 2024",
			bookingdetail: "Tutorial.",
			bookterm: "Auto Verify",

			status: "Booking canceled"

		},
		{
			img: imgroom,

			buiding: "K103",
			open: "Monday - Friday",
			room: "7 - 8 people",
			class: "Normal",

			time: "09.00 - 12.00",
			date: "17 September 2024",
			bookingdetail: "Tutorial.",
			bookterm: "Auto Verify",

			status: "Booking rejected"

		}
	]);


	const [searchTerm, setSearchTerm] = useState("");
	const [mode, setMode] = useState<null>(null);

	const filteredStatuses = statuses.filter((status) =>
		searchTerm === "" || status.status === searchTerm
	);

	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<div className="mb-6 flex justify-between items-center">
				<div className="space-x-2">
				</div>
				<div className="flex items-center gap-2">
					<select
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="border px-2 py-2 rounded w-50"
					>
						<option value="">All Statuses</option>
						<option value="Booking accepted">Booking accepted</option>
						<option value="Booking canceled">Booking canceled</option>
						<option value="Booking on wait">Booking on wait</option>
						<option value="Booking rejected">Booking rejected</option>
						<option value="Booking completed">Booking completed</option>
						<option value="-1 TIG">-1 TIG</option>
					</select>
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
						{filteredStatuses.map((status) => (

							<tr
								className={`hover:bg-gray-100 transition ${mode ? "cursor-pointer" : ""}`}
								onClick={() => (status)}
							>

								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><Image src={status.img} alt="Room image" width={200} height={100} className="rounded" /></td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
										<div>Buiding : {status.buiding}</div>
										<div>open : {status.open}</div>
										<div>room : {status.room}</div>
										<div>class : {status.class}</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
										<div>time : {status.time}</div>
										<div>date : {status.date}</div>
										<div>bookingdetail : {status.bookingdetail}</div>
										<div>bookterm : {status.bookterm}</div>
									</td>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									{status.status === "Booking accepted" ? (
										<div className="flex items-center gap-2 text-green-600 text-base">
											<Check className="w-8 h-8" />
											<span>{status.status}</span>
											<QrCode className="ml-8 w-8 h-8 text-blue-600" />
											<Trash2 className="ml-2 w-8 h-8 text-red-600" />
										</div>
									) :
										status.status === "Booking canceled" ? (
											<div className="flex items-center gap-2 text-red-500 text-base">
												<X className="w-8 h-8" />
												<span>{status.status}</span>
											</div>
										) :
											status.status === "Booking on wait" ? (
												<div className="flex items-center gap-2 text-blue-600 text-base">
													<Clock className="w-8 h-8" />
													<span>{status.status}</span>
												</div>
											) :
												status.status === "Booking rejected" ? (
													<div className="flex items-center gap-2 text-orange-500 text-base">
														<Shield className="w-8 h-8" />
														<span>{status.status}</span>
													</div>
												) :
													status.status === "Booking completed" ? (
														<div className="flex items-center gap-2 text-blue-500 text-base">
															<ShoppingBag className="w-8 h-8" />
															<span>{status.status}</span>
														</div>
													) :
														status.status === "-1 TIG" ? (
															<div className="flex items-center gap-2 text-red-500 text-base">
																<ThumbsDown className="w-8 h-8" />
																<span>{status.status}</span>
															</div>
														) :
															(
																<span>{status.status}</span>
															)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default History;
