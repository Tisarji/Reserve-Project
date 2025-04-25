import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

await prisma.accessList.deleteMany()
await prisma.cancelBooking.deleteMany()
await prisma.denyBooking.deleteMany()
await prisma.bookingList.deleteMany()
await prisma.booking.deleteMany()
await prisma.unlockList.deleteMany()
await prisma.lockList.deleteMany()
await prisma.employee.deleteMany()
await prisma.room.deleteMany()
await prisma.floor.deleteMany()
await prisma.building.deleteMany()
await prisma.bookingStatus.deleteMany()
await prisma.employeeStatus.deleteMany()
await prisma.roomStatus.deleteMany()
await prisma.position.deleteMany()
await prisma.department.deleteMany()

await prisma.department.createMany({
	data: [
		{ DNumber: 1, DName: 'Register' },
		{ DNumber: 2, DName: 'Finance' },
		{ DNumber: 3, DName: 'Library' },
	]
})

await prisma.position.createMany({
	data: [
		{ PNumber: 1, PName: 'Admin', AccessNo: '111111' },
		{ PNumber: 2, PName: 'Employee', AccessNo: '110000' },
	]
})

await prisma.roomStatus.createMany({
	data: [
		{ SNumber: 1, SName: 'Available' },
		{ SNumber: 2, SName: 'Not Available' },
	]
})

await prisma.employeeStatus.createMany({
	data: [
		{ SNumber: 1, SName: 'Active' },
		{ SNumber: 2, SName: 'Inactive' },
	]
})

await prisma.bookingStatus.createMany({
	data: [
		{ SNumber: 1, SName: 'Approved' },
		{ SNumber: 2, SName: 'Verifying' },
		{ SNumber: 3, SName: 'Not Approved' },
		{ SNumber: 4, SName: 'Canceled' },
		{ SNumber: 5, SName: 'Complete' },
		{ SNumber: 6, SName: 'Late' },
	]
})

await prisma.building.create({
	data: {
		BNumber: 1,
		BName: 'D',
		floors: {
			create: [
				{ FlNumber: 1, FlName: '1' },
				{ FlNumber: 2, FlName: '2' },
			]
		}
	}
})
await prisma.building.createMany({
	data: [
		{ BNumber: 2, BName: 'F' },
		{ BNumber: 3, BName: 'MII' },
	]
})

await prisma.room.createMany({
	data: [
		{ RNumber: 1, RName: '102', Capacity: 40, VIP: 0, FlNo: 1, SNo: 1 },
		{ RNumber: 2, RName: '103', Capacity: 40, VIP: 0, FlNo: 1, SNo: 1 },
		{ RNumber: 3, RName: '202', Capacity: 10, VIP: 1, FlNo: 2, SNo: 1 },
	]
})

await prisma.employee.createMany({
	data: [
		{ ENumber: 1, FName: 'A', LName: 'A', score: 0, Email: 'Aa@gmail.com', username: 'Admin', password: '1234', DNo: 1, PNo: 1, SNo: 1 },
		{ ENumber: 2, FName: 'B', LName: 'B', score: 0, Email: 'Baka@gmail.com', username: 'Boom', password: '4321', DNo: 1, PNo: 2, SNo: 1 },
	]
})

await prisma.booking.create({
	data: {
		BKNumber: 1,
		BKDate: new Date('2024-10-10'),
		ENo: 2,
		bookingLists: {
			create: [
				{
					BKLNumber: 1,
					RNo: 1,
					Start_Date: new Date('2024-10-10'),
					Start_Time: '09:00',
					End_Time: '12:00',
					QR: '00100001',
					SNo: 1
				},
				{
					BKLNumber: 2,
					RNo: 3,
					Start_Date: new Date('2024-10-11'),
					Start_Time: '09:00',
					End_Time: '12:00',
					QR: '00200001',
					SNo: 2
				}
			]
		}
	}
})

await prisma.$disconnect()
console.log('Database seeded successfully')
