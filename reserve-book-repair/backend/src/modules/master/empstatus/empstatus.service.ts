import prisma from '../../prisma/client';

export const getAllEmpStatus = async () => prisma.employeeStatus.findMany();

export const getEmpStatusById = (id: number) =>
	prisma.employeeStatus.findUnique({ where: { SNumber: id } });

export const createEmpStatus = (SName: string) =>
	prisma.employeeStatus.create({
		data: {
			SNumber: Math.floor(Math.random() * 10000),
			SName,
		},
	});

export const deleteEmpStatus = (id: number) =>
	prisma.employeeStatus.delete({ where: { SNumber: id } });
