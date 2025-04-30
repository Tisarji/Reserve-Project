"use client";

import Image from "next/image";

const mockRooms = [
	{ bname: "A", rname: "101" },
	{ bname: "A", rname: "102" },
	{ bname: "B", rname: "201" },
	{ bname: "C", rname: "301" },
];

const RoomGrid = () => {
	return (
		<div className="container mx-auto py-10">
			<p className="text-xl font-bold mb-6">Rooms</p>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				{mockRooms.map((room, index) => (
					<div
						key={index}
						className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
						onClick={() => (window.location.href = "/booking")}
					>
						<Image src="/homepage/room.png" alt="Room" width={300} height={200} />
						<div className="p-4">
							<h3 className="font-semibold">Building {room.bname}</h3>
							<p>{room.rname}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RoomGrid;
