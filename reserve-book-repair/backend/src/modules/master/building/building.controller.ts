import { Request, Response } from "express";
import * as BuildingService from "./building.service";

export const getAllBuildings = async (req: Request, res: Response) => {
	try {
		const buildings = await BuildingService.getAllBuildings();
		res.status(200).json(buildings);
	} catch (error) {
		res.status(500).json({ message: "Error fetching buildings", error });
	}
};

export const getBuildingById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const id = parseInt(req.params.id, 10);
		const building = await BuildingService.getBuildingById(id);
		if (!building) {
			return res.status(404).json({ message: "Building not found" });
		}
		return res.status(200).json(building);
	} catch (error) {
		return res.status(500).json({ message: "Error fetching building", error });
	}
};

export const createBuilding = async (req: Request, res: Response) => {
	try {
		const { BName } = req.body;
		const newBuilding = await BuildingService.createBuilding(BName);
		res.status(201).json(newBuilding);
	} catch (error) {
		res.status(500).json({ message: "Error creating building", error });
	}
};

export const deleteBuilding = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id, 10);
		await BuildingService.deleteBuilding(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: "Error deleting building", error });
	}
};
