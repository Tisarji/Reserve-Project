import { Request, Response } from "express";
import * as PositionService from "./position.service";

export const getAllPositions = async (req: Request, res: Response) => {
	try {
		const positions = await PositionService.getAllPositions();
		res.status(200).json(positions);
	} catch (error) {
		res.status(500).json({ message: "Error fetching positions", error });
	}
};

export const getPositionById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const id = parseInt(req.params.id, 10);
		const position = await PositionService.getPositionById(id);
		if (!position) {
			return res.status(404).json({ message: "Position not found" });
		}
		return res.status(200).json(position);
	} catch (error) {
		return res.status(500).json({ message: "Error fetching position", error });
	}
};

export const createPosition = async (req: Request, res: Response) => {
	try {
		const { PName } = req.body;
		const newPosition = await PositionService.createPosition(PName);
		res.status(201).json(newPosition);
	} catch (error) {
		res.status(500).json({ message: "Error creating position", error });
	}
};

export const deletePosition = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id, 10);
		await PositionService.deletePosition(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: "Error deleting position", error });
	}
};
