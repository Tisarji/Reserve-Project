"use client";

import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import { Menu, X, Bell, CircleUserRound, LogOut , ArrowDown , ArrowUp} from 'lucide-react';
import logo from '../../app/image/MUT_LOGOBlue_crop.png';
import NotificationPanel from '../notification/notification';

function Navbar() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [managedrop, setmanage] = useState(false);
	const [masterdrop, setmaster] = useState(false);

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

					{/* Desktop menu */}
					<div className="hidden md:flex items-center space-x-6">
						<Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
						<Link href="/booking" className="text-gray-700 hover:text-blue-500">Booking</Link>
						<Link href="/history" className="text-gray-700 hover:text-blue-500">History</Link>

						{/* Dropdown Management */}
						<div className="relative">
							<button
								onClick={() => setmanage(!managedrop)}
								className="text-gray-800 hover:text-blue-500 flex items-center"
							>
								Management
								<span className="ml-1">{managedrop ? <ArrowUp className='w-4'/> : <ArrowDown className='w-4'/>}</span>
							</button>
							{managedrop && (
								<div className="absolute bg-white shadow-lg rounded-md mt-2 w-40">
									<Link href="/room" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Room</Link>
									<Link href="/user" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">User</Link>
								</div>
							)}
						</div>
						{/* Dropdown Master */}
						<div className="relative">
							<button
								onClick={() => setmaster(!masterdrop)}
								className="text-gray-800 hover:text-blue-500 flex items-center"
							>
								Master
								<span className="ml-1">{masterdrop ? <ArrowUp className='w-4'/> : <ArrowDown className='w-4'/>}</span>
							</button>
							{masterdrop && (
								<div className="absolute bg-white shadow-lg rounded-md mt-2 w-52">
									<Link href="/department" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Department</Link>
									<Link href="/position" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Position</Link>
									<Link href="/building" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Building</Link>
									<Link href="/empstatus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">EmpStatus</Link>
									<Link href="/bookingstatus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">BookingStatus</Link>
									<Link href="/roomstatus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">RoomStatus</Link>
								</div>
							)}
						</div>

						<Link href="/Report" className="text-gray-700 hover:text-blue-500">Report</Link>
					</div>

					{/* Profile section */}
					<div className="hidden md:flex space-x-4">
						<NotificationPanel />
						<Link href="/profile" className="text-gray-700 hover:text-blue-500">
							<CircleUserRound className="w-6 h-6 text-blue-500" />
						</Link>
						<Link href="/login" className="text-gray-700 hover:text-blue-500">
							<LogOut className="w-6 h-6 text-blue-500" />
						</Link>
					</div>

					{/* Hamburger icon */}
					<div className="flex md:hidden">
						<button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
							{isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow-md">
					<Link href="/" className="block text-gray-700 hover:text-blue-500 px-3 py-2">Home</Link>
					<Link href="/booking" className="block text-gray-700 hover:text-blue-500 px-3 py-2">Booking</Link>
					<Link href="/history" className="block text-gray-700 hover:text-blue-500 px-3 py-2">History</Link>

					{/* Management Accordion */}
					<div className="w-full">
						<button onClick={() => setmanage(!managedrop)} className="flex justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-500">
							Management
							<span>{managedrop ? <ArrowUp className='w-4'/> : <ArrowDown className='w-4'/>}</span>
						</button>
						{managedrop && (
							<div className="pl-6">
								<Link href="/room" className="block py-2 text-gray-600 hover:text-blue-400">Room</Link>
								<Link href="/user" className="block py-2 text-gray-600 hover:text-blue-400">User</Link>
							</div>
						)}
					</div>

					{/* Master Accordion */}
					<div className="w-full mt-2">
						<button onClick={() => setmaster(!masterdrop)} className="flex justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-500">
							Master
							<span>{masterdrop ? <ArrowUp className='w-4'/> : <ArrowDown className='w-4'/>}</span>
						</button>
						{masterdrop && (
							<div className="pl-6">
								<Link href="/department" className="block py-2 text-gray-600 hover:text-blue-400">Department</Link>
								<Link href="/position" className="block py-2 text-gray-600 hover:text-blue-400">Position</Link>
								<Link href="/building" className="block py-2 text-gray-600 hover:text-blue-400">Building</Link>
								<Link href="/empstatus" className="block py-2 text-gray-600 hover:text-blue-400">EmpStatus</Link>
								<Link href="/bookingstatus" className="block py-2 text-gray-600 hover:text-blue-400">BookingStatus</Link>
								<Link href="/roomstatus" className="block py-2 text-gray-600 hover:text-blue-400">RoomStatus</Link>
							</div>
						)}
					</div>

					<Link href="/Report" className="block text-gray-700 hover:text-blue-500 px-3 py-2">Report</Link>
					<div className="flex space-x-4 px-3 mt-4">
						<NotificationPanel />
						<Link href="/profile" className="text-gray-700 hover:text-blue-500">
							<CircleUserRound className="w-6 h-6 text-blue-500" />
						</Link>
						<Link href="/login" className="text-gray-700 hover:text-blue-500">
							<LogOut className="w-6 h-6 text-blue-500" />
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;