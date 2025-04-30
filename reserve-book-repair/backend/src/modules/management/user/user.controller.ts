import { Request, Response, RequestHandler } from "express";
import * as RoomService from "./user.service";

export const getUsers: RequestHandler = async (req, res) => {
	try {
		const users = await RoomService.getUsers();
		res.json(users);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch users" });
	}
};

export const getUserById: RequestHandler = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		const user = await RoomService.getUserById(id);
		if (!user) {
			res.status(404).json({ error: "User not found" });
			return;
		}
		res.json(user);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch user" });
	}
};

export const createUser: RequestHandler = async (req, res) => {
	try {
		const newUser = await RoomService.createUser(req.body);
		res.status(201).json(newUser);
	} catch (err) {
		res.status(500).json({ error: "Failed to create user" });
	}
};

export const updateUser: RequestHandler = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		const updatedUser = await RoomService.updateUser(id, req.body);
		res.json(updatedUser);
	} catch (err) {
		res.status(500).json({ error: "Failed to update user" });
	}
};

export const deleteUser: RequestHandler = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		await RoomService.deleteUser(id);
		res.status(204).send();
	} catch (err) {
		res.status(500).json({ error: "Failed to delete user" });
	}
};
