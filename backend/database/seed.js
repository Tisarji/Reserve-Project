const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
	await prisma.department.create({
		data: { DNumber: 1, DName: 'Register' }
	})
	await prisma.department.create({
		data: { DNumber: 2, DName: 'Finance' }
	})
	await prisma.department.create({
		data: { DNumber: 3, DName: 'Library' }
	})
	
	await prisma.position.create({
		data: { PNumber: 1, PName: 'Admin', AccessNo: '111111' }
	})
	await prisma.position.create({
		data: { PNumber: 2, PName: 'Employee', AccessNo: '110000' }
	})

	await prisma.roomStatus.create({
		data: { SNumber: 1, SName: 'Available' }
	})
	await prisma.roomStatus.create({
		data: { SNumber: 2, SName: 'Not Available' }
	})

	await prisma.employeeStatus.create({
		data: { SNumber: 1, SName: 'Active' }
	})
	await prisma.employeeStatus.create({
		data: { SNumber: 2, SName: 'Inactive' }
	})

	await prisma.bookingStatus.create({
		data: { SNumber: 1, SName: 'Approved' }
	})
	await prisma.bookingStatus.create({
		data: { SNumber: 2, SName: 'Verifying' }
	})
	await prisma.bookingStatus.create({
		data: { SNumber: 3, SName: 'Not Approved' }
	})
	await prisma.bookingStatus.create({
		data: { SNumber: 4, SName: 'Canceled' }
	})
	await prisma.bookingStatus.create({
		data: { SNumber: 5, SName: 'Complete' }
	})
	await prisma.bookingStatus.create({
		data: { SNumber: 6, SName: 'Late' }
	})

	await prisma.building.create({
		data: { BNumber: 1, BName: 'D' }
	})
	await prisma.building.create({
		data: { BNumber: 2, BName: 'F' }
	})
	await prisma.building.create({
		data: { BNumber: 3, BName: 'MII' }
	})
}

main()
	.catch(e => {
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
