'use client'

import React, { useState } from "react";
import "../../style/style.css"

const handleSubmit = (e:any) => {
	e.preventDefault();
};

const forgotpassword = () => {
};

function Login() {
	const [inputUsername, setInputUsername] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	return (
		<div className="bglogin h-full w-full absolute flex bg-cover bg-center justify-center items-center">
			<div className="h-[50vh] w-full flex flex-row absolute justify-center items-center">
				<div className="mutlogo m-[100px_0_100px_100px] h-[50vh] w-[70vw] relative bg-cover bg-center"></div>
				<div className="m-[100px_100px_100px_0] bg-white rounded-md m-10 relative h-[50vh] w-[30vw] text-center p-5">Welcome Back
					<form onSubmit={handleSubmit}>
						<label className="block mt-4 mb-1 text-base text-[#27374D] text-left">Username</label>
						<input
							type="text"
							value={inputUsername}
							onChange={(e) => setInputUsername(e.target.value)}
							className="text-lg w-[90%] px-2.5 py-2 border border-gray-300 rounded-lg mb-2 transition-colors duration-300 focus:outline-none focus:border-[#D08C51]"
							placeholder="Enter your username"
						/>
						<label className="block mt-4 mb-1 text-base text-[#27374D] text-left">Password</label>
						<input
							type="password"
							value={inputPassword}
							onChange={(e) => setInputPassword(e.target.value)}
							className="text-lg w-[90%] px-2.5 py-2 border border-gray-300 rounded-lg mb-2 transition-colors duration-300 focus:outline-none focus:border-[#D08C51]"
							placeholder="Enter your password"
						/>
						<a className="block text-sm text-[#D08C51] mr-[60%] underline cursor-pointer" onClick={() => forgotpassword()}>
							I forgot my password
						</a>
						<button className="text-lg text-white py-2 mt-4 bg-[#27374D] rounded-lg w-full cursor-pointer transition-colors duration-300 hover:bg-[#D08C51]" type="submit" name="signin">
							Sign In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;