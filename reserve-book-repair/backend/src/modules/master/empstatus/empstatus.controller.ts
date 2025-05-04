import { Request, Response } from "express";
import * as empStatusService from "./empstatus.service";

export const getAllEmpStatus = async (req: Request, res: Response) => {
	try {
		const empStatus = await empStatusService.getAllEmpStatus();
		res.status(200).json(empStatus);
	} catch (error) {
		res.status(500).json({ message: "Error fetching employee status", error });
	}
};

export const getEmpStatusById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const id = parseInt(req.params.id, 10);
		const empStatus = await empStatusService.getEmpStatusById(id);
		if (!empStatus) {
			return res.status(404).json({ message: "Employee status not found" });
		}
		return res.status(200).json(empStatus);
	} catch (error) {
		return res.status(500).json({ message: "Error fetching employee status", error });
	}
};

export const createEmpStatus = async (req: Request, res: Response) => {
	try {
		const { SName } = req.body;
		const newEmpStatus = await empStatusService.createEmpStatus(SName);
		res.status(201).json(newEmpStatus);
	} catch (error) {
		res.status(500).json({ message: "Error creating employee status", error });
	}
};

export const deleteEmpStatus = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id, 10);
		await empStatusService.deleteEmpStatus(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: "Error deleting employee status", error });
	}
};
