import { Request, Response } from "express";
import * as BuildingService from "./bookingstatus.service";

export const getAllBookingStatus = async (req: Request, res: Response) => {
	try {
		const bookingStatus = await BuildingService.getAllBookingStatus();
		res.status(200).json(bookingStatus);
	} catch (error) {
		res.status(500).json({ message: "Error fetching booking status", error });
	}
};

export const getBookingStatusById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const id = parseInt(req.params.id, 10);
		const bookingStatus = await BuildingService.getBookingStatusById(id);
		if (!bookingStatus) {
			return res.status(404).json({ message: "Booking status not found" });
		}
		return res.status(200).json(bookingStatus);
	} catch (error) {
		return res.status(500).json({ message: "Error fetching booking status", error });
	}
};

export const createBookingStatus = async (req: Request, res: Response) => {
	try {
		const { SName } = req.body;
		const newBookingStatus = await BuildingService.createBookingStatus(SName);
		res.status(201).json(newBookingStatus);
	} catch (error) {
		res.status(500).json({ message: "Error creating booking status", error });
	}
};

export const deleteBookingStatus = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id, 10);
		await BuildingService.deleteBookingStatus(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: "Error deleting booking status", error });
	}
};
