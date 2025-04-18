-- ----------------------------
-- Insert into DEPARTMENT
-- ----------------------------
INSERT INTO DEPARTMENT (DNUMBER, DNAME) VALUES 
  (1, 'Register'),
  (2, 'Finance'),
  (3, 'Library');

-- ----------------------------
-- Insert into POSITION
-- ----------------------------
INSERT INTO POSITION (PNUMBER, PNAME, ACCESSNO) VALUES 
  (1, 'Admin', '111111'),
  (2, 'Employee', '110000');

-- ----------------------------
-- Insert into ROOM_STATUS
-- ----------------------------
INSERT INTO ROOM_STATUS (SNUMBER, SNAME) VALUES 
  (1, 'Available'),
  (2, 'Not Available');

-- ----------------------------
-- Insert into EMPLOYEE_STATUS
-- ----------------------------
INSERT INTO EMPLOYEE_STATUS (SNUMBER, SNAME) VALUES 
  (1, 'Active'),
  (2, 'Inactive');

-- ----------------------------
-- Insert into BOOKING_STATUS
-- ----------------------------
INSERT INTO BOOKING_STATUS (SNUMBER, SNAME) VALUES 
  (1, 'Approved'),
  (2, 'Verifying'),
  (3, 'Not Approved'),
  (4, 'Canceled'),
  (5, 'Complete'),
  (6, 'Late');

-- ----------------------------
-- Insert into BUILDING
-- ----------------------------
INSERT INTO BUILDING (BNUMBER, BNAME) VALUES 
  (1, 'D'),
  (2, 'F'),
  (3, 'MII');

-- ----------------------------
-- Insert into FLOOR
-- ----------------------------
INSERT INTO FLOOR (FLNUMBER, FLNAME, BNO) VALUES 
  (1, '1', 1),
  (2, '2', 1);

-- ----------------------------
-- Insert into ROOM
-- ----------------------------
INSERT INTO ROOM (RNUMBER, RNAME, CAPACITY, VIP, FLNO) VALUES 
  (1, '102', 40, 0, 1),
  (2, '103', 40, 0, 1),
  (3, '202', 10, 1, 2);

-- ----------------------------
-- Insert into EMPLOYEE
-- ----------------------------
INSERT INTO EMPLOYEE (ENUMBER, FNAME, LNAME, SCORE, EMAIL, USERNAME, PASSWORD, DNO, PNO, SNO) VALUES 
  (1, 'A', 'A', 0, 'Aa@gmail.com', 'Admin', '1234', 1, 1, 1),
  (2, 'B', 'B', 0, 'Baka@gmail.com', 'Boom', '4321', 1, 2, 1);

-- ----------------------------
-- Insert into BOOKING
-- ----------------------------
INSERT INTO BOOKING (BKNUMBER, BKDATE, ENO) VALUES 
  (1, '2024-10-10', 2);

-- ----------------------------
-- Insert into BOOKING_LIST
-- ----------------------------
INSERT INTO BOOKING_LIST (BKLNUMBER, BKLNO, RNO, START_DATE, START_TIME, END_TIME, DETAILS, QR, SNO) VALUES 
  (1, 1, 1, '2024-10-10', '09:00', '12:00', '', '00100001', 1),
  (2, 1, 3, '2024-10-11', '09:00', '12:00', '', '00200001', 2);
