const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
	// Insert departments
	await prisma.department.createMany({
		data: [
			{ DNumber: 1, DName: 'Register' },
			{ DNumber: 2, DName: 'Finance' },
			{ DNumber: 3, DName: 'Library' },
		],
	});

	// Insert positions
	await prisma.position.createMany({
		data: [
			{ PNumber: 1, PName: 'Admin', AccessNo: '111111' },
			{ PNumber: 2, PName: 'Employee', AccessNo: '110000' },
		],
	});

	// Insert room statuses
	await prisma.roomStatus.createMany({
		data: [
			{ SNumber: 1, SName: 'Available' },
			{ SNumber: 2, SName: 'Not Available' },
		],
	});

	// Insert employee statuses
	await prisma.employeeStatus.createMany({
		data: [
			{ SNumber: 1, SName: 'Active' },
			{ SNumber: 2, SName: 'Inactive' },
		],
	});

	// Insert booking statuses
	await prisma.bookingStatus.createMany({
		data: [
			{ SNumber: 1, SName: 'Approved' },
			{ SNumber: 2, SName: 'Verifying' },
			{ SNumber: 3, SName: 'Not Approved' },
			{ SNumber: 4, SName: 'Canceled' },
			{ SNumber: 5, SName: 'Complete' },
			{ SNumber: 6, SName: 'Late' },
		],
	});

	// Insert buildings
	await prisma.building.createMany({
		data: [
			{ BNumber: 1, BName: 'D' },
			{ BNumber: 2, BName: 'F' },
			{ BNumber: 3, BName: 'MII' },
		],
	});

	// Insert floors
	await prisma.floor.createMany({
		data: [
			{ FlNumber: 1, FlName: '1', BNo: 1 },
			{ FlNumber: 2, FlName: '2', BNo: 1 },
		],
	});

	// Insert rooms
	await prisma.room.createMany({
		data: [
			{ RNumber: 1, RName: '102', Capacity: 40, VIP: 0, FlNo: 1 },
			{ RNumber: 2, RName: '103', Capacity: 40, VIP: 0, FlNo: 1 },
			{ RNumber: 3, RName: '202', Capacity: 10, VIP: 1, FlNo: 2 },
		],
	});

	// Insert employees
	await prisma.employee.createMany({
		data: [
			{
				ENumber: 1,
				FName: 'A',
				LName: 'A',
				score: 0,
				Email: 'Aa@gmail.com',
				username: 'Admin',
				password: '1234',
				DNo: 1,
				PNo: 1,
				SNo: 1,
			},
			{
				ENumber: 2,
				FName: 'B',
				LName: 'B',
				score: 0,
				Email: 'Baka@gmail.com',
				username: 'Boom',
				password: '4321',
				DNo: 1,
				PNo: 2,
				SNo: 1,
			},
		],
	});

	// Insert bookings
	await prisma.booking.createMany({
		data: [
			{ BKNumber: 1, BKDate: new Date('2024-10-10'), ENo: 2 },
		],
	});

	// Insert booking lists
	await prisma.bookingList.createMany({
		data: [
			{
				BKLNumber: 1,
				BKLNo: 1,
				RNo: 1,
				Start_Date: new Date('2024-10-10'),
				Start_Time: '09:00',
				End_Time: '12:00',
				details: '00100001',
				QR: '00100001',
				SNo: 1,
			},
			{
				BKLNumber: 2,
				BKLNo: 1,
				RNo: 3,
				Start_Date: new Date('2024-10-11'),
				Start_Time: '09:00',
				End_Time: '12:00',
				details: '00200001',
				QR: '00200001',
				SNo: 2,
			},
		],
	});
}

main()
	.catch((e) => {
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
