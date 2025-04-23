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
		<div className="bglogin">
			<div className="rowlogin">
				<div className="mutlogo"></div>
				<div className="login-form">Welcome Back
					<form onSubmit={handleSubmit}>
						<label className="text_info-login">Username</label>
						<input
							type="text"
							value={inputUsername}
							onChange={(e) => setInputUsername(e.target.value)}
							className="info-login"
							placeholder="Enter your username"
						/>
						<label className="text_info-login">Password</label>
						<input
							type="password"
							value={inputPassword}
							onChange={(e) => setInputPassword(e.target.value)}
							className="info-login"
							placeholder="Enter your password"
						/>
						<a className="forgot-login" onClick={() => forgotpassword()}>
							I forgot my password
						</a>
						<button className="signin-login" type="submit" name="signin">
							Sign In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;