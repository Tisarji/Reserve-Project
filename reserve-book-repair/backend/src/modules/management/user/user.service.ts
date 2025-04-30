import prisma from '../../prisma/client';

export const getUsers = async () => {
	return prisma.employee.findMany({
		include: {
			department: true,
			position: true,
			status: true,
		},
	});
}

export const getUserById = async (id
	: number) => {
	return prisma.employee.findUnique({
		where: { ENumber: id },
		include: {
			department: true,
			position: true,
			status: true,
		},
	});
}

export const createUser = async (data: any) => {
	return prisma.employee.create({ data });
}

export const updateUser = async (id: number, data: any) => {
	return prisma.employee.update({
		where: { ENumber: id },
		data,
	});
}

export const deleteUser = async (id: number) => {
	return prisma.employee.delete({
		where: { ENumber: id },
	});
}

