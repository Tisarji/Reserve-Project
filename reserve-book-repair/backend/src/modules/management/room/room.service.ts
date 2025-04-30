import prisma from '../../prisma/client';

export const getRooms = async () => {
	return prisma.room.findMany({
		include: {
			floor: true,
			status: true,
		},
	});
};

export const getRoomById = async (id: number) => {
	return prisma.room.findUnique({
		where: { RNumber: id },
		include: {
			floor: true,
			status: true,
		},
	});
};

export const createRoom = async (data: any) => {
	return prisma.room.create({ data });
};

export const updateRoom = async (id: number, data: any) => {
	return prisma.room.update({
		where: { RNumber: id },
		data,
	});
};

export const deleteRoom = async (id: number) => {
	return prisma.room.delete({
		where: { RNumber: id },
	});
};
