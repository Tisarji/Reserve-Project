import prisma from '../../prisma/client';

export const getDepartment = async () => prisma.department.findMany();

export const getDepartmentById = (id: number) =>
	prisma.department.findUnique({ where: { DNumber: id } });

export const createDepartment = (DName: string) =>
	prisma.department.create({ data: {
			DNumber: Math.floor(Math.random() * 10000),
			DName,
		},
	});

export const deleteDepartment = (id: number) =>
	prisma.department.delete({ where: { DNumber: id } });
