import prisma from '../../prisma/client';

export const getRooms = async () => {
	const rooms = await prisma.room.findMany({
		include: {
			floor: true,
			status: true,
		},
	});

	return rooms.map(room => ({
		rnumber: room.RNumber.toString(),
		rname: room.RName,
		bname: room.SNo,
		flname: room.floor,
		sname: room.status?.SName || "N/A",
		vip: room.VIP ? "1" : "0",
		capacity: room.Capacity,
	}));
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
