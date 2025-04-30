import { Request, Response, RequestHandler } from "express";
import * as RoomService from "./room.service";

export const getRooms: RequestHandler = async (req, res) => {
	try {
		const rooms = await RoomService.getRooms();
		res.json(rooms);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch rooms" });
	}
};

export const getRoomById: RequestHandler = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		const room = await RoomService.getRoomById(id);
		if (!room) {
			res.status(404).json({ error: "Room not found" });
			return;
		}
		res.json(room);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch room" });
	}
};

export const createRoom: RequestHandler = async (req, res) => {
	try {
		const newRoom = await RoomService.createRoom(req.body);
		res.status(201).json(newRoom);
	} catch (err) {
		res.status(500).json({ error: "Failed to create room" });
	}
};

export const updateRoom: RequestHandler = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		const updatedRoom = await RoomService.updateRoom(id, req.body);
		res.json(updatedRoom);
	} catch (err) {
		res.status(500).json({ error: "Failed to update room" });
	}
};

export const deleteRoom: RequestHandler = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		await RoomService.deleteRoom(id);
		res.status(204).send();
	} catch (err) {
		res.status(500).json({ error: "Failed to delete room" });
	}
};
