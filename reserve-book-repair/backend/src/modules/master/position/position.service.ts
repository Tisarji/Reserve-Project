import prisma from "../../prisma/client";

export const getAllPositions = async () => {
	return prisma.position.findMany();
};

export const getPositionById = async (id: number) => {
	return prisma.position.findUnique({
		where: { PNumber: id },
	});
};

export const createPosition = async (PName: string) => {
	return prisma.position.create({
		data: {
			PNumber: Math.floor(Math.random() * 10000),
			PName,
		},
	});
};

export const deletePosition = async (id: number) => {
	return prisma.position.delete({
		where: { PNumber: id },
	});
};
