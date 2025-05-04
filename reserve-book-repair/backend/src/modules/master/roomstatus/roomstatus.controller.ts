import { Request, Response } from "express";
import * as RoomStatusService from "./roomstatus.service";

export const getAllRoomStatus = async (req: Request, res: Response) => {
	try {
		const roomStatuses = await RoomStatusService.getAllRommStatus();
		res.status(200).json(roomStatuses);
	} catch (error) {
		res.status(500).json({ message: "Error fetching room statuses", error });
	}
};

export const getRoomStatusById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const id = parseInt(req.params.id, 10);
		const roomStatus = await RoomStatusService.getRoomStatusById(id);
		if (!roomStatus) {
			return res.status(404).json({ message: "Room status not found" });
		}
		return res.status(200).json(roomStatus);
	} catch (error) {
		return res.status(500).json({ message: "Error fetching room status", error });
	}
};

export const createRoomStatus = async (req: Request, res: Response) => {
	try {
		const { SName } = req.body;
		const newRoomStatus = await RoomStatusService.createRoomStatus(SName);
		res.status(201).json(newRoomStatus);
	} catch (error) {
		res.status(500).json({ message: "Error creating room status", error });
	}
};

export const deleteRoomStatus = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id, 10);
		await RoomStatusService.deleteRoomStatus(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: "Error deleting room status", error });
	}
};
