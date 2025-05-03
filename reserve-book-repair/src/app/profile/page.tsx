"use client";

import { useState } from "react";
import { Edit, X, Save, User } from "lucide-react";

const UserImage = () => (
	<div className="bg-blue-100 rounded-full h-48 w-48 flex items-center justify-center">
		<User className="h-24 w-24 text-blue-500" />
	</div>
);

export default function Profile() {
	const [isEditing, setIsEditing] = useState(false);
	const [user, setUser] = useState({
		firstName: "UTORU",
		lastName: "CY",
		department: "Engineering",
		point: "-99",
		position: "Admin",
		status: "Active",
	});

	const [tempUser, setTempUser] = useState({ ...user });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setTempUser({ ...tempUser, [name]: value });
	};

	const startEditing = () => {
		setTempUser({ ...user });
		setIsEditing(true);
	};

	const cancelEditing = () => {
		setIsEditing(false);
	};

	const saveChanges = () => {
		setUser({ ...tempUser });
		setIsEditing(false);
	};

	const InputField = ({ label, name, value }: { label: string; name: string; value: string }) => (
		<div className="sm:col-span-3">
			<label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<div className="relative">
				<input
					id={name}
					name={name}
					type="text"
					value={value}
					onChange={handleChange}
					disabled={!isEditing}
					className={`block w-full rounded-md py-2 px-3 shadow-sm ${isEditing
							? "border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
							: "bg-gray-50 border-0"
						}`}
				/>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
				<div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl font-bold text-white">User Profile</h1>
						{!isEditing ? (
							<button
								onClick={startEditing}
								className="flex items-center gap-1 bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
							>
								<Edit size={16} />
								<span>Edit</span>
							</button>
						) : (
							<div className="flex gap-2">
								<button
									onClick={cancelEditing}
									className="flex items-center gap-1 bg-white text-gray-600 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
								>
									<X size={16} />
									<span>Cancel</span>
								</button>
								<button
									onClick={saveChanges}
									className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
								>
									<Save size={16} />
									<span>Save</span>
								</button>
							</div>
						)}
					</div>
				</div>

				<div className="p-6">
					<div className="flex flex-col md:flex-row gap-8">
						<div className="flex flex-col items-center">
							<div className="relative mb-4">
								<UserImage />
								{isEditing && (
									<div className="absolute bottom-0 right-0">
										<button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow">
											<Edit size={16} />
										</button>
									</div>
								)}
							</div>
							<div className="text-center">
								<div className="mt-2 font-medium text-gray-500">
									{user.position}
								</div>
								<div className={`mt-1 px-3 py-1 rounded-full text-xs font-medium ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
									}`}>
									{user.status}
								</div>
							</div>
						</div>

						<div className="flex-1">
							<div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-5">
								<InputField
									label="First name"
									name="firstName"
									value={isEditing ? tempUser.firstName : user.firstName}
								/>
								<InputField
									label="Last name"
									name="lastName"
									value={isEditing ? tempUser.lastName : user.lastName}
								/>
								<InputField
									label="Department"
									name="department"
									value={isEditing ? tempUser.department : user.department}
								/>
								<InputField
									label="Points"
									name="point"
									value={isEditing ? tempUser.point : user.point}
								/>
								<InputField
									label="Position"
									name="position"
									value={isEditing ? tempUser.position : user.position}
								/>
								<InputField
									label="Status"
									name="status"
									value={isEditing ? tempUser.status : user.status}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
