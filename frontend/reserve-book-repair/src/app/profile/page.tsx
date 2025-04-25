"use client";

import React, { useState } from "react";
import Image from "next/image";
import imgUser from "@/app/image/rat.png";

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const [user, setUser] = useState({
    firstName: "UTORU",
    lastName: "CY",
    department: "Engineering",
    point: "-99",
    position: "Admin",
    status: "Active",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <form>
        <div className="flex justify-center item-center mt-10">
          <div className="w-full max-w-7/10 outline-2 outline-offset-2 outline-gray-900/10 rounded-md p-5 bg-gray-50">
            <div className="border-b border-gray-900/10 pb-2">
              <h2 className="text-3xl font-semibold text-gray-900">Profile</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="border-b border-gray-900/10 pb-12 col-span-2">
                {/* Input fields */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="firstName" className="block text-xl font-bold text-gray-900">First name</label>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={user.firstName}
                        disabled={!isEditable}
                        onChange={handleChange}
                        className="w-full shadow-inner bg-gray-100 rounded-lg text-2xl p-4 border-none"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="lastName" className="block text-xl font-bold text-gray-900">Last name</label>
                    <div className="mt-2">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={user.lastName}
                        disabled={!isEditable}
                        onChange={handleChange}
                        className="w-full shadow-inner bg-gray-100 rounded-lg text-2xl p-4 border-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="department" className="block text-xl font-bold text-gray-900">Department</label>
                    <div className="mt-2">
                      <input
                        id="department"
                        name="department"
                        type="text"
                        value={user.department}
                        disabled={!isEditable}
                        onChange={handleChange}
                        className="w-full shadow-inner bg-gray-100 rounded-lg text-2xl p-4 border-none"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="point" className="block text-xl font-bold text-gray-900">Point</label>
                    <div className="mt-2">
                      <input
                        id="point"
                        name="point"
                        type="text"
                        value={user.point}
                        disabled={!isEditable}
                        onChange={handleChange}
                        className="w-full shadow-inner bg-gray-100 rounded-lg text-2xl p-4 border-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="position" className="block text-xl font-bold text-gray-900">Position</label>
                    <div className="mt-2">
                      <input
                        id="position"
                        name="position"
                        type="text"
                        value={user.position}
                        disabled={!isEditable}
                        onChange={handleChange}
                        className="w-full shadow-inner bg-gray-100 rounded-lg text-2xl p-4 border-none"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="status" className="block text-xl font-bold text-gray-900">Status</label>
                    <div className="mt-2">
                      <input
                        id="status"
                        name="status"
                        type="text"
                        value={user.status}
                        disabled={!isEditable}
                        onChange={handleChange}
                        className="w-full shadow-inner bg-gray-100 rounded-lg text-2xl p-4 border-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Avatar + Edit button */}
              <div className="flex justify-center items-center flex-col">
                <div className="bg-sky-500/50 rounded-full shadow-lg shadow-blue-500/50">
                  <Image src={imgUser} alt="User" width={200} height={80} />
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-5 bottom-0 right-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex items-center shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
                >
                  <span className="pr-2">Edit</span>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
            <p>คุณสามารถแก้ไขข้อมูลตรงนี้ได้</p>
            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={() => {
                  setIsEditable(true);
                  setIsModalOpen(true);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;


  