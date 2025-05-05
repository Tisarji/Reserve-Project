"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import logo from '../../app/image/MUT_LOGOBlue_crop.png';
import { Bell, CircleUserRound, LogOut, Menu, X, ChevronDown } from 'lucide-react';

function Navbar() {
	const [manageDrop, setManageDrop] = useState(false);
	const [masterDrop, setMasterDrop] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [notificationOpen, setNotificationOpen] = useState(false);
	const [unreadNotifications, setUnreadNotifications] = useState(3); 

	const dropdownManageRef = useRef<HTMLLIElement | null>(null);
	const dropdownMasterRef = useRef<HTMLLIElement | null>(null);
	const notificationRef = useRef<HTMLDivElement | null>(null);
	const mobileMenuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (dropdownManageRef.current && !dropdownManageRef.current.contains(e.target as Node)) {
				setManageDrop(false);
			}
			if (dropdownMasterRef.current && !dropdownMasterRef.current.contains(e.target as Node)) {
				setMasterDrop(false);
			}
			if (notificationRef.current && !notificationRef.current.contains(e.target as Node)) {
				setNotificationOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const NotificationPanel = () => {
		return (
			<div ref={notificationRef} className="relative">
				<button
					onClick={() => setNotificationOpen(!notificationOpen)}
					className="relative p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
					aria-label="Notifications"
				>
					<Bell className="w-6 h-6 text-blue-600" />
					{unreadNotifications > 0 && (
						<span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
							{unreadNotifications}
						</span>
					)}
				</button>

				{notificationOpen && (
					<div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50 max-h-96 overflow-y-auto">
						<div className="p-3 border-b border-gray-200 bg-blue-50">
							<h3 className="text-sm font-medium text-gray-800">Notifications</h3>
						</div>
						<div className="divide-y divide-gray-200">
							<div className="p-4 hover:bg-gray-50 cursor-pointer">
								<p className="text-sm font-medium text-gray-800">Room booking confirmed</p>
								<p className="text-xs text-gray-500">Room A101 - Today at 2:00 PM</p>
							</div>
							<div className="p-4 hover:bg-gray-50 cursor-pointer">
								<p className="text-sm font-medium text-gray-800">Booking request approved</p>
								<p className="text-xs text-gray-500">Your booking for Conference Room has been approved</p>
							</div>
							<div className="p-4 hover:bg-gray-50 cursor-pointer">
								<p className="text-sm font-medium text-gray-800">System maintenance</p>
								<p className="text-xs text-gray-500">System will be down for maintenance on Sunday</p>
							</div>
						</div>
						<div className="p-2 bg-gray-50 text-center">
							<Link href="/notifications" className="text-sm text-blue-600 hover:underline">
								View all notifications
							</Link>
						</div>
					</div>
				)}
			</div>
		);
	};

	const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
		return (
			<Link
				href={href}
				className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
			>
				{children}
			</Link>
		);
	};

	const DropdownMenu = ({
		title,
		isOpen,
		toggleOpen,
		items,
		reference
	}: {
		title: string,
		isOpen: boolean,
		toggleOpen: () => void,
		items: { href: string, label: string }[],
		reference: React.RefObject<HTMLLIElement | null>
	}) => {
		return (
			<li className="relative inline-block" ref={reference}>
				<button
					onClick={toggleOpen}
					className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
					aria-expanded={isOpen}
					aria-haspopup="true"
				>
					{title}
					<ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
				</button>

				{isOpen && (
					<ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 py-1 border border-gray-200">
						{items.map((item, index) => (
							<li key={index}>
								<Link
									href={item.href}
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				)}
			</li>
		);
	};

	const managementItems = [
		{ href: "/room", label: "Room Management" },
		{ href: "/user", label: "User Management" }
	];

	const masterItems = [
		{ href: "/department", label: "Department" },
		{ href: "/position", label: "Position" },
		{ href: "/building", label: "Building" },
		{ href: "/empstatus", label: "Employee Status" },
		{ href: "/bookingstatus", label: "Booking Status" },
		{ href: "/roomstatus", label: "Room Status" }
	];

	return (
		<nav className="bg-white shadow-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					
					<div className="flex-shrink-0 flex items-center">
						<Link href="/" className="flex items-center">
							<Image
								src={logo}
								alt="MUT logo"
								width={100}
								height={40}
								className="transition-transform hover:scale-105"
							/>
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-1">
						<NavLink href="/reserve">Booking</NavLink>
						<NavLink href="/history">History</NavLink>

						<DropdownMenu
							title="Management"
							isOpen={manageDrop}
							toggleOpen={() => setManageDrop(!manageDrop)}
							items={managementItems}
							reference={dropdownManageRef}
						/>

						<DropdownMenu
							title="Master"
							isOpen={masterDrop}
							toggleOpen={() => setMasterDrop(!masterDrop)}
							items={masterItems}
							reference={dropdownMasterRef}
						/>

						<NavLink href="/report">Report</NavLink>
					</div>

					<div className="hidden md:flex items-center space-x-4">
						<NotificationPanel />
						<Link
							href="/profile"
							className="p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
							aria-label="Profile"
						>
							<CircleUserRound className="w-6 h-6 text-blue-600" />
						</Link>

						<Link
							href="/login"
							className="p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
							aria-label="Logout"
						>
							<LogOut className="w-6 h-6 text-blue-600" />
						</Link>
					</div>
				</div>
			</div>

			
			{mobileMenu && (
				<div className="md:hidden" ref={mobileMenuRef}>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t">
						<Link href="/reserve" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
							Booking
						</Link>
						<Link href="/history" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
							History
						</Link>

						
						<div className="relative">
							<button
								onClick={() => setManageDrop(!manageDrop)}
								className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
							>
								Management
								<ChevronDown className={`ml-1 w-4 h-4 transition-transform ${manageDrop ? 'transform rotate-180' : ''}`} />
							</button>

							{manageDrop && (
								<div className="pl-4 pb-2">
									{managementItems.map((item, index) => (
										<Link
											key={index}
											href={item.href}
											className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
										>
											{item.label}
										</Link>
									))}
								</div>
							)}
						</div>

						
						<div className="relative">
							<button
								onClick={() => setMasterDrop(!masterDrop)}
								className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
							>
								Master
								<ChevronDown className={`ml-1 w-4 h-4 transition-transform ${masterDrop ? 'transform rotate-180' : ''}`} />
							</button>

							{masterDrop && (
								<div className="pl-4 pb-2">
									{masterItems.map((item, index) => (
										<Link
											key={index}
											href={item.href}
											className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
										>
											{item.label}
										</Link>
									))}
								</div>
							)}
						</div>

						<Link href="/report" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
							Report
						</Link>

						<div className="border-t border-gray-200 pt-4 pb-3">
							<div className="flex items-center justify-between px-3">
								<Link href="/profile" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
									<CircleUserRound className="w-6 h-6 text-blue-600" />
									<span>Profile</span>
								</Link>
								<Link href="/login" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
									<LogOut className="w-6 h-6 text-blue-600" />
									<span>Logout</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
