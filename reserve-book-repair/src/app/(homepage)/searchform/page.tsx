"use client";

import Image from "next/image";
import MutLogo from '../../image/homepage/logo-black-full.png';
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SearchForm = () => {
	const capVal = [
		{ value: "1", label: "1" },
		{ value: "2", label: "2" },
		{ value: "3", label: "3" },
	];

	const classVal = [
		{ value: "Normal", label: "Normal" },
		{ value: "Vip", label: "Vip" },
	];

	const [capacity, setCapacity] = useState("");
	const [roomClass, setRoomClass] = useState("");

	// NOTE: This function should be fix for UX/UI better.
	return (
		<section className="w-full bg-gradient-to-br from-slate-800 to-slate-900 pt-12 pb-16 px-4">
			<div className="flex justify-center">
				<Card className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
					<div className="bg-white py-6 flex justify-center items-center">
						<Image
							src={MutLogo}
							alt="MUT Logo"
							width={200}
							height={50}
							className="object-contain"
						/>
					</div>

					<CardContent className="p-8 flex flex-col gap-6">
						<Input
							type="text"
							placeholder="Search room by name"
							className="w-full text-base"
						/>

						<div className="flex flex-wrap gap-4">
							<Input type="date" className="w-full sm:w-auto flex-1 min-w-[150px]" />
							<Input type="time" className="w-full sm:w-auto flex-1 min-w-[120px]" />
							<Input type="time" className="w-full sm:w-auto flex-1 min-w-[120px]" />

							<Select onValueChange={setCapacity}>
								<SelectTrigger className="w-full sm:w-auto flex-1 min-w-[150px]">
									<SelectValue placeholder="Capacity" />
								</SelectTrigger>
								<SelectContent>
									{capVal.map((cap) => (
										<SelectItem key={cap.value} value={cap.value}>
											{cap.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>

							<Select onValueChange={setRoomClass}>
								<SelectTrigger className="w-full sm:w-auto flex-1 min-w-[150px]">
									<SelectValue placeholder="Class" />
								</SelectTrigger>
								<SelectContent>
									{classVal.map((cls) => (
										<SelectItem key={cls.value} value={cls.value}>
											{cls.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div className="flex justify-center pt-4">
							<Button className="w-full md:w-1/3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 ease-in-out">
								🔍 FIND
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default SearchForm;
