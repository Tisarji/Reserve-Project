
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.DepartmentScalarFieldEnum = {
  DNumber: 'DNumber',
  DName: 'DName'
};

exports.Prisma.PositionScalarFieldEnum = {
  PNumber: 'PNumber',
  PName: 'PName',
  AccessNo: 'AccessNo'
};

exports.Prisma.RoomStatusScalarFieldEnum = {
  SNumber: 'SNumber',
  SName: 'SName'
};

exports.Prisma.EmployeeStatusScalarFieldEnum = {
  SNumber: 'SNumber',
  SName: 'SName'
};

exports.Prisma.BookingStatusScalarFieldEnum = {
  SNumber: 'SNumber',
  SName: 'SName'
};

exports.Prisma.BuildingScalarFieldEnum = {
  BNumber: 'BNumber',
  BName: 'BName'
};

exports.Prisma.FloorScalarFieldEnum = {
  FlNumber: 'FlNumber',
  FlName: 'FlName',
  BNo: 'BNo'
};

exports.Prisma.RoomScalarFieldEnum = {
  RNumber: 'RNumber',
  RName: 'RName',
  Capacity: 'Capacity',
  VIP: 'VIP',
  FlNo: 'FlNo',
  SNo: 'SNo'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  ENumber: 'ENumber',
  FName: 'FName',
  LName: 'LName',
  score: 'score',
  Email: 'Email',
  username: 'username',
  password: 'password',
  DNo: 'DNo',
  PNo: 'PNo',
  SNo: 'SNo'
};

exports.Prisma.BookingScalarFieldEnum = {
  BKNumber: 'BKNumber',
  BKDate: 'BKDate',
  ENo: 'ENo'
};

exports.Prisma.BookingListScalarFieldEnum = {
  BKLNumber: 'BKLNumber',
  BKLNo: 'BKLNo',
  RNo: 'RNo',
  Start_Date: 'Start_Date',
  Start_Time: 'Start_Time',
  End_Time: 'End_Time',
  details: 'details',
  QR: 'QR',
  SNo: 'SNo'
};

exports.Prisma.AccessListScalarFieldEnum = {
  ACNumber: 'ACNumber',
  BKLNo: 'BKLNo',
  BKNo: 'BKNo',
  AccessTime: 'AccessTime'
};

exports.Prisma.DenyBookingScalarFieldEnum = {
  DNNumber: 'DNNumber',
  BKLNo: 'BKLNo',
  BKNo: 'BKNo',
  details: 'details'
};

exports.Prisma.CancelBookingScalarFieldEnum = {
  CCNumber: 'CCNumber',
  BKLNo: 'BKLNo',
  BKNo: 'BKNo',
  details: 'details'
};

exports.Prisma.LockListScalarFieldEnum = {
  LKNo: 'LKNo',
  ENo: 'ENo',
  LKDate: 'LKDate'
};

exports.Prisma.UnlockListScalarFieldEnum = {
  ULKNo: 'ULKNo',
  ENo: 'ENo',
  LKDate: 'LKDate'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  Department: 'Department',
  Position: 'Position',
  RoomStatus: 'RoomStatus',
  EmployeeStatus: 'EmployeeStatus',
  BookingStatus: 'BookingStatus',
  Building: 'Building',
  Floor: 'Floor',
  Room: 'Room',
  Employee: 'Employee',
  Booking: 'Booking',
  BookingList: 'BookingList',
  AccessList: 'AccessList',
  DenyBooking: 'DenyBooking',
  CancelBooking: 'CancelBooking',
  LockList: 'LockList',
  UnlockList: 'UnlockList'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
