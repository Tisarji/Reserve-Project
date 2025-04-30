-- CreateTable
CREATE TABLE "Department" (
    "DNumber" INTEGER NOT NULL,
    "DName" VARCHAR(15) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("DNumber")
);

-- CreateTable
CREATE TABLE "Position" (
    "PNumber" INTEGER NOT NULL,
    "PName" VARCHAR(15) NOT NULL,
    "AccessNo" VARCHAR(15),

    CONSTRAINT "Position_pkey" PRIMARY KEY ("PNumber")
);

-- CreateTable
CREATE TABLE "RoomStatus" (
    "SNumber" INTEGER NOT NULL,
    "SName" VARCHAR(15) NOT NULL,

    CONSTRAINT "RoomStatus_pkey" PRIMARY KEY ("SNumber")
);

-- CreateTable
CREATE TABLE "EmployeeStatus" (
    "SNumber" INTEGER NOT NULL,
    "SName" VARCHAR(15) NOT NULL,

    CONSTRAINT "EmployeeStatus_pkey" PRIMARY KEY ("SNumber")
);

-- CreateTable
CREATE TABLE "BookingStatus" (
    "SNumber" INTEGER NOT NULL,
    "SName" VARCHAR(15) NOT NULL,

    CONSTRAINT "BookingStatus_pkey" PRIMARY KEY ("SNumber")
);

-- CreateTable
CREATE TABLE "Building" (
    "BNumber" INTEGER NOT NULL,
    "BName" VARCHAR(15) NOT NULL,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("BNumber")
);

-- CreateTable
CREATE TABLE "Floor" (
    "FlNumber" INTEGER NOT NULL,
    "FlName" VARCHAR(3) NOT NULL,
    "BNo" INTEGER NOT NULL,

    CONSTRAINT "Floor_pkey" PRIMARY KEY ("FlNumber")
);

-- CreateTable
CREATE TABLE "Room" (
    "RNumber" INTEGER NOT NULL,
    "RName" VARCHAR(15) NOT NULL,
    "Capacity" INTEGER NOT NULL,
    "VIP" INTEGER NOT NULL,
    "FlNo" INTEGER NOT NULL,
    "SNo" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("RNumber")
);

-- CreateTable
CREATE TABLE "Employee" (
    "ENumber" INTEGER NOT NULL,
    "FName" VARCHAR(15) NOT NULL,
    "LName" VARCHAR(15) NOT NULL,
    "score" INTEGER NOT NULL,
    "Email" VARCHAR(30) NOT NULL,
    "username" VARCHAR(15) NOT NULL,
    "password" VARCHAR(15) NOT NULL,
    "DNo" INTEGER NOT NULL,
    "PNo" INTEGER NOT NULL,
    "SNo" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("ENumber")
);

-- CreateTable
CREATE TABLE "Booking" (
    "BKNumber" INTEGER NOT NULL,
    "BKDate" TIMESTAMP(3) NOT NULL,
    "ENo" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("BKNumber")
);

-- CreateTable
CREATE TABLE "BookingList" (
    "BKLNumber" INTEGER NOT NULL,
    "BKLNo" INTEGER NOT NULL,
    "RNo" INTEGER NOT NULL,
    "Start_Date" TIMESTAMP(3) NOT NULL,
    "Start_Time" VARCHAR(5) NOT NULL,
    "End_Time" VARCHAR(5) NOT NULL,
    "details" VARCHAR(30),
    "QR" VARCHAR(8),
    "SNo" INTEGER NOT NULL,

    CONSTRAINT "BookingList_pkey" PRIMARY KEY ("BKLNumber")
);

-- CreateTable
CREATE TABLE "AccessList" (
    "ACNumber" INTEGER NOT NULL,
    "BKLNo" INTEGER NOT NULL,
    "BKNo" INTEGER NOT NULL,
    "Access_Time" VARCHAR(5) NOT NULL,

    CONSTRAINT "AccessList_pkey" PRIMARY KEY ("ACNumber")
);

-- CreateTable
CREATE TABLE "DenyBooking" (
    "DNNumber" INTEGER NOT NULL,
    "BKLNo" INTEGER NOT NULL,
    "BKNo" INTEGER NOT NULL,
    "details" VARCHAR(30),

    CONSTRAINT "DenyBooking_pkey" PRIMARY KEY ("DNNumber")
);

-- CreateTable
CREATE TABLE "CancelBooking" (
    "CCNumber" INTEGER NOT NULL,
    "BKLNo" INTEGER NOT NULL,
    "BKNo" INTEGER NOT NULL,
    "details" VARCHAR(30),

    CONSTRAINT "CancelBooking_pkey" PRIMARY KEY ("CCNumber")
);

-- CreateTable
CREATE TABLE "LockList" (
    "LKNo" INTEGER NOT NULL,
    "ENo" INTEGER NOT NULL,
    "LKDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LockList_pkey" PRIMARY KEY ("LKNo")
);

-- CreateTable
CREATE TABLE "UnlockList" (
    "ULKNo" INTEGER NOT NULL,
    "ENo" INTEGER NOT NULL,
    "LKDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UnlockList_pkey" PRIMARY KEY ("ULKNo")
);

-- AddForeignKey
ALTER TABLE "Floor" ADD CONSTRAINT "Floor_BNo_fkey" FOREIGN KEY ("BNo") REFERENCES "Building"("BNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_FlNo_fkey" FOREIGN KEY ("FlNo") REFERENCES "Floor"("FlNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_SNo_fkey" FOREIGN KEY ("SNo") REFERENCES "RoomStatus"("SNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_DNo_fkey" FOREIGN KEY ("DNo") REFERENCES "Department"("DNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_PNo_fkey" FOREIGN KEY ("PNo") REFERENCES "Position"("PNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_SNo_fkey" FOREIGN KEY ("SNo") REFERENCES "EmployeeStatus"("SNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_ENo_fkey" FOREIGN KEY ("ENo") REFERENCES "Employee"("ENumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingList" ADD CONSTRAINT "BookingList_BKLNo_fkey" FOREIGN KEY ("BKLNo") REFERENCES "Booking"("BKNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingList" ADD CONSTRAINT "BookingList_RNo_fkey" FOREIGN KEY ("RNo") REFERENCES "Room"("RNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingList" ADD CONSTRAINT "BookingList_SNo_fkey" FOREIGN KEY ("SNo") REFERENCES "BookingStatus"("SNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessList" ADD CONSTRAINT "AccessList_BKLNo_fkey" FOREIGN KEY ("BKLNo") REFERENCES "BookingList"("BKLNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessList" ADD CONSTRAINT "AccessList_BKNo_fkey" FOREIGN KEY ("BKNo") REFERENCES "Booking"("BKNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DenyBooking" ADD CONSTRAINT "DenyBooking_BKLNo_fkey" FOREIGN KEY ("BKLNo") REFERENCES "BookingList"("BKLNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DenyBooking" ADD CONSTRAINT "DenyBooking_BKNo_fkey" FOREIGN KEY ("BKNo") REFERENCES "Booking"("BKNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancelBooking" ADD CONSTRAINT "CancelBooking_BKLNo_fkey" FOREIGN KEY ("BKLNo") REFERENCES "BookingList"("BKLNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancelBooking" ADD CONSTRAINT "CancelBooking_BKNo_fkey" FOREIGN KEY ("BKNo") REFERENCES "Booking"("BKNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LockList" ADD CONSTRAINT "LockList_ENo_fkey" FOREIGN KEY ("ENo") REFERENCES "Employee"("ENumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnlockList" ADD CONSTRAINT "UnlockList_ENo_fkey" FOREIGN KEY ("ENo") REFERENCES "Employee"("ENumber") ON DELETE RESTRICT ON UPDATE CASCADE;
