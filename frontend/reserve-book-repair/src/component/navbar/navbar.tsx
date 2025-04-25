"use client";

import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import logo from '../../app/image/MUT_LOGOBlue_crop.png'
import NotificationPanel from '../notification/notification';
import { Bell, CircleUserRound, LogOut } from 'lucide-react';


function Navbar() {

	const [managedrop, setmanage] = useState(false);
	const dropdownManageRef = useRef<HTMLLIElement | null>(null);
	const [masterdrop, setmaster] = useState(false);
	const dropdownMasterRef = useRef<HTMLLIElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (dropdownManageRef.current && !dropdownManageRef.current.contains(e.target as Node)) {
				setmanage(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (dropdownMasterRef.current && !dropdownMasterRef.current.contains(e.target as Node)) {
				setmaster(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<nav className="bg-white shadow-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="text-2xl font-bold text-blue-600">
							<Image src={logo} alt="MUTlogo" width={100} height={40} />
						</Link>
					</div>

					{/* Navigation Links Main */}
					<div className="hidden md:flex space-x-4">
						<Link href="/" className="text-gray-700 hover:text-blue-500">
							Home
						</Link>
						<Link href="/booking" className="text-gray-700 hover:text-blue-500">
							Booking
						</Link>
						<Link href="/history" className="text-gray-700 hover:text-blue-500">
							History
						</Link>

						<ul className="flex space-x-4">
							{/* Management Dropdown */}
							<li className="relative inline-block" ref={dropdownManageRef}>
								<button
									onClick={() => setmanage(!managedrop)}
									className="text-gray-800 hover:text-blue-500"
								>
									Management
								</button>

								{/* Dropdown submenu */}
								{managedrop && (
									<ul className="absolute left-0 mt-2 w-25 bg-white shadow-lg rounded-md z-50">
										<li><Link href="/room" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Room</Link></li>
										<li><Link href="/user" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">User</Link></li>
									</ul>
								)}
							</li>
						</ul>

						<ul className="flex space-x-4">
							{/* Master Dropdown */}
							<li className="relative inline-block" ref={dropdownMasterRef}>
								<button
									onClick={() => setmaster(!masterdrop)}
									className="text-gray-800 hover:text-blue-500"
								>
									Master
								</button>

								{/* Dropdown submenu */}
								{masterdrop && (
									<ul className="absolute left-0 mt-2 w-35 bg-white shadow-lg rounded-md z-50">
										<li><Link href="/department" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Department</Link></li>
										<li><Link href="/position" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Position</Link></li>
										<li><Link href="/building" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Building</Link></li>
										<li><Link href="/empstatus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">EmpStatus</Link></li>
										<li><Link href="/bookingstatus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">BookingStatus</Link></li>
										<li><Link href="/roomstatus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">RoomStatus</Link></li>
									</ul>
								)}
							</li>
						</ul>

						<Link href="/Report" className="text-gray-700 hover:text-blue-500">Report</Link>
					</div>

					{/* Navigation Links */}
					<div className="hidden md:flex space-x-4">
						<NotificationPanel />
						<Link href="/User" className="text-gray-700 hover:text-blue-500">
							<CircleUserRound className="w-6 h-6 text-blue-500" />
						</Link>
						<Link href="/login" className="text-gray-700 hover:text-blue-500">
							<LogOut className="w-6 h-6 text-blue-500" />
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
