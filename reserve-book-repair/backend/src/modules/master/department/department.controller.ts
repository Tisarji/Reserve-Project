import { Request, Response } from "express";
import * as DepartmentService from "./department.service";

export const getDepartments = async (req: Request, res: Response) => {
	try {
		const departments = await DepartmentService.getDepartment();
		res.status(200).json(departments);
	} catch (error) {
		res.status(500).json({ message: "Error fetching departments", error });
	}
};

export const getDepartmentById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const id = parseInt(req.params.id, 10);
		const department = await DepartmentService.getDepartmentById(id);
		if (!department) {
			return res.status(404).json({ message: "Department not found" });
		}
		return res.status(200).json(department);
	} catch (error) {
		return res.status(500).json({ message: "Error fetching department", error });
	}
};

export const createDepartment = async (req: Request, res: Response) => {
	try {
		const { DName } = req.body;
		const newDepartment = await DepartmentService.createDepartment(DName);
		res.status(201).json(newDepartment);
	} catch (error) {
		res.status(500).json({ message: "Error creating department", error });
	}
};

export const deleteDepartment = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id, 10);
		await DepartmentService.deleteDepartment(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: "Error deleting department", error });
	}
};
