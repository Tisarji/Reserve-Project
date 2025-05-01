import prisma from '../../prisma/client';

export const getUsers = async () => {
	const employee = await prisma.employee.findMany({
		include: {
			department: true,
			position: true,
			status: true,
		},
	});

	return employee.map(emp => ({
		enumber: emp.ENumber ? String(emp.ENumber) : 'N/A',
		fname: emp.FName,
		lname: emp.LName,
		dname: emp.department?.DName || 'N/A',
		pname: emp.position?.PName || 'N/A',
		sname: emp.status?.SName || 'N/A',
		score: emp.score,
	}));
};

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
