import prisma from '../../prisma/client';

export const getAllBookingStatus = async () => prisma.bookingStatus.findMany();

export const getBookingStatusById = (id: number) =>
	prisma.bookingStatus.findUnique({ where: { SNumber: id } });

export const createBookingStatus = (data: any) =>
	prisma.bookingStatus.create({ data });

export const deleteBookingStatus = (id: number) =>
	prisma.bookingStatus.delete({ where: { SNumber: id } });
