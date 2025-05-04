import prisma from '../../prisma/client';

export const getAllRommStatus = async () => {
	return prisma.roomStatus.findMany();
}

export const getRoomStatusById = async (id: number) => {
	return prisma.roomStatus.findUnique({
		where: { SNumber: id },
	});
};

export const createRoomStatus = async (SName: string) => {
	return prisma.roomStatus.create({
		data: {
			SNumber: Math.floor(Math.random() * 10000),
			SName,
		},
	});
};

export const deleteRoomStatus = async (id: number) => {
	return prisma.roomStatus.delete({
		where: { SNumber: id },
	});
};
