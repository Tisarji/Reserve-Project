import prisma from '../../prisma/client';

export const getAllBuildings = async () => {
	return prisma.building.findMany({
		include: {
			floors: true,
		},
	});
};

export const getBuildingById = async (id: number) => {
	return prisma.building.findUnique({
		where: { BNumber: id },
		include: {
			floors: true,
		},
	});
}

export const createBuilding = async (Bname: string) => {
	return prisma.building.create({
		data: {
			BNumber: Math.floor(Math.random() * 10000),
			BName: Bname,
		},
	});
};

export const deleteBuilding = async (id: number) => {
	return prisma.building.delete({
		where: { BNumber: id },
	});
};
