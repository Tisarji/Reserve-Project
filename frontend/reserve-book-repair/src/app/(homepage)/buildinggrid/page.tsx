"use client";

import Image from "next/image";
import buildingImg from '../../image/homepage/building.png';

const mockBuildings = [
	{ bname: "A" },
	{ bname: "B" },
	{ bname: "C" },
	{ bname: "D" },
];

const BuildingGrid = () => {
	return (
		<div className="container mx-auto py-10">
			<p className="text-xl font-bold mb-6">Buildings</p>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				{mockBuildings.map((building, index) => (
					<div
						key={index}
						className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
						onClick={() => (window.location.href = "/reserve")}
					>
						<Image src={buildingImg} alt={building.bname} width={300} height={200} />
						<h3 className="text-center py-2 font-medium">Building {building.bname}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default BuildingGrid;
