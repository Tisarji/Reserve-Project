
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>
/**
 * Model RoomStatus
 * 
 */
export type RoomStatus = $Result.DefaultSelection<Prisma.$RoomStatusPayload>
/**
 * Model EmployeeStatus
 * 
 */
export type EmployeeStatus = $Result.DefaultSelection<Prisma.$EmployeeStatusPayload>
/**
 * Model BookingStatus
 * 
 */
export type BookingStatus = $Result.DefaultSelection<Prisma.$BookingStatusPayload>
/**
 * Model Building
 * 
 */
export type Building = $Result.DefaultSelection<Prisma.$BuildingPayload>
/**
 * Model Floor
 * 
 */
export type Floor = $Result.DefaultSelection<Prisma.$FloorPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BookingList
 * 
 */
export type BookingList = $Result.DefaultSelection<Prisma.$BookingListPayload>
/**
 * Model AccessList
 * 
 */
export type AccessList = $Result.DefaultSelection<Prisma.$AccessListPayload>
/**
 * Model DenyBooking
 * 
 */
export type DenyBooking = $Result.DefaultSelection<Prisma.$DenyBookingPayload>
/**
 * Model CancelBooking
 * 
 */
export type CancelBooking = $Result.DefaultSelection<Prisma.$CancelBookingPayload>
/**
 * Model LockList
 * 
 */
export type LockList = $Result.DefaultSelection<Prisma.$LockListPayload>
/**
 * Model UnlockList
 * 
 */
export type UnlockList = $Result.DefaultSelection<Prisma.$UnlockListPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Departments
 * const departments = await prisma.department.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Departments
   * const departments = await prisma.department.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomStatus`: Exposes CRUD operations for the **RoomStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomStatuses
    * const roomStatuses = await prisma.roomStatus.findMany()
    * ```
    */
  get roomStatus(): Prisma.RoomStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeStatus`: Exposes CRUD operations for the **EmployeeStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeStatuses
    * const employeeStatuses = await prisma.employeeStatus.findMany()
    * ```
    */
  get employeeStatus(): Prisma.EmployeeStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingStatus`: Exposes CRUD operations for the **BookingStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingStatuses
    * const bookingStatuses = await prisma.bookingStatus.findMany()
    * ```
    */
  get bookingStatus(): Prisma.BookingStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.building`: Exposes CRUD operations for the **Building** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.building.findMany()
    * ```
    */
  get building(): Prisma.BuildingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.floor`: Exposes CRUD operations for the **Floor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Floors
    * const floors = await prisma.floor.findMany()
    * ```
    */
  get floor(): Prisma.FloorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingList`: Exposes CRUD operations for the **BookingList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingLists
    * const bookingLists = await prisma.bookingList.findMany()
    * ```
    */
  get bookingList(): Prisma.BookingListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessList`: Exposes CRUD operations for the **AccessList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessLists
    * const accessLists = await prisma.accessList.findMany()
    * ```
    */
  get accessList(): Prisma.AccessListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.denyBooking`: Exposes CRUD operations for the **DenyBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DenyBookings
    * const denyBookings = await prisma.denyBooking.findMany()
    * ```
    */
  get denyBooking(): Prisma.DenyBookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cancelBooking`: Exposes CRUD operations for the **CancelBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CancelBookings
    * const cancelBookings = await prisma.cancelBooking.findMany()
    * ```
    */
  get cancelBooking(): Prisma.CancelBookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lockList`: Exposes CRUD operations for the **LockList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LockLists
    * const lockLists = await prisma.lockList.findMany()
    * ```
    */
  get lockList(): Prisma.LockListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unlockList`: Exposes CRUD operations for the **UnlockList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnlockLists
    * const unlockLists = await prisma.unlockList.findMany()
    * ```
    */
  get unlockList(): Prisma.UnlockListDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "department" | "position" | "roomStatus" | "employeeStatus" | "bookingStatus" | "building" | "floor" | "room" | "employee" | "booking" | "bookingList" | "accessList" | "denyBooking" | "cancelBooking" | "lockList" | "unlockList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      RoomStatus: {
        payload: Prisma.$RoomStatusPayload<ExtArgs>
        fields: Prisma.RoomStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          findFirst: {
            args: Prisma.RoomStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          findMany: {
            args: Prisma.RoomStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>[]
          }
          create: {
            args: Prisma.RoomStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          createMany: {
            args: Prisma.RoomStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>[]
          }
          delete: {
            args: Prisma.RoomStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          update: {
            args: Prisma.RoomStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          deleteMany: {
            args: Prisma.RoomStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>[]
          }
          upsert: {
            args: Prisma.RoomStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          aggregate: {
            args: Prisma.RoomStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomStatus>
          }
          groupBy: {
            args: Prisma.RoomStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomStatusCountArgs<ExtArgs>
            result: $Utils.Optional<RoomStatusCountAggregateOutputType> | number
          }
        }
      }
      EmployeeStatus: {
        payload: Prisma.$EmployeeStatusPayload<ExtArgs>
        fields: Prisma.EmployeeStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeStatusPayload>
          }
          findFirst: {
            args: Prisma.EmployeeStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeStatusPayload>
          }
          findMany: {
            args: Prisma.EmployeeStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeStatusPayload>[]
          }
          create: {
            args: Prisma.EmployeeStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeStatusPayload>
          }
          createMany: {
            args: Prisma.EmployeeStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeStatusPayload>[]
          }
          delete: {
            args: Prisma.EmployeeStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeStatusPayload>
          }
          update: {
            args: Prisma.EmployeeStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeStatusPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeStatusPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeStatusPayload>
          }
          aggregate: {
            args: Prisma.EmployeeStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeStatus>
          }
          groupBy: {
            args: Prisma.EmployeeStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeStatusCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeStatusCountAggregateOutputType> | number
          }
        }
      }
      BookingStatus: {
        payload: Prisma.$BookingStatusPayload<ExtArgs>
        fields: Prisma.BookingStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingStatusPayload>
          }
          findFirst: {
            args: Prisma.BookingStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingStatusPayload>
          }
          findMany: {
            args: Prisma.BookingStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingStatusPayload>[]
          }
          create: {
            args: Prisma.BookingStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingStatusPayload>
          }
          createMany: {
            args: Prisma.BookingStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingStatusPayload>[]
          }
          delete: {
            args: Prisma.BookingStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingStatusPayload>
          }
          update: {
            args: Prisma.BookingStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingStatusPayload>
          }
          deleteMany: {
            args: Prisma.BookingStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingStatusPayload>[]
          }
          upsert: {
            args: Prisma.BookingStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingStatusPayload>
          }
          aggregate: {
            args: Prisma.BookingStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingStatus>
          }
          groupBy: {
            args: Prisma.BookingStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingStatusCountArgs<ExtArgs>
            result: $Utils.Optional<BookingStatusCountAggregateOutputType> | number
          }
        }
      }
      Building: {
        payload: Prisma.$BuildingPayload<ExtArgs>
        fields: Prisma.BuildingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findFirst: {
            args: Prisma.BuildingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findMany: {
            args: Prisma.BuildingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          create: {
            args: Prisma.BuildingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          createMany: {
            args: Prisma.BuildingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          delete: {
            args: Prisma.BuildingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          update: {
            args: Prisma.BuildingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          deleteMany: {
            args: Prisma.BuildingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuildingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          upsert: {
            args: Prisma.BuildingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          aggregate: {
            args: Prisma.BuildingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuilding>
          }
          groupBy: {
            args: Prisma.BuildingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildingCountArgs<ExtArgs>
            result: $Utils.Optional<BuildingCountAggregateOutputType> | number
          }
        }
      }
      Floor: {
        payload: Prisma.$FloorPayload<ExtArgs>
        fields: Prisma.FloorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FloorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FloorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findFirst: {
            args: Prisma.FloorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FloorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findMany: {
            args: Prisma.FloorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          create: {
            args: Prisma.FloorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          createMany: {
            args: Prisma.FloorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FloorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          delete: {
            args: Prisma.FloorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          update: {
            args: Prisma.FloorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          deleteMany: {
            args: Prisma.FloorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FloorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FloorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          upsert: {
            args: Prisma.FloorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          aggregate: {
            args: Prisma.FloorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFloor>
          }
          groupBy: {
            args: Prisma.FloorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FloorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FloorCountArgs<ExtArgs>
            result: $Utils.Optional<FloorCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BookingList: {
        payload: Prisma.$BookingListPayload<ExtArgs>
        fields: Prisma.BookingListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingListPayload>
          }
          findFirst: {
            args: Prisma.BookingListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingListPayload>
          }
          findMany: {
            args: Prisma.BookingListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingListPayload>[]
          }
          create: {
            args: Prisma.BookingListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingListPayload>
          }
          createMany: {
            args: Prisma.BookingListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingListPayload>[]
          }
          delete: {
            args: Prisma.BookingListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingListPayload>
          }
          update: {
            args: Prisma.BookingListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingListPayload>
          }
          deleteMany: {
            args: Prisma.BookingListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingListPayload>[]
          }
          upsert: {
            args: Prisma.BookingListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingListPayload>
          }
          aggregate: {
            args: Prisma.BookingListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingList>
          }
          groupBy: {
            args: Prisma.BookingListGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingListGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingListCountArgs<ExtArgs>
            result: $Utils.Optional<BookingListCountAggregateOutputType> | number
          }
        }
      }
      AccessList: {
        payload: Prisma.$AccessListPayload<ExtArgs>
        fields: Prisma.AccessListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessListPayload>
          }
          findFirst: {
            args: Prisma.AccessListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessListPayload>
          }
          findMany: {
            args: Prisma.AccessListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessListPayload>[]
          }
          create: {
            args: Prisma.AccessListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessListPayload>
          }
          createMany: {
            args: Prisma.AccessListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessListPayload>[]
          }
          delete: {
            args: Prisma.AccessListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessListPayload>
          }
          update: {
            args: Prisma.AccessListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessListPayload>
          }
          deleteMany: {
            args: Prisma.AccessListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessListPayload>[]
          }
          upsert: {
            args: Prisma.AccessListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessListPayload>
          }
          aggregate: {
            args: Prisma.AccessListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessList>
          }
          groupBy: {
            args: Prisma.AccessListGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessListGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessListCountArgs<ExtArgs>
            result: $Utils.Optional<AccessListCountAggregateOutputType> | number
          }
        }
      }
      DenyBooking: {
        payload: Prisma.$DenyBookingPayload<ExtArgs>
        fields: Prisma.DenyBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DenyBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenyBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DenyBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenyBookingPayload>
          }
          findFirst: {
            args: Prisma.DenyBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenyBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DenyBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenyBookingPayload>
          }
          findMany: {
            args: Prisma.DenyBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenyBookingPayload>[]
          }
          create: {
            args: Prisma.DenyBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenyBookingPayload>
          }
          createMany: {
            args: Prisma.DenyBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DenyBookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenyBookingPayload>[]
          }
          delete: {
            args: Prisma.DenyBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenyBookingPayload>
          }
          update: {
            args: Prisma.DenyBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenyBookingPayload>
          }
          deleteMany: {
            args: Prisma.DenyBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DenyBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DenyBookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenyBookingPayload>[]
          }
          upsert: {
            args: Prisma.DenyBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenyBookingPayload>
          }
          aggregate: {
            args: Prisma.DenyBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDenyBooking>
          }
          groupBy: {
            args: Prisma.DenyBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DenyBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DenyBookingCountArgs<ExtArgs>
            result: $Utils.Optional<DenyBookingCountAggregateOutputType> | number
          }
        }
      }
      CancelBooking: {
        payload: Prisma.$CancelBookingPayload<ExtArgs>
        fields: Prisma.CancelBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CancelBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancelBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CancelBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancelBookingPayload>
          }
          findFirst: {
            args: Prisma.CancelBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancelBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CancelBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancelBookingPayload>
          }
          findMany: {
            args: Prisma.CancelBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancelBookingPayload>[]
          }
          create: {
            args: Prisma.CancelBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancelBookingPayload>
          }
          createMany: {
            args: Prisma.CancelBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CancelBookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancelBookingPayload>[]
          }
          delete: {
            args: Prisma.CancelBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancelBookingPayload>
          }
          update: {
            args: Prisma.CancelBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancelBookingPayload>
          }
          deleteMany: {
            args: Prisma.CancelBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CancelBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CancelBookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancelBookingPayload>[]
          }
          upsert: {
            args: Prisma.CancelBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancelBookingPayload>
          }
          aggregate: {
            args: Prisma.CancelBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCancelBooking>
          }
          groupBy: {
            args: Prisma.CancelBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CancelBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CancelBookingCountArgs<ExtArgs>
            result: $Utils.Optional<CancelBookingCountAggregateOutputType> | number
          }
        }
      }
      LockList: {
        payload: Prisma.$LockListPayload<ExtArgs>
        fields: Prisma.LockListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LockListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LockListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockListPayload>
          }
          findFirst: {
            args: Prisma.LockListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LockListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockListPayload>
          }
          findMany: {
            args: Prisma.LockListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockListPayload>[]
          }
          create: {
            args: Prisma.LockListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockListPayload>
          }
          createMany: {
            args: Prisma.LockListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LockListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockListPayload>[]
          }
          delete: {
            args: Prisma.LockListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockListPayload>
          }
          update: {
            args: Prisma.LockListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockListPayload>
          }
          deleteMany: {
            args: Prisma.LockListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LockListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LockListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockListPayload>[]
          }
          upsert: {
            args: Prisma.LockListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockListPayload>
          }
          aggregate: {
            args: Prisma.LockListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLockList>
          }
          groupBy: {
            args: Prisma.LockListGroupByArgs<ExtArgs>
            result: $Utils.Optional<LockListGroupByOutputType>[]
          }
          count: {
            args: Prisma.LockListCountArgs<ExtArgs>
            result: $Utils.Optional<LockListCountAggregateOutputType> | number
          }
        }
      }
      UnlockList: {
        payload: Prisma.$UnlockListPayload<ExtArgs>
        fields: Prisma.UnlockListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnlockListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnlockListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockListPayload>
          }
          findFirst: {
            args: Prisma.UnlockListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnlockListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockListPayload>
          }
          findMany: {
            args: Prisma.UnlockListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockListPayload>[]
          }
          create: {
            args: Prisma.UnlockListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockListPayload>
          }
          createMany: {
            args: Prisma.UnlockListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnlockListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockListPayload>[]
          }
          delete: {
            args: Prisma.UnlockListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockListPayload>
          }
          update: {
            args: Prisma.UnlockListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockListPayload>
          }
          deleteMany: {
            args: Prisma.UnlockListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnlockListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnlockListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockListPayload>[]
          }
          upsert: {
            args: Prisma.UnlockListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockListPayload>
          }
          aggregate: {
            args: Prisma.UnlockListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnlockList>
          }
          groupBy: {
            args: Prisma.UnlockListGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnlockListGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnlockListCountArgs<ExtArgs>
            result: $Utils.Optional<UnlockListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    department?: DepartmentOmit
    position?: PositionOmit
    roomStatus?: RoomStatusOmit
    employeeStatus?: EmployeeStatusOmit
    bookingStatus?: BookingStatusOmit
    building?: BuildingOmit
    floor?: FloorOmit
    room?: RoomOmit
    employee?: EmployeeOmit
    booking?: BookingOmit
    bookingList?: BookingListOmit
    accessList?: AccessListOmit
    denyBooking?: DenyBookingOmit
    cancelBooking?: CancelBookingOmit
    lockList?: LockListOmit
    unlockList?: UnlockListOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    employees: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | DepartmentCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    employees: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | PositionCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type RoomStatusCountOutputType
   */

  export type RoomStatusCountOutputType = {
    rooms: number
  }

  export type RoomStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | RoomStatusCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * RoomStatusCountOutputType without action
   */
  export type RoomStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatusCountOutputType
     */
    select?: RoomStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomStatusCountOutputType without action
   */
  export type RoomStatusCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type EmployeeStatusCountOutputType
   */

  export type EmployeeStatusCountOutputType = {
    employees: number
  }

  export type EmployeeStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | EmployeeStatusCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * EmployeeStatusCountOutputType without action
   */
  export type EmployeeStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatusCountOutputType
     */
    select?: EmployeeStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeStatusCountOutputType without action
   */
  export type EmployeeStatusCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type BookingStatusCountOutputType
   */

  export type BookingStatusCountOutputType = {
    bookingLists: number
  }

  export type BookingStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingLists?: boolean | BookingStatusCountOutputTypeCountBookingListsArgs
  }

  // Custom InputTypes
  /**
   * BookingStatusCountOutputType without action
   */
  export type BookingStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatusCountOutputType
     */
    select?: BookingStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingStatusCountOutputType without action
   */
  export type BookingStatusCountOutputTypeCountBookingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingListWhereInput
  }


  /**
   * Count Type BuildingCountOutputType
   */

  export type BuildingCountOutputType = {
    floors: number
  }

  export type BuildingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floors?: boolean | BuildingCountOutputTypeCountFloorsArgs
  }

  // Custom InputTypes
  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildingCountOutputType
     */
    select?: BuildingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeCountFloorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorWhereInput
  }


  /**
   * Count Type FloorCountOutputType
   */

  export type FloorCountOutputType = {
    rooms: number
  }

  export type FloorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | FloorCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorCountOutputType
     */
    select?: FloorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    bookingLists: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingLists?: boolean | RoomCountOutputTypeCountBookingListsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountBookingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingListWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    bookings: number
    lockLists: number
    unlockLists: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | EmployeeCountOutputTypeCountBookingsArgs
    lockLists?: boolean | EmployeeCountOutputTypeCountLockListsArgs
    unlockLists?: boolean | EmployeeCountOutputTypeCountUnlockListsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountLockListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LockListWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountUnlockListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnlockListWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    bookingLists: number
    accessLists: number
    denyBookings: number
    cancelBookings: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingLists?: boolean | BookingCountOutputTypeCountBookingListsArgs
    accessLists?: boolean | BookingCountOutputTypeCountAccessListsArgs
    denyBookings?: boolean | BookingCountOutputTypeCountDenyBookingsArgs
    cancelBookings?: boolean | BookingCountOutputTypeCountCancelBookingsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountBookingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingListWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountAccessListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessListWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountDenyBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenyBookingWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountCancelBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CancelBookingWhereInput
  }


  /**
   * Count Type BookingListCountOutputType
   */

  export type BookingListCountOutputType = {
    accessLists: number
    denyBookings: number
    cancelBookings: number
  }

  export type BookingListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessLists?: boolean | BookingListCountOutputTypeCountAccessListsArgs
    denyBookings?: boolean | BookingListCountOutputTypeCountDenyBookingsArgs
    cancelBookings?: boolean | BookingListCountOutputTypeCountCancelBookingsArgs
  }

  // Custom InputTypes
  /**
   * BookingListCountOutputType without action
   */
  export type BookingListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingListCountOutputType
     */
    select?: BookingListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingListCountOutputType without action
   */
  export type BookingListCountOutputTypeCountAccessListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessListWhereInput
  }

  /**
   * BookingListCountOutputType without action
   */
  export type BookingListCountOutputTypeCountDenyBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenyBookingWhereInput
  }

  /**
   * BookingListCountOutputType without action
   */
  export type BookingListCountOutputTypeCountCancelBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CancelBookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    DNumber: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    DNumber: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    DNumber: number | null
    DName: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    DNumber: number | null
    DName: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    DNumber: number
    DName: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    DNumber?: true
  }

  export type DepartmentSumAggregateInputType = {
    DNumber?: true
  }

  export type DepartmentMinAggregateInputType = {
    DNumber?: true
    DName?: true
  }

  export type DepartmentMaxAggregateInputType = {
    DNumber?: true
    DName?: true
  }

  export type DepartmentCountAggregateInputType = {
    DNumber?: true
    DName?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    DNumber: number
    DName: string
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DNumber?: boolean
    DName?: boolean
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DNumber?: boolean
    DName?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DNumber?: boolean
    DName?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    DNumber?: boolean
    DName?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DNumber" | "DName", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      DNumber: number
      DName: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `DNumber`
     * const departmentWithDNumberOnly = await prisma.department.findMany({ select: { DNumber: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `DNumber`
     * const departmentWithDNumberOnly = await prisma.department.createManyAndReturn({
     *   select: { DNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `DNumber`
     * const departmentWithDNumberOnly = await prisma.department.updateManyAndReturn({
     *   select: { DNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Department$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Department$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly DNumber: FieldRef<"Department", 'Int'>
    readonly DName: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.employees
   */
  export type Department$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionAvgAggregateOutputType = {
    PNumber: number | null
  }

  export type PositionSumAggregateOutputType = {
    PNumber: number | null
  }

  export type PositionMinAggregateOutputType = {
    PNumber: number | null
    PName: string | null
    AccessNo: string | null
  }

  export type PositionMaxAggregateOutputType = {
    PNumber: number | null
    PName: string | null
    AccessNo: string | null
  }

  export type PositionCountAggregateOutputType = {
    PNumber: number
    PName: number
    AccessNo: number
    _all: number
  }


  export type PositionAvgAggregateInputType = {
    PNumber?: true
  }

  export type PositionSumAggregateInputType = {
    PNumber?: true
  }

  export type PositionMinAggregateInputType = {
    PNumber?: true
    PName?: true
    AccessNo?: true
  }

  export type PositionMaxAggregateInputType = {
    PNumber?: true
    PName?: true
    AccessNo?: true
  }

  export type PositionCountAggregateInputType = {
    PNumber?: true
    PName?: true
    AccessNo?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _avg?: PositionAvgAggregateInputType
    _sum?: PositionSumAggregateInputType
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    PNumber: number
    PName: string
    AccessNo: string
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PNumber?: boolean
    PName?: boolean
    AccessNo?: boolean
    employees?: boolean | Position$employeesArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PNumber?: boolean
    PName?: boolean
    AccessNo?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PNumber?: boolean
    PName?: boolean
    AccessNo?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    PNumber?: boolean
    PName?: boolean
    AccessNo?: boolean
  }

  export type PositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PNumber" | "PName" | "AccessNo", ExtArgs["result"]["position"]>
  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Position$employeesArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PNumber: number
      PName: string
      AccessNo: string
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionFindUniqueArgs>(args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionFindFirstArgs>(args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `PNumber`
     * const positionWithPNumberOnly = await prisma.position.findMany({ select: { PNumber: true } })
     * 
     */
    findMany<T extends PositionFindManyArgs>(args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends PositionCreateArgs>(args: SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Positions.
     * @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionCreateManyArgs>(args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `PNumber`
     * const positionWithPNumberOnly = await prisma.position.createManyAndReturn({
     *   select: { PNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends PositionDeleteArgs>(args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionUpdateArgs>(args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDeleteManyArgs>(args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionUpdateManyArgs>(args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {PositionUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `PNumber`
     * const positionWithPNumberOnly = await prisma.position.updateManyAndReturn({
     *   select: { PNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PositionUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends PositionUpsertArgs>(args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Position$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Position$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Position model
   */
  interface PositionFieldRefs {
    readonly PNumber: FieldRef<"Position", 'Int'>
    readonly PName: FieldRef<"Position", 'String'>
    readonly AccessNo: FieldRef<"Position", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }

  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
  }

  /**
   * Position createManyAndReturn
   */
  export type PositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
  }

  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position updateManyAndReturn
   */
  export type PositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }

  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to delete.
     */
    limit?: number
  }

  /**
   * Position.employees
   */
  export type Position$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
  }


  /**
   * Model RoomStatus
   */

  export type AggregateRoomStatus = {
    _count: RoomStatusCountAggregateOutputType | null
    _avg: RoomStatusAvgAggregateOutputType | null
    _sum: RoomStatusSumAggregateOutputType | null
    _min: RoomStatusMinAggregateOutputType | null
    _max: RoomStatusMaxAggregateOutputType | null
  }

  export type RoomStatusAvgAggregateOutputType = {
    SNumber: number | null
  }

  export type RoomStatusSumAggregateOutputType = {
    SNumber: number | null
  }

  export type RoomStatusMinAggregateOutputType = {
    SNumber: number | null
    SName: string | null
  }

  export type RoomStatusMaxAggregateOutputType = {
    SNumber: number | null
    SName: string | null
  }

  export type RoomStatusCountAggregateOutputType = {
    SNumber: number
    SName: number
    _all: number
  }


  export type RoomStatusAvgAggregateInputType = {
    SNumber?: true
  }

  export type RoomStatusSumAggregateInputType = {
    SNumber?: true
  }

  export type RoomStatusMinAggregateInputType = {
    SNumber?: true
    SName?: true
  }

  export type RoomStatusMaxAggregateInputType = {
    SNumber?: true
    SName?: true
  }

  export type RoomStatusCountAggregateInputType = {
    SNumber?: true
    SName?: true
    _all?: true
  }

  export type RoomStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomStatus to aggregate.
     */
    where?: RoomStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomStatuses to fetch.
     */
    orderBy?: RoomStatusOrderByWithRelationInput | RoomStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomStatuses
    **/
    _count?: true | RoomStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomStatusMaxAggregateInputType
  }

  export type GetRoomStatusAggregateType<T extends RoomStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomStatus[P]>
      : GetScalarType<T[P], AggregateRoomStatus[P]>
  }




  export type RoomStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomStatusWhereInput
    orderBy?: RoomStatusOrderByWithAggregationInput | RoomStatusOrderByWithAggregationInput[]
    by: RoomStatusScalarFieldEnum[] | RoomStatusScalarFieldEnum
    having?: RoomStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomStatusCountAggregateInputType | true
    _avg?: RoomStatusAvgAggregateInputType
    _sum?: RoomStatusSumAggregateInputType
    _min?: RoomStatusMinAggregateInputType
    _max?: RoomStatusMaxAggregateInputType
  }

  export type RoomStatusGroupByOutputType = {
    SNumber: number
    SName: string
    _count: RoomStatusCountAggregateOutputType | null
    _avg: RoomStatusAvgAggregateOutputType | null
    _sum: RoomStatusSumAggregateOutputType | null
    _min: RoomStatusMinAggregateOutputType | null
    _max: RoomStatusMaxAggregateOutputType | null
  }

  type GetRoomStatusGroupByPayload<T extends RoomStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomStatusGroupByOutputType[P]>
            : GetScalarType<T[P], RoomStatusGroupByOutputType[P]>
        }
      >
    >


  export type RoomStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SNumber?: boolean
    SName?: boolean
    rooms?: boolean | RoomStatus$roomsArgs<ExtArgs>
    _count?: boolean | RoomStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomStatus"]>

  export type RoomStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SNumber?: boolean
    SName?: boolean
  }, ExtArgs["result"]["roomStatus"]>

  export type RoomStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SNumber?: boolean
    SName?: boolean
  }, ExtArgs["result"]["roomStatus"]>

  export type RoomStatusSelectScalar = {
    SNumber?: boolean
    SName?: boolean
  }

  export type RoomStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SNumber" | "SName", ExtArgs["result"]["roomStatus"]>
  export type RoomStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | RoomStatus$roomsArgs<ExtArgs>
    _count?: boolean | RoomStatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomStatus"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SNumber: number
      SName: string
    }, ExtArgs["result"]["roomStatus"]>
    composites: {}
  }

  type RoomStatusGetPayload<S extends boolean | null | undefined | RoomStatusDefaultArgs> = $Result.GetResult<Prisma.$RoomStatusPayload, S>

  type RoomStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomStatusCountAggregateInputType | true
    }

  export interface RoomStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomStatus'], meta: { name: 'RoomStatus' } }
    /**
     * Find zero or one RoomStatus that matches the filter.
     * @param {RoomStatusFindUniqueArgs} args - Arguments to find a RoomStatus
     * @example
     * // Get one RoomStatus
     * const roomStatus = await prisma.roomStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomStatusFindUniqueArgs>(args: SelectSubset<T, RoomStatusFindUniqueArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomStatusFindUniqueOrThrowArgs} args - Arguments to find a RoomStatus
     * @example
     * // Get one RoomStatus
     * const roomStatus = await prisma.roomStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusFindFirstArgs} args - Arguments to find a RoomStatus
     * @example
     * // Get one RoomStatus
     * const roomStatus = await prisma.roomStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomStatusFindFirstArgs>(args?: SelectSubset<T, RoomStatusFindFirstArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusFindFirstOrThrowArgs} args - Arguments to find a RoomStatus
     * @example
     * // Get one RoomStatus
     * const roomStatus = await prisma.roomStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomStatuses
     * const roomStatuses = await prisma.roomStatus.findMany()
     * 
     * // Get first 10 RoomStatuses
     * const roomStatuses = await prisma.roomStatus.findMany({ take: 10 })
     * 
     * // Only select the `SNumber`
     * const roomStatusWithSNumberOnly = await prisma.roomStatus.findMany({ select: { SNumber: true } })
     * 
     */
    findMany<T extends RoomStatusFindManyArgs>(args?: SelectSubset<T, RoomStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomStatus.
     * @param {RoomStatusCreateArgs} args - Arguments to create a RoomStatus.
     * @example
     * // Create one RoomStatus
     * const RoomStatus = await prisma.roomStatus.create({
     *   data: {
     *     // ... data to create a RoomStatus
     *   }
     * })
     * 
     */
    create<T extends RoomStatusCreateArgs>(args: SelectSubset<T, RoomStatusCreateArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomStatuses.
     * @param {RoomStatusCreateManyArgs} args - Arguments to create many RoomStatuses.
     * @example
     * // Create many RoomStatuses
     * const roomStatus = await prisma.roomStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomStatusCreateManyArgs>(args?: SelectSubset<T, RoomStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomStatuses and returns the data saved in the database.
     * @param {RoomStatusCreateManyAndReturnArgs} args - Arguments to create many RoomStatuses.
     * @example
     * // Create many RoomStatuses
     * const roomStatus = await prisma.roomStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomStatuses and only return the `SNumber`
     * const roomStatusWithSNumberOnly = await prisma.roomStatus.createManyAndReturn({
     *   select: { SNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomStatus.
     * @param {RoomStatusDeleteArgs} args - Arguments to delete one RoomStatus.
     * @example
     * // Delete one RoomStatus
     * const RoomStatus = await prisma.roomStatus.delete({
     *   where: {
     *     // ... filter to delete one RoomStatus
     *   }
     * })
     * 
     */
    delete<T extends RoomStatusDeleteArgs>(args: SelectSubset<T, RoomStatusDeleteArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomStatus.
     * @param {RoomStatusUpdateArgs} args - Arguments to update one RoomStatus.
     * @example
     * // Update one RoomStatus
     * const roomStatus = await prisma.roomStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomStatusUpdateArgs>(args: SelectSubset<T, RoomStatusUpdateArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomStatuses.
     * @param {RoomStatusDeleteManyArgs} args - Arguments to filter RoomStatuses to delete.
     * @example
     * // Delete a few RoomStatuses
     * const { count } = await prisma.roomStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomStatusDeleteManyArgs>(args?: SelectSubset<T, RoomStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomStatuses
     * const roomStatus = await prisma.roomStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomStatusUpdateManyArgs>(args: SelectSubset<T, RoomStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomStatuses and returns the data updated in the database.
     * @param {RoomStatusUpdateManyAndReturnArgs} args - Arguments to update many RoomStatuses.
     * @example
     * // Update many RoomStatuses
     * const roomStatus = await prisma.roomStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomStatuses and only return the `SNumber`
     * const roomStatusWithSNumberOnly = await prisma.roomStatus.updateManyAndReturn({
     *   select: { SNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomStatus.
     * @param {RoomStatusUpsertArgs} args - Arguments to update or create a RoomStatus.
     * @example
     * // Update or create a RoomStatus
     * const roomStatus = await prisma.roomStatus.upsert({
     *   create: {
     *     // ... data to create a RoomStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomStatus we want to update
     *   }
     * })
     */
    upsert<T extends RoomStatusUpsertArgs>(args: SelectSubset<T, RoomStatusUpsertArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusCountArgs} args - Arguments to filter RoomStatuses to count.
     * @example
     * // Count the number of RoomStatuses
     * const count = await prisma.roomStatus.count({
     *   where: {
     *     // ... the filter for the RoomStatuses we want to count
     *   }
     * })
    **/
    count<T extends RoomStatusCountArgs>(
      args?: Subset<T, RoomStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomStatusAggregateArgs>(args: Subset<T, RoomStatusAggregateArgs>): Prisma.PrismaPromise<GetRoomStatusAggregateType<T>>

    /**
     * Group by RoomStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomStatusGroupByArgs['orderBy'] }
        : { orderBy?: RoomStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomStatus model
   */
  readonly fields: RoomStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends RoomStatus$roomsArgs<ExtArgs> = {}>(args?: Subset<T, RoomStatus$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomStatus model
   */
  interface RoomStatusFieldRefs {
    readonly SNumber: FieldRef<"RoomStatus", 'Int'>
    readonly SName: FieldRef<"RoomStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoomStatus findUnique
   */
  export type RoomStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter, which RoomStatus to fetch.
     */
    where: RoomStatusWhereUniqueInput
  }

  /**
   * RoomStatus findUniqueOrThrow
   */
  export type RoomStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter, which RoomStatus to fetch.
     */
    where: RoomStatusWhereUniqueInput
  }

  /**
   * RoomStatus findFirst
   */
  export type RoomStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter, which RoomStatus to fetch.
     */
    where?: RoomStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomStatuses to fetch.
     */
    orderBy?: RoomStatusOrderByWithRelationInput | RoomStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomStatuses.
     */
    cursor?: RoomStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomStatuses.
     */
    distinct?: RoomStatusScalarFieldEnum | RoomStatusScalarFieldEnum[]
  }

  /**
   * RoomStatus findFirstOrThrow
   */
  export type RoomStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter, which RoomStatus to fetch.
     */
    where?: RoomStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomStatuses to fetch.
     */
    orderBy?: RoomStatusOrderByWithRelationInput | RoomStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomStatuses.
     */
    cursor?: RoomStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomStatuses.
     */
    distinct?: RoomStatusScalarFieldEnum | RoomStatusScalarFieldEnum[]
  }

  /**
   * RoomStatus findMany
   */
  export type RoomStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter, which RoomStatuses to fetch.
     */
    where?: RoomStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomStatuses to fetch.
     */
    orderBy?: RoomStatusOrderByWithRelationInput | RoomStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomStatuses.
     */
    cursor?: RoomStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomStatuses.
     */
    skip?: number
    distinct?: RoomStatusScalarFieldEnum | RoomStatusScalarFieldEnum[]
  }

  /**
   * RoomStatus create
   */
  export type RoomStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomStatus.
     */
    data: XOR<RoomStatusCreateInput, RoomStatusUncheckedCreateInput>
  }

  /**
   * RoomStatus createMany
   */
  export type RoomStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomStatuses.
     */
    data: RoomStatusCreateManyInput | RoomStatusCreateManyInput[]
  }

  /**
   * RoomStatus createManyAndReturn
   */
  export type RoomStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * The data used to create many RoomStatuses.
     */
    data: RoomStatusCreateManyInput | RoomStatusCreateManyInput[]
  }

  /**
   * RoomStatus update
   */
  export type RoomStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomStatus.
     */
    data: XOR<RoomStatusUpdateInput, RoomStatusUncheckedUpdateInput>
    /**
     * Choose, which RoomStatus to update.
     */
    where: RoomStatusWhereUniqueInput
  }

  /**
   * RoomStatus updateMany
   */
  export type RoomStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomStatuses.
     */
    data: XOR<RoomStatusUpdateManyMutationInput, RoomStatusUncheckedUpdateManyInput>
    /**
     * Filter which RoomStatuses to update
     */
    where?: RoomStatusWhereInput
    /**
     * Limit how many RoomStatuses to update.
     */
    limit?: number
  }

  /**
   * RoomStatus updateManyAndReturn
   */
  export type RoomStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * The data used to update RoomStatuses.
     */
    data: XOR<RoomStatusUpdateManyMutationInput, RoomStatusUncheckedUpdateManyInput>
    /**
     * Filter which RoomStatuses to update
     */
    where?: RoomStatusWhereInput
    /**
     * Limit how many RoomStatuses to update.
     */
    limit?: number
  }

  /**
   * RoomStatus upsert
   */
  export type RoomStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomStatus to update in case it exists.
     */
    where: RoomStatusWhereUniqueInput
    /**
     * In case the RoomStatus found by the `where` argument doesn't exist, create a new RoomStatus with this data.
     */
    create: XOR<RoomStatusCreateInput, RoomStatusUncheckedCreateInput>
    /**
     * In case the RoomStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomStatusUpdateInput, RoomStatusUncheckedUpdateInput>
  }

  /**
   * RoomStatus delete
   */
  export type RoomStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter which RoomStatus to delete.
     */
    where: RoomStatusWhereUniqueInput
  }

  /**
   * RoomStatus deleteMany
   */
  export type RoomStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomStatuses to delete
     */
    where?: RoomStatusWhereInput
    /**
     * Limit how many RoomStatuses to delete.
     */
    limit?: number
  }

  /**
   * RoomStatus.rooms
   */
  export type RoomStatus$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * RoomStatus without action
   */
  export type RoomStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeStatus
   */

  export type AggregateEmployeeStatus = {
    _count: EmployeeStatusCountAggregateOutputType | null
    _avg: EmployeeStatusAvgAggregateOutputType | null
    _sum: EmployeeStatusSumAggregateOutputType | null
    _min: EmployeeStatusMinAggregateOutputType | null
    _max: EmployeeStatusMaxAggregateOutputType | null
  }

  export type EmployeeStatusAvgAggregateOutputType = {
    SNumber: number | null
  }

  export type EmployeeStatusSumAggregateOutputType = {
    SNumber: number | null
  }

  export type EmployeeStatusMinAggregateOutputType = {
    SNumber: number | null
    SName: string | null
  }

  export type EmployeeStatusMaxAggregateOutputType = {
    SNumber: number | null
    SName: string | null
  }

  export type EmployeeStatusCountAggregateOutputType = {
    SNumber: number
    SName: number
    _all: number
  }


  export type EmployeeStatusAvgAggregateInputType = {
    SNumber?: true
  }

  export type EmployeeStatusSumAggregateInputType = {
    SNumber?: true
  }

  export type EmployeeStatusMinAggregateInputType = {
    SNumber?: true
    SName?: true
  }

  export type EmployeeStatusMaxAggregateInputType = {
    SNumber?: true
    SName?: true
  }

  export type EmployeeStatusCountAggregateInputType = {
    SNumber?: true
    SName?: true
    _all?: true
  }

  export type EmployeeStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeStatus to aggregate.
     */
    where?: EmployeeStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeStatuses to fetch.
     */
    orderBy?: EmployeeStatusOrderByWithRelationInput | EmployeeStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeStatuses
    **/
    _count?: true | EmployeeStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeStatusMaxAggregateInputType
  }

  export type GetEmployeeStatusAggregateType<T extends EmployeeStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeStatus[P]>
      : GetScalarType<T[P], AggregateEmployeeStatus[P]>
  }




  export type EmployeeStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeStatusWhereInput
    orderBy?: EmployeeStatusOrderByWithAggregationInput | EmployeeStatusOrderByWithAggregationInput[]
    by: EmployeeStatusScalarFieldEnum[] | EmployeeStatusScalarFieldEnum
    having?: EmployeeStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeStatusCountAggregateInputType | true
    _avg?: EmployeeStatusAvgAggregateInputType
    _sum?: EmployeeStatusSumAggregateInputType
    _min?: EmployeeStatusMinAggregateInputType
    _max?: EmployeeStatusMaxAggregateInputType
  }

  export type EmployeeStatusGroupByOutputType = {
    SNumber: number
    SName: string
    _count: EmployeeStatusCountAggregateOutputType | null
    _avg: EmployeeStatusAvgAggregateOutputType | null
    _sum: EmployeeStatusSumAggregateOutputType | null
    _min: EmployeeStatusMinAggregateOutputType | null
    _max: EmployeeStatusMaxAggregateOutputType | null
  }

  type GetEmployeeStatusGroupByPayload<T extends EmployeeStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeStatusGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeStatusGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SNumber?: boolean
    SName?: boolean
    employees?: boolean | EmployeeStatus$employeesArgs<ExtArgs>
    _count?: boolean | EmployeeStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeStatus"]>

  export type EmployeeStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SNumber?: boolean
    SName?: boolean
  }, ExtArgs["result"]["employeeStatus"]>

  export type EmployeeStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SNumber?: boolean
    SName?: boolean
  }, ExtArgs["result"]["employeeStatus"]>

  export type EmployeeStatusSelectScalar = {
    SNumber?: boolean
    SName?: boolean
  }

  export type EmployeeStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SNumber" | "SName", ExtArgs["result"]["employeeStatus"]>
  export type EmployeeStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | EmployeeStatus$employeesArgs<ExtArgs>
    _count?: boolean | EmployeeStatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeeStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeStatus"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SNumber: number
      SName: string
    }, ExtArgs["result"]["employeeStatus"]>
    composites: {}
  }

  type EmployeeStatusGetPayload<S extends boolean | null | undefined | EmployeeStatusDefaultArgs> = $Result.GetResult<Prisma.$EmployeeStatusPayload, S>

  type EmployeeStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeStatusCountAggregateInputType | true
    }

  export interface EmployeeStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeStatus'], meta: { name: 'EmployeeStatus' } }
    /**
     * Find zero or one EmployeeStatus that matches the filter.
     * @param {EmployeeStatusFindUniqueArgs} args - Arguments to find a EmployeeStatus
     * @example
     * // Get one EmployeeStatus
     * const employeeStatus = await prisma.employeeStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeStatusFindUniqueArgs>(args: SelectSubset<T, EmployeeStatusFindUniqueArgs<ExtArgs>>): Prisma__EmployeeStatusClient<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeStatusFindUniqueOrThrowArgs} args - Arguments to find a EmployeeStatus
     * @example
     * // Get one EmployeeStatus
     * const employeeStatus = await prisma.employeeStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeStatusClient<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeStatusFindFirstArgs} args - Arguments to find a EmployeeStatus
     * @example
     * // Get one EmployeeStatus
     * const employeeStatus = await prisma.employeeStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeStatusFindFirstArgs>(args?: SelectSubset<T, EmployeeStatusFindFirstArgs<ExtArgs>>): Prisma__EmployeeStatusClient<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeStatusFindFirstOrThrowArgs} args - Arguments to find a EmployeeStatus
     * @example
     * // Get one EmployeeStatus
     * const employeeStatus = await prisma.employeeStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeStatusClient<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeStatuses
     * const employeeStatuses = await prisma.employeeStatus.findMany()
     * 
     * // Get first 10 EmployeeStatuses
     * const employeeStatuses = await prisma.employeeStatus.findMany({ take: 10 })
     * 
     * // Only select the `SNumber`
     * const employeeStatusWithSNumberOnly = await prisma.employeeStatus.findMany({ select: { SNumber: true } })
     * 
     */
    findMany<T extends EmployeeStatusFindManyArgs>(args?: SelectSubset<T, EmployeeStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeStatus.
     * @param {EmployeeStatusCreateArgs} args - Arguments to create a EmployeeStatus.
     * @example
     * // Create one EmployeeStatus
     * const EmployeeStatus = await prisma.employeeStatus.create({
     *   data: {
     *     // ... data to create a EmployeeStatus
     *   }
     * })
     * 
     */
    create<T extends EmployeeStatusCreateArgs>(args: SelectSubset<T, EmployeeStatusCreateArgs<ExtArgs>>): Prisma__EmployeeStatusClient<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeStatuses.
     * @param {EmployeeStatusCreateManyArgs} args - Arguments to create many EmployeeStatuses.
     * @example
     * // Create many EmployeeStatuses
     * const employeeStatus = await prisma.employeeStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeStatusCreateManyArgs>(args?: SelectSubset<T, EmployeeStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeStatuses and returns the data saved in the database.
     * @param {EmployeeStatusCreateManyAndReturnArgs} args - Arguments to create many EmployeeStatuses.
     * @example
     * // Create many EmployeeStatuses
     * const employeeStatus = await prisma.employeeStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeStatuses and only return the `SNumber`
     * const employeeStatusWithSNumberOnly = await prisma.employeeStatus.createManyAndReturn({
     *   select: { SNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeStatus.
     * @param {EmployeeStatusDeleteArgs} args - Arguments to delete one EmployeeStatus.
     * @example
     * // Delete one EmployeeStatus
     * const EmployeeStatus = await prisma.employeeStatus.delete({
     *   where: {
     *     // ... filter to delete one EmployeeStatus
     *   }
     * })
     * 
     */
    delete<T extends EmployeeStatusDeleteArgs>(args: SelectSubset<T, EmployeeStatusDeleteArgs<ExtArgs>>): Prisma__EmployeeStatusClient<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeStatus.
     * @param {EmployeeStatusUpdateArgs} args - Arguments to update one EmployeeStatus.
     * @example
     * // Update one EmployeeStatus
     * const employeeStatus = await prisma.employeeStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeStatusUpdateArgs>(args: SelectSubset<T, EmployeeStatusUpdateArgs<ExtArgs>>): Prisma__EmployeeStatusClient<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeStatuses.
     * @param {EmployeeStatusDeleteManyArgs} args - Arguments to filter EmployeeStatuses to delete.
     * @example
     * // Delete a few EmployeeStatuses
     * const { count } = await prisma.employeeStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeStatusDeleteManyArgs>(args?: SelectSubset<T, EmployeeStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeStatuses
     * const employeeStatus = await prisma.employeeStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeStatusUpdateManyArgs>(args: SelectSubset<T, EmployeeStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeStatuses and returns the data updated in the database.
     * @param {EmployeeStatusUpdateManyAndReturnArgs} args - Arguments to update many EmployeeStatuses.
     * @example
     * // Update many EmployeeStatuses
     * const employeeStatus = await prisma.employeeStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeStatuses and only return the `SNumber`
     * const employeeStatusWithSNumberOnly = await prisma.employeeStatus.updateManyAndReturn({
     *   select: { SNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeStatus.
     * @param {EmployeeStatusUpsertArgs} args - Arguments to update or create a EmployeeStatus.
     * @example
     * // Update or create a EmployeeStatus
     * const employeeStatus = await prisma.employeeStatus.upsert({
     *   create: {
     *     // ... data to create a EmployeeStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeStatus we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeStatusUpsertArgs>(args: SelectSubset<T, EmployeeStatusUpsertArgs<ExtArgs>>): Prisma__EmployeeStatusClient<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeStatusCountArgs} args - Arguments to filter EmployeeStatuses to count.
     * @example
     * // Count the number of EmployeeStatuses
     * const count = await prisma.employeeStatus.count({
     *   where: {
     *     // ... the filter for the EmployeeStatuses we want to count
     *   }
     * })
    **/
    count<T extends EmployeeStatusCountArgs>(
      args?: Subset<T, EmployeeStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeStatusAggregateArgs>(args: Subset<T, EmployeeStatusAggregateArgs>): Prisma.PrismaPromise<GetEmployeeStatusAggregateType<T>>

    /**
     * Group by EmployeeStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeStatusGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeStatus model
   */
  readonly fields: EmployeeStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends EmployeeStatus$employeesArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeStatus$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeStatus model
   */
  interface EmployeeStatusFieldRefs {
    readonly SNumber: FieldRef<"EmployeeStatus", 'Int'>
    readonly SName: FieldRef<"EmployeeStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeStatus findUnique
   */
  export type EmployeeStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeStatusInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeStatus to fetch.
     */
    where: EmployeeStatusWhereUniqueInput
  }

  /**
   * EmployeeStatus findUniqueOrThrow
   */
  export type EmployeeStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeStatusInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeStatus to fetch.
     */
    where: EmployeeStatusWhereUniqueInput
  }

  /**
   * EmployeeStatus findFirst
   */
  export type EmployeeStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeStatusInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeStatus to fetch.
     */
    where?: EmployeeStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeStatuses to fetch.
     */
    orderBy?: EmployeeStatusOrderByWithRelationInput | EmployeeStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeStatuses.
     */
    cursor?: EmployeeStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeStatuses.
     */
    distinct?: EmployeeStatusScalarFieldEnum | EmployeeStatusScalarFieldEnum[]
  }

  /**
   * EmployeeStatus findFirstOrThrow
   */
  export type EmployeeStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeStatusInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeStatus to fetch.
     */
    where?: EmployeeStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeStatuses to fetch.
     */
    orderBy?: EmployeeStatusOrderByWithRelationInput | EmployeeStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeStatuses.
     */
    cursor?: EmployeeStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeStatuses.
     */
    distinct?: EmployeeStatusScalarFieldEnum | EmployeeStatusScalarFieldEnum[]
  }

  /**
   * EmployeeStatus findMany
   */
  export type EmployeeStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeStatusInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeStatuses to fetch.
     */
    where?: EmployeeStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeStatuses to fetch.
     */
    orderBy?: EmployeeStatusOrderByWithRelationInput | EmployeeStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeStatuses.
     */
    cursor?: EmployeeStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeStatuses.
     */
    skip?: number
    distinct?: EmployeeStatusScalarFieldEnum | EmployeeStatusScalarFieldEnum[]
  }

  /**
   * EmployeeStatus create
   */
  export type EmployeeStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeStatus.
     */
    data: XOR<EmployeeStatusCreateInput, EmployeeStatusUncheckedCreateInput>
  }

  /**
   * EmployeeStatus createMany
   */
  export type EmployeeStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeStatuses.
     */
    data: EmployeeStatusCreateManyInput | EmployeeStatusCreateManyInput[]
  }

  /**
   * EmployeeStatus createManyAndReturn
   */
  export type EmployeeStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeStatuses.
     */
    data: EmployeeStatusCreateManyInput | EmployeeStatusCreateManyInput[]
  }

  /**
   * EmployeeStatus update
   */
  export type EmployeeStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeStatus.
     */
    data: XOR<EmployeeStatusUpdateInput, EmployeeStatusUncheckedUpdateInput>
    /**
     * Choose, which EmployeeStatus to update.
     */
    where: EmployeeStatusWhereUniqueInput
  }

  /**
   * EmployeeStatus updateMany
   */
  export type EmployeeStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeStatuses.
     */
    data: XOR<EmployeeStatusUpdateManyMutationInput, EmployeeStatusUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeStatuses to update
     */
    where?: EmployeeStatusWhereInput
    /**
     * Limit how many EmployeeStatuses to update.
     */
    limit?: number
  }

  /**
   * EmployeeStatus updateManyAndReturn
   */
  export type EmployeeStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeStatuses.
     */
    data: XOR<EmployeeStatusUpdateManyMutationInput, EmployeeStatusUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeStatuses to update
     */
    where?: EmployeeStatusWhereInput
    /**
     * Limit how many EmployeeStatuses to update.
     */
    limit?: number
  }

  /**
   * EmployeeStatus upsert
   */
  export type EmployeeStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeStatus to update in case it exists.
     */
    where: EmployeeStatusWhereUniqueInput
    /**
     * In case the EmployeeStatus found by the `where` argument doesn't exist, create a new EmployeeStatus with this data.
     */
    create: XOR<EmployeeStatusCreateInput, EmployeeStatusUncheckedCreateInput>
    /**
     * In case the EmployeeStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeStatusUpdateInput, EmployeeStatusUncheckedUpdateInput>
  }

  /**
   * EmployeeStatus delete
   */
  export type EmployeeStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeStatusInclude<ExtArgs> | null
    /**
     * Filter which EmployeeStatus to delete.
     */
    where: EmployeeStatusWhereUniqueInput
  }

  /**
   * EmployeeStatus deleteMany
   */
  export type EmployeeStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeStatuses to delete
     */
    where?: EmployeeStatusWhereInput
    /**
     * Limit how many EmployeeStatuses to delete.
     */
    limit?: number
  }

  /**
   * EmployeeStatus.employees
   */
  export type EmployeeStatus$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * EmployeeStatus without action
   */
  export type EmployeeStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeStatus
     */
    select?: EmployeeStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeStatus
     */
    omit?: EmployeeStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeStatusInclude<ExtArgs> | null
  }


  /**
   * Model BookingStatus
   */

  export type AggregateBookingStatus = {
    _count: BookingStatusCountAggregateOutputType | null
    _avg: BookingStatusAvgAggregateOutputType | null
    _sum: BookingStatusSumAggregateOutputType | null
    _min: BookingStatusMinAggregateOutputType | null
    _max: BookingStatusMaxAggregateOutputType | null
  }

  export type BookingStatusAvgAggregateOutputType = {
    SNumber: number | null
  }

  export type BookingStatusSumAggregateOutputType = {
    SNumber: number | null
  }

  export type BookingStatusMinAggregateOutputType = {
    SNumber: number | null
    SName: string | null
  }

  export type BookingStatusMaxAggregateOutputType = {
    SNumber: number | null
    SName: string | null
  }

  export type BookingStatusCountAggregateOutputType = {
    SNumber: number
    SName: number
    _all: number
  }


  export type BookingStatusAvgAggregateInputType = {
    SNumber?: true
  }

  export type BookingStatusSumAggregateInputType = {
    SNumber?: true
  }

  export type BookingStatusMinAggregateInputType = {
    SNumber?: true
    SName?: true
  }

  export type BookingStatusMaxAggregateInputType = {
    SNumber?: true
    SName?: true
  }

  export type BookingStatusCountAggregateInputType = {
    SNumber?: true
    SName?: true
    _all?: true
  }

  export type BookingStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingStatus to aggregate.
     */
    where?: BookingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingStatuses to fetch.
     */
    orderBy?: BookingStatusOrderByWithRelationInput | BookingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingStatuses
    **/
    _count?: true | BookingStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingStatusMaxAggregateInputType
  }

  export type GetBookingStatusAggregateType<T extends BookingStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingStatus[P]>
      : GetScalarType<T[P], AggregateBookingStatus[P]>
  }




  export type BookingStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingStatusWhereInput
    orderBy?: BookingStatusOrderByWithAggregationInput | BookingStatusOrderByWithAggregationInput[]
    by: BookingStatusScalarFieldEnum[] | BookingStatusScalarFieldEnum
    having?: BookingStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingStatusCountAggregateInputType | true
    _avg?: BookingStatusAvgAggregateInputType
    _sum?: BookingStatusSumAggregateInputType
    _min?: BookingStatusMinAggregateInputType
    _max?: BookingStatusMaxAggregateInputType
  }

  export type BookingStatusGroupByOutputType = {
    SNumber: number
    SName: string
    _count: BookingStatusCountAggregateOutputType | null
    _avg: BookingStatusAvgAggregateOutputType | null
    _sum: BookingStatusSumAggregateOutputType | null
    _min: BookingStatusMinAggregateOutputType | null
    _max: BookingStatusMaxAggregateOutputType | null
  }

  type GetBookingStatusGroupByPayload<T extends BookingStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingStatusGroupByOutputType[P]>
            : GetScalarType<T[P], BookingStatusGroupByOutputType[P]>
        }
      >
    >


  export type BookingStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SNumber?: boolean
    SName?: boolean
    bookingLists?: boolean | BookingStatus$bookingListsArgs<ExtArgs>
    _count?: boolean | BookingStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingStatus"]>

  export type BookingStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SNumber?: boolean
    SName?: boolean
  }, ExtArgs["result"]["bookingStatus"]>

  export type BookingStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SNumber?: boolean
    SName?: boolean
  }, ExtArgs["result"]["bookingStatus"]>

  export type BookingStatusSelectScalar = {
    SNumber?: boolean
    SName?: boolean
  }

  export type BookingStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SNumber" | "SName", ExtArgs["result"]["bookingStatus"]>
  export type BookingStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingLists?: boolean | BookingStatus$bookingListsArgs<ExtArgs>
    _count?: boolean | BookingStatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookingStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookingStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingStatus"
    objects: {
      bookingLists: Prisma.$BookingListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SNumber: number
      SName: string
    }, ExtArgs["result"]["bookingStatus"]>
    composites: {}
  }

  type BookingStatusGetPayload<S extends boolean | null | undefined | BookingStatusDefaultArgs> = $Result.GetResult<Prisma.$BookingStatusPayload, S>

  type BookingStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingStatusCountAggregateInputType | true
    }

  export interface BookingStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingStatus'], meta: { name: 'BookingStatus' } }
    /**
     * Find zero or one BookingStatus that matches the filter.
     * @param {BookingStatusFindUniqueArgs} args - Arguments to find a BookingStatus
     * @example
     * // Get one BookingStatus
     * const bookingStatus = await prisma.bookingStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingStatusFindUniqueArgs>(args: SelectSubset<T, BookingStatusFindUniqueArgs<ExtArgs>>): Prisma__BookingStatusClient<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingStatusFindUniqueOrThrowArgs} args - Arguments to find a BookingStatus
     * @example
     * // Get one BookingStatus
     * const bookingStatus = await prisma.bookingStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingStatusClient<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingStatusFindFirstArgs} args - Arguments to find a BookingStatus
     * @example
     * // Get one BookingStatus
     * const bookingStatus = await prisma.bookingStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingStatusFindFirstArgs>(args?: SelectSubset<T, BookingStatusFindFirstArgs<ExtArgs>>): Prisma__BookingStatusClient<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingStatusFindFirstOrThrowArgs} args - Arguments to find a BookingStatus
     * @example
     * // Get one BookingStatus
     * const bookingStatus = await prisma.bookingStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingStatusClient<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingStatuses
     * const bookingStatuses = await prisma.bookingStatus.findMany()
     * 
     * // Get first 10 BookingStatuses
     * const bookingStatuses = await prisma.bookingStatus.findMany({ take: 10 })
     * 
     * // Only select the `SNumber`
     * const bookingStatusWithSNumberOnly = await prisma.bookingStatus.findMany({ select: { SNumber: true } })
     * 
     */
    findMany<T extends BookingStatusFindManyArgs>(args?: SelectSubset<T, BookingStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingStatus.
     * @param {BookingStatusCreateArgs} args - Arguments to create a BookingStatus.
     * @example
     * // Create one BookingStatus
     * const BookingStatus = await prisma.bookingStatus.create({
     *   data: {
     *     // ... data to create a BookingStatus
     *   }
     * })
     * 
     */
    create<T extends BookingStatusCreateArgs>(args: SelectSubset<T, BookingStatusCreateArgs<ExtArgs>>): Prisma__BookingStatusClient<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingStatuses.
     * @param {BookingStatusCreateManyArgs} args - Arguments to create many BookingStatuses.
     * @example
     * // Create many BookingStatuses
     * const bookingStatus = await prisma.bookingStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingStatusCreateManyArgs>(args?: SelectSubset<T, BookingStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingStatuses and returns the data saved in the database.
     * @param {BookingStatusCreateManyAndReturnArgs} args - Arguments to create many BookingStatuses.
     * @example
     * // Create many BookingStatuses
     * const bookingStatus = await prisma.bookingStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingStatuses and only return the `SNumber`
     * const bookingStatusWithSNumberOnly = await prisma.bookingStatus.createManyAndReturn({
     *   select: { SNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingStatus.
     * @param {BookingStatusDeleteArgs} args - Arguments to delete one BookingStatus.
     * @example
     * // Delete one BookingStatus
     * const BookingStatus = await prisma.bookingStatus.delete({
     *   where: {
     *     // ... filter to delete one BookingStatus
     *   }
     * })
     * 
     */
    delete<T extends BookingStatusDeleteArgs>(args: SelectSubset<T, BookingStatusDeleteArgs<ExtArgs>>): Prisma__BookingStatusClient<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingStatus.
     * @param {BookingStatusUpdateArgs} args - Arguments to update one BookingStatus.
     * @example
     * // Update one BookingStatus
     * const bookingStatus = await prisma.bookingStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingStatusUpdateArgs>(args: SelectSubset<T, BookingStatusUpdateArgs<ExtArgs>>): Prisma__BookingStatusClient<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingStatuses.
     * @param {BookingStatusDeleteManyArgs} args - Arguments to filter BookingStatuses to delete.
     * @example
     * // Delete a few BookingStatuses
     * const { count } = await prisma.bookingStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingStatusDeleteManyArgs>(args?: SelectSubset<T, BookingStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingStatuses
     * const bookingStatus = await prisma.bookingStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingStatusUpdateManyArgs>(args: SelectSubset<T, BookingStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingStatuses and returns the data updated in the database.
     * @param {BookingStatusUpdateManyAndReturnArgs} args - Arguments to update many BookingStatuses.
     * @example
     * // Update many BookingStatuses
     * const bookingStatus = await prisma.bookingStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingStatuses and only return the `SNumber`
     * const bookingStatusWithSNumberOnly = await prisma.bookingStatus.updateManyAndReturn({
     *   select: { SNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingStatus.
     * @param {BookingStatusUpsertArgs} args - Arguments to update or create a BookingStatus.
     * @example
     * // Update or create a BookingStatus
     * const bookingStatus = await prisma.bookingStatus.upsert({
     *   create: {
     *     // ... data to create a BookingStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingStatus we want to update
     *   }
     * })
     */
    upsert<T extends BookingStatusUpsertArgs>(args: SelectSubset<T, BookingStatusUpsertArgs<ExtArgs>>): Prisma__BookingStatusClient<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingStatusCountArgs} args - Arguments to filter BookingStatuses to count.
     * @example
     * // Count the number of BookingStatuses
     * const count = await prisma.bookingStatus.count({
     *   where: {
     *     // ... the filter for the BookingStatuses we want to count
     *   }
     * })
    **/
    count<T extends BookingStatusCountArgs>(
      args?: Subset<T, BookingStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingStatusAggregateArgs>(args: Subset<T, BookingStatusAggregateArgs>): Prisma.PrismaPromise<GetBookingStatusAggregateType<T>>

    /**
     * Group by BookingStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingStatusGroupByArgs['orderBy'] }
        : { orderBy?: BookingStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingStatus model
   */
  readonly fields: BookingStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookingLists<T extends BookingStatus$bookingListsArgs<ExtArgs> = {}>(args?: Subset<T, BookingStatus$bookingListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingStatus model
   */
  interface BookingStatusFieldRefs {
    readonly SNumber: FieldRef<"BookingStatus", 'Int'>
    readonly SName: FieldRef<"BookingStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookingStatus findUnique
   */
  export type BookingStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingStatusInclude<ExtArgs> | null
    /**
     * Filter, which BookingStatus to fetch.
     */
    where: BookingStatusWhereUniqueInput
  }

  /**
   * BookingStatus findUniqueOrThrow
   */
  export type BookingStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingStatusInclude<ExtArgs> | null
    /**
     * Filter, which BookingStatus to fetch.
     */
    where: BookingStatusWhereUniqueInput
  }

  /**
   * BookingStatus findFirst
   */
  export type BookingStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingStatusInclude<ExtArgs> | null
    /**
     * Filter, which BookingStatus to fetch.
     */
    where?: BookingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingStatuses to fetch.
     */
    orderBy?: BookingStatusOrderByWithRelationInput | BookingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingStatuses.
     */
    cursor?: BookingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingStatuses.
     */
    distinct?: BookingStatusScalarFieldEnum | BookingStatusScalarFieldEnum[]
  }

  /**
   * BookingStatus findFirstOrThrow
   */
  export type BookingStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingStatusInclude<ExtArgs> | null
    /**
     * Filter, which BookingStatus to fetch.
     */
    where?: BookingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingStatuses to fetch.
     */
    orderBy?: BookingStatusOrderByWithRelationInput | BookingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingStatuses.
     */
    cursor?: BookingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingStatuses.
     */
    distinct?: BookingStatusScalarFieldEnum | BookingStatusScalarFieldEnum[]
  }

  /**
   * BookingStatus findMany
   */
  export type BookingStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingStatusInclude<ExtArgs> | null
    /**
     * Filter, which BookingStatuses to fetch.
     */
    where?: BookingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingStatuses to fetch.
     */
    orderBy?: BookingStatusOrderByWithRelationInput | BookingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingStatuses.
     */
    cursor?: BookingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingStatuses.
     */
    skip?: number
    distinct?: BookingStatusScalarFieldEnum | BookingStatusScalarFieldEnum[]
  }

  /**
   * BookingStatus create
   */
  export type BookingStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingStatus.
     */
    data: XOR<BookingStatusCreateInput, BookingStatusUncheckedCreateInput>
  }

  /**
   * BookingStatus createMany
   */
  export type BookingStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingStatuses.
     */
    data: BookingStatusCreateManyInput | BookingStatusCreateManyInput[]
  }

  /**
   * BookingStatus createManyAndReturn
   */
  export type BookingStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * The data used to create many BookingStatuses.
     */
    data: BookingStatusCreateManyInput | BookingStatusCreateManyInput[]
  }

  /**
   * BookingStatus update
   */
  export type BookingStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingStatus.
     */
    data: XOR<BookingStatusUpdateInput, BookingStatusUncheckedUpdateInput>
    /**
     * Choose, which BookingStatus to update.
     */
    where: BookingStatusWhereUniqueInput
  }

  /**
   * BookingStatus updateMany
   */
  export type BookingStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingStatuses.
     */
    data: XOR<BookingStatusUpdateManyMutationInput, BookingStatusUncheckedUpdateManyInput>
    /**
     * Filter which BookingStatuses to update
     */
    where?: BookingStatusWhereInput
    /**
     * Limit how many BookingStatuses to update.
     */
    limit?: number
  }

  /**
   * BookingStatus updateManyAndReturn
   */
  export type BookingStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * The data used to update BookingStatuses.
     */
    data: XOR<BookingStatusUpdateManyMutationInput, BookingStatusUncheckedUpdateManyInput>
    /**
     * Filter which BookingStatuses to update
     */
    where?: BookingStatusWhereInput
    /**
     * Limit how many BookingStatuses to update.
     */
    limit?: number
  }

  /**
   * BookingStatus upsert
   */
  export type BookingStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingStatus to update in case it exists.
     */
    where: BookingStatusWhereUniqueInput
    /**
     * In case the BookingStatus found by the `where` argument doesn't exist, create a new BookingStatus with this data.
     */
    create: XOR<BookingStatusCreateInput, BookingStatusUncheckedCreateInput>
    /**
     * In case the BookingStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingStatusUpdateInput, BookingStatusUncheckedUpdateInput>
  }

  /**
   * BookingStatus delete
   */
  export type BookingStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingStatusInclude<ExtArgs> | null
    /**
     * Filter which BookingStatus to delete.
     */
    where: BookingStatusWhereUniqueInput
  }

  /**
   * BookingStatus deleteMany
   */
  export type BookingStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingStatuses to delete
     */
    where?: BookingStatusWhereInput
    /**
     * Limit how many BookingStatuses to delete.
     */
    limit?: number
  }

  /**
   * BookingStatus.bookingLists
   */
  export type BookingStatus$bookingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    where?: BookingListWhereInput
    orderBy?: BookingListOrderByWithRelationInput | BookingListOrderByWithRelationInput[]
    cursor?: BookingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingListScalarFieldEnum | BookingListScalarFieldEnum[]
  }

  /**
   * BookingStatus without action
   */
  export type BookingStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingStatus
     */
    select?: BookingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingStatus
     */
    omit?: BookingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingStatusInclude<ExtArgs> | null
  }


  /**
   * Model Building
   */

  export type AggregateBuilding = {
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  export type BuildingAvgAggregateOutputType = {
    BNumber: number | null
  }

  export type BuildingSumAggregateOutputType = {
    BNumber: number | null
  }

  export type BuildingMinAggregateOutputType = {
    BNumber: number | null
    BName: string | null
  }

  export type BuildingMaxAggregateOutputType = {
    BNumber: number | null
    BName: string | null
  }

  export type BuildingCountAggregateOutputType = {
    BNumber: number
    BName: number
    _all: number
  }


  export type BuildingAvgAggregateInputType = {
    BNumber?: true
  }

  export type BuildingSumAggregateInputType = {
    BNumber?: true
  }

  export type BuildingMinAggregateInputType = {
    BNumber?: true
    BName?: true
  }

  export type BuildingMaxAggregateInputType = {
    BNumber?: true
    BName?: true
  }

  export type BuildingCountAggregateInputType = {
    BNumber?: true
    BName?: true
    _all?: true
  }

  export type BuildingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Building to aggregate.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buildings
    **/
    _count?: true | BuildingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingMaxAggregateInputType
  }

  export type GetBuildingAggregateType<T extends BuildingAggregateArgs> = {
        [P in keyof T & keyof AggregateBuilding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuilding[P]>
      : GetScalarType<T[P], AggregateBuilding[P]>
  }




  export type BuildingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithAggregationInput | BuildingOrderByWithAggregationInput[]
    by: BuildingScalarFieldEnum[] | BuildingScalarFieldEnum
    having?: BuildingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingCountAggregateInputType | true
    _avg?: BuildingAvgAggregateInputType
    _sum?: BuildingSumAggregateInputType
    _min?: BuildingMinAggregateInputType
    _max?: BuildingMaxAggregateInputType
  }

  export type BuildingGroupByOutputType = {
    BNumber: number
    BName: string
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  type GetBuildingGroupByPayload<T extends BuildingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingGroupByOutputType[P]>
        }
      >
    >


  export type BuildingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BNumber?: boolean
    BName?: boolean
    floors?: boolean | Building$floorsArgs<ExtArgs>
    _count?: boolean | BuildingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BNumber?: boolean
    BName?: boolean
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BNumber?: boolean
    BName?: boolean
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectScalar = {
    BNumber?: boolean
    BName?: boolean
  }

  export type BuildingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"BNumber" | "BName", ExtArgs["result"]["building"]>
  export type BuildingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floors?: boolean | Building$floorsArgs<ExtArgs>
    _count?: boolean | BuildingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BuildingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BuildingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BuildingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Building"
    objects: {
      floors: Prisma.$FloorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      BNumber: number
      BName: string
    }, ExtArgs["result"]["building"]>
    composites: {}
  }

  type BuildingGetPayload<S extends boolean | null | undefined | BuildingDefaultArgs> = $Result.GetResult<Prisma.$BuildingPayload, S>

  type BuildingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildingCountAggregateInputType | true
    }

  export interface BuildingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Building'], meta: { name: 'Building' } }
    /**
     * Find zero or one Building that matches the filter.
     * @param {BuildingFindUniqueArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildingFindUniqueArgs>(args: SelectSubset<T, BuildingFindUniqueArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Building that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildingFindUniqueOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildingFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Building that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildingFindFirstArgs>(args?: SelectSubset<T, BuildingFindFirstArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Building that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildingFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.building.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.building.findMany({ take: 10 })
     * 
     * // Only select the `BNumber`
     * const buildingWithBNumberOnly = await prisma.building.findMany({ select: { BNumber: true } })
     * 
     */
    findMany<T extends BuildingFindManyArgs>(args?: SelectSubset<T, BuildingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Building.
     * @param {BuildingCreateArgs} args - Arguments to create a Building.
     * @example
     * // Create one Building
     * const Building = await prisma.building.create({
     *   data: {
     *     // ... data to create a Building
     *   }
     * })
     * 
     */
    create<T extends BuildingCreateArgs>(args: SelectSubset<T, BuildingCreateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buildings.
     * @param {BuildingCreateManyArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildingCreateManyArgs>(args?: SelectSubset<T, BuildingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buildings and returns the data saved in the database.
     * @param {BuildingCreateManyAndReturnArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buildings and only return the `BNumber`
     * const buildingWithBNumberOnly = await prisma.building.createManyAndReturn({
     *   select: { BNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildingCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Building.
     * @param {BuildingDeleteArgs} args - Arguments to delete one Building.
     * @example
     * // Delete one Building
     * const Building = await prisma.building.delete({
     *   where: {
     *     // ... filter to delete one Building
     *   }
     * })
     * 
     */
    delete<T extends BuildingDeleteArgs>(args: SelectSubset<T, BuildingDeleteArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Building.
     * @param {BuildingUpdateArgs} args - Arguments to update one Building.
     * @example
     * // Update one Building
     * const building = await prisma.building.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildingUpdateArgs>(args: SelectSubset<T, BuildingUpdateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buildings.
     * @param {BuildingDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.building.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildingDeleteManyArgs>(args?: SelectSubset<T, BuildingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildingUpdateManyArgs>(args: SelectSubset<T, BuildingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings and returns the data updated in the database.
     * @param {BuildingUpdateManyAndReturnArgs} args - Arguments to update many Buildings.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buildings and only return the `BNumber`
     * const buildingWithBNumberOnly = await prisma.building.updateManyAndReturn({
     *   select: { BNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuildingUpdateManyAndReturnArgs>(args: SelectSubset<T, BuildingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Building.
     * @param {BuildingUpsertArgs} args - Arguments to update or create a Building.
     * @example
     * // Update or create a Building
     * const building = await prisma.building.upsert({
     *   create: {
     *     // ... data to create a Building
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Building we want to update
     *   }
     * })
     */
    upsert<T extends BuildingUpsertArgs>(args: SelectSubset<T, BuildingUpsertArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.building.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends BuildingCountArgs>(
      args?: Subset<T, BuildingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildingAggregateArgs>(args: Subset<T, BuildingAggregateArgs>): Prisma.PrismaPromise<GetBuildingAggregateType<T>>

    /**
     * Group by Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuildingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildingGroupByArgs['orderBy'] }
        : { orderBy?: BuildingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuildingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Building model
   */
  readonly fields: BuildingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Building.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    floors<T extends Building$floorsArgs<ExtArgs> = {}>(args?: Subset<T, Building$floorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Building model
   */
  interface BuildingFieldRefs {
    readonly BNumber: FieldRef<"Building", 'Int'>
    readonly BName: FieldRef<"Building", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Building findUnique
   */
  export type BuildingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findUniqueOrThrow
   */
  export type BuildingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findFirst
   */
  export type BuildingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findFirstOrThrow
   */
  export type BuildingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findMany
   */
  export type BuildingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building create
   */
  export type BuildingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to create a Building.
     */
    data: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
  }

  /**
   * Building createMany
   */
  export type BuildingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
  }

  /**
   * Building createManyAndReturn
   */
  export type BuildingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
  }

  /**
   * Building update
   */
  export type BuildingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to update a Building.
     */
    data: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
    /**
     * Choose, which Building to update.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building updateMany
   */
  export type BuildingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to update.
     */
    limit?: number
  }

  /**
   * Building updateManyAndReturn
   */
  export type BuildingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to update.
     */
    limit?: number
  }

  /**
   * Building upsert
   */
  export type BuildingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The filter to search for the Building to update in case it exists.
     */
    where: BuildingWhereUniqueInput
    /**
     * In case the Building found by the `where` argument doesn't exist, create a new Building with this data.
     */
    create: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
    /**
     * In case the Building was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
  }

  /**
   * Building delete
   */
  export type BuildingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter which Building to delete.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building deleteMany
   */
  export type BuildingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buildings to delete
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to delete.
     */
    limit?: number
  }

  /**
   * Building.floors
   */
  export type Building$floorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    where?: FloorWhereInput
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    cursor?: FloorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Building without action
   */
  export type BuildingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
  }


  /**
   * Model Floor
   */

  export type AggregateFloor = {
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  export type FloorAvgAggregateOutputType = {
    FlNumber: number | null
    BNo: number | null
  }

  export type FloorSumAggregateOutputType = {
    FlNumber: number | null
    BNo: number | null
  }

  export type FloorMinAggregateOutputType = {
    FlNumber: number | null
    FlName: string | null
    BNo: number | null
  }

  export type FloorMaxAggregateOutputType = {
    FlNumber: number | null
    FlName: string | null
    BNo: number | null
  }

  export type FloorCountAggregateOutputType = {
    FlNumber: number
    FlName: number
    BNo: number
    _all: number
  }


  export type FloorAvgAggregateInputType = {
    FlNumber?: true
    BNo?: true
  }

  export type FloorSumAggregateInputType = {
    FlNumber?: true
    BNo?: true
  }

  export type FloorMinAggregateInputType = {
    FlNumber?: true
    FlName?: true
    BNo?: true
  }

  export type FloorMaxAggregateInputType = {
    FlNumber?: true
    FlName?: true
    BNo?: true
  }

  export type FloorCountAggregateInputType = {
    FlNumber?: true
    FlName?: true
    BNo?: true
    _all?: true
  }

  export type FloorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floor to aggregate.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Floors
    **/
    _count?: true | FloorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FloorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FloorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FloorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FloorMaxAggregateInputType
  }

  export type GetFloorAggregateType<T extends FloorAggregateArgs> = {
        [P in keyof T & keyof AggregateFloor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFloor[P]>
      : GetScalarType<T[P], AggregateFloor[P]>
  }




  export type FloorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorWhereInput
    orderBy?: FloorOrderByWithAggregationInput | FloorOrderByWithAggregationInput[]
    by: FloorScalarFieldEnum[] | FloorScalarFieldEnum
    having?: FloorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FloorCountAggregateInputType | true
    _avg?: FloorAvgAggregateInputType
    _sum?: FloorSumAggregateInputType
    _min?: FloorMinAggregateInputType
    _max?: FloorMaxAggregateInputType
  }

  export type FloorGroupByOutputType = {
    FlNumber: number
    FlName: string
    BNo: number
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  type GetFloorGroupByPayload<T extends FloorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FloorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FloorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FloorGroupByOutputType[P]>
            : GetScalarType<T[P], FloorGroupByOutputType[P]>
        }
      >
    >


  export type FloorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FlNumber?: boolean
    FlName?: boolean
    BNo?: boolean
    building?: boolean | BuildingDefaultArgs<ExtArgs>
    rooms?: boolean | Floor$roomsArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FlNumber?: boolean
    FlName?: boolean
    BNo?: boolean
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FlNumber?: boolean
    FlName?: boolean
    BNo?: boolean
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectScalar = {
    FlNumber?: boolean
    FlName?: boolean
    BNo?: boolean
  }

  export type FloorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"FlNumber" | "FlName" | "BNo", ExtArgs["result"]["floor"]>
  export type FloorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | BuildingDefaultArgs<ExtArgs>
    rooms?: boolean | Floor$roomsArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FloorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }
  export type FloorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }

  export type $FloorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Floor"
    objects: {
      building: Prisma.$BuildingPayload<ExtArgs>
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      FlNumber: number
      FlName: string
      BNo: number
    }, ExtArgs["result"]["floor"]>
    composites: {}
  }

  type FloorGetPayload<S extends boolean | null | undefined | FloorDefaultArgs> = $Result.GetResult<Prisma.$FloorPayload, S>

  type FloorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FloorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FloorCountAggregateInputType | true
    }

  export interface FloorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Floor'], meta: { name: 'Floor' } }
    /**
     * Find zero or one Floor that matches the filter.
     * @param {FloorFindUniqueArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FloorFindUniqueArgs>(args: SelectSubset<T, FloorFindUniqueArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Floor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FloorFindUniqueOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FloorFindUniqueOrThrowArgs>(args: SelectSubset<T, FloorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FloorFindFirstArgs>(args?: SelectSubset<T, FloorFindFirstArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FloorFindFirstOrThrowArgs>(args?: SelectSubset<T, FloorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Floors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Floors
     * const floors = await prisma.floor.findMany()
     * 
     * // Get first 10 Floors
     * const floors = await prisma.floor.findMany({ take: 10 })
     * 
     * // Only select the `FlNumber`
     * const floorWithFlNumberOnly = await prisma.floor.findMany({ select: { FlNumber: true } })
     * 
     */
    findMany<T extends FloorFindManyArgs>(args?: SelectSubset<T, FloorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Floor.
     * @param {FloorCreateArgs} args - Arguments to create a Floor.
     * @example
     * // Create one Floor
     * const Floor = await prisma.floor.create({
     *   data: {
     *     // ... data to create a Floor
     *   }
     * })
     * 
     */
    create<T extends FloorCreateArgs>(args: SelectSubset<T, FloorCreateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Floors.
     * @param {FloorCreateManyArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FloorCreateManyArgs>(args?: SelectSubset<T, FloorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Floors and returns the data saved in the database.
     * @param {FloorCreateManyAndReturnArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Floors and only return the `FlNumber`
     * const floorWithFlNumberOnly = await prisma.floor.createManyAndReturn({
     *   select: { FlNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FloorCreateManyAndReturnArgs>(args?: SelectSubset<T, FloorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Floor.
     * @param {FloorDeleteArgs} args - Arguments to delete one Floor.
     * @example
     * // Delete one Floor
     * const Floor = await prisma.floor.delete({
     *   where: {
     *     // ... filter to delete one Floor
     *   }
     * })
     * 
     */
    delete<T extends FloorDeleteArgs>(args: SelectSubset<T, FloorDeleteArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Floor.
     * @param {FloorUpdateArgs} args - Arguments to update one Floor.
     * @example
     * // Update one Floor
     * const floor = await prisma.floor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FloorUpdateArgs>(args: SelectSubset<T, FloorUpdateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Floors.
     * @param {FloorDeleteManyArgs} args - Arguments to filter Floors to delete.
     * @example
     * // Delete a few Floors
     * const { count } = await prisma.floor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FloorDeleteManyArgs>(args?: SelectSubset<T, FloorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FloorUpdateManyArgs>(args: SelectSubset<T, FloorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors and returns the data updated in the database.
     * @param {FloorUpdateManyAndReturnArgs} args - Arguments to update many Floors.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Floors and only return the `FlNumber`
     * const floorWithFlNumberOnly = await prisma.floor.updateManyAndReturn({
     *   select: { FlNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FloorUpdateManyAndReturnArgs>(args: SelectSubset<T, FloorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Floor.
     * @param {FloorUpsertArgs} args - Arguments to update or create a Floor.
     * @example
     * // Update or create a Floor
     * const floor = await prisma.floor.upsert({
     *   create: {
     *     // ... data to create a Floor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Floor we want to update
     *   }
     * })
     */
    upsert<T extends FloorUpsertArgs>(args: SelectSubset<T, FloorUpsertArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorCountArgs} args - Arguments to filter Floors to count.
     * @example
     * // Count the number of Floors
     * const count = await prisma.floor.count({
     *   where: {
     *     // ... the filter for the Floors we want to count
     *   }
     * })
    **/
    count<T extends FloorCountArgs>(
      args?: Subset<T, FloorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FloorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FloorAggregateArgs>(args: Subset<T, FloorAggregateArgs>): Prisma.PrismaPromise<GetFloorAggregateType<T>>

    /**
     * Group by Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FloorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FloorGroupByArgs['orderBy'] }
        : { orderBy?: FloorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FloorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFloorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Floor model
   */
  readonly fields: FloorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Floor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FloorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    building<T extends BuildingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuildingDefaultArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends Floor$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Floor$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Floor model
   */
  interface FloorFieldRefs {
    readonly FlNumber: FieldRef<"Floor", 'Int'>
    readonly FlName: FieldRef<"Floor", 'String'>
    readonly BNo: FieldRef<"Floor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Floor findUnique
   */
  export type FloorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findUniqueOrThrow
   */
  export type FloorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findFirst
   */
  export type FloorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findFirstOrThrow
   */
  export type FloorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findMany
   */
  export type FloorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floors to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor create
   */
  export type FloorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to create a Floor.
     */
    data: XOR<FloorCreateInput, FloorUncheckedCreateInput>
  }

  /**
   * Floor createMany
   */
  export type FloorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
  }

  /**
   * Floor createManyAndReturn
   */
  export type FloorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Floor update
   */
  export type FloorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to update a Floor.
     */
    data: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
    /**
     * Choose, which Floor to update.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor updateMany
   */
  export type FloorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
  }

  /**
   * Floor updateManyAndReturn
   */
  export type FloorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Floor upsert
   */
  export type FloorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The filter to search for the Floor to update in case it exists.
     */
    where: FloorWhereUniqueInput
    /**
     * In case the Floor found by the `where` argument doesn't exist, create a new Floor with this data.
     */
    create: XOR<FloorCreateInput, FloorUncheckedCreateInput>
    /**
     * In case the Floor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
  }

  /**
   * Floor delete
   */
  export type FloorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter which Floor to delete.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor deleteMany
   */
  export type FloorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floors to delete
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to delete.
     */
    limit?: number
  }

  /**
   * Floor.rooms
   */
  export type Floor$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Floor without action
   */
  export type FloorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    RNumber: number | null
    Capacity: number | null
    VIP: number | null
    FlNo: number | null
    SNo: number | null
  }

  export type RoomSumAggregateOutputType = {
    RNumber: number | null
    Capacity: number | null
    VIP: number | null
    FlNo: number | null
    SNo: number | null
  }

  export type RoomMinAggregateOutputType = {
    RNumber: number | null
    RName: string | null
    Capacity: number | null
    VIP: number | null
    FlNo: number | null
    SNo: number | null
  }

  export type RoomMaxAggregateOutputType = {
    RNumber: number | null
    RName: string | null
    Capacity: number | null
    VIP: number | null
    FlNo: number | null
    SNo: number | null
  }

  export type RoomCountAggregateOutputType = {
    RNumber: number
    RName: number
    Capacity: number
    VIP: number
    FlNo: number
    SNo: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    RNumber?: true
    Capacity?: true
    VIP?: true
    FlNo?: true
    SNo?: true
  }

  export type RoomSumAggregateInputType = {
    RNumber?: true
    Capacity?: true
    VIP?: true
    FlNo?: true
    SNo?: true
  }

  export type RoomMinAggregateInputType = {
    RNumber?: true
    RName?: true
    Capacity?: true
    VIP?: true
    FlNo?: true
    SNo?: true
  }

  export type RoomMaxAggregateInputType = {
    RNumber?: true
    RName?: true
    Capacity?: true
    VIP?: true
    FlNo?: true
    SNo?: true
  }

  export type RoomCountAggregateInputType = {
    RNumber?: true
    RName?: true
    Capacity?: true
    VIP?: true
    FlNo?: true
    SNo?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    FlNo: number
    SNo: number
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RNumber?: boolean
    RName?: boolean
    Capacity?: boolean
    VIP?: boolean
    FlNo?: boolean
    SNo?: boolean
    roomStatus?: boolean | RoomStatusDefaultArgs<ExtArgs>
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    bookingLists?: boolean | Room$bookingListsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RNumber?: boolean
    RName?: boolean
    Capacity?: boolean
    VIP?: boolean
    FlNo?: boolean
    SNo?: boolean
    roomStatus?: boolean | RoomStatusDefaultArgs<ExtArgs>
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RNumber?: boolean
    RName?: boolean
    Capacity?: boolean
    VIP?: boolean
    FlNo?: boolean
    SNo?: boolean
    roomStatus?: boolean | RoomStatusDefaultArgs<ExtArgs>
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    RNumber?: boolean
    RName?: boolean
    Capacity?: boolean
    VIP?: boolean
    FlNo?: boolean
    SNo?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"RNumber" | "RName" | "Capacity" | "VIP" | "FlNo" | "SNo", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomStatus?: boolean | RoomStatusDefaultArgs<ExtArgs>
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    bookingLists?: boolean | Room$bookingListsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomStatus?: boolean | RoomStatusDefaultArgs<ExtArgs>
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomStatus?: boolean | RoomStatusDefaultArgs<ExtArgs>
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      roomStatus: Prisma.$RoomStatusPayload<ExtArgs>
      floor: Prisma.$FloorPayload<ExtArgs>
      bookingLists: Prisma.$BookingListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      RNumber: number
      RName: string
      Capacity: number
      VIP: number
      FlNo: number
      SNo: number
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `RNumber`
     * const roomWithRNumberOnly = await prisma.room.findMany({ select: { RNumber: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `RNumber`
     * const roomWithRNumberOnly = await prisma.room.createManyAndReturn({
     *   select: { RNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `RNumber`
     * const roomWithRNumberOnly = await prisma.room.updateManyAndReturn({
     *   select: { RNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roomStatus<T extends RoomStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomStatusDefaultArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    floor<T extends FloorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FloorDefaultArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookingLists<T extends Room$bookingListsArgs<ExtArgs> = {}>(args?: Subset<T, Room$bookingListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly RNumber: FieldRef<"Room", 'Int'>
    readonly RName: FieldRef<"Room", 'String'>
    readonly Capacity: FieldRef<"Room", 'Int'>
    readonly VIP: FieldRef<"Room", 'Int'>
    readonly FlNo: FieldRef<"Room", 'Int'>
    readonly SNo: FieldRef<"Room", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.bookingLists
   */
  export type Room$bookingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    where?: BookingListWhereInput
    orderBy?: BookingListOrderByWithRelationInput | BookingListOrderByWithRelationInput[]
    cursor?: BookingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingListScalarFieldEnum | BookingListScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    ENumber: number | null
    score: number | null
    DNo: number | null
    PNo: number | null
    SNo: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    ENumber: number | null
    score: number | null
    DNo: number | null
    PNo: number | null
    SNo: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    ENumber: number | null
    FName: string | null
    LName: string | null
    score: number | null
    Email: string | null
    username: string | null
    password: string | null
    DNo: number | null
    PNo: number | null
    SNo: number | null
  }

  export type EmployeeMaxAggregateOutputType = {
    ENumber: number | null
    FName: string | null
    LName: string | null
    score: number | null
    Email: string | null
    username: string | null
    password: string | null
    DNo: number | null
    PNo: number | null
    SNo: number | null
  }

  export type EmployeeCountAggregateOutputType = {
    ENumber: number
    FName: number
    LName: number
    score: number
    Email: number
    username: number
    password: number
    DNo: number
    PNo: number
    SNo: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    ENumber?: true
    score?: true
    DNo?: true
    PNo?: true
    SNo?: true
  }

  export type EmployeeSumAggregateInputType = {
    ENumber?: true
    score?: true
    DNo?: true
    PNo?: true
    SNo?: true
  }

  export type EmployeeMinAggregateInputType = {
    ENumber?: true
    FName?: true
    LName?: true
    score?: true
    Email?: true
    username?: true
    password?: true
    DNo?: true
    PNo?: true
    SNo?: true
  }

  export type EmployeeMaxAggregateInputType = {
    ENumber?: true
    FName?: true
    LName?: true
    score?: true
    Email?: true
    username?: true
    password?: true
    DNo?: true
    PNo?: true
    SNo?: true
  }

  export type EmployeeCountAggregateInputType = {
    ENumber?: true
    FName?: true
    LName?: true
    score?: true
    Email?: true
    username?: true
    password?: true
    DNo?: true
    PNo?: true
    SNo?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    DNo: number
    PNo: number
    SNo: number
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ENumber?: boolean
    FName?: boolean
    LName?: boolean
    score?: boolean
    Email?: boolean
    username?: boolean
    password?: boolean
    DNo?: boolean
    PNo?: boolean
    SNo?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    status?: boolean | EmployeeStatusDefaultArgs<ExtArgs>
    bookings?: boolean | Employee$bookingsArgs<ExtArgs>
    lockLists?: boolean | Employee$lockListsArgs<ExtArgs>
    unlockLists?: boolean | Employee$unlockListsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ENumber?: boolean
    FName?: boolean
    LName?: boolean
    score?: boolean
    Email?: boolean
    username?: boolean
    password?: boolean
    DNo?: boolean
    PNo?: boolean
    SNo?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    status?: boolean | EmployeeStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ENumber?: boolean
    FName?: boolean
    LName?: boolean
    score?: boolean
    Email?: boolean
    username?: boolean
    password?: boolean
    DNo?: boolean
    PNo?: boolean
    SNo?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    status?: boolean | EmployeeStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    ENumber?: boolean
    FName?: boolean
    LName?: boolean
    score?: boolean
    Email?: boolean
    username?: boolean
    password?: boolean
    DNo?: boolean
    PNo?: boolean
    SNo?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ENumber" | "FName" | "LName" | "score" | "Email" | "username" | "password" | "DNo" | "PNo" | "SNo", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    status?: boolean | EmployeeStatusDefaultArgs<ExtArgs>
    bookings?: boolean | Employee$bookingsArgs<ExtArgs>
    lockLists?: boolean | Employee$lockListsArgs<ExtArgs>
    unlockLists?: boolean | Employee$unlockListsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    status?: boolean | EmployeeStatusDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    status?: boolean | EmployeeStatusDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      position: Prisma.$PositionPayload<ExtArgs>
      status: Prisma.$EmployeeStatusPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      lockLists: Prisma.$LockListPayload<ExtArgs>[]
      unlockLists: Prisma.$UnlockListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ENumber: number
      FName: string
      LName: string
      score: number
      Email: string
      username: string
      password: string
      DNo: number
      PNo: number
      SNo: number
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `ENumber`
     * const employeeWithENumberOnly = await prisma.employee.findMany({ select: { ENumber: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `ENumber`
     * const employeeWithENumberOnly = await prisma.employee.createManyAndReturn({
     *   select: { ENumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `ENumber`
     * const employeeWithENumberOnly = await prisma.employee.updateManyAndReturn({
     *   select: { ENumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends EmployeeStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeStatusDefaultArgs<ExtArgs>>): Prisma__EmployeeStatusClient<$Result.GetResult<Prisma.$EmployeeStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Employee$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lockLists<T extends Employee$lockListsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$lockListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unlockLists<T extends Employee$unlockListsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$unlockListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly ENumber: FieldRef<"Employee", 'Int'>
    readonly FName: FieldRef<"Employee", 'String'>
    readonly LName: FieldRef<"Employee", 'String'>
    readonly score: FieldRef<"Employee", 'Int'>
    readonly Email: FieldRef<"Employee", 'String'>
    readonly username: FieldRef<"Employee", 'String'>
    readonly password: FieldRef<"Employee", 'String'>
    readonly DNo: FieldRef<"Employee", 'Int'>
    readonly PNo: FieldRef<"Employee", 'Int'>
    readonly SNo: FieldRef<"Employee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.bookings
   */
  export type Employee$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Employee.lockLists
   */
  export type Employee$lockListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListInclude<ExtArgs> | null
    where?: LockListWhereInput
    orderBy?: LockListOrderByWithRelationInput | LockListOrderByWithRelationInput[]
    cursor?: LockListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LockListScalarFieldEnum | LockListScalarFieldEnum[]
  }

  /**
   * Employee.unlockLists
   */
  export type Employee$unlockListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListInclude<ExtArgs> | null
    where?: UnlockListWhereInput
    orderBy?: UnlockListOrderByWithRelationInput | UnlockListOrderByWithRelationInput[]
    cursor?: UnlockListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnlockListScalarFieldEnum | UnlockListScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    BKNumber: number | null
    ENo: number | null
  }

  export type BookingSumAggregateOutputType = {
    BKNumber: number | null
    ENo: number | null
  }

  export type BookingMinAggregateOutputType = {
    BKNumber: number | null
    BKDate: Date | null
    ENo: number | null
  }

  export type BookingMaxAggregateOutputType = {
    BKNumber: number | null
    BKDate: Date | null
    ENo: number | null
  }

  export type BookingCountAggregateOutputType = {
    BKNumber: number
    BKDate: number
    ENo: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    BKNumber?: true
    ENo?: true
  }

  export type BookingSumAggregateInputType = {
    BKNumber?: true
    ENo?: true
  }

  export type BookingMinAggregateInputType = {
    BKNumber?: true
    BKDate?: true
    ENo?: true
  }

  export type BookingMaxAggregateInputType = {
    BKNumber?: true
    BKDate?: true
    ENo?: true
  }

  export type BookingCountAggregateInputType = {
    BKNumber?: true
    BKDate?: true
    ENo?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    BKNumber: number
    BKDate: Date
    ENo: number
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BKNumber?: boolean
    BKDate?: boolean
    ENo?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    bookingLists?: boolean | Booking$bookingListsArgs<ExtArgs>
    accessLists?: boolean | Booking$accessListsArgs<ExtArgs>
    denyBookings?: boolean | Booking$denyBookingsArgs<ExtArgs>
    cancelBookings?: boolean | Booking$cancelBookingsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BKNumber?: boolean
    BKDate?: boolean
    ENo?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BKNumber?: boolean
    BKDate?: boolean
    ENo?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    BKNumber?: boolean
    BKDate?: boolean
    ENo?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"BKNumber" | "BKDate" | "ENo", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    bookingLists?: boolean | Booking$bookingListsArgs<ExtArgs>
    accessLists?: boolean | Booking$accessListsArgs<ExtArgs>
    denyBookings?: boolean | Booking$denyBookingsArgs<ExtArgs>
    cancelBookings?: boolean | Booking$cancelBookingsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      bookingLists: Prisma.$BookingListPayload<ExtArgs>[]
      accessLists: Prisma.$AccessListPayload<ExtArgs>[]
      denyBookings: Prisma.$DenyBookingPayload<ExtArgs>[]
      cancelBookings: Prisma.$CancelBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      BKNumber: number
      BKDate: Date
      ENo: number
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `BKNumber`
     * const bookingWithBKNumberOnly = await prisma.booking.findMany({ select: { BKNumber: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `BKNumber`
     * const bookingWithBKNumberOnly = await prisma.booking.createManyAndReturn({
     *   select: { BKNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `BKNumber`
     * const bookingWithBKNumberOnly = await prisma.booking.updateManyAndReturn({
     *   select: { BKNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookingLists<T extends Booking$bookingListsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$bookingListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accessLists<T extends Booking$accessListsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$accessListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    denyBookings<T extends Booking$denyBookingsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$denyBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cancelBookings<T extends Booking$cancelBookingsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$cancelBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly BKNumber: FieldRef<"Booking", 'Int'>
    readonly BKDate: FieldRef<"Booking", 'DateTime'>
    readonly ENo: FieldRef<"Booking", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.bookingLists
   */
  export type Booking$bookingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    where?: BookingListWhereInput
    orderBy?: BookingListOrderByWithRelationInput | BookingListOrderByWithRelationInput[]
    cursor?: BookingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingListScalarFieldEnum | BookingListScalarFieldEnum[]
  }

  /**
   * Booking.accessLists
   */
  export type Booking$accessListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
    where?: AccessListWhereInput
    orderBy?: AccessListOrderByWithRelationInput | AccessListOrderByWithRelationInput[]
    cursor?: AccessListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessListScalarFieldEnum | AccessListScalarFieldEnum[]
  }

  /**
   * Booking.denyBookings
   */
  export type Booking$denyBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
    where?: DenyBookingWhereInput
    orderBy?: DenyBookingOrderByWithRelationInput | DenyBookingOrderByWithRelationInput[]
    cursor?: DenyBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DenyBookingScalarFieldEnum | DenyBookingScalarFieldEnum[]
  }

  /**
   * Booking.cancelBookings
   */
  export type Booking$cancelBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
    where?: CancelBookingWhereInput
    orderBy?: CancelBookingOrderByWithRelationInput | CancelBookingOrderByWithRelationInput[]
    cursor?: CancelBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CancelBookingScalarFieldEnum | CancelBookingScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model BookingList
   */

  export type AggregateBookingList = {
    _count: BookingListCountAggregateOutputType | null
    _avg: BookingListAvgAggregateOutputType | null
    _sum: BookingListSumAggregateOutputType | null
    _min: BookingListMinAggregateOutputType | null
    _max: BookingListMaxAggregateOutputType | null
  }

  export type BookingListAvgAggregateOutputType = {
    BKLNumber: number | null
    BKLNo: number | null
    RNo: number | null
    SNo: number | null
  }

  export type BookingListSumAggregateOutputType = {
    BKLNumber: number | null
    BKLNo: number | null
    RNo: number | null
    SNo: number | null
  }

  export type BookingListMinAggregateOutputType = {
    BKLNumber: number | null
    BKLNo: number | null
    RNo: number | null
    Start_Date: Date | null
    Start_Time: string | null
    End_Time: string | null
    details: string | null
    QR: string | null
    SNo: number | null
  }

  export type BookingListMaxAggregateOutputType = {
    BKLNumber: number | null
    BKLNo: number | null
    RNo: number | null
    Start_Date: Date | null
    Start_Time: string | null
    End_Time: string | null
    details: string | null
    QR: string | null
    SNo: number | null
  }

  export type BookingListCountAggregateOutputType = {
    BKLNumber: number
    BKLNo: number
    RNo: number
    Start_Date: number
    Start_Time: number
    End_Time: number
    details: number
    QR: number
    SNo: number
    _all: number
  }


  export type BookingListAvgAggregateInputType = {
    BKLNumber?: true
    BKLNo?: true
    RNo?: true
    SNo?: true
  }

  export type BookingListSumAggregateInputType = {
    BKLNumber?: true
    BKLNo?: true
    RNo?: true
    SNo?: true
  }

  export type BookingListMinAggregateInputType = {
    BKLNumber?: true
    BKLNo?: true
    RNo?: true
    Start_Date?: true
    Start_Time?: true
    End_Time?: true
    details?: true
    QR?: true
    SNo?: true
  }

  export type BookingListMaxAggregateInputType = {
    BKLNumber?: true
    BKLNo?: true
    RNo?: true
    Start_Date?: true
    Start_Time?: true
    End_Time?: true
    details?: true
    QR?: true
    SNo?: true
  }

  export type BookingListCountAggregateInputType = {
    BKLNumber?: true
    BKLNo?: true
    RNo?: true
    Start_Date?: true
    Start_Time?: true
    End_Time?: true
    details?: true
    QR?: true
    SNo?: true
    _all?: true
  }

  export type BookingListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingList to aggregate.
     */
    where?: BookingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingLists to fetch.
     */
    orderBy?: BookingListOrderByWithRelationInput | BookingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingLists
    **/
    _count?: true | BookingListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingListMaxAggregateInputType
  }

  export type GetBookingListAggregateType<T extends BookingListAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingList[P]>
      : GetScalarType<T[P], AggregateBookingList[P]>
  }




  export type BookingListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingListWhereInput
    orderBy?: BookingListOrderByWithAggregationInput | BookingListOrderByWithAggregationInput[]
    by: BookingListScalarFieldEnum[] | BookingListScalarFieldEnum
    having?: BookingListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingListCountAggregateInputType | true
    _avg?: BookingListAvgAggregateInputType
    _sum?: BookingListSumAggregateInputType
    _min?: BookingListMinAggregateInputType
    _max?: BookingListMaxAggregateInputType
  }

  export type BookingListGroupByOutputType = {
    BKLNumber: number
    BKLNo: number
    RNo: number
    Start_Date: Date
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    SNo: number
    _count: BookingListCountAggregateOutputType | null
    _avg: BookingListAvgAggregateOutputType | null
    _sum: BookingListSumAggregateOutputType | null
    _min: BookingListMinAggregateOutputType | null
    _max: BookingListMaxAggregateOutputType | null
  }

  type GetBookingListGroupByPayload<T extends BookingListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingListGroupByOutputType[P]>
            : GetScalarType<T[P], BookingListGroupByOutputType[P]>
        }
      >
    >


  export type BookingListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BKLNumber?: boolean
    BKLNo?: boolean
    RNo?: boolean
    Start_Date?: boolean
    Start_Time?: boolean
    End_Time?: boolean
    details?: boolean
    QR?: boolean
    SNo?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    status?: boolean | BookingStatusDefaultArgs<ExtArgs>
    accessLists?: boolean | BookingList$accessListsArgs<ExtArgs>
    denyBookings?: boolean | BookingList$denyBookingsArgs<ExtArgs>
    cancelBookings?: boolean | BookingList$cancelBookingsArgs<ExtArgs>
    _count?: boolean | BookingListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingList"]>

  export type BookingListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BKLNumber?: boolean
    BKLNo?: boolean
    RNo?: boolean
    Start_Date?: boolean
    Start_Time?: boolean
    End_Time?: boolean
    details?: boolean
    QR?: boolean
    SNo?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    status?: boolean | BookingStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingList"]>

  export type BookingListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BKLNumber?: boolean
    BKLNo?: boolean
    RNo?: boolean
    Start_Date?: boolean
    Start_Time?: boolean
    End_Time?: boolean
    details?: boolean
    QR?: boolean
    SNo?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    status?: boolean | BookingStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingList"]>

  export type BookingListSelectScalar = {
    BKLNumber?: boolean
    BKLNo?: boolean
    RNo?: boolean
    Start_Date?: boolean
    Start_Time?: boolean
    End_Time?: boolean
    details?: boolean
    QR?: boolean
    SNo?: boolean
  }

  export type BookingListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"BKLNumber" | "BKLNo" | "RNo" | "Start_Date" | "Start_Time" | "End_Time" | "details" | "QR" | "SNo", ExtArgs["result"]["bookingList"]>
  export type BookingListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    status?: boolean | BookingStatusDefaultArgs<ExtArgs>
    accessLists?: boolean | BookingList$accessListsArgs<ExtArgs>
    denyBookings?: boolean | BookingList$denyBookingsArgs<ExtArgs>
    cancelBookings?: boolean | BookingList$cancelBookingsArgs<ExtArgs>
    _count?: boolean | BookingListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    status?: boolean | BookingStatusDefaultArgs<ExtArgs>
  }
  export type BookingListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    status?: boolean | BookingStatusDefaultArgs<ExtArgs>
  }

  export type $BookingListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingList"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      status: Prisma.$BookingStatusPayload<ExtArgs>
      accessLists: Prisma.$AccessListPayload<ExtArgs>[]
      denyBookings: Prisma.$DenyBookingPayload<ExtArgs>[]
      cancelBookings: Prisma.$CancelBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      BKLNumber: number
      BKLNo: number
      RNo: number
      Start_Date: Date
      Start_Time: string
      End_Time: string
      details: string
      QR: string
      SNo: number
    }, ExtArgs["result"]["bookingList"]>
    composites: {}
  }

  type BookingListGetPayload<S extends boolean | null | undefined | BookingListDefaultArgs> = $Result.GetResult<Prisma.$BookingListPayload, S>

  type BookingListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingListCountAggregateInputType | true
    }

  export interface BookingListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingList'], meta: { name: 'BookingList' } }
    /**
     * Find zero or one BookingList that matches the filter.
     * @param {BookingListFindUniqueArgs} args - Arguments to find a BookingList
     * @example
     * // Get one BookingList
     * const bookingList = await prisma.bookingList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingListFindUniqueArgs>(args: SelectSubset<T, BookingListFindUniqueArgs<ExtArgs>>): Prisma__BookingListClient<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingListFindUniqueOrThrowArgs} args - Arguments to find a BookingList
     * @example
     * // Get one BookingList
     * const bookingList = await prisma.bookingList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingListFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingListClient<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingListFindFirstArgs} args - Arguments to find a BookingList
     * @example
     * // Get one BookingList
     * const bookingList = await prisma.bookingList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingListFindFirstArgs>(args?: SelectSubset<T, BookingListFindFirstArgs<ExtArgs>>): Prisma__BookingListClient<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingListFindFirstOrThrowArgs} args - Arguments to find a BookingList
     * @example
     * // Get one BookingList
     * const bookingList = await prisma.bookingList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingListFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingListFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingListClient<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingLists
     * const bookingLists = await prisma.bookingList.findMany()
     * 
     * // Get first 10 BookingLists
     * const bookingLists = await prisma.bookingList.findMany({ take: 10 })
     * 
     * // Only select the `BKLNumber`
     * const bookingListWithBKLNumberOnly = await prisma.bookingList.findMany({ select: { BKLNumber: true } })
     * 
     */
    findMany<T extends BookingListFindManyArgs>(args?: SelectSubset<T, BookingListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingList.
     * @param {BookingListCreateArgs} args - Arguments to create a BookingList.
     * @example
     * // Create one BookingList
     * const BookingList = await prisma.bookingList.create({
     *   data: {
     *     // ... data to create a BookingList
     *   }
     * })
     * 
     */
    create<T extends BookingListCreateArgs>(args: SelectSubset<T, BookingListCreateArgs<ExtArgs>>): Prisma__BookingListClient<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingLists.
     * @param {BookingListCreateManyArgs} args - Arguments to create many BookingLists.
     * @example
     * // Create many BookingLists
     * const bookingList = await prisma.bookingList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingListCreateManyArgs>(args?: SelectSubset<T, BookingListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingLists and returns the data saved in the database.
     * @param {BookingListCreateManyAndReturnArgs} args - Arguments to create many BookingLists.
     * @example
     * // Create many BookingLists
     * const bookingList = await prisma.bookingList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingLists and only return the `BKLNumber`
     * const bookingListWithBKLNumberOnly = await prisma.bookingList.createManyAndReturn({
     *   select: { BKLNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingListCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingList.
     * @param {BookingListDeleteArgs} args - Arguments to delete one BookingList.
     * @example
     * // Delete one BookingList
     * const BookingList = await prisma.bookingList.delete({
     *   where: {
     *     // ... filter to delete one BookingList
     *   }
     * })
     * 
     */
    delete<T extends BookingListDeleteArgs>(args: SelectSubset<T, BookingListDeleteArgs<ExtArgs>>): Prisma__BookingListClient<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingList.
     * @param {BookingListUpdateArgs} args - Arguments to update one BookingList.
     * @example
     * // Update one BookingList
     * const bookingList = await prisma.bookingList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingListUpdateArgs>(args: SelectSubset<T, BookingListUpdateArgs<ExtArgs>>): Prisma__BookingListClient<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingLists.
     * @param {BookingListDeleteManyArgs} args - Arguments to filter BookingLists to delete.
     * @example
     * // Delete a few BookingLists
     * const { count } = await prisma.bookingList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingListDeleteManyArgs>(args?: SelectSubset<T, BookingListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingLists
     * const bookingList = await prisma.bookingList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingListUpdateManyArgs>(args: SelectSubset<T, BookingListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingLists and returns the data updated in the database.
     * @param {BookingListUpdateManyAndReturnArgs} args - Arguments to update many BookingLists.
     * @example
     * // Update many BookingLists
     * const bookingList = await prisma.bookingList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingLists and only return the `BKLNumber`
     * const bookingListWithBKLNumberOnly = await prisma.bookingList.updateManyAndReturn({
     *   select: { BKLNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingListUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingList.
     * @param {BookingListUpsertArgs} args - Arguments to update or create a BookingList.
     * @example
     * // Update or create a BookingList
     * const bookingList = await prisma.bookingList.upsert({
     *   create: {
     *     // ... data to create a BookingList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingList we want to update
     *   }
     * })
     */
    upsert<T extends BookingListUpsertArgs>(args: SelectSubset<T, BookingListUpsertArgs<ExtArgs>>): Prisma__BookingListClient<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingListCountArgs} args - Arguments to filter BookingLists to count.
     * @example
     * // Count the number of BookingLists
     * const count = await prisma.bookingList.count({
     *   where: {
     *     // ... the filter for the BookingLists we want to count
     *   }
     * })
    **/
    count<T extends BookingListCountArgs>(
      args?: Subset<T, BookingListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingListAggregateArgs>(args: Subset<T, BookingListAggregateArgs>): Prisma.PrismaPromise<GetBookingListAggregateType<T>>

    /**
     * Group by BookingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingListGroupByArgs['orderBy'] }
        : { orderBy?: BookingListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingList model
   */
  readonly fields: BookingListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends BookingStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingStatusDefaultArgs<ExtArgs>>): Prisma__BookingStatusClient<$Result.GetResult<Prisma.$BookingStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accessLists<T extends BookingList$accessListsArgs<ExtArgs> = {}>(args?: Subset<T, BookingList$accessListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    denyBookings<T extends BookingList$denyBookingsArgs<ExtArgs> = {}>(args?: Subset<T, BookingList$denyBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cancelBookings<T extends BookingList$cancelBookingsArgs<ExtArgs> = {}>(args?: Subset<T, BookingList$cancelBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingList model
   */
  interface BookingListFieldRefs {
    readonly BKLNumber: FieldRef<"BookingList", 'Int'>
    readonly BKLNo: FieldRef<"BookingList", 'Int'>
    readonly RNo: FieldRef<"BookingList", 'Int'>
    readonly Start_Date: FieldRef<"BookingList", 'DateTime'>
    readonly Start_Time: FieldRef<"BookingList", 'String'>
    readonly End_Time: FieldRef<"BookingList", 'String'>
    readonly details: FieldRef<"BookingList", 'String'>
    readonly QR: FieldRef<"BookingList", 'String'>
    readonly SNo: FieldRef<"BookingList", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookingList findUnique
   */
  export type BookingListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    /**
     * Filter, which BookingList to fetch.
     */
    where: BookingListWhereUniqueInput
  }

  /**
   * BookingList findUniqueOrThrow
   */
  export type BookingListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    /**
     * Filter, which BookingList to fetch.
     */
    where: BookingListWhereUniqueInput
  }

  /**
   * BookingList findFirst
   */
  export type BookingListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    /**
     * Filter, which BookingList to fetch.
     */
    where?: BookingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingLists to fetch.
     */
    orderBy?: BookingListOrderByWithRelationInput | BookingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingLists.
     */
    cursor?: BookingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingLists.
     */
    distinct?: BookingListScalarFieldEnum | BookingListScalarFieldEnum[]
  }

  /**
   * BookingList findFirstOrThrow
   */
  export type BookingListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    /**
     * Filter, which BookingList to fetch.
     */
    where?: BookingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingLists to fetch.
     */
    orderBy?: BookingListOrderByWithRelationInput | BookingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingLists.
     */
    cursor?: BookingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingLists.
     */
    distinct?: BookingListScalarFieldEnum | BookingListScalarFieldEnum[]
  }

  /**
   * BookingList findMany
   */
  export type BookingListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    /**
     * Filter, which BookingLists to fetch.
     */
    where?: BookingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingLists to fetch.
     */
    orderBy?: BookingListOrderByWithRelationInput | BookingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingLists.
     */
    cursor?: BookingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingLists.
     */
    skip?: number
    distinct?: BookingListScalarFieldEnum | BookingListScalarFieldEnum[]
  }

  /**
   * BookingList create
   */
  export type BookingListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingList.
     */
    data: XOR<BookingListCreateInput, BookingListUncheckedCreateInput>
  }

  /**
   * BookingList createMany
   */
  export type BookingListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingLists.
     */
    data: BookingListCreateManyInput | BookingListCreateManyInput[]
  }

  /**
   * BookingList createManyAndReturn
   */
  export type BookingListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * The data used to create many BookingLists.
     */
    data: BookingListCreateManyInput | BookingListCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingList update
   */
  export type BookingListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingList.
     */
    data: XOR<BookingListUpdateInput, BookingListUncheckedUpdateInput>
    /**
     * Choose, which BookingList to update.
     */
    where: BookingListWhereUniqueInput
  }

  /**
   * BookingList updateMany
   */
  export type BookingListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingLists.
     */
    data: XOR<BookingListUpdateManyMutationInput, BookingListUncheckedUpdateManyInput>
    /**
     * Filter which BookingLists to update
     */
    where?: BookingListWhereInput
    /**
     * Limit how many BookingLists to update.
     */
    limit?: number
  }

  /**
   * BookingList updateManyAndReturn
   */
  export type BookingListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * The data used to update BookingLists.
     */
    data: XOR<BookingListUpdateManyMutationInput, BookingListUncheckedUpdateManyInput>
    /**
     * Filter which BookingLists to update
     */
    where?: BookingListWhereInput
    /**
     * Limit how many BookingLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingList upsert
   */
  export type BookingListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingList to update in case it exists.
     */
    where: BookingListWhereUniqueInput
    /**
     * In case the BookingList found by the `where` argument doesn't exist, create a new BookingList with this data.
     */
    create: XOR<BookingListCreateInput, BookingListUncheckedCreateInput>
    /**
     * In case the BookingList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingListUpdateInput, BookingListUncheckedUpdateInput>
  }

  /**
   * BookingList delete
   */
  export type BookingListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
    /**
     * Filter which BookingList to delete.
     */
    where: BookingListWhereUniqueInput
  }

  /**
   * BookingList deleteMany
   */
  export type BookingListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingLists to delete
     */
    where?: BookingListWhereInput
    /**
     * Limit how many BookingLists to delete.
     */
    limit?: number
  }

  /**
   * BookingList.accessLists
   */
  export type BookingList$accessListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
    where?: AccessListWhereInput
    orderBy?: AccessListOrderByWithRelationInput | AccessListOrderByWithRelationInput[]
    cursor?: AccessListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessListScalarFieldEnum | AccessListScalarFieldEnum[]
  }

  /**
   * BookingList.denyBookings
   */
  export type BookingList$denyBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
    where?: DenyBookingWhereInput
    orderBy?: DenyBookingOrderByWithRelationInput | DenyBookingOrderByWithRelationInput[]
    cursor?: DenyBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DenyBookingScalarFieldEnum | DenyBookingScalarFieldEnum[]
  }

  /**
   * BookingList.cancelBookings
   */
  export type BookingList$cancelBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
    where?: CancelBookingWhereInput
    orderBy?: CancelBookingOrderByWithRelationInput | CancelBookingOrderByWithRelationInput[]
    cursor?: CancelBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CancelBookingScalarFieldEnum | CancelBookingScalarFieldEnum[]
  }

  /**
   * BookingList without action
   */
  export type BookingListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingList
     */
    select?: BookingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingList
     */
    omit?: BookingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingListInclude<ExtArgs> | null
  }


  /**
   * Model AccessList
   */

  export type AggregateAccessList = {
    _count: AccessListCountAggregateOutputType | null
    _avg: AccessListAvgAggregateOutputType | null
    _sum: AccessListSumAggregateOutputType | null
    _min: AccessListMinAggregateOutputType | null
    _max: AccessListMaxAggregateOutputType | null
  }

  export type AccessListAvgAggregateOutputType = {
    ACNumber: number | null
    BKLNo: number | null
    BKNo: number | null
  }

  export type AccessListSumAggregateOutputType = {
    ACNumber: number | null
    BKLNo: number | null
    BKNo: number | null
  }

  export type AccessListMinAggregateOutputType = {
    ACNumber: number | null
    BKLNo: number | null
    BKNo: number | null
    AccessTime: string | null
  }

  export type AccessListMaxAggregateOutputType = {
    ACNumber: number | null
    BKLNo: number | null
    BKNo: number | null
    AccessTime: string | null
  }

  export type AccessListCountAggregateOutputType = {
    ACNumber: number
    BKLNo: number
    BKNo: number
    AccessTime: number
    _all: number
  }


  export type AccessListAvgAggregateInputType = {
    ACNumber?: true
    BKLNo?: true
    BKNo?: true
  }

  export type AccessListSumAggregateInputType = {
    ACNumber?: true
    BKLNo?: true
    BKNo?: true
  }

  export type AccessListMinAggregateInputType = {
    ACNumber?: true
    BKLNo?: true
    BKNo?: true
    AccessTime?: true
  }

  export type AccessListMaxAggregateInputType = {
    ACNumber?: true
    BKLNo?: true
    BKNo?: true
    AccessTime?: true
  }

  export type AccessListCountAggregateInputType = {
    ACNumber?: true
    BKLNo?: true
    BKNo?: true
    AccessTime?: true
    _all?: true
  }

  export type AccessListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessList to aggregate.
     */
    where?: AccessListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLists to fetch.
     */
    orderBy?: AccessListOrderByWithRelationInput | AccessListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessLists
    **/
    _count?: true | AccessListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessListMaxAggregateInputType
  }

  export type GetAccessListAggregateType<T extends AccessListAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessList[P]>
      : GetScalarType<T[P], AggregateAccessList[P]>
  }




  export type AccessListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessListWhereInput
    orderBy?: AccessListOrderByWithAggregationInput | AccessListOrderByWithAggregationInput[]
    by: AccessListScalarFieldEnum[] | AccessListScalarFieldEnum
    having?: AccessListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessListCountAggregateInputType | true
    _avg?: AccessListAvgAggregateInputType
    _sum?: AccessListSumAggregateInputType
    _min?: AccessListMinAggregateInputType
    _max?: AccessListMaxAggregateInputType
  }

  export type AccessListGroupByOutputType = {
    ACNumber: number
    BKLNo: number
    BKNo: number
    AccessTime: string
    _count: AccessListCountAggregateOutputType | null
    _avg: AccessListAvgAggregateOutputType | null
    _sum: AccessListSumAggregateOutputType | null
    _min: AccessListMinAggregateOutputType | null
    _max: AccessListMaxAggregateOutputType | null
  }

  type GetAccessListGroupByPayload<T extends AccessListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessListGroupByOutputType[P]>
            : GetScalarType<T[P], AccessListGroupByOutputType[P]>
        }
      >
    >


  export type AccessListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ACNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    AccessTime?: boolean
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessList"]>

  export type AccessListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ACNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    AccessTime?: boolean
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessList"]>

  export type AccessListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ACNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    AccessTime?: boolean
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessList"]>

  export type AccessListSelectScalar = {
    ACNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    AccessTime?: boolean
  }

  export type AccessListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ACNumber" | "BKLNo" | "BKNo" | "AccessTime", ExtArgs["result"]["accessList"]>
  export type AccessListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type AccessListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type AccessListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $AccessListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessList"
    objects: {
      bookingList: Prisma.$BookingListPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ACNumber: number
      BKLNo: number
      BKNo: number
      AccessTime: string
    }, ExtArgs["result"]["accessList"]>
    composites: {}
  }

  type AccessListGetPayload<S extends boolean | null | undefined | AccessListDefaultArgs> = $Result.GetResult<Prisma.$AccessListPayload, S>

  type AccessListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessListCountAggregateInputType | true
    }

  export interface AccessListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessList'], meta: { name: 'AccessList' } }
    /**
     * Find zero or one AccessList that matches the filter.
     * @param {AccessListFindUniqueArgs} args - Arguments to find a AccessList
     * @example
     * // Get one AccessList
     * const accessList = await prisma.accessList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessListFindUniqueArgs>(args: SelectSubset<T, AccessListFindUniqueArgs<ExtArgs>>): Prisma__AccessListClient<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessListFindUniqueOrThrowArgs} args - Arguments to find a AccessList
     * @example
     * // Get one AccessList
     * const accessList = await prisma.accessList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessListFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessListClient<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessListFindFirstArgs} args - Arguments to find a AccessList
     * @example
     * // Get one AccessList
     * const accessList = await prisma.accessList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessListFindFirstArgs>(args?: SelectSubset<T, AccessListFindFirstArgs<ExtArgs>>): Prisma__AccessListClient<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessListFindFirstOrThrowArgs} args - Arguments to find a AccessList
     * @example
     * // Get one AccessList
     * const accessList = await prisma.accessList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessListFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessListFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessListClient<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessLists
     * const accessLists = await prisma.accessList.findMany()
     * 
     * // Get first 10 AccessLists
     * const accessLists = await prisma.accessList.findMany({ take: 10 })
     * 
     * // Only select the `ACNumber`
     * const accessListWithACNumberOnly = await prisma.accessList.findMany({ select: { ACNumber: true } })
     * 
     */
    findMany<T extends AccessListFindManyArgs>(args?: SelectSubset<T, AccessListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessList.
     * @param {AccessListCreateArgs} args - Arguments to create a AccessList.
     * @example
     * // Create one AccessList
     * const AccessList = await prisma.accessList.create({
     *   data: {
     *     // ... data to create a AccessList
     *   }
     * })
     * 
     */
    create<T extends AccessListCreateArgs>(args: SelectSubset<T, AccessListCreateArgs<ExtArgs>>): Prisma__AccessListClient<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessLists.
     * @param {AccessListCreateManyArgs} args - Arguments to create many AccessLists.
     * @example
     * // Create many AccessLists
     * const accessList = await prisma.accessList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessListCreateManyArgs>(args?: SelectSubset<T, AccessListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessLists and returns the data saved in the database.
     * @param {AccessListCreateManyAndReturnArgs} args - Arguments to create many AccessLists.
     * @example
     * // Create many AccessLists
     * const accessList = await prisma.accessList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessLists and only return the `ACNumber`
     * const accessListWithACNumberOnly = await prisma.accessList.createManyAndReturn({
     *   select: { ACNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessListCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessList.
     * @param {AccessListDeleteArgs} args - Arguments to delete one AccessList.
     * @example
     * // Delete one AccessList
     * const AccessList = await prisma.accessList.delete({
     *   where: {
     *     // ... filter to delete one AccessList
     *   }
     * })
     * 
     */
    delete<T extends AccessListDeleteArgs>(args: SelectSubset<T, AccessListDeleteArgs<ExtArgs>>): Prisma__AccessListClient<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessList.
     * @param {AccessListUpdateArgs} args - Arguments to update one AccessList.
     * @example
     * // Update one AccessList
     * const accessList = await prisma.accessList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessListUpdateArgs>(args: SelectSubset<T, AccessListUpdateArgs<ExtArgs>>): Prisma__AccessListClient<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessLists.
     * @param {AccessListDeleteManyArgs} args - Arguments to filter AccessLists to delete.
     * @example
     * // Delete a few AccessLists
     * const { count } = await prisma.accessList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessListDeleteManyArgs>(args?: SelectSubset<T, AccessListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessLists
     * const accessList = await prisma.accessList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessListUpdateManyArgs>(args: SelectSubset<T, AccessListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessLists and returns the data updated in the database.
     * @param {AccessListUpdateManyAndReturnArgs} args - Arguments to update many AccessLists.
     * @example
     * // Update many AccessLists
     * const accessList = await prisma.accessList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessLists and only return the `ACNumber`
     * const accessListWithACNumberOnly = await prisma.accessList.updateManyAndReturn({
     *   select: { ACNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessListUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessList.
     * @param {AccessListUpsertArgs} args - Arguments to update or create a AccessList.
     * @example
     * // Update or create a AccessList
     * const accessList = await prisma.accessList.upsert({
     *   create: {
     *     // ... data to create a AccessList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessList we want to update
     *   }
     * })
     */
    upsert<T extends AccessListUpsertArgs>(args: SelectSubset<T, AccessListUpsertArgs<ExtArgs>>): Prisma__AccessListClient<$Result.GetResult<Prisma.$AccessListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessListCountArgs} args - Arguments to filter AccessLists to count.
     * @example
     * // Count the number of AccessLists
     * const count = await prisma.accessList.count({
     *   where: {
     *     // ... the filter for the AccessLists we want to count
     *   }
     * })
    **/
    count<T extends AccessListCountArgs>(
      args?: Subset<T, AccessListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessListAggregateArgs>(args: Subset<T, AccessListAggregateArgs>): Prisma.PrismaPromise<GetAccessListAggregateType<T>>

    /**
     * Group by AccessList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessListGroupByArgs['orderBy'] }
        : { orderBy?: AccessListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessList model
   */
  readonly fields: AccessListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookingList<T extends BookingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingListDefaultArgs<ExtArgs>>): Prisma__BookingListClient<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccessList model
   */
  interface AccessListFieldRefs {
    readonly ACNumber: FieldRef<"AccessList", 'Int'>
    readonly BKLNo: FieldRef<"AccessList", 'Int'>
    readonly BKNo: FieldRef<"AccessList", 'Int'>
    readonly AccessTime: FieldRef<"AccessList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AccessList findUnique
   */
  export type AccessListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
    /**
     * Filter, which AccessList to fetch.
     */
    where: AccessListWhereUniqueInput
  }

  /**
   * AccessList findUniqueOrThrow
   */
  export type AccessListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
    /**
     * Filter, which AccessList to fetch.
     */
    where: AccessListWhereUniqueInput
  }

  /**
   * AccessList findFirst
   */
  export type AccessListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
    /**
     * Filter, which AccessList to fetch.
     */
    where?: AccessListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLists to fetch.
     */
    orderBy?: AccessListOrderByWithRelationInput | AccessListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessLists.
     */
    cursor?: AccessListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessLists.
     */
    distinct?: AccessListScalarFieldEnum | AccessListScalarFieldEnum[]
  }

  /**
   * AccessList findFirstOrThrow
   */
  export type AccessListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
    /**
     * Filter, which AccessList to fetch.
     */
    where?: AccessListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLists to fetch.
     */
    orderBy?: AccessListOrderByWithRelationInput | AccessListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessLists.
     */
    cursor?: AccessListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessLists.
     */
    distinct?: AccessListScalarFieldEnum | AccessListScalarFieldEnum[]
  }

  /**
   * AccessList findMany
   */
  export type AccessListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
    /**
     * Filter, which AccessLists to fetch.
     */
    where?: AccessListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLists to fetch.
     */
    orderBy?: AccessListOrderByWithRelationInput | AccessListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessLists.
     */
    cursor?: AccessListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLists.
     */
    skip?: number
    distinct?: AccessListScalarFieldEnum | AccessListScalarFieldEnum[]
  }

  /**
   * AccessList create
   */
  export type AccessListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessList.
     */
    data: XOR<AccessListCreateInput, AccessListUncheckedCreateInput>
  }

  /**
   * AccessList createMany
   */
  export type AccessListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessLists.
     */
    data: AccessListCreateManyInput | AccessListCreateManyInput[]
  }

  /**
   * AccessList createManyAndReturn
   */
  export type AccessListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * The data used to create many AccessLists.
     */
    data: AccessListCreateManyInput | AccessListCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessList update
   */
  export type AccessListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessList.
     */
    data: XOR<AccessListUpdateInput, AccessListUncheckedUpdateInput>
    /**
     * Choose, which AccessList to update.
     */
    where: AccessListWhereUniqueInput
  }

  /**
   * AccessList updateMany
   */
  export type AccessListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessLists.
     */
    data: XOR<AccessListUpdateManyMutationInput, AccessListUncheckedUpdateManyInput>
    /**
     * Filter which AccessLists to update
     */
    where?: AccessListWhereInput
    /**
     * Limit how many AccessLists to update.
     */
    limit?: number
  }

  /**
   * AccessList updateManyAndReturn
   */
  export type AccessListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * The data used to update AccessLists.
     */
    data: XOR<AccessListUpdateManyMutationInput, AccessListUncheckedUpdateManyInput>
    /**
     * Filter which AccessLists to update
     */
    where?: AccessListWhereInput
    /**
     * Limit how many AccessLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessList upsert
   */
  export type AccessListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessList to update in case it exists.
     */
    where: AccessListWhereUniqueInput
    /**
     * In case the AccessList found by the `where` argument doesn't exist, create a new AccessList with this data.
     */
    create: XOR<AccessListCreateInput, AccessListUncheckedCreateInput>
    /**
     * In case the AccessList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessListUpdateInput, AccessListUncheckedUpdateInput>
  }

  /**
   * AccessList delete
   */
  export type AccessListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
    /**
     * Filter which AccessList to delete.
     */
    where: AccessListWhereUniqueInput
  }

  /**
   * AccessList deleteMany
   */
  export type AccessListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessLists to delete
     */
    where?: AccessListWhereInput
    /**
     * Limit how many AccessLists to delete.
     */
    limit?: number
  }

  /**
   * AccessList without action
   */
  export type AccessListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessList
     */
    select?: AccessListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessList
     */
    omit?: AccessListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessListInclude<ExtArgs> | null
  }


  /**
   * Model DenyBooking
   */

  export type AggregateDenyBooking = {
    _count: DenyBookingCountAggregateOutputType | null
    _avg: DenyBookingAvgAggregateOutputType | null
    _sum: DenyBookingSumAggregateOutputType | null
    _min: DenyBookingMinAggregateOutputType | null
    _max: DenyBookingMaxAggregateOutputType | null
  }

  export type DenyBookingAvgAggregateOutputType = {
    DNNumber: number | null
    BKLNo: number | null
    BKNo: number | null
  }

  export type DenyBookingSumAggregateOutputType = {
    DNNumber: number | null
    BKLNo: number | null
    BKNo: number | null
  }

  export type DenyBookingMinAggregateOutputType = {
    DNNumber: number | null
    BKLNo: number | null
    BKNo: number | null
    details: string | null
  }

  export type DenyBookingMaxAggregateOutputType = {
    DNNumber: number | null
    BKLNo: number | null
    BKNo: number | null
    details: string | null
  }

  export type DenyBookingCountAggregateOutputType = {
    DNNumber: number
    BKLNo: number
    BKNo: number
    details: number
    _all: number
  }


  export type DenyBookingAvgAggregateInputType = {
    DNNumber?: true
    BKLNo?: true
    BKNo?: true
  }

  export type DenyBookingSumAggregateInputType = {
    DNNumber?: true
    BKLNo?: true
    BKNo?: true
  }

  export type DenyBookingMinAggregateInputType = {
    DNNumber?: true
    BKLNo?: true
    BKNo?: true
    details?: true
  }

  export type DenyBookingMaxAggregateInputType = {
    DNNumber?: true
    BKLNo?: true
    BKNo?: true
    details?: true
  }

  export type DenyBookingCountAggregateInputType = {
    DNNumber?: true
    BKLNo?: true
    BKNo?: true
    details?: true
    _all?: true
  }

  export type DenyBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DenyBooking to aggregate.
     */
    where?: DenyBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenyBookings to fetch.
     */
    orderBy?: DenyBookingOrderByWithRelationInput | DenyBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DenyBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenyBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenyBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DenyBookings
    **/
    _count?: true | DenyBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DenyBookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DenyBookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DenyBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DenyBookingMaxAggregateInputType
  }

  export type GetDenyBookingAggregateType<T extends DenyBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateDenyBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDenyBooking[P]>
      : GetScalarType<T[P], AggregateDenyBooking[P]>
  }




  export type DenyBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenyBookingWhereInput
    orderBy?: DenyBookingOrderByWithAggregationInput | DenyBookingOrderByWithAggregationInput[]
    by: DenyBookingScalarFieldEnum[] | DenyBookingScalarFieldEnum
    having?: DenyBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DenyBookingCountAggregateInputType | true
    _avg?: DenyBookingAvgAggregateInputType
    _sum?: DenyBookingSumAggregateInputType
    _min?: DenyBookingMinAggregateInputType
    _max?: DenyBookingMaxAggregateInputType
  }

  export type DenyBookingGroupByOutputType = {
    DNNumber: number
    BKLNo: number
    BKNo: number
    details: string
    _count: DenyBookingCountAggregateOutputType | null
    _avg: DenyBookingAvgAggregateOutputType | null
    _sum: DenyBookingSumAggregateOutputType | null
    _min: DenyBookingMinAggregateOutputType | null
    _max: DenyBookingMaxAggregateOutputType | null
  }

  type GetDenyBookingGroupByPayload<T extends DenyBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DenyBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DenyBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DenyBookingGroupByOutputType[P]>
            : GetScalarType<T[P], DenyBookingGroupByOutputType[P]>
        }
      >
    >


  export type DenyBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DNNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    details?: boolean
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["denyBooking"]>

  export type DenyBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DNNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    details?: boolean
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["denyBooking"]>

  export type DenyBookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DNNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    details?: boolean
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["denyBooking"]>

  export type DenyBookingSelectScalar = {
    DNNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    details?: boolean
  }

  export type DenyBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DNNumber" | "BKLNo" | "BKNo" | "details", ExtArgs["result"]["denyBooking"]>
  export type DenyBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type DenyBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type DenyBookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $DenyBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DenyBooking"
    objects: {
      bookingList: Prisma.$BookingListPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      DNNumber: number
      BKLNo: number
      BKNo: number
      details: string
    }, ExtArgs["result"]["denyBooking"]>
    composites: {}
  }

  type DenyBookingGetPayload<S extends boolean | null | undefined | DenyBookingDefaultArgs> = $Result.GetResult<Prisma.$DenyBookingPayload, S>

  type DenyBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DenyBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DenyBookingCountAggregateInputType | true
    }

  export interface DenyBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DenyBooking'], meta: { name: 'DenyBooking' } }
    /**
     * Find zero or one DenyBooking that matches the filter.
     * @param {DenyBookingFindUniqueArgs} args - Arguments to find a DenyBooking
     * @example
     * // Get one DenyBooking
     * const denyBooking = await prisma.denyBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DenyBookingFindUniqueArgs>(args: SelectSubset<T, DenyBookingFindUniqueArgs<ExtArgs>>): Prisma__DenyBookingClient<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DenyBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DenyBookingFindUniqueOrThrowArgs} args - Arguments to find a DenyBooking
     * @example
     * // Get one DenyBooking
     * const denyBooking = await prisma.denyBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DenyBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, DenyBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DenyBookingClient<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DenyBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenyBookingFindFirstArgs} args - Arguments to find a DenyBooking
     * @example
     * // Get one DenyBooking
     * const denyBooking = await prisma.denyBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DenyBookingFindFirstArgs>(args?: SelectSubset<T, DenyBookingFindFirstArgs<ExtArgs>>): Prisma__DenyBookingClient<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DenyBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenyBookingFindFirstOrThrowArgs} args - Arguments to find a DenyBooking
     * @example
     * // Get one DenyBooking
     * const denyBooking = await prisma.denyBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DenyBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, DenyBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DenyBookingClient<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DenyBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenyBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DenyBookings
     * const denyBookings = await prisma.denyBooking.findMany()
     * 
     * // Get first 10 DenyBookings
     * const denyBookings = await prisma.denyBooking.findMany({ take: 10 })
     * 
     * // Only select the `DNNumber`
     * const denyBookingWithDNNumberOnly = await prisma.denyBooking.findMany({ select: { DNNumber: true } })
     * 
     */
    findMany<T extends DenyBookingFindManyArgs>(args?: SelectSubset<T, DenyBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DenyBooking.
     * @param {DenyBookingCreateArgs} args - Arguments to create a DenyBooking.
     * @example
     * // Create one DenyBooking
     * const DenyBooking = await prisma.denyBooking.create({
     *   data: {
     *     // ... data to create a DenyBooking
     *   }
     * })
     * 
     */
    create<T extends DenyBookingCreateArgs>(args: SelectSubset<T, DenyBookingCreateArgs<ExtArgs>>): Prisma__DenyBookingClient<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DenyBookings.
     * @param {DenyBookingCreateManyArgs} args - Arguments to create many DenyBookings.
     * @example
     * // Create many DenyBookings
     * const denyBooking = await prisma.denyBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DenyBookingCreateManyArgs>(args?: SelectSubset<T, DenyBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DenyBookings and returns the data saved in the database.
     * @param {DenyBookingCreateManyAndReturnArgs} args - Arguments to create many DenyBookings.
     * @example
     * // Create many DenyBookings
     * const denyBooking = await prisma.denyBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DenyBookings and only return the `DNNumber`
     * const denyBookingWithDNNumberOnly = await prisma.denyBooking.createManyAndReturn({
     *   select: { DNNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DenyBookingCreateManyAndReturnArgs>(args?: SelectSubset<T, DenyBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DenyBooking.
     * @param {DenyBookingDeleteArgs} args - Arguments to delete one DenyBooking.
     * @example
     * // Delete one DenyBooking
     * const DenyBooking = await prisma.denyBooking.delete({
     *   where: {
     *     // ... filter to delete one DenyBooking
     *   }
     * })
     * 
     */
    delete<T extends DenyBookingDeleteArgs>(args: SelectSubset<T, DenyBookingDeleteArgs<ExtArgs>>): Prisma__DenyBookingClient<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DenyBooking.
     * @param {DenyBookingUpdateArgs} args - Arguments to update one DenyBooking.
     * @example
     * // Update one DenyBooking
     * const denyBooking = await prisma.denyBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DenyBookingUpdateArgs>(args: SelectSubset<T, DenyBookingUpdateArgs<ExtArgs>>): Prisma__DenyBookingClient<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DenyBookings.
     * @param {DenyBookingDeleteManyArgs} args - Arguments to filter DenyBookings to delete.
     * @example
     * // Delete a few DenyBookings
     * const { count } = await prisma.denyBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DenyBookingDeleteManyArgs>(args?: SelectSubset<T, DenyBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DenyBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenyBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DenyBookings
     * const denyBooking = await prisma.denyBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DenyBookingUpdateManyArgs>(args: SelectSubset<T, DenyBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DenyBookings and returns the data updated in the database.
     * @param {DenyBookingUpdateManyAndReturnArgs} args - Arguments to update many DenyBookings.
     * @example
     * // Update many DenyBookings
     * const denyBooking = await prisma.denyBooking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DenyBookings and only return the `DNNumber`
     * const denyBookingWithDNNumberOnly = await prisma.denyBooking.updateManyAndReturn({
     *   select: { DNNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DenyBookingUpdateManyAndReturnArgs>(args: SelectSubset<T, DenyBookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DenyBooking.
     * @param {DenyBookingUpsertArgs} args - Arguments to update or create a DenyBooking.
     * @example
     * // Update or create a DenyBooking
     * const denyBooking = await prisma.denyBooking.upsert({
     *   create: {
     *     // ... data to create a DenyBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DenyBooking we want to update
     *   }
     * })
     */
    upsert<T extends DenyBookingUpsertArgs>(args: SelectSubset<T, DenyBookingUpsertArgs<ExtArgs>>): Prisma__DenyBookingClient<$Result.GetResult<Prisma.$DenyBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DenyBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenyBookingCountArgs} args - Arguments to filter DenyBookings to count.
     * @example
     * // Count the number of DenyBookings
     * const count = await prisma.denyBooking.count({
     *   where: {
     *     // ... the filter for the DenyBookings we want to count
     *   }
     * })
    **/
    count<T extends DenyBookingCountArgs>(
      args?: Subset<T, DenyBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DenyBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DenyBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenyBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DenyBookingAggregateArgs>(args: Subset<T, DenyBookingAggregateArgs>): Prisma.PrismaPromise<GetDenyBookingAggregateType<T>>

    /**
     * Group by DenyBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenyBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DenyBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DenyBookingGroupByArgs['orderBy'] }
        : { orderBy?: DenyBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DenyBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDenyBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DenyBooking model
   */
  readonly fields: DenyBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DenyBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DenyBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookingList<T extends BookingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingListDefaultArgs<ExtArgs>>): Prisma__BookingListClient<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DenyBooking model
   */
  interface DenyBookingFieldRefs {
    readonly DNNumber: FieldRef<"DenyBooking", 'Int'>
    readonly BKLNo: FieldRef<"DenyBooking", 'Int'>
    readonly BKNo: FieldRef<"DenyBooking", 'Int'>
    readonly details: FieldRef<"DenyBooking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DenyBooking findUnique
   */
  export type DenyBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
    /**
     * Filter, which DenyBooking to fetch.
     */
    where: DenyBookingWhereUniqueInput
  }

  /**
   * DenyBooking findUniqueOrThrow
   */
  export type DenyBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
    /**
     * Filter, which DenyBooking to fetch.
     */
    where: DenyBookingWhereUniqueInput
  }

  /**
   * DenyBooking findFirst
   */
  export type DenyBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
    /**
     * Filter, which DenyBooking to fetch.
     */
    where?: DenyBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenyBookings to fetch.
     */
    orderBy?: DenyBookingOrderByWithRelationInput | DenyBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DenyBookings.
     */
    cursor?: DenyBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenyBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenyBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DenyBookings.
     */
    distinct?: DenyBookingScalarFieldEnum | DenyBookingScalarFieldEnum[]
  }

  /**
   * DenyBooking findFirstOrThrow
   */
  export type DenyBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
    /**
     * Filter, which DenyBooking to fetch.
     */
    where?: DenyBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenyBookings to fetch.
     */
    orderBy?: DenyBookingOrderByWithRelationInput | DenyBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DenyBookings.
     */
    cursor?: DenyBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenyBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenyBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DenyBookings.
     */
    distinct?: DenyBookingScalarFieldEnum | DenyBookingScalarFieldEnum[]
  }

  /**
   * DenyBooking findMany
   */
  export type DenyBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
    /**
     * Filter, which DenyBookings to fetch.
     */
    where?: DenyBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenyBookings to fetch.
     */
    orderBy?: DenyBookingOrderByWithRelationInput | DenyBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DenyBookings.
     */
    cursor?: DenyBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenyBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenyBookings.
     */
    skip?: number
    distinct?: DenyBookingScalarFieldEnum | DenyBookingScalarFieldEnum[]
  }

  /**
   * DenyBooking create
   */
  export type DenyBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a DenyBooking.
     */
    data: XOR<DenyBookingCreateInput, DenyBookingUncheckedCreateInput>
  }

  /**
   * DenyBooking createMany
   */
  export type DenyBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DenyBookings.
     */
    data: DenyBookingCreateManyInput | DenyBookingCreateManyInput[]
  }

  /**
   * DenyBooking createManyAndReturn
   */
  export type DenyBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * The data used to create many DenyBookings.
     */
    data: DenyBookingCreateManyInput | DenyBookingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DenyBooking update
   */
  export type DenyBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a DenyBooking.
     */
    data: XOR<DenyBookingUpdateInput, DenyBookingUncheckedUpdateInput>
    /**
     * Choose, which DenyBooking to update.
     */
    where: DenyBookingWhereUniqueInput
  }

  /**
   * DenyBooking updateMany
   */
  export type DenyBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DenyBookings.
     */
    data: XOR<DenyBookingUpdateManyMutationInput, DenyBookingUncheckedUpdateManyInput>
    /**
     * Filter which DenyBookings to update
     */
    where?: DenyBookingWhereInput
    /**
     * Limit how many DenyBookings to update.
     */
    limit?: number
  }

  /**
   * DenyBooking updateManyAndReturn
   */
  export type DenyBookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * The data used to update DenyBookings.
     */
    data: XOR<DenyBookingUpdateManyMutationInput, DenyBookingUncheckedUpdateManyInput>
    /**
     * Filter which DenyBookings to update
     */
    where?: DenyBookingWhereInput
    /**
     * Limit how many DenyBookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DenyBooking upsert
   */
  export type DenyBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the DenyBooking to update in case it exists.
     */
    where: DenyBookingWhereUniqueInput
    /**
     * In case the DenyBooking found by the `where` argument doesn't exist, create a new DenyBooking with this data.
     */
    create: XOR<DenyBookingCreateInput, DenyBookingUncheckedCreateInput>
    /**
     * In case the DenyBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DenyBookingUpdateInput, DenyBookingUncheckedUpdateInput>
  }

  /**
   * DenyBooking delete
   */
  export type DenyBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
    /**
     * Filter which DenyBooking to delete.
     */
    where: DenyBookingWhereUniqueInput
  }

  /**
   * DenyBooking deleteMany
   */
  export type DenyBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DenyBookings to delete
     */
    where?: DenyBookingWhereInput
    /**
     * Limit how many DenyBookings to delete.
     */
    limit?: number
  }

  /**
   * DenyBooking without action
   */
  export type DenyBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenyBooking
     */
    select?: DenyBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenyBooking
     */
    omit?: DenyBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenyBookingInclude<ExtArgs> | null
  }


  /**
   * Model CancelBooking
   */

  export type AggregateCancelBooking = {
    _count: CancelBookingCountAggregateOutputType | null
    _avg: CancelBookingAvgAggregateOutputType | null
    _sum: CancelBookingSumAggregateOutputType | null
    _min: CancelBookingMinAggregateOutputType | null
    _max: CancelBookingMaxAggregateOutputType | null
  }

  export type CancelBookingAvgAggregateOutputType = {
    CCNumber: number | null
    BKLNo: number | null
    BKNo: number | null
  }

  export type CancelBookingSumAggregateOutputType = {
    CCNumber: number | null
    BKLNo: number | null
    BKNo: number | null
  }

  export type CancelBookingMinAggregateOutputType = {
    CCNumber: number | null
    BKLNo: number | null
    BKNo: number | null
    details: string | null
  }

  export type CancelBookingMaxAggregateOutputType = {
    CCNumber: number | null
    BKLNo: number | null
    BKNo: number | null
    details: string | null
  }

  export type CancelBookingCountAggregateOutputType = {
    CCNumber: number
    BKLNo: number
    BKNo: number
    details: number
    _all: number
  }


  export type CancelBookingAvgAggregateInputType = {
    CCNumber?: true
    BKLNo?: true
    BKNo?: true
  }

  export type CancelBookingSumAggregateInputType = {
    CCNumber?: true
    BKLNo?: true
    BKNo?: true
  }

  export type CancelBookingMinAggregateInputType = {
    CCNumber?: true
    BKLNo?: true
    BKNo?: true
    details?: true
  }

  export type CancelBookingMaxAggregateInputType = {
    CCNumber?: true
    BKLNo?: true
    BKNo?: true
    details?: true
  }

  export type CancelBookingCountAggregateInputType = {
    CCNumber?: true
    BKLNo?: true
    BKNo?: true
    details?: true
    _all?: true
  }

  export type CancelBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CancelBooking to aggregate.
     */
    where?: CancelBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancelBookings to fetch.
     */
    orderBy?: CancelBookingOrderByWithRelationInput | CancelBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CancelBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancelBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancelBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CancelBookings
    **/
    _count?: true | CancelBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CancelBookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CancelBookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CancelBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CancelBookingMaxAggregateInputType
  }

  export type GetCancelBookingAggregateType<T extends CancelBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateCancelBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCancelBooking[P]>
      : GetScalarType<T[P], AggregateCancelBooking[P]>
  }




  export type CancelBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CancelBookingWhereInput
    orderBy?: CancelBookingOrderByWithAggregationInput | CancelBookingOrderByWithAggregationInput[]
    by: CancelBookingScalarFieldEnum[] | CancelBookingScalarFieldEnum
    having?: CancelBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CancelBookingCountAggregateInputType | true
    _avg?: CancelBookingAvgAggregateInputType
    _sum?: CancelBookingSumAggregateInputType
    _min?: CancelBookingMinAggregateInputType
    _max?: CancelBookingMaxAggregateInputType
  }

  export type CancelBookingGroupByOutputType = {
    CCNumber: number
    BKLNo: number
    BKNo: number
    details: string
    _count: CancelBookingCountAggregateOutputType | null
    _avg: CancelBookingAvgAggregateOutputType | null
    _sum: CancelBookingSumAggregateOutputType | null
    _min: CancelBookingMinAggregateOutputType | null
    _max: CancelBookingMaxAggregateOutputType | null
  }

  type GetCancelBookingGroupByPayload<T extends CancelBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CancelBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CancelBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CancelBookingGroupByOutputType[P]>
            : GetScalarType<T[P], CancelBookingGroupByOutputType[P]>
        }
      >
    >


  export type CancelBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CCNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    details?: boolean
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancelBooking"]>

  export type CancelBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CCNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    details?: boolean
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancelBooking"]>

  export type CancelBookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CCNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    details?: boolean
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancelBooking"]>

  export type CancelBookingSelectScalar = {
    CCNumber?: boolean
    BKLNo?: boolean
    BKNo?: boolean
    details?: boolean
  }

  export type CancelBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CCNumber" | "BKLNo" | "BKNo" | "details", ExtArgs["result"]["cancelBooking"]>
  export type CancelBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type CancelBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type CancelBookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingList?: boolean | BookingListDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $CancelBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CancelBooking"
    objects: {
      bookingList: Prisma.$BookingListPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      CCNumber: number
      BKLNo: number
      BKNo: number
      details: string
    }, ExtArgs["result"]["cancelBooking"]>
    composites: {}
  }

  type CancelBookingGetPayload<S extends boolean | null | undefined | CancelBookingDefaultArgs> = $Result.GetResult<Prisma.$CancelBookingPayload, S>

  type CancelBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CancelBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CancelBookingCountAggregateInputType | true
    }

  export interface CancelBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CancelBooking'], meta: { name: 'CancelBooking' } }
    /**
     * Find zero or one CancelBooking that matches the filter.
     * @param {CancelBookingFindUniqueArgs} args - Arguments to find a CancelBooking
     * @example
     * // Get one CancelBooking
     * const cancelBooking = await prisma.cancelBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CancelBookingFindUniqueArgs>(args: SelectSubset<T, CancelBookingFindUniqueArgs<ExtArgs>>): Prisma__CancelBookingClient<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CancelBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CancelBookingFindUniqueOrThrowArgs} args - Arguments to find a CancelBooking
     * @example
     * // Get one CancelBooking
     * const cancelBooking = await prisma.cancelBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CancelBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, CancelBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CancelBookingClient<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CancelBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancelBookingFindFirstArgs} args - Arguments to find a CancelBooking
     * @example
     * // Get one CancelBooking
     * const cancelBooking = await prisma.cancelBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CancelBookingFindFirstArgs>(args?: SelectSubset<T, CancelBookingFindFirstArgs<ExtArgs>>): Prisma__CancelBookingClient<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CancelBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancelBookingFindFirstOrThrowArgs} args - Arguments to find a CancelBooking
     * @example
     * // Get one CancelBooking
     * const cancelBooking = await prisma.cancelBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CancelBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, CancelBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CancelBookingClient<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CancelBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancelBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CancelBookings
     * const cancelBookings = await prisma.cancelBooking.findMany()
     * 
     * // Get first 10 CancelBookings
     * const cancelBookings = await prisma.cancelBooking.findMany({ take: 10 })
     * 
     * // Only select the `CCNumber`
     * const cancelBookingWithCCNumberOnly = await prisma.cancelBooking.findMany({ select: { CCNumber: true } })
     * 
     */
    findMany<T extends CancelBookingFindManyArgs>(args?: SelectSubset<T, CancelBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CancelBooking.
     * @param {CancelBookingCreateArgs} args - Arguments to create a CancelBooking.
     * @example
     * // Create one CancelBooking
     * const CancelBooking = await prisma.cancelBooking.create({
     *   data: {
     *     // ... data to create a CancelBooking
     *   }
     * })
     * 
     */
    create<T extends CancelBookingCreateArgs>(args: SelectSubset<T, CancelBookingCreateArgs<ExtArgs>>): Prisma__CancelBookingClient<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CancelBookings.
     * @param {CancelBookingCreateManyArgs} args - Arguments to create many CancelBookings.
     * @example
     * // Create many CancelBookings
     * const cancelBooking = await prisma.cancelBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CancelBookingCreateManyArgs>(args?: SelectSubset<T, CancelBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CancelBookings and returns the data saved in the database.
     * @param {CancelBookingCreateManyAndReturnArgs} args - Arguments to create many CancelBookings.
     * @example
     * // Create many CancelBookings
     * const cancelBooking = await prisma.cancelBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CancelBookings and only return the `CCNumber`
     * const cancelBookingWithCCNumberOnly = await prisma.cancelBooking.createManyAndReturn({
     *   select: { CCNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CancelBookingCreateManyAndReturnArgs>(args?: SelectSubset<T, CancelBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CancelBooking.
     * @param {CancelBookingDeleteArgs} args - Arguments to delete one CancelBooking.
     * @example
     * // Delete one CancelBooking
     * const CancelBooking = await prisma.cancelBooking.delete({
     *   where: {
     *     // ... filter to delete one CancelBooking
     *   }
     * })
     * 
     */
    delete<T extends CancelBookingDeleteArgs>(args: SelectSubset<T, CancelBookingDeleteArgs<ExtArgs>>): Prisma__CancelBookingClient<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CancelBooking.
     * @param {CancelBookingUpdateArgs} args - Arguments to update one CancelBooking.
     * @example
     * // Update one CancelBooking
     * const cancelBooking = await prisma.cancelBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CancelBookingUpdateArgs>(args: SelectSubset<T, CancelBookingUpdateArgs<ExtArgs>>): Prisma__CancelBookingClient<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CancelBookings.
     * @param {CancelBookingDeleteManyArgs} args - Arguments to filter CancelBookings to delete.
     * @example
     * // Delete a few CancelBookings
     * const { count } = await prisma.cancelBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CancelBookingDeleteManyArgs>(args?: SelectSubset<T, CancelBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CancelBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancelBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CancelBookings
     * const cancelBooking = await prisma.cancelBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CancelBookingUpdateManyArgs>(args: SelectSubset<T, CancelBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CancelBookings and returns the data updated in the database.
     * @param {CancelBookingUpdateManyAndReturnArgs} args - Arguments to update many CancelBookings.
     * @example
     * // Update many CancelBookings
     * const cancelBooking = await prisma.cancelBooking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CancelBookings and only return the `CCNumber`
     * const cancelBookingWithCCNumberOnly = await prisma.cancelBooking.updateManyAndReturn({
     *   select: { CCNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CancelBookingUpdateManyAndReturnArgs>(args: SelectSubset<T, CancelBookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CancelBooking.
     * @param {CancelBookingUpsertArgs} args - Arguments to update or create a CancelBooking.
     * @example
     * // Update or create a CancelBooking
     * const cancelBooking = await prisma.cancelBooking.upsert({
     *   create: {
     *     // ... data to create a CancelBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CancelBooking we want to update
     *   }
     * })
     */
    upsert<T extends CancelBookingUpsertArgs>(args: SelectSubset<T, CancelBookingUpsertArgs<ExtArgs>>): Prisma__CancelBookingClient<$Result.GetResult<Prisma.$CancelBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CancelBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancelBookingCountArgs} args - Arguments to filter CancelBookings to count.
     * @example
     * // Count the number of CancelBookings
     * const count = await prisma.cancelBooking.count({
     *   where: {
     *     // ... the filter for the CancelBookings we want to count
     *   }
     * })
    **/
    count<T extends CancelBookingCountArgs>(
      args?: Subset<T, CancelBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CancelBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CancelBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancelBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CancelBookingAggregateArgs>(args: Subset<T, CancelBookingAggregateArgs>): Prisma.PrismaPromise<GetCancelBookingAggregateType<T>>

    /**
     * Group by CancelBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancelBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CancelBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CancelBookingGroupByArgs['orderBy'] }
        : { orderBy?: CancelBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CancelBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCancelBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CancelBooking model
   */
  readonly fields: CancelBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CancelBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CancelBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookingList<T extends BookingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingListDefaultArgs<ExtArgs>>): Prisma__BookingListClient<$Result.GetResult<Prisma.$BookingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CancelBooking model
   */
  interface CancelBookingFieldRefs {
    readonly CCNumber: FieldRef<"CancelBooking", 'Int'>
    readonly BKLNo: FieldRef<"CancelBooking", 'Int'>
    readonly BKNo: FieldRef<"CancelBooking", 'Int'>
    readonly details: FieldRef<"CancelBooking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CancelBooking findUnique
   */
  export type CancelBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
    /**
     * Filter, which CancelBooking to fetch.
     */
    where: CancelBookingWhereUniqueInput
  }

  /**
   * CancelBooking findUniqueOrThrow
   */
  export type CancelBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
    /**
     * Filter, which CancelBooking to fetch.
     */
    where: CancelBookingWhereUniqueInput
  }

  /**
   * CancelBooking findFirst
   */
  export type CancelBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
    /**
     * Filter, which CancelBooking to fetch.
     */
    where?: CancelBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancelBookings to fetch.
     */
    orderBy?: CancelBookingOrderByWithRelationInput | CancelBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CancelBookings.
     */
    cursor?: CancelBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancelBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancelBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CancelBookings.
     */
    distinct?: CancelBookingScalarFieldEnum | CancelBookingScalarFieldEnum[]
  }

  /**
   * CancelBooking findFirstOrThrow
   */
  export type CancelBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
    /**
     * Filter, which CancelBooking to fetch.
     */
    where?: CancelBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancelBookings to fetch.
     */
    orderBy?: CancelBookingOrderByWithRelationInput | CancelBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CancelBookings.
     */
    cursor?: CancelBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancelBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancelBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CancelBookings.
     */
    distinct?: CancelBookingScalarFieldEnum | CancelBookingScalarFieldEnum[]
  }

  /**
   * CancelBooking findMany
   */
  export type CancelBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
    /**
     * Filter, which CancelBookings to fetch.
     */
    where?: CancelBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancelBookings to fetch.
     */
    orderBy?: CancelBookingOrderByWithRelationInput | CancelBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CancelBookings.
     */
    cursor?: CancelBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancelBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancelBookings.
     */
    skip?: number
    distinct?: CancelBookingScalarFieldEnum | CancelBookingScalarFieldEnum[]
  }

  /**
   * CancelBooking create
   */
  export type CancelBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a CancelBooking.
     */
    data: XOR<CancelBookingCreateInput, CancelBookingUncheckedCreateInput>
  }

  /**
   * CancelBooking createMany
   */
  export type CancelBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CancelBookings.
     */
    data: CancelBookingCreateManyInput | CancelBookingCreateManyInput[]
  }

  /**
   * CancelBooking createManyAndReturn
   */
  export type CancelBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * The data used to create many CancelBookings.
     */
    data: CancelBookingCreateManyInput | CancelBookingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CancelBooking update
   */
  export type CancelBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a CancelBooking.
     */
    data: XOR<CancelBookingUpdateInput, CancelBookingUncheckedUpdateInput>
    /**
     * Choose, which CancelBooking to update.
     */
    where: CancelBookingWhereUniqueInput
  }

  /**
   * CancelBooking updateMany
   */
  export type CancelBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CancelBookings.
     */
    data: XOR<CancelBookingUpdateManyMutationInput, CancelBookingUncheckedUpdateManyInput>
    /**
     * Filter which CancelBookings to update
     */
    where?: CancelBookingWhereInput
    /**
     * Limit how many CancelBookings to update.
     */
    limit?: number
  }

  /**
   * CancelBooking updateManyAndReturn
   */
  export type CancelBookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * The data used to update CancelBookings.
     */
    data: XOR<CancelBookingUpdateManyMutationInput, CancelBookingUncheckedUpdateManyInput>
    /**
     * Filter which CancelBookings to update
     */
    where?: CancelBookingWhereInput
    /**
     * Limit how many CancelBookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CancelBooking upsert
   */
  export type CancelBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the CancelBooking to update in case it exists.
     */
    where: CancelBookingWhereUniqueInput
    /**
     * In case the CancelBooking found by the `where` argument doesn't exist, create a new CancelBooking with this data.
     */
    create: XOR<CancelBookingCreateInput, CancelBookingUncheckedCreateInput>
    /**
     * In case the CancelBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CancelBookingUpdateInput, CancelBookingUncheckedUpdateInput>
  }

  /**
   * CancelBooking delete
   */
  export type CancelBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
    /**
     * Filter which CancelBooking to delete.
     */
    where: CancelBookingWhereUniqueInput
  }

  /**
   * CancelBooking deleteMany
   */
  export type CancelBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CancelBookings to delete
     */
    where?: CancelBookingWhereInput
    /**
     * Limit how many CancelBookings to delete.
     */
    limit?: number
  }

  /**
   * CancelBooking without action
   */
  export type CancelBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancelBooking
     */
    select?: CancelBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancelBooking
     */
    omit?: CancelBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancelBookingInclude<ExtArgs> | null
  }


  /**
   * Model LockList
   */

  export type AggregateLockList = {
    _count: LockListCountAggregateOutputType | null
    _avg: LockListAvgAggregateOutputType | null
    _sum: LockListSumAggregateOutputType | null
    _min: LockListMinAggregateOutputType | null
    _max: LockListMaxAggregateOutputType | null
  }

  export type LockListAvgAggregateOutputType = {
    LKNo: number | null
    ENo: number | null
  }

  export type LockListSumAggregateOutputType = {
    LKNo: number | null
    ENo: number | null
  }

  export type LockListMinAggregateOutputType = {
    LKNo: number | null
    ENo: number | null
    LKDate: Date | null
  }

  export type LockListMaxAggregateOutputType = {
    LKNo: number | null
    ENo: number | null
    LKDate: Date | null
  }

  export type LockListCountAggregateOutputType = {
    LKNo: number
    ENo: number
    LKDate: number
    _all: number
  }


  export type LockListAvgAggregateInputType = {
    LKNo?: true
    ENo?: true
  }

  export type LockListSumAggregateInputType = {
    LKNo?: true
    ENo?: true
  }

  export type LockListMinAggregateInputType = {
    LKNo?: true
    ENo?: true
    LKDate?: true
  }

  export type LockListMaxAggregateInputType = {
    LKNo?: true
    ENo?: true
    LKDate?: true
  }

  export type LockListCountAggregateInputType = {
    LKNo?: true
    ENo?: true
    LKDate?: true
    _all?: true
  }

  export type LockListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LockList to aggregate.
     */
    where?: LockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LockLists to fetch.
     */
    orderBy?: LockListOrderByWithRelationInput | LockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LockLists
    **/
    _count?: true | LockListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LockListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LockListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LockListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LockListMaxAggregateInputType
  }

  export type GetLockListAggregateType<T extends LockListAggregateArgs> = {
        [P in keyof T & keyof AggregateLockList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLockList[P]>
      : GetScalarType<T[P], AggregateLockList[P]>
  }




  export type LockListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LockListWhereInput
    orderBy?: LockListOrderByWithAggregationInput | LockListOrderByWithAggregationInput[]
    by: LockListScalarFieldEnum[] | LockListScalarFieldEnum
    having?: LockListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LockListCountAggregateInputType | true
    _avg?: LockListAvgAggregateInputType
    _sum?: LockListSumAggregateInputType
    _min?: LockListMinAggregateInputType
    _max?: LockListMaxAggregateInputType
  }

  export type LockListGroupByOutputType = {
    LKNo: number
    ENo: number
    LKDate: Date
    _count: LockListCountAggregateOutputType | null
    _avg: LockListAvgAggregateOutputType | null
    _sum: LockListSumAggregateOutputType | null
    _min: LockListMinAggregateOutputType | null
    _max: LockListMaxAggregateOutputType | null
  }

  type GetLockListGroupByPayload<T extends LockListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LockListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LockListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LockListGroupByOutputType[P]>
            : GetScalarType<T[P], LockListGroupByOutputType[P]>
        }
      >
    >


  export type LockListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LKNo?: boolean
    ENo?: boolean
    LKDate?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lockList"]>

  export type LockListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LKNo?: boolean
    ENo?: boolean
    LKDate?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lockList"]>

  export type LockListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LKNo?: boolean
    ENo?: boolean
    LKDate?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lockList"]>

  export type LockListSelectScalar = {
    LKNo?: boolean
    ENo?: boolean
    LKDate?: boolean
  }

  export type LockListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"LKNo" | "ENo" | "LKDate", ExtArgs["result"]["lockList"]>
  export type LockListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type LockListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type LockListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $LockListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LockList"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      LKNo: number
      ENo: number
      LKDate: Date
    }, ExtArgs["result"]["lockList"]>
    composites: {}
  }

  type LockListGetPayload<S extends boolean | null | undefined | LockListDefaultArgs> = $Result.GetResult<Prisma.$LockListPayload, S>

  type LockListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LockListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LockListCountAggregateInputType | true
    }

  export interface LockListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LockList'], meta: { name: 'LockList' } }
    /**
     * Find zero or one LockList that matches the filter.
     * @param {LockListFindUniqueArgs} args - Arguments to find a LockList
     * @example
     * // Get one LockList
     * const lockList = await prisma.lockList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LockListFindUniqueArgs>(args: SelectSubset<T, LockListFindUniqueArgs<ExtArgs>>): Prisma__LockListClient<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LockList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LockListFindUniqueOrThrowArgs} args - Arguments to find a LockList
     * @example
     * // Get one LockList
     * const lockList = await prisma.lockList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LockListFindUniqueOrThrowArgs>(args: SelectSubset<T, LockListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LockListClient<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LockList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockListFindFirstArgs} args - Arguments to find a LockList
     * @example
     * // Get one LockList
     * const lockList = await prisma.lockList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LockListFindFirstArgs>(args?: SelectSubset<T, LockListFindFirstArgs<ExtArgs>>): Prisma__LockListClient<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LockList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockListFindFirstOrThrowArgs} args - Arguments to find a LockList
     * @example
     * // Get one LockList
     * const lockList = await prisma.lockList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LockListFindFirstOrThrowArgs>(args?: SelectSubset<T, LockListFindFirstOrThrowArgs<ExtArgs>>): Prisma__LockListClient<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LockLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LockLists
     * const lockLists = await prisma.lockList.findMany()
     * 
     * // Get first 10 LockLists
     * const lockLists = await prisma.lockList.findMany({ take: 10 })
     * 
     * // Only select the `LKNo`
     * const lockListWithLKNoOnly = await prisma.lockList.findMany({ select: { LKNo: true } })
     * 
     */
    findMany<T extends LockListFindManyArgs>(args?: SelectSubset<T, LockListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LockList.
     * @param {LockListCreateArgs} args - Arguments to create a LockList.
     * @example
     * // Create one LockList
     * const LockList = await prisma.lockList.create({
     *   data: {
     *     // ... data to create a LockList
     *   }
     * })
     * 
     */
    create<T extends LockListCreateArgs>(args: SelectSubset<T, LockListCreateArgs<ExtArgs>>): Prisma__LockListClient<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LockLists.
     * @param {LockListCreateManyArgs} args - Arguments to create many LockLists.
     * @example
     * // Create many LockLists
     * const lockList = await prisma.lockList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LockListCreateManyArgs>(args?: SelectSubset<T, LockListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LockLists and returns the data saved in the database.
     * @param {LockListCreateManyAndReturnArgs} args - Arguments to create many LockLists.
     * @example
     * // Create many LockLists
     * const lockList = await prisma.lockList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LockLists and only return the `LKNo`
     * const lockListWithLKNoOnly = await prisma.lockList.createManyAndReturn({
     *   select: { LKNo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LockListCreateManyAndReturnArgs>(args?: SelectSubset<T, LockListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LockList.
     * @param {LockListDeleteArgs} args - Arguments to delete one LockList.
     * @example
     * // Delete one LockList
     * const LockList = await prisma.lockList.delete({
     *   where: {
     *     // ... filter to delete one LockList
     *   }
     * })
     * 
     */
    delete<T extends LockListDeleteArgs>(args: SelectSubset<T, LockListDeleteArgs<ExtArgs>>): Prisma__LockListClient<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LockList.
     * @param {LockListUpdateArgs} args - Arguments to update one LockList.
     * @example
     * // Update one LockList
     * const lockList = await prisma.lockList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LockListUpdateArgs>(args: SelectSubset<T, LockListUpdateArgs<ExtArgs>>): Prisma__LockListClient<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LockLists.
     * @param {LockListDeleteManyArgs} args - Arguments to filter LockLists to delete.
     * @example
     * // Delete a few LockLists
     * const { count } = await prisma.lockList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LockListDeleteManyArgs>(args?: SelectSubset<T, LockListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LockLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LockLists
     * const lockList = await prisma.lockList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LockListUpdateManyArgs>(args: SelectSubset<T, LockListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LockLists and returns the data updated in the database.
     * @param {LockListUpdateManyAndReturnArgs} args - Arguments to update many LockLists.
     * @example
     * // Update many LockLists
     * const lockList = await prisma.lockList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LockLists and only return the `LKNo`
     * const lockListWithLKNoOnly = await prisma.lockList.updateManyAndReturn({
     *   select: { LKNo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LockListUpdateManyAndReturnArgs>(args: SelectSubset<T, LockListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LockList.
     * @param {LockListUpsertArgs} args - Arguments to update or create a LockList.
     * @example
     * // Update or create a LockList
     * const lockList = await prisma.lockList.upsert({
     *   create: {
     *     // ... data to create a LockList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LockList we want to update
     *   }
     * })
     */
    upsert<T extends LockListUpsertArgs>(args: SelectSubset<T, LockListUpsertArgs<ExtArgs>>): Prisma__LockListClient<$Result.GetResult<Prisma.$LockListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LockLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockListCountArgs} args - Arguments to filter LockLists to count.
     * @example
     * // Count the number of LockLists
     * const count = await prisma.lockList.count({
     *   where: {
     *     // ... the filter for the LockLists we want to count
     *   }
     * })
    **/
    count<T extends LockListCountArgs>(
      args?: Subset<T, LockListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LockListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LockList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LockListAggregateArgs>(args: Subset<T, LockListAggregateArgs>): Prisma.PrismaPromise<GetLockListAggregateType<T>>

    /**
     * Group by LockList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LockListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LockListGroupByArgs['orderBy'] }
        : { orderBy?: LockListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LockListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLockListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LockList model
   */
  readonly fields: LockListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LockList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LockListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LockList model
   */
  interface LockListFieldRefs {
    readonly LKNo: FieldRef<"LockList", 'Int'>
    readonly ENo: FieldRef<"LockList", 'Int'>
    readonly LKDate: FieldRef<"LockList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LockList findUnique
   */
  export type LockListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListInclude<ExtArgs> | null
    /**
     * Filter, which LockList to fetch.
     */
    where: LockListWhereUniqueInput
  }

  /**
   * LockList findUniqueOrThrow
   */
  export type LockListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListInclude<ExtArgs> | null
    /**
     * Filter, which LockList to fetch.
     */
    where: LockListWhereUniqueInput
  }

  /**
   * LockList findFirst
   */
  export type LockListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListInclude<ExtArgs> | null
    /**
     * Filter, which LockList to fetch.
     */
    where?: LockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LockLists to fetch.
     */
    orderBy?: LockListOrderByWithRelationInput | LockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LockLists.
     */
    cursor?: LockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LockLists.
     */
    distinct?: LockListScalarFieldEnum | LockListScalarFieldEnum[]
  }

  /**
   * LockList findFirstOrThrow
   */
  export type LockListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListInclude<ExtArgs> | null
    /**
     * Filter, which LockList to fetch.
     */
    where?: LockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LockLists to fetch.
     */
    orderBy?: LockListOrderByWithRelationInput | LockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LockLists.
     */
    cursor?: LockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LockLists.
     */
    distinct?: LockListScalarFieldEnum | LockListScalarFieldEnum[]
  }

  /**
   * LockList findMany
   */
  export type LockListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListInclude<ExtArgs> | null
    /**
     * Filter, which LockLists to fetch.
     */
    where?: LockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LockLists to fetch.
     */
    orderBy?: LockListOrderByWithRelationInput | LockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LockLists.
     */
    cursor?: LockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LockLists.
     */
    skip?: number
    distinct?: LockListScalarFieldEnum | LockListScalarFieldEnum[]
  }

  /**
   * LockList create
   */
  export type LockListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListInclude<ExtArgs> | null
    /**
     * The data needed to create a LockList.
     */
    data: XOR<LockListCreateInput, LockListUncheckedCreateInput>
  }

  /**
   * LockList createMany
   */
  export type LockListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LockLists.
     */
    data: LockListCreateManyInput | LockListCreateManyInput[]
  }

  /**
   * LockList createManyAndReturn
   */
  export type LockListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * The data used to create many LockLists.
     */
    data: LockListCreateManyInput | LockListCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LockList update
   */
  export type LockListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListInclude<ExtArgs> | null
    /**
     * The data needed to update a LockList.
     */
    data: XOR<LockListUpdateInput, LockListUncheckedUpdateInput>
    /**
     * Choose, which LockList to update.
     */
    where: LockListWhereUniqueInput
  }

  /**
   * LockList updateMany
   */
  export type LockListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LockLists.
     */
    data: XOR<LockListUpdateManyMutationInput, LockListUncheckedUpdateManyInput>
    /**
     * Filter which LockLists to update
     */
    where?: LockListWhereInput
    /**
     * Limit how many LockLists to update.
     */
    limit?: number
  }

  /**
   * LockList updateManyAndReturn
   */
  export type LockListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * The data used to update LockLists.
     */
    data: XOR<LockListUpdateManyMutationInput, LockListUncheckedUpdateManyInput>
    /**
     * Filter which LockLists to update
     */
    where?: LockListWhereInput
    /**
     * Limit how many LockLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LockList upsert
   */
  export type LockListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListInclude<ExtArgs> | null
    /**
     * The filter to search for the LockList to update in case it exists.
     */
    where: LockListWhereUniqueInput
    /**
     * In case the LockList found by the `where` argument doesn't exist, create a new LockList with this data.
     */
    create: XOR<LockListCreateInput, LockListUncheckedCreateInput>
    /**
     * In case the LockList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LockListUpdateInput, LockListUncheckedUpdateInput>
  }

  /**
   * LockList delete
   */
  export type LockListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListInclude<ExtArgs> | null
    /**
     * Filter which LockList to delete.
     */
    where: LockListWhereUniqueInput
  }

  /**
   * LockList deleteMany
   */
  export type LockListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LockLists to delete
     */
    where?: LockListWhereInput
    /**
     * Limit how many LockLists to delete.
     */
    limit?: number
  }

  /**
   * LockList without action
   */
  export type LockListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockList
     */
    select?: LockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LockList
     */
    omit?: LockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockListInclude<ExtArgs> | null
  }


  /**
   * Model UnlockList
   */

  export type AggregateUnlockList = {
    _count: UnlockListCountAggregateOutputType | null
    _avg: UnlockListAvgAggregateOutputType | null
    _sum: UnlockListSumAggregateOutputType | null
    _min: UnlockListMinAggregateOutputType | null
    _max: UnlockListMaxAggregateOutputType | null
  }

  export type UnlockListAvgAggregateOutputType = {
    ULKNo: number | null
    ENo: number | null
  }

  export type UnlockListSumAggregateOutputType = {
    ULKNo: number | null
    ENo: number | null
  }

  export type UnlockListMinAggregateOutputType = {
    ULKNo: number | null
    ENo: number | null
    LKDate: Date | null
  }

  export type UnlockListMaxAggregateOutputType = {
    ULKNo: number | null
    ENo: number | null
    LKDate: Date | null
  }

  export type UnlockListCountAggregateOutputType = {
    ULKNo: number
    ENo: number
    LKDate: number
    _all: number
  }


  export type UnlockListAvgAggregateInputType = {
    ULKNo?: true
    ENo?: true
  }

  export type UnlockListSumAggregateInputType = {
    ULKNo?: true
    ENo?: true
  }

  export type UnlockListMinAggregateInputType = {
    ULKNo?: true
    ENo?: true
    LKDate?: true
  }

  export type UnlockListMaxAggregateInputType = {
    ULKNo?: true
    ENo?: true
    LKDate?: true
  }

  export type UnlockListCountAggregateInputType = {
    ULKNo?: true
    ENo?: true
    LKDate?: true
    _all?: true
  }

  export type UnlockListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnlockList to aggregate.
     */
    where?: UnlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockLists to fetch.
     */
    orderBy?: UnlockListOrderByWithRelationInput | UnlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnlockLists
    **/
    _count?: true | UnlockListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnlockListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnlockListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnlockListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnlockListMaxAggregateInputType
  }

  export type GetUnlockListAggregateType<T extends UnlockListAggregateArgs> = {
        [P in keyof T & keyof AggregateUnlockList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnlockList[P]>
      : GetScalarType<T[P], AggregateUnlockList[P]>
  }




  export type UnlockListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnlockListWhereInput
    orderBy?: UnlockListOrderByWithAggregationInput | UnlockListOrderByWithAggregationInput[]
    by: UnlockListScalarFieldEnum[] | UnlockListScalarFieldEnum
    having?: UnlockListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnlockListCountAggregateInputType | true
    _avg?: UnlockListAvgAggregateInputType
    _sum?: UnlockListSumAggregateInputType
    _min?: UnlockListMinAggregateInputType
    _max?: UnlockListMaxAggregateInputType
  }

  export type UnlockListGroupByOutputType = {
    ULKNo: number
    ENo: number
    LKDate: Date
    _count: UnlockListCountAggregateOutputType | null
    _avg: UnlockListAvgAggregateOutputType | null
    _sum: UnlockListSumAggregateOutputType | null
    _min: UnlockListMinAggregateOutputType | null
    _max: UnlockListMaxAggregateOutputType | null
  }

  type GetUnlockListGroupByPayload<T extends UnlockListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnlockListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnlockListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnlockListGroupByOutputType[P]>
            : GetScalarType<T[P], UnlockListGroupByOutputType[P]>
        }
      >
    >


  export type UnlockListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ULKNo?: boolean
    ENo?: boolean
    LKDate?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unlockList"]>

  export type UnlockListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ULKNo?: boolean
    ENo?: boolean
    LKDate?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unlockList"]>

  export type UnlockListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ULKNo?: boolean
    ENo?: boolean
    LKDate?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unlockList"]>

  export type UnlockListSelectScalar = {
    ULKNo?: boolean
    ENo?: boolean
    LKDate?: boolean
  }

  export type UnlockListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ULKNo" | "ENo" | "LKDate", ExtArgs["result"]["unlockList"]>
  export type UnlockListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type UnlockListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type UnlockListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $UnlockListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnlockList"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ULKNo: number
      ENo: number
      LKDate: Date
    }, ExtArgs["result"]["unlockList"]>
    composites: {}
  }

  type UnlockListGetPayload<S extends boolean | null | undefined | UnlockListDefaultArgs> = $Result.GetResult<Prisma.$UnlockListPayload, S>

  type UnlockListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnlockListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnlockListCountAggregateInputType | true
    }

  export interface UnlockListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnlockList'], meta: { name: 'UnlockList' } }
    /**
     * Find zero or one UnlockList that matches the filter.
     * @param {UnlockListFindUniqueArgs} args - Arguments to find a UnlockList
     * @example
     * // Get one UnlockList
     * const unlockList = await prisma.unlockList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnlockListFindUniqueArgs>(args: SelectSubset<T, UnlockListFindUniqueArgs<ExtArgs>>): Prisma__UnlockListClient<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnlockList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnlockListFindUniqueOrThrowArgs} args - Arguments to find a UnlockList
     * @example
     * // Get one UnlockList
     * const unlockList = await prisma.unlockList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnlockListFindUniqueOrThrowArgs>(args: SelectSubset<T, UnlockListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnlockListClient<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnlockList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockListFindFirstArgs} args - Arguments to find a UnlockList
     * @example
     * // Get one UnlockList
     * const unlockList = await prisma.unlockList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnlockListFindFirstArgs>(args?: SelectSubset<T, UnlockListFindFirstArgs<ExtArgs>>): Prisma__UnlockListClient<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnlockList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockListFindFirstOrThrowArgs} args - Arguments to find a UnlockList
     * @example
     * // Get one UnlockList
     * const unlockList = await prisma.unlockList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnlockListFindFirstOrThrowArgs>(args?: SelectSubset<T, UnlockListFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnlockListClient<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnlockLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnlockLists
     * const unlockLists = await prisma.unlockList.findMany()
     * 
     * // Get first 10 UnlockLists
     * const unlockLists = await prisma.unlockList.findMany({ take: 10 })
     * 
     * // Only select the `ULKNo`
     * const unlockListWithULKNoOnly = await prisma.unlockList.findMany({ select: { ULKNo: true } })
     * 
     */
    findMany<T extends UnlockListFindManyArgs>(args?: SelectSubset<T, UnlockListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnlockList.
     * @param {UnlockListCreateArgs} args - Arguments to create a UnlockList.
     * @example
     * // Create one UnlockList
     * const UnlockList = await prisma.unlockList.create({
     *   data: {
     *     // ... data to create a UnlockList
     *   }
     * })
     * 
     */
    create<T extends UnlockListCreateArgs>(args: SelectSubset<T, UnlockListCreateArgs<ExtArgs>>): Prisma__UnlockListClient<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnlockLists.
     * @param {UnlockListCreateManyArgs} args - Arguments to create many UnlockLists.
     * @example
     * // Create many UnlockLists
     * const unlockList = await prisma.unlockList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnlockListCreateManyArgs>(args?: SelectSubset<T, UnlockListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnlockLists and returns the data saved in the database.
     * @param {UnlockListCreateManyAndReturnArgs} args - Arguments to create many UnlockLists.
     * @example
     * // Create many UnlockLists
     * const unlockList = await prisma.unlockList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnlockLists and only return the `ULKNo`
     * const unlockListWithULKNoOnly = await prisma.unlockList.createManyAndReturn({
     *   select: { ULKNo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnlockListCreateManyAndReturnArgs>(args?: SelectSubset<T, UnlockListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnlockList.
     * @param {UnlockListDeleteArgs} args - Arguments to delete one UnlockList.
     * @example
     * // Delete one UnlockList
     * const UnlockList = await prisma.unlockList.delete({
     *   where: {
     *     // ... filter to delete one UnlockList
     *   }
     * })
     * 
     */
    delete<T extends UnlockListDeleteArgs>(args: SelectSubset<T, UnlockListDeleteArgs<ExtArgs>>): Prisma__UnlockListClient<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnlockList.
     * @param {UnlockListUpdateArgs} args - Arguments to update one UnlockList.
     * @example
     * // Update one UnlockList
     * const unlockList = await prisma.unlockList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnlockListUpdateArgs>(args: SelectSubset<T, UnlockListUpdateArgs<ExtArgs>>): Prisma__UnlockListClient<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnlockLists.
     * @param {UnlockListDeleteManyArgs} args - Arguments to filter UnlockLists to delete.
     * @example
     * // Delete a few UnlockLists
     * const { count } = await prisma.unlockList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnlockListDeleteManyArgs>(args?: SelectSubset<T, UnlockListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnlockLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnlockLists
     * const unlockList = await prisma.unlockList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnlockListUpdateManyArgs>(args: SelectSubset<T, UnlockListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnlockLists and returns the data updated in the database.
     * @param {UnlockListUpdateManyAndReturnArgs} args - Arguments to update many UnlockLists.
     * @example
     * // Update many UnlockLists
     * const unlockList = await prisma.unlockList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnlockLists and only return the `ULKNo`
     * const unlockListWithULKNoOnly = await prisma.unlockList.updateManyAndReturn({
     *   select: { ULKNo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnlockListUpdateManyAndReturnArgs>(args: SelectSubset<T, UnlockListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnlockList.
     * @param {UnlockListUpsertArgs} args - Arguments to update or create a UnlockList.
     * @example
     * // Update or create a UnlockList
     * const unlockList = await prisma.unlockList.upsert({
     *   create: {
     *     // ... data to create a UnlockList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnlockList we want to update
     *   }
     * })
     */
    upsert<T extends UnlockListUpsertArgs>(args: SelectSubset<T, UnlockListUpsertArgs<ExtArgs>>): Prisma__UnlockListClient<$Result.GetResult<Prisma.$UnlockListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnlockLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockListCountArgs} args - Arguments to filter UnlockLists to count.
     * @example
     * // Count the number of UnlockLists
     * const count = await prisma.unlockList.count({
     *   where: {
     *     // ... the filter for the UnlockLists we want to count
     *   }
     * })
    **/
    count<T extends UnlockListCountArgs>(
      args?: Subset<T, UnlockListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnlockListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnlockList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnlockListAggregateArgs>(args: Subset<T, UnlockListAggregateArgs>): Prisma.PrismaPromise<GetUnlockListAggregateType<T>>

    /**
     * Group by UnlockList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnlockListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnlockListGroupByArgs['orderBy'] }
        : { orderBy?: UnlockListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnlockListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnlockListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnlockList model
   */
  readonly fields: UnlockListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnlockList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnlockListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnlockList model
   */
  interface UnlockListFieldRefs {
    readonly ULKNo: FieldRef<"UnlockList", 'Int'>
    readonly ENo: FieldRef<"UnlockList", 'Int'>
    readonly LKDate: FieldRef<"UnlockList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnlockList findUnique
   */
  export type UnlockListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListInclude<ExtArgs> | null
    /**
     * Filter, which UnlockList to fetch.
     */
    where: UnlockListWhereUniqueInput
  }

  /**
   * UnlockList findUniqueOrThrow
   */
  export type UnlockListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListInclude<ExtArgs> | null
    /**
     * Filter, which UnlockList to fetch.
     */
    where: UnlockListWhereUniqueInput
  }

  /**
   * UnlockList findFirst
   */
  export type UnlockListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListInclude<ExtArgs> | null
    /**
     * Filter, which UnlockList to fetch.
     */
    where?: UnlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockLists to fetch.
     */
    orderBy?: UnlockListOrderByWithRelationInput | UnlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnlockLists.
     */
    cursor?: UnlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnlockLists.
     */
    distinct?: UnlockListScalarFieldEnum | UnlockListScalarFieldEnum[]
  }

  /**
   * UnlockList findFirstOrThrow
   */
  export type UnlockListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListInclude<ExtArgs> | null
    /**
     * Filter, which UnlockList to fetch.
     */
    where?: UnlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockLists to fetch.
     */
    orderBy?: UnlockListOrderByWithRelationInput | UnlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnlockLists.
     */
    cursor?: UnlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnlockLists.
     */
    distinct?: UnlockListScalarFieldEnum | UnlockListScalarFieldEnum[]
  }

  /**
   * UnlockList findMany
   */
  export type UnlockListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListInclude<ExtArgs> | null
    /**
     * Filter, which UnlockLists to fetch.
     */
    where?: UnlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockLists to fetch.
     */
    orderBy?: UnlockListOrderByWithRelationInput | UnlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnlockLists.
     */
    cursor?: UnlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockLists.
     */
    skip?: number
    distinct?: UnlockListScalarFieldEnum | UnlockListScalarFieldEnum[]
  }

  /**
   * UnlockList create
   */
  export type UnlockListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListInclude<ExtArgs> | null
    /**
     * The data needed to create a UnlockList.
     */
    data: XOR<UnlockListCreateInput, UnlockListUncheckedCreateInput>
  }

  /**
   * UnlockList createMany
   */
  export type UnlockListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnlockLists.
     */
    data: UnlockListCreateManyInput | UnlockListCreateManyInput[]
  }

  /**
   * UnlockList createManyAndReturn
   */
  export type UnlockListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * The data used to create many UnlockLists.
     */
    data: UnlockListCreateManyInput | UnlockListCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnlockList update
   */
  export type UnlockListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListInclude<ExtArgs> | null
    /**
     * The data needed to update a UnlockList.
     */
    data: XOR<UnlockListUpdateInput, UnlockListUncheckedUpdateInput>
    /**
     * Choose, which UnlockList to update.
     */
    where: UnlockListWhereUniqueInput
  }

  /**
   * UnlockList updateMany
   */
  export type UnlockListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnlockLists.
     */
    data: XOR<UnlockListUpdateManyMutationInput, UnlockListUncheckedUpdateManyInput>
    /**
     * Filter which UnlockLists to update
     */
    where?: UnlockListWhereInput
    /**
     * Limit how many UnlockLists to update.
     */
    limit?: number
  }

  /**
   * UnlockList updateManyAndReturn
   */
  export type UnlockListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * The data used to update UnlockLists.
     */
    data: XOR<UnlockListUpdateManyMutationInput, UnlockListUncheckedUpdateManyInput>
    /**
     * Filter which UnlockLists to update
     */
    where?: UnlockListWhereInput
    /**
     * Limit how many UnlockLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnlockList upsert
   */
  export type UnlockListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListInclude<ExtArgs> | null
    /**
     * The filter to search for the UnlockList to update in case it exists.
     */
    where: UnlockListWhereUniqueInput
    /**
     * In case the UnlockList found by the `where` argument doesn't exist, create a new UnlockList with this data.
     */
    create: XOR<UnlockListCreateInput, UnlockListUncheckedCreateInput>
    /**
     * In case the UnlockList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnlockListUpdateInput, UnlockListUncheckedUpdateInput>
  }

  /**
   * UnlockList delete
   */
  export type UnlockListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListInclude<ExtArgs> | null
    /**
     * Filter which UnlockList to delete.
     */
    where: UnlockListWhereUniqueInput
  }

  /**
   * UnlockList deleteMany
   */
  export type UnlockListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnlockLists to delete
     */
    where?: UnlockListWhereInput
    /**
     * Limit how many UnlockLists to delete.
     */
    limit?: number
  }

  /**
   * UnlockList without action
   */
  export type UnlockListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockList
     */
    select?: UnlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockList
     */
    omit?: UnlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockListInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DepartmentScalarFieldEnum: {
    DNumber: 'DNumber',
    DName: 'DName'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    PNumber: 'PNumber',
    PName: 'PName',
    AccessNo: 'AccessNo'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const RoomStatusScalarFieldEnum: {
    SNumber: 'SNumber',
    SName: 'SName'
  };

  export type RoomStatusScalarFieldEnum = (typeof RoomStatusScalarFieldEnum)[keyof typeof RoomStatusScalarFieldEnum]


  export const EmployeeStatusScalarFieldEnum: {
    SNumber: 'SNumber',
    SName: 'SName'
  };

  export type EmployeeStatusScalarFieldEnum = (typeof EmployeeStatusScalarFieldEnum)[keyof typeof EmployeeStatusScalarFieldEnum]


  export const BookingStatusScalarFieldEnum: {
    SNumber: 'SNumber',
    SName: 'SName'
  };

  export type BookingStatusScalarFieldEnum = (typeof BookingStatusScalarFieldEnum)[keyof typeof BookingStatusScalarFieldEnum]


  export const BuildingScalarFieldEnum: {
    BNumber: 'BNumber',
    BName: 'BName'
  };

  export type BuildingScalarFieldEnum = (typeof BuildingScalarFieldEnum)[keyof typeof BuildingScalarFieldEnum]


  export const FloorScalarFieldEnum: {
    FlNumber: 'FlNumber',
    FlName: 'FlName',
    BNo: 'BNo'
  };

  export type FloorScalarFieldEnum = (typeof FloorScalarFieldEnum)[keyof typeof FloorScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    RNumber: 'RNumber',
    RName: 'RName',
    Capacity: 'Capacity',
    VIP: 'VIP',
    FlNo: 'FlNo',
    SNo: 'SNo'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
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

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    BKNumber: 'BKNumber',
    BKDate: 'BKDate',
    ENo: 'ENo'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BookingListScalarFieldEnum: {
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

  export type BookingListScalarFieldEnum = (typeof BookingListScalarFieldEnum)[keyof typeof BookingListScalarFieldEnum]


  export const AccessListScalarFieldEnum: {
    ACNumber: 'ACNumber',
    BKLNo: 'BKLNo',
    BKNo: 'BKNo',
    AccessTime: 'AccessTime'
  };

  export type AccessListScalarFieldEnum = (typeof AccessListScalarFieldEnum)[keyof typeof AccessListScalarFieldEnum]


  export const DenyBookingScalarFieldEnum: {
    DNNumber: 'DNNumber',
    BKLNo: 'BKLNo',
    BKNo: 'BKNo',
    details: 'details'
  };

  export type DenyBookingScalarFieldEnum = (typeof DenyBookingScalarFieldEnum)[keyof typeof DenyBookingScalarFieldEnum]


  export const CancelBookingScalarFieldEnum: {
    CCNumber: 'CCNumber',
    BKLNo: 'BKLNo',
    BKNo: 'BKNo',
    details: 'details'
  };

  export type CancelBookingScalarFieldEnum = (typeof CancelBookingScalarFieldEnum)[keyof typeof CancelBookingScalarFieldEnum]


  export const LockListScalarFieldEnum: {
    LKNo: 'LKNo',
    ENo: 'ENo',
    LKDate: 'LKDate'
  };

  export type LockListScalarFieldEnum = (typeof LockListScalarFieldEnum)[keyof typeof LockListScalarFieldEnum]


  export const UnlockListScalarFieldEnum: {
    ULKNo: 'ULKNo',
    ENo: 'ENo',
    LKDate: 'LKDate'
  };

  export type UnlockListScalarFieldEnum = (typeof UnlockListScalarFieldEnum)[keyof typeof UnlockListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    DNumber?: IntFilter<"Department"> | number
    DName?: StringFilter<"Department"> | string
    employees?: EmployeeListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    DNumber?: SortOrder
    DName?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    DNumber?: number
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    DName?: StringFilter<"Department"> | string
    employees?: EmployeeListRelationFilter
  }, "DNumber">

  export type DepartmentOrderByWithAggregationInput = {
    DNumber?: SortOrder
    DName?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    DNumber?: IntWithAggregatesFilter<"Department"> | number
    DName?: StringWithAggregatesFilter<"Department"> | string
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    PNumber?: IntFilter<"Position"> | number
    PName?: StringFilter<"Position"> | string
    AccessNo?: StringFilter<"Position"> | string
    employees?: EmployeeListRelationFilter
  }

  export type PositionOrderByWithRelationInput = {
    PNumber?: SortOrder
    PName?: SortOrder
    AccessNo?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    PNumber?: number
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    PName?: StringFilter<"Position"> | string
    AccessNo?: StringFilter<"Position"> | string
    employees?: EmployeeListRelationFilter
  }, "PNumber">

  export type PositionOrderByWithAggregationInput = {
    PNumber?: SortOrder
    PName?: SortOrder
    AccessNo?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _avg?: PositionAvgOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
    _sum?: PositionSumOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    PNumber?: IntWithAggregatesFilter<"Position"> | number
    PName?: StringWithAggregatesFilter<"Position"> | string
    AccessNo?: StringWithAggregatesFilter<"Position"> | string
  }

  export type RoomStatusWhereInput = {
    AND?: RoomStatusWhereInput | RoomStatusWhereInput[]
    OR?: RoomStatusWhereInput[]
    NOT?: RoomStatusWhereInput | RoomStatusWhereInput[]
    SNumber?: IntFilter<"RoomStatus"> | number
    SName?: StringFilter<"RoomStatus"> | string
    rooms?: RoomListRelationFilter
  }

  export type RoomStatusOrderByWithRelationInput = {
    SNumber?: SortOrder
    SName?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type RoomStatusWhereUniqueInput = Prisma.AtLeast<{
    SNumber?: number
    AND?: RoomStatusWhereInput | RoomStatusWhereInput[]
    OR?: RoomStatusWhereInput[]
    NOT?: RoomStatusWhereInput | RoomStatusWhereInput[]
    SName?: StringFilter<"RoomStatus"> | string
    rooms?: RoomListRelationFilter
  }, "SNumber">

  export type RoomStatusOrderByWithAggregationInput = {
    SNumber?: SortOrder
    SName?: SortOrder
    _count?: RoomStatusCountOrderByAggregateInput
    _avg?: RoomStatusAvgOrderByAggregateInput
    _max?: RoomStatusMaxOrderByAggregateInput
    _min?: RoomStatusMinOrderByAggregateInput
    _sum?: RoomStatusSumOrderByAggregateInput
  }

  export type RoomStatusScalarWhereWithAggregatesInput = {
    AND?: RoomStatusScalarWhereWithAggregatesInput | RoomStatusScalarWhereWithAggregatesInput[]
    OR?: RoomStatusScalarWhereWithAggregatesInput[]
    NOT?: RoomStatusScalarWhereWithAggregatesInput | RoomStatusScalarWhereWithAggregatesInput[]
    SNumber?: IntWithAggregatesFilter<"RoomStatus"> | number
    SName?: StringWithAggregatesFilter<"RoomStatus"> | string
  }

  export type EmployeeStatusWhereInput = {
    AND?: EmployeeStatusWhereInput | EmployeeStatusWhereInput[]
    OR?: EmployeeStatusWhereInput[]
    NOT?: EmployeeStatusWhereInput | EmployeeStatusWhereInput[]
    SNumber?: IntFilter<"EmployeeStatus"> | number
    SName?: StringFilter<"EmployeeStatus"> | string
    employees?: EmployeeListRelationFilter
  }

  export type EmployeeStatusOrderByWithRelationInput = {
    SNumber?: SortOrder
    SName?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type EmployeeStatusWhereUniqueInput = Prisma.AtLeast<{
    SNumber?: number
    AND?: EmployeeStatusWhereInput | EmployeeStatusWhereInput[]
    OR?: EmployeeStatusWhereInput[]
    NOT?: EmployeeStatusWhereInput | EmployeeStatusWhereInput[]
    SName?: StringFilter<"EmployeeStatus"> | string
    employees?: EmployeeListRelationFilter
  }, "SNumber">

  export type EmployeeStatusOrderByWithAggregationInput = {
    SNumber?: SortOrder
    SName?: SortOrder
    _count?: EmployeeStatusCountOrderByAggregateInput
    _avg?: EmployeeStatusAvgOrderByAggregateInput
    _max?: EmployeeStatusMaxOrderByAggregateInput
    _min?: EmployeeStatusMinOrderByAggregateInput
    _sum?: EmployeeStatusSumOrderByAggregateInput
  }

  export type EmployeeStatusScalarWhereWithAggregatesInput = {
    AND?: EmployeeStatusScalarWhereWithAggregatesInput | EmployeeStatusScalarWhereWithAggregatesInput[]
    OR?: EmployeeStatusScalarWhereWithAggregatesInput[]
    NOT?: EmployeeStatusScalarWhereWithAggregatesInput | EmployeeStatusScalarWhereWithAggregatesInput[]
    SNumber?: IntWithAggregatesFilter<"EmployeeStatus"> | number
    SName?: StringWithAggregatesFilter<"EmployeeStatus"> | string
  }

  export type BookingStatusWhereInput = {
    AND?: BookingStatusWhereInput | BookingStatusWhereInput[]
    OR?: BookingStatusWhereInput[]
    NOT?: BookingStatusWhereInput | BookingStatusWhereInput[]
    SNumber?: IntFilter<"BookingStatus"> | number
    SName?: StringFilter<"BookingStatus"> | string
    bookingLists?: BookingListListRelationFilter
  }

  export type BookingStatusOrderByWithRelationInput = {
    SNumber?: SortOrder
    SName?: SortOrder
    bookingLists?: BookingListOrderByRelationAggregateInput
  }

  export type BookingStatusWhereUniqueInput = Prisma.AtLeast<{
    SNumber?: number
    AND?: BookingStatusWhereInput | BookingStatusWhereInput[]
    OR?: BookingStatusWhereInput[]
    NOT?: BookingStatusWhereInput | BookingStatusWhereInput[]
    SName?: StringFilter<"BookingStatus"> | string
    bookingLists?: BookingListListRelationFilter
  }, "SNumber">

  export type BookingStatusOrderByWithAggregationInput = {
    SNumber?: SortOrder
    SName?: SortOrder
    _count?: BookingStatusCountOrderByAggregateInput
    _avg?: BookingStatusAvgOrderByAggregateInput
    _max?: BookingStatusMaxOrderByAggregateInput
    _min?: BookingStatusMinOrderByAggregateInput
    _sum?: BookingStatusSumOrderByAggregateInput
  }

  export type BookingStatusScalarWhereWithAggregatesInput = {
    AND?: BookingStatusScalarWhereWithAggregatesInput | BookingStatusScalarWhereWithAggregatesInput[]
    OR?: BookingStatusScalarWhereWithAggregatesInput[]
    NOT?: BookingStatusScalarWhereWithAggregatesInput | BookingStatusScalarWhereWithAggregatesInput[]
    SNumber?: IntWithAggregatesFilter<"BookingStatus"> | number
    SName?: StringWithAggregatesFilter<"BookingStatus"> | string
  }

  export type BuildingWhereInput = {
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    BNumber?: IntFilter<"Building"> | number
    BName?: StringFilter<"Building"> | string
    floors?: FloorListRelationFilter
  }

  export type BuildingOrderByWithRelationInput = {
    BNumber?: SortOrder
    BName?: SortOrder
    floors?: FloorOrderByRelationAggregateInput
  }

  export type BuildingWhereUniqueInput = Prisma.AtLeast<{
    BNumber?: number
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    BName?: StringFilter<"Building"> | string
    floors?: FloorListRelationFilter
  }, "BNumber">

  export type BuildingOrderByWithAggregationInput = {
    BNumber?: SortOrder
    BName?: SortOrder
    _count?: BuildingCountOrderByAggregateInput
    _avg?: BuildingAvgOrderByAggregateInput
    _max?: BuildingMaxOrderByAggregateInput
    _min?: BuildingMinOrderByAggregateInput
    _sum?: BuildingSumOrderByAggregateInput
  }

  export type BuildingScalarWhereWithAggregatesInput = {
    AND?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    OR?: BuildingScalarWhereWithAggregatesInput[]
    NOT?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    BNumber?: IntWithAggregatesFilter<"Building"> | number
    BName?: StringWithAggregatesFilter<"Building"> | string
  }

  export type FloorWhereInput = {
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    FlNumber?: IntFilter<"Floor"> | number
    FlName?: StringFilter<"Floor"> | string
    BNo?: IntFilter<"Floor"> | number
    building?: XOR<BuildingScalarRelationFilter, BuildingWhereInput>
    rooms?: RoomListRelationFilter
  }

  export type FloorOrderByWithRelationInput = {
    FlNumber?: SortOrder
    FlName?: SortOrder
    BNo?: SortOrder
    building?: BuildingOrderByWithRelationInput
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type FloorWhereUniqueInput = Prisma.AtLeast<{
    FlNumber?: number
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    FlName?: StringFilter<"Floor"> | string
    BNo?: IntFilter<"Floor"> | number
    building?: XOR<BuildingScalarRelationFilter, BuildingWhereInput>
    rooms?: RoomListRelationFilter
  }, "FlNumber">

  export type FloorOrderByWithAggregationInput = {
    FlNumber?: SortOrder
    FlName?: SortOrder
    BNo?: SortOrder
    _count?: FloorCountOrderByAggregateInput
    _avg?: FloorAvgOrderByAggregateInput
    _max?: FloorMaxOrderByAggregateInput
    _min?: FloorMinOrderByAggregateInput
    _sum?: FloorSumOrderByAggregateInput
  }

  export type FloorScalarWhereWithAggregatesInput = {
    AND?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    OR?: FloorScalarWhereWithAggregatesInput[]
    NOT?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    FlNumber?: IntWithAggregatesFilter<"Floor"> | number
    FlName?: StringWithAggregatesFilter<"Floor"> | string
    BNo?: IntWithAggregatesFilter<"Floor"> | number
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    RNumber?: IntFilter<"Room"> | number
    RName?: StringFilter<"Room"> | string
    Capacity?: IntFilter<"Room"> | number
    VIP?: IntFilter<"Room"> | number
    FlNo?: IntFilter<"Room"> | number
    SNo?: IntFilter<"Room"> | number
    roomStatus?: XOR<RoomStatusScalarRelationFilter, RoomStatusWhereInput>
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    bookingLists?: BookingListListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    RNumber?: SortOrder
    RName?: SortOrder
    Capacity?: SortOrder
    VIP?: SortOrder
    FlNo?: SortOrder
    SNo?: SortOrder
    roomStatus?: RoomStatusOrderByWithRelationInput
    floor?: FloorOrderByWithRelationInput
    bookingLists?: BookingListOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    RNumber?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    RName?: StringFilter<"Room"> | string
    Capacity?: IntFilter<"Room"> | number
    VIP?: IntFilter<"Room"> | number
    FlNo?: IntFilter<"Room"> | number
    SNo?: IntFilter<"Room"> | number
    roomStatus?: XOR<RoomStatusScalarRelationFilter, RoomStatusWhereInput>
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    bookingLists?: BookingListListRelationFilter
  }, "RNumber">

  export type RoomOrderByWithAggregationInput = {
    RNumber?: SortOrder
    RName?: SortOrder
    Capacity?: SortOrder
    VIP?: SortOrder
    FlNo?: SortOrder
    SNo?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    RNumber?: IntWithAggregatesFilter<"Room"> | number
    RName?: StringWithAggregatesFilter<"Room"> | string
    Capacity?: IntWithAggregatesFilter<"Room"> | number
    VIP?: IntWithAggregatesFilter<"Room"> | number
    FlNo?: IntWithAggregatesFilter<"Room"> | number
    SNo?: IntWithAggregatesFilter<"Room"> | number
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    ENumber?: IntFilter<"Employee"> | number
    FName?: StringFilter<"Employee"> | string
    LName?: StringFilter<"Employee"> | string
    score?: IntFilter<"Employee"> | number
    Email?: StringFilter<"Employee"> | string
    username?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    DNo?: IntFilter<"Employee"> | number
    PNo?: IntFilter<"Employee"> | number
    SNo?: IntFilter<"Employee"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    status?: XOR<EmployeeStatusScalarRelationFilter, EmployeeStatusWhereInput>
    bookings?: BookingListRelationFilter
    lockLists?: LockListListRelationFilter
    unlockLists?: UnlockListListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    ENumber?: SortOrder
    FName?: SortOrder
    LName?: SortOrder
    score?: SortOrder
    Email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    DNo?: SortOrder
    PNo?: SortOrder
    SNo?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    position?: PositionOrderByWithRelationInput
    status?: EmployeeStatusOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    lockLists?: LockListOrderByRelationAggregateInput
    unlockLists?: UnlockListOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    ENumber?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    FName?: StringFilter<"Employee"> | string
    LName?: StringFilter<"Employee"> | string
    score?: IntFilter<"Employee"> | number
    Email?: StringFilter<"Employee"> | string
    username?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    DNo?: IntFilter<"Employee"> | number
    PNo?: IntFilter<"Employee"> | number
    SNo?: IntFilter<"Employee"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    status?: XOR<EmployeeStatusScalarRelationFilter, EmployeeStatusWhereInput>
    bookings?: BookingListRelationFilter
    lockLists?: LockListListRelationFilter
    unlockLists?: UnlockListListRelationFilter
  }, "ENumber">

  export type EmployeeOrderByWithAggregationInput = {
    ENumber?: SortOrder
    FName?: SortOrder
    LName?: SortOrder
    score?: SortOrder
    Email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    DNo?: SortOrder
    PNo?: SortOrder
    SNo?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    ENumber?: IntWithAggregatesFilter<"Employee"> | number
    FName?: StringWithAggregatesFilter<"Employee"> | string
    LName?: StringWithAggregatesFilter<"Employee"> | string
    score?: IntWithAggregatesFilter<"Employee"> | number
    Email?: StringWithAggregatesFilter<"Employee"> | string
    username?: StringWithAggregatesFilter<"Employee"> | string
    password?: StringWithAggregatesFilter<"Employee"> | string
    DNo?: IntWithAggregatesFilter<"Employee"> | number
    PNo?: IntWithAggregatesFilter<"Employee"> | number
    SNo?: IntWithAggregatesFilter<"Employee"> | number
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    BKNumber?: IntFilter<"Booking"> | number
    BKDate?: DateTimeFilter<"Booking"> | Date | string
    ENo?: IntFilter<"Booking"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    bookingLists?: BookingListListRelationFilter
    accessLists?: AccessListListRelationFilter
    denyBookings?: DenyBookingListRelationFilter
    cancelBookings?: CancelBookingListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    BKNumber?: SortOrder
    BKDate?: SortOrder
    ENo?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    bookingLists?: BookingListOrderByRelationAggregateInput
    accessLists?: AccessListOrderByRelationAggregateInput
    denyBookings?: DenyBookingOrderByRelationAggregateInput
    cancelBookings?: CancelBookingOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    BKNumber?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    BKDate?: DateTimeFilter<"Booking"> | Date | string
    ENo?: IntFilter<"Booking"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    bookingLists?: BookingListListRelationFilter
    accessLists?: AccessListListRelationFilter
    denyBookings?: DenyBookingListRelationFilter
    cancelBookings?: CancelBookingListRelationFilter
  }, "BKNumber">

  export type BookingOrderByWithAggregationInput = {
    BKNumber?: SortOrder
    BKDate?: SortOrder
    ENo?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    BKNumber?: IntWithAggregatesFilter<"Booking"> | number
    BKDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    ENo?: IntWithAggregatesFilter<"Booking"> | number
  }

  export type BookingListWhereInput = {
    AND?: BookingListWhereInput | BookingListWhereInput[]
    OR?: BookingListWhereInput[]
    NOT?: BookingListWhereInput | BookingListWhereInput[]
    BKLNumber?: IntFilter<"BookingList"> | number
    BKLNo?: IntFilter<"BookingList"> | number
    RNo?: IntFilter<"BookingList"> | number
    Start_Date?: DateTimeFilter<"BookingList"> | Date | string
    Start_Time?: StringFilter<"BookingList"> | string
    End_Time?: StringFilter<"BookingList"> | string
    details?: StringFilter<"BookingList"> | string
    QR?: StringFilter<"BookingList"> | string
    SNo?: IntFilter<"BookingList"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    status?: XOR<BookingStatusScalarRelationFilter, BookingStatusWhereInput>
    accessLists?: AccessListListRelationFilter
    denyBookings?: DenyBookingListRelationFilter
    cancelBookings?: CancelBookingListRelationFilter
  }

  export type BookingListOrderByWithRelationInput = {
    BKLNumber?: SortOrder
    BKLNo?: SortOrder
    RNo?: SortOrder
    Start_Date?: SortOrder
    Start_Time?: SortOrder
    End_Time?: SortOrder
    details?: SortOrder
    QR?: SortOrder
    SNo?: SortOrder
    booking?: BookingOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    status?: BookingStatusOrderByWithRelationInput
    accessLists?: AccessListOrderByRelationAggregateInput
    denyBookings?: DenyBookingOrderByRelationAggregateInput
    cancelBookings?: CancelBookingOrderByRelationAggregateInput
  }

  export type BookingListWhereUniqueInput = Prisma.AtLeast<{
    BKLNumber?: number
    AND?: BookingListWhereInput | BookingListWhereInput[]
    OR?: BookingListWhereInput[]
    NOT?: BookingListWhereInput | BookingListWhereInput[]
    BKLNo?: IntFilter<"BookingList"> | number
    RNo?: IntFilter<"BookingList"> | number
    Start_Date?: DateTimeFilter<"BookingList"> | Date | string
    Start_Time?: StringFilter<"BookingList"> | string
    End_Time?: StringFilter<"BookingList"> | string
    details?: StringFilter<"BookingList"> | string
    QR?: StringFilter<"BookingList"> | string
    SNo?: IntFilter<"BookingList"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    status?: XOR<BookingStatusScalarRelationFilter, BookingStatusWhereInput>
    accessLists?: AccessListListRelationFilter
    denyBookings?: DenyBookingListRelationFilter
    cancelBookings?: CancelBookingListRelationFilter
  }, "BKLNumber">

  export type BookingListOrderByWithAggregationInput = {
    BKLNumber?: SortOrder
    BKLNo?: SortOrder
    RNo?: SortOrder
    Start_Date?: SortOrder
    Start_Time?: SortOrder
    End_Time?: SortOrder
    details?: SortOrder
    QR?: SortOrder
    SNo?: SortOrder
    _count?: BookingListCountOrderByAggregateInput
    _avg?: BookingListAvgOrderByAggregateInput
    _max?: BookingListMaxOrderByAggregateInput
    _min?: BookingListMinOrderByAggregateInput
    _sum?: BookingListSumOrderByAggregateInput
  }

  export type BookingListScalarWhereWithAggregatesInput = {
    AND?: BookingListScalarWhereWithAggregatesInput | BookingListScalarWhereWithAggregatesInput[]
    OR?: BookingListScalarWhereWithAggregatesInput[]
    NOT?: BookingListScalarWhereWithAggregatesInput | BookingListScalarWhereWithAggregatesInput[]
    BKLNumber?: IntWithAggregatesFilter<"BookingList"> | number
    BKLNo?: IntWithAggregatesFilter<"BookingList"> | number
    RNo?: IntWithAggregatesFilter<"BookingList"> | number
    Start_Date?: DateTimeWithAggregatesFilter<"BookingList"> | Date | string
    Start_Time?: StringWithAggregatesFilter<"BookingList"> | string
    End_Time?: StringWithAggregatesFilter<"BookingList"> | string
    details?: StringWithAggregatesFilter<"BookingList"> | string
    QR?: StringWithAggregatesFilter<"BookingList"> | string
    SNo?: IntWithAggregatesFilter<"BookingList"> | number
  }

  export type AccessListWhereInput = {
    AND?: AccessListWhereInput | AccessListWhereInput[]
    OR?: AccessListWhereInput[]
    NOT?: AccessListWhereInput | AccessListWhereInput[]
    ACNumber?: IntFilter<"AccessList"> | number
    BKLNo?: IntFilter<"AccessList"> | number
    BKNo?: IntFilter<"AccessList"> | number
    AccessTime?: StringFilter<"AccessList"> | string
    bookingList?: XOR<BookingListScalarRelationFilter, BookingListWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type AccessListOrderByWithRelationInput = {
    ACNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    AccessTime?: SortOrder
    bookingList?: BookingListOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type AccessListWhereUniqueInput = Prisma.AtLeast<{
    ACNumber?: number
    AND?: AccessListWhereInput | AccessListWhereInput[]
    OR?: AccessListWhereInput[]
    NOT?: AccessListWhereInput | AccessListWhereInput[]
    BKLNo?: IntFilter<"AccessList"> | number
    BKNo?: IntFilter<"AccessList"> | number
    AccessTime?: StringFilter<"AccessList"> | string
    bookingList?: XOR<BookingListScalarRelationFilter, BookingListWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "ACNumber">

  export type AccessListOrderByWithAggregationInput = {
    ACNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    AccessTime?: SortOrder
    _count?: AccessListCountOrderByAggregateInput
    _avg?: AccessListAvgOrderByAggregateInput
    _max?: AccessListMaxOrderByAggregateInput
    _min?: AccessListMinOrderByAggregateInput
    _sum?: AccessListSumOrderByAggregateInput
  }

  export type AccessListScalarWhereWithAggregatesInput = {
    AND?: AccessListScalarWhereWithAggregatesInput | AccessListScalarWhereWithAggregatesInput[]
    OR?: AccessListScalarWhereWithAggregatesInput[]
    NOT?: AccessListScalarWhereWithAggregatesInput | AccessListScalarWhereWithAggregatesInput[]
    ACNumber?: IntWithAggregatesFilter<"AccessList"> | number
    BKLNo?: IntWithAggregatesFilter<"AccessList"> | number
    BKNo?: IntWithAggregatesFilter<"AccessList"> | number
    AccessTime?: StringWithAggregatesFilter<"AccessList"> | string
  }

  export type DenyBookingWhereInput = {
    AND?: DenyBookingWhereInput | DenyBookingWhereInput[]
    OR?: DenyBookingWhereInput[]
    NOT?: DenyBookingWhereInput | DenyBookingWhereInput[]
    DNNumber?: IntFilter<"DenyBooking"> | number
    BKLNo?: IntFilter<"DenyBooking"> | number
    BKNo?: IntFilter<"DenyBooking"> | number
    details?: StringFilter<"DenyBooking"> | string
    bookingList?: XOR<BookingListScalarRelationFilter, BookingListWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type DenyBookingOrderByWithRelationInput = {
    DNNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    details?: SortOrder
    bookingList?: BookingListOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type DenyBookingWhereUniqueInput = Prisma.AtLeast<{
    DNNumber?: number
    AND?: DenyBookingWhereInput | DenyBookingWhereInput[]
    OR?: DenyBookingWhereInput[]
    NOT?: DenyBookingWhereInput | DenyBookingWhereInput[]
    BKLNo?: IntFilter<"DenyBooking"> | number
    BKNo?: IntFilter<"DenyBooking"> | number
    details?: StringFilter<"DenyBooking"> | string
    bookingList?: XOR<BookingListScalarRelationFilter, BookingListWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "DNNumber">

  export type DenyBookingOrderByWithAggregationInput = {
    DNNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    details?: SortOrder
    _count?: DenyBookingCountOrderByAggregateInput
    _avg?: DenyBookingAvgOrderByAggregateInput
    _max?: DenyBookingMaxOrderByAggregateInput
    _min?: DenyBookingMinOrderByAggregateInput
    _sum?: DenyBookingSumOrderByAggregateInput
  }

  export type DenyBookingScalarWhereWithAggregatesInput = {
    AND?: DenyBookingScalarWhereWithAggregatesInput | DenyBookingScalarWhereWithAggregatesInput[]
    OR?: DenyBookingScalarWhereWithAggregatesInput[]
    NOT?: DenyBookingScalarWhereWithAggregatesInput | DenyBookingScalarWhereWithAggregatesInput[]
    DNNumber?: IntWithAggregatesFilter<"DenyBooking"> | number
    BKLNo?: IntWithAggregatesFilter<"DenyBooking"> | number
    BKNo?: IntWithAggregatesFilter<"DenyBooking"> | number
    details?: StringWithAggregatesFilter<"DenyBooking"> | string
  }

  export type CancelBookingWhereInput = {
    AND?: CancelBookingWhereInput | CancelBookingWhereInput[]
    OR?: CancelBookingWhereInput[]
    NOT?: CancelBookingWhereInput | CancelBookingWhereInput[]
    CCNumber?: IntFilter<"CancelBooking"> | number
    BKLNo?: IntFilter<"CancelBooking"> | number
    BKNo?: IntFilter<"CancelBooking"> | number
    details?: StringFilter<"CancelBooking"> | string
    bookingList?: XOR<BookingListScalarRelationFilter, BookingListWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type CancelBookingOrderByWithRelationInput = {
    CCNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    details?: SortOrder
    bookingList?: BookingListOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type CancelBookingWhereUniqueInput = Prisma.AtLeast<{
    CCNumber?: number
    AND?: CancelBookingWhereInput | CancelBookingWhereInput[]
    OR?: CancelBookingWhereInput[]
    NOT?: CancelBookingWhereInput | CancelBookingWhereInput[]
    BKLNo?: IntFilter<"CancelBooking"> | number
    BKNo?: IntFilter<"CancelBooking"> | number
    details?: StringFilter<"CancelBooking"> | string
    bookingList?: XOR<BookingListScalarRelationFilter, BookingListWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "CCNumber">

  export type CancelBookingOrderByWithAggregationInput = {
    CCNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    details?: SortOrder
    _count?: CancelBookingCountOrderByAggregateInput
    _avg?: CancelBookingAvgOrderByAggregateInput
    _max?: CancelBookingMaxOrderByAggregateInput
    _min?: CancelBookingMinOrderByAggregateInput
    _sum?: CancelBookingSumOrderByAggregateInput
  }

  export type CancelBookingScalarWhereWithAggregatesInput = {
    AND?: CancelBookingScalarWhereWithAggregatesInput | CancelBookingScalarWhereWithAggregatesInput[]
    OR?: CancelBookingScalarWhereWithAggregatesInput[]
    NOT?: CancelBookingScalarWhereWithAggregatesInput | CancelBookingScalarWhereWithAggregatesInput[]
    CCNumber?: IntWithAggregatesFilter<"CancelBooking"> | number
    BKLNo?: IntWithAggregatesFilter<"CancelBooking"> | number
    BKNo?: IntWithAggregatesFilter<"CancelBooking"> | number
    details?: StringWithAggregatesFilter<"CancelBooking"> | string
  }

  export type LockListWhereInput = {
    AND?: LockListWhereInput | LockListWhereInput[]
    OR?: LockListWhereInput[]
    NOT?: LockListWhereInput | LockListWhereInput[]
    LKNo?: IntFilter<"LockList"> | number
    ENo?: IntFilter<"LockList"> | number
    LKDate?: DateTimeFilter<"LockList"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type LockListOrderByWithRelationInput = {
    LKNo?: SortOrder
    ENo?: SortOrder
    LKDate?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type LockListWhereUniqueInput = Prisma.AtLeast<{
    LKNo?: number
    AND?: LockListWhereInput | LockListWhereInput[]
    OR?: LockListWhereInput[]
    NOT?: LockListWhereInput | LockListWhereInput[]
    ENo?: IntFilter<"LockList"> | number
    LKDate?: DateTimeFilter<"LockList"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "LKNo">

  export type LockListOrderByWithAggregationInput = {
    LKNo?: SortOrder
    ENo?: SortOrder
    LKDate?: SortOrder
    _count?: LockListCountOrderByAggregateInput
    _avg?: LockListAvgOrderByAggregateInput
    _max?: LockListMaxOrderByAggregateInput
    _min?: LockListMinOrderByAggregateInput
    _sum?: LockListSumOrderByAggregateInput
  }

  export type LockListScalarWhereWithAggregatesInput = {
    AND?: LockListScalarWhereWithAggregatesInput | LockListScalarWhereWithAggregatesInput[]
    OR?: LockListScalarWhereWithAggregatesInput[]
    NOT?: LockListScalarWhereWithAggregatesInput | LockListScalarWhereWithAggregatesInput[]
    LKNo?: IntWithAggregatesFilter<"LockList"> | number
    ENo?: IntWithAggregatesFilter<"LockList"> | number
    LKDate?: DateTimeWithAggregatesFilter<"LockList"> | Date | string
  }

  export type UnlockListWhereInput = {
    AND?: UnlockListWhereInput | UnlockListWhereInput[]
    OR?: UnlockListWhereInput[]
    NOT?: UnlockListWhereInput | UnlockListWhereInput[]
    ULKNo?: IntFilter<"UnlockList"> | number
    ENo?: IntFilter<"UnlockList"> | number
    LKDate?: DateTimeFilter<"UnlockList"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type UnlockListOrderByWithRelationInput = {
    ULKNo?: SortOrder
    ENo?: SortOrder
    LKDate?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type UnlockListWhereUniqueInput = Prisma.AtLeast<{
    ULKNo?: number
    AND?: UnlockListWhereInput | UnlockListWhereInput[]
    OR?: UnlockListWhereInput[]
    NOT?: UnlockListWhereInput | UnlockListWhereInput[]
    ENo?: IntFilter<"UnlockList"> | number
    LKDate?: DateTimeFilter<"UnlockList"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "ULKNo">

  export type UnlockListOrderByWithAggregationInput = {
    ULKNo?: SortOrder
    ENo?: SortOrder
    LKDate?: SortOrder
    _count?: UnlockListCountOrderByAggregateInput
    _avg?: UnlockListAvgOrderByAggregateInput
    _max?: UnlockListMaxOrderByAggregateInput
    _min?: UnlockListMinOrderByAggregateInput
    _sum?: UnlockListSumOrderByAggregateInput
  }

  export type UnlockListScalarWhereWithAggregatesInput = {
    AND?: UnlockListScalarWhereWithAggregatesInput | UnlockListScalarWhereWithAggregatesInput[]
    OR?: UnlockListScalarWhereWithAggregatesInput[]
    NOT?: UnlockListScalarWhereWithAggregatesInput | UnlockListScalarWhereWithAggregatesInput[]
    ULKNo?: IntWithAggregatesFilter<"UnlockList"> | number
    ENo?: IntWithAggregatesFilter<"UnlockList"> | number
    LKDate?: DateTimeWithAggregatesFilter<"UnlockList"> | Date | string
  }

  export type DepartmentCreateInput = {
    DNumber: number
    DName: string
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    DNumber: number
    DName: string
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    DNumber?: IntFieldUpdateOperationsInput | number
    DName?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    DNumber?: IntFieldUpdateOperationsInput | number
    DName?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    DNumber: number
    DName: string
  }

  export type DepartmentUpdateManyMutationInput = {
    DNumber?: IntFieldUpdateOperationsInput | number
    DName?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    DNumber?: IntFieldUpdateOperationsInput | number
    DName?: StringFieldUpdateOperationsInput | string
  }

  export type PositionCreateInput = {
    PNumber: number
    PName: string
    AccessNo: string
    employees?: EmployeeCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateInput = {
    PNumber: number
    PName: string
    AccessNo: string
    employees?: EmployeeUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionUpdateInput = {
    PNumber?: IntFieldUpdateOperationsInput | number
    PName?: StringFieldUpdateOperationsInput | string
    AccessNo?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    PNumber?: IntFieldUpdateOperationsInput | number
    PName?: StringFieldUpdateOperationsInput | string
    AccessNo?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionCreateManyInput = {
    PNumber: number
    PName: string
    AccessNo: string
  }

  export type PositionUpdateManyMutationInput = {
    PNumber?: IntFieldUpdateOperationsInput | number
    PName?: StringFieldUpdateOperationsInput | string
    AccessNo?: StringFieldUpdateOperationsInput | string
  }

  export type PositionUncheckedUpdateManyInput = {
    PNumber?: IntFieldUpdateOperationsInput | number
    PName?: StringFieldUpdateOperationsInput | string
    AccessNo?: StringFieldUpdateOperationsInput | string
  }

  export type RoomStatusCreateInput = {
    SNumber: number
    SName: string
    rooms?: RoomCreateNestedManyWithoutRoomStatusInput
  }

  export type RoomStatusUncheckedCreateInput = {
    SNumber: number
    SName: string
    rooms?: RoomUncheckedCreateNestedManyWithoutRoomStatusInput
  }

  export type RoomStatusUpdateInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutRoomStatusNestedInput
  }

  export type RoomStatusUncheckedUpdateInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutRoomStatusNestedInput
  }

  export type RoomStatusCreateManyInput = {
    SNumber: number
    SName: string
  }

  export type RoomStatusUpdateManyMutationInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type RoomStatusUncheckedUpdateManyInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeStatusCreateInput = {
    SNumber: number
    SName: string
    employees?: EmployeeCreateNestedManyWithoutStatusInput
  }

  export type EmployeeStatusUncheckedCreateInput = {
    SNumber: number
    SName: string
    employees?: EmployeeUncheckedCreateNestedManyWithoutStatusInput
  }

  export type EmployeeStatusUpdateInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUpdateManyWithoutStatusNestedInput
  }

  export type EmployeeStatusUncheckedUpdateInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type EmployeeStatusCreateManyInput = {
    SNumber: number
    SName: string
  }

  export type EmployeeStatusUpdateManyMutationInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeStatusUncheckedUpdateManyInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type BookingStatusCreateInput = {
    SNumber: number
    SName: string
    bookingLists?: BookingListCreateNestedManyWithoutStatusInput
  }

  export type BookingStatusUncheckedCreateInput = {
    SNumber: number
    SName: string
    bookingLists?: BookingListUncheckedCreateNestedManyWithoutStatusInput
  }

  export type BookingStatusUpdateInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
    bookingLists?: BookingListUpdateManyWithoutStatusNestedInput
  }

  export type BookingStatusUncheckedUpdateInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
    bookingLists?: BookingListUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type BookingStatusCreateManyInput = {
    SNumber: number
    SName: string
  }

  export type BookingStatusUpdateManyMutationInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type BookingStatusUncheckedUpdateManyInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type BuildingCreateInput = {
    BNumber: number
    BName: string
    floors?: FloorCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateInput = {
    BNumber: number
    BName: string
    floors?: FloorUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUpdateInput = {
    BNumber?: IntFieldUpdateOperationsInput | number
    BName?: StringFieldUpdateOperationsInput | string
    floors?: FloorUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateInput = {
    BNumber?: IntFieldUpdateOperationsInput | number
    BName?: StringFieldUpdateOperationsInput | string
    floors?: FloorUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingCreateManyInput = {
    BNumber: number
    BName: string
  }

  export type BuildingUpdateManyMutationInput = {
    BNumber?: IntFieldUpdateOperationsInput | number
    BName?: StringFieldUpdateOperationsInput | string
  }

  export type BuildingUncheckedUpdateManyInput = {
    BNumber?: IntFieldUpdateOperationsInput | number
    BName?: StringFieldUpdateOperationsInput | string
  }

  export type FloorCreateInput = {
    FlNumber: number
    FlName: string
    building: BuildingCreateNestedOneWithoutFloorsInput
    rooms?: RoomCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateInput = {
    FlNumber: number
    FlName: string
    BNo: number
    rooms?: RoomUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorUpdateInput = {
    FlNumber?: IntFieldUpdateOperationsInput | number
    FlName?: StringFieldUpdateOperationsInput | string
    building?: BuildingUpdateOneRequiredWithoutFloorsNestedInput
    rooms?: RoomUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateInput = {
    FlNumber?: IntFieldUpdateOperationsInput | number
    FlName?: StringFieldUpdateOperationsInput | string
    BNo?: IntFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type FloorCreateManyInput = {
    FlNumber: number
    FlName: string
    BNo: number
  }

  export type FloorUpdateManyMutationInput = {
    FlNumber?: IntFieldUpdateOperationsInput | number
    FlName?: StringFieldUpdateOperationsInput | string
  }

  export type FloorUncheckedUpdateManyInput = {
    FlNumber?: IntFieldUpdateOperationsInput | number
    FlName?: StringFieldUpdateOperationsInput | string
    BNo?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateInput = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    roomStatus: RoomStatusCreateNestedOneWithoutRoomsInput
    floor: FloorCreateNestedOneWithoutRoomsInput
    bookingLists?: BookingListCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    FlNo: number
    SNo: number
    bookingLists?: BookingListUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
    roomStatus?: RoomStatusUpdateOneRequiredWithoutRoomsNestedInput
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    bookingLists?: BookingListUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
    FlNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
    bookingLists?: BookingListUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    FlNo: number
    SNo: number
  }

  export type RoomUpdateManyMutationInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
  }

  export type RoomUncheckedUpdateManyInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
    FlNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    status: EmployeeStatusCreateNestedOneWithoutEmployeesInput
    bookings?: BookingCreateNestedManyWithoutEmployeeInput
    lockLists?: LockListCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    DNo: number
    PNo: number
    SNo: number
    bookings?: BookingUncheckedCreateNestedManyWithoutEmployeeInput
    lockLists?: LockListUncheckedCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    status?: EmployeeStatusUpdateOneRequiredWithoutEmployeesNestedInput
    bookings?: BookingUpdateManyWithoutEmployeeNestedInput
    lockLists?: LockListUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DNo?: IntFieldUpdateOperationsInput | number
    PNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutEmployeeNestedInput
    lockLists?: LockListUncheckedUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    DNo: number
    PNo: number
    SNo: number
  }

  export type EmployeeUpdateManyMutationInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DNo?: IntFieldUpdateOperationsInput | number
    PNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateInput = {
    BKNumber: number
    BKDate: Date | string
    employee: EmployeeCreateNestedOneWithoutBookingsInput
    bookingLists?: BookingListCreateNestedManyWithoutBookingInput
    accessLists?: AccessListCreateNestedManyWithoutBookingInput
    denyBookings?: DenyBookingCreateNestedManyWithoutBookingInput
    cancelBookings?: CancelBookingCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    BKNumber: number
    BKDate: Date | string
    ENo: number
    bookingLists?: BookingListUncheckedCreateNestedManyWithoutBookingInput
    accessLists?: AccessListUncheckedCreateNestedManyWithoutBookingInput
    denyBookings?: DenyBookingUncheckedCreateNestedManyWithoutBookingInput
    cancelBookings?: CancelBookingUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutBookingsNestedInput
    bookingLists?: BookingListUpdateManyWithoutBookingNestedInput
    accessLists?: AccessListUpdateManyWithoutBookingNestedInput
    denyBookings?: DenyBookingUpdateManyWithoutBookingNestedInput
    cancelBookings?: CancelBookingUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ENo?: IntFieldUpdateOperationsInput | number
    bookingLists?: BookingListUncheckedUpdateManyWithoutBookingNestedInput
    accessLists?: AccessListUncheckedUpdateManyWithoutBookingNestedInput
    denyBookings?: DenyBookingUncheckedUpdateManyWithoutBookingNestedInput
    cancelBookings?: CancelBookingUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    BKNumber: number
    BKDate: Date | string
    ENo: number
  }

  export type BookingUpdateManyMutationInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ENo?: IntFieldUpdateOperationsInput | number
  }

  export type BookingListCreateInput = {
    BKLNumber: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    booking: BookingCreateNestedOneWithoutBookingListsInput
    room: RoomCreateNestedOneWithoutBookingListsInput
    status: BookingStatusCreateNestedOneWithoutBookingListsInput
    accessLists?: AccessListCreateNestedManyWithoutBookingListInput
    denyBookings?: DenyBookingCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingCreateNestedManyWithoutBookingListInput
  }

  export type BookingListUncheckedCreateInput = {
    BKLNumber: number
    BKLNo: number
    RNo: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    SNo: number
    accessLists?: AccessListUncheckedCreateNestedManyWithoutBookingListInput
    denyBookings?: DenyBookingUncheckedCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingUncheckedCreateNestedManyWithoutBookingListInput
  }

  export type BookingListUpdateInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutBookingListsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingListsNestedInput
    status?: BookingStatusUpdateOneRequiredWithoutBookingListsNestedInput
    accessLists?: AccessListUpdateManyWithoutBookingListNestedInput
    denyBookings?: DenyBookingUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUpdateManyWithoutBookingListNestedInput
  }

  export type BookingListUncheckedUpdateInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    RNo?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    SNo?: IntFieldUpdateOperationsInput | number
    accessLists?: AccessListUncheckedUpdateManyWithoutBookingListNestedInput
    denyBookings?: DenyBookingUncheckedUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUncheckedUpdateManyWithoutBookingListNestedInput
  }

  export type BookingListCreateManyInput = {
    BKLNumber: number
    BKLNo: number
    RNo: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    SNo: number
  }

  export type BookingListUpdateManyMutationInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
  }

  export type BookingListUncheckedUpdateManyInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    RNo?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    SNo?: IntFieldUpdateOperationsInput | number
  }

  export type AccessListCreateInput = {
    ACNumber: number
    AccessTime: string
    bookingList: BookingListCreateNestedOneWithoutAccessListsInput
    booking: BookingCreateNestedOneWithoutAccessListsInput
  }

  export type AccessListUncheckedCreateInput = {
    ACNumber: number
    BKLNo: number
    BKNo: number
    AccessTime: string
  }

  export type AccessListUpdateInput = {
    ACNumber?: IntFieldUpdateOperationsInput | number
    AccessTime?: StringFieldUpdateOperationsInput | string
    bookingList?: BookingListUpdateOneRequiredWithoutAccessListsNestedInput
    booking?: BookingUpdateOneRequiredWithoutAccessListsNestedInput
  }

  export type AccessListUncheckedUpdateInput = {
    ACNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    AccessTime?: StringFieldUpdateOperationsInput | string
  }

  export type AccessListCreateManyInput = {
    ACNumber: number
    BKLNo: number
    BKNo: number
    AccessTime: string
  }

  export type AccessListUpdateManyMutationInput = {
    ACNumber?: IntFieldUpdateOperationsInput | number
    AccessTime?: StringFieldUpdateOperationsInput | string
  }

  export type AccessListUncheckedUpdateManyInput = {
    ACNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    AccessTime?: StringFieldUpdateOperationsInput | string
  }

  export type DenyBookingCreateInput = {
    DNNumber: number
    details: string
    bookingList: BookingListCreateNestedOneWithoutDenyBookingsInput
    booking: BookingCreateNestedOneWithoutDenyBookingsInput
  }

  export type DenyBookingUncheckedCreateInput = {
    DNNumber: number
    BKLNo: number
    BKNo: number
    details: string
  }

  export type DenyBookingUpdateInput = {
    DNNumber?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    bookingList?: BookingListUpdateOneRequiredWithoutDenyBookingsNestedInput
    booking?: BookingUpdateOneRequiredWithoutDenyBookingsNestedInput
  }

  export type DenyBookingUncheckedUpdateInput = {
    DNNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type DenyBookingCreateManyInput = {
    DNNumber: number
    BKLNo: number
    BKNo: number
    details: string
  }

  export type DenyBookingUpdateManyMutationInput = {
    DNNumber?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type DenyBookingUncheckedUpdateManyInput = {
    DNNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type CancelBookingCreateInput = {
    CCNumber: number
    details: string
    bookingList: BookingListCreateNestedOneWithoutCancelBookingsInput
    booking: BookingCreateNestedOneWithoutCancelBookingsInput
  }

  export type CancelBookingUncheckedCreateInput = {
    CCNumber: number
    BKLNo: number
    BKNo: number
    details: string
  }

  export type CancelBookingUpdateInput = {
    CCNumber?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    bookingList?: BookingListUpdateOneRequiredWithoutCancelBookingsNestedInput
    booking?: BookingUpdateOneRequiredWithoutCancelBookingsNestedInput
  }

  export type CancelBookingUncheckedUpdateInput = {
    CCNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type CancelBookingCreateManyInput = {
    CCNumber: number
    BKLNo: number
    BKNo: number
    details: string
  }

  export type CancelBookingUpdateManyMutationInput = {
    CCNumber?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type CancelBookingUncheckedUpdateManyInput = {
    CCNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type LockListCreateInput = {
    LKNo: number
    LKDate: Date | string
    employee: EmployeeCreateNestedOneWithoutLockListsInput
  }

  export type LockListUncheckedCreateInput = {
    LKNo: number
    ENo: number
    LKDate: Date | string
  }

  export type LockListUpdateInput = {
    LKNo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutLockListsNestedInput
  }

  export type LockListUncheckedUpdateInput = {
    LKNo?: IntFieldUpdateOperationsInput | number
    ENo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LockListCreateManyInput = {
    LKNo: number
    ENo: number
    LKDate: Date | string
  }

  export type LockListUpdateManyMutationInput = {
    LKNo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LockListUncheckedUpdateManyInput = {
    LKNo?: IntFieldUpdateOperationsInput | number
    ENo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockListCreateInput = {
    ULKNo: number
    LKDate: Date | string
    employee: EmployeeCreateNestedOneWithoutUnlockListsInput
  }

  export type UnlockListUncheckedCreateInput = {
    ULKNo: number
    ENo: number
    LKDate: Date | string
  }

  export type UnlockListUpdateInput = {
    ULKNo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutUnlockListsNestedInput
  }

  export type UnlockListUncheckedUpdateInput = {
    ULKNo?: IntFieldUpdateOperationsInput | number
    ENo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockListCreateManyInput = {
    ULKNo: number
    ENo: number
    LKDate: Date | string
  }

  export type UnlockListUpdateManyMutationInput = {
    ULKNo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockListUncheckedUpdateManyInput = {
    ULKNo?: IntFieldUpdateOperationsInput | number
    ENo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    DNumber?: SortOrder
    DName?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    DNumber?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    DNumber?: SortOrder
    DName?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    DNumber?: SortOrder
    DName?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    DNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PositionCountOrderByAggregateInput = {
    PNumber?: SortOrder
    PName?: SortOrder
    AccessNo?: SortOrder
  }

  export type PositionAvgOrderByAggregateInput = {
    PNumber?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    PNumber?: SortOrder
    PName?: SortOrder
    AccessNo?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    PNumber?: SortOrder
    PName?: SortOrder
    AccessNo?: SortOrder
  }

  export type PositionSumOrderByAggregateInput = {
    PNumber?: SortOrder
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomStatusCountOrderByAggregateInput = {
    SNumber?: SortOrder
    SName?: SortOrder
  }

  export type RoomStatusAvgOrderByAggregateInput = {
    SNumber?: SortOrder
  }

  export type RoomStatusMaxOrderByAggregateInput = {
    SNumber?: SortOrder
    SName?: SortOrder
  }

  export type RoomStatusMinOrderByAggregateInput = {
    SNumber?: SortOrder
    SName?: SortOrder
  }

  export type RoomStatusSumOrderByAggregateInput = {
    SNumber?: SortOrder
  }

  export type EmployeeStatusCountOrderByAggregateInput = {
    SNumber?: SortOrder
    SName?: SortOrder
  }

  export type EmployeeStatusAvgOrderByAggregateInput = {
    SNumber?: SortOrder
  }

  export type EmployeeStatusMaxOrderByAggregateInput = {
    SNumber?: SortOrder
    SName?: SortOrder
  }

  export type EmployeeStatusMinOrderByAggregateInput = {
    SNumber?: SortOrder
    SName?: SortOrder
  }

  export type EmployeeStatusSumOrderByAggregateInput = {
    SNumber?: SortOrder
  }

  export type BookingListListRelationFilter = {
    every?: BookingListWhereInput
    some?: BookingListWhereInput
    none?: BookingListWhereInput
  }

  export type BookingListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingStatusCountOrderByAggregateInput = {
    SNumber?: SortOrder
    SName?: SortOrder
  }

  export type BookingStatusAvgOrderByAggregateInput = {
    SNumber?: SortOrder
  }

  export type BookingStatusMaxOrderByAggregateInput = {
    SNumber?: SortOrder
    SName?: SortOrder
  }

  export type BookingStatusMinOrderByAggregateInput = {
    SNumber?: SortOrder
    SName?: SortOrder
  }

  export type BookingStatusSumOrderByAggregateInput = {
    SNumber?: SortOrder
  }

  export type FloorListRelationFilter = {
    every?: FloorWhereInput
    some?: FloorWhereInput
    none?: FloorWhereInput
  }

  export type FloorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildingCountOrderByAggregateInput = {
    BNumber?: SortOrder
    BName?: SortOrder
  }

  export type BuildingAvgOrderByAggregateInput = {
    BNumber?: SortOrder
  }

  export type BuildingMaxOrderByAggregateInput = {
    BNumber?: SortOrder
    BName?: SortOrder
  }

  export type BuildingMinOrderByAggregateInput = {
    BNumber?: SortOrder
    BName?: SortOrder
  }

  export type BuildingSumOrderByAggregateInput = {
    BNumber?: SortOrder
  }

  export type BuildingScalarRelationFilter = {
    is?: BuildingWhereInput
    isNot?: BuildingWhereInput
  }

  export type FloorCountOrderByAggregateInput = {
    FlNumber?: SortOrder
    FlName?: SortOrder
    BNo?: SortOrder
  }

  export type FloorAvgOrderByAggregateInput = {
    FlNumber?: SortOrder
    BNo?: SortOrder
  }

  export type FloorMaxOrderByAggregateInput = {
    FlNumber?: SortOrder
    FlName?: SortOrder
    BNo?: SortOrder
  }

  export type FloorMinOrderByAggregateInput = {
    FlNumber?: SortOrder
    FlName?: SortOrder
    BNo?: SortOrder
  }

  export type FloorSumOrderByAggregateInput = {
    FlNumber?: SortOrder
    BNo?: SortOrder
  }

  export type RoomStatusScalarRelationFilter = {
    is?: RoomStatusWhereInput
    isNot?: RoomStatusWhereInput
  }

  export type FloorScalarRelationFilter = {
    is?: FloorWhereInput
    isNot?: FloorWhereInput
  }

  export type RoomCountOrderByAggregateInput = {
    RNumber?: SortOrder
    RName?: SortOrder
    Capacity?: SortOrder
    VIP?: SortOrder
    FlNo?: SortOrder
    SNo?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    RNumber?: SortOrder
    Capacity?: SortOrder
    VIP?: SortOrder
    FlNo?: SortOrder
    SNo?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    RNumber?: SortOrder
    RName?: SortOrder
    Capacity?: SortOrder
    VIP?: SortOrder
    FlNo?: SortOrder
    SNo?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    RNumber?: SortOrder
    RName?: SortOrder
    Capacity?: SortOrder
    VIP?: SortOrder
    FlNo?: SortOrder
    SNo?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    RNumber?: SortOrder
    Capacity?: SortOrder
    VIP?: SortOrder
    FlNo?: SortOrder
    SNo?: SortOrder
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type PositionScalarRelationFilter = {
    is?: PositionWhereInput
    isNot?: PositionWhereInput
  }

  export type EmployeeStatusScalarRelationFilter = {
    is?: EmployeeStatusWhereInput
    isNot?: EmployeeStatusWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type LockListListRelationFilter = {
    every?: LockListWhereInput
    some?: LockListWhereInput
    none?: LockListWhereInput
  }

  export type UnlockListListRelationFilter = {
    every?: UnlockListWhereInput
    some?: UnlockListWhereInput
    none?: UnlockListWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LockListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnlockListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    ENumber?: SortOrder
    FName?: SortOrder
    LName?: SortOrder
    score?: SortOrder
    Email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    DNo?: SortOrder
    PNo?: SortOrder
    SNo?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    ENumber?: SortOrder
    score?: SortOrder
    DNo?: SortOrder
    PNo?: SortOrder
    SNo?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    ENumber?: SortOrder
    FName?: SortOrder
    LName?: SortOrder
    score?: SortOrder
    Email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    DNo?: SortOrder
    PNo?: SortOrder
    SNo?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    ENumber?: SortOrder
    FName?: SortOrder
    LName?: SortOrder
    score?: SortOrder
    Email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    DNo?: SortOrder
    PNo?: SortOrder
    SNo?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    ENumber?: SortOrder
    score?: SortOrder
    DNo?: SortOrder
    PNo?: SortOrder
    SNo?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type AccessListListRelationFilter = {
    every?: AccessListWhereInput
    some?: AccessListWhereInput
    none?: AccessListWhereInput
  }

  export type DenyBookingListRelationFilter = {
    every?: DenyBookingWhereInput
    some?: DenyBookingWhereInput
    none?: DenyBookingWhereInput
  }

  export type CancelBookingListRelationFilter = {
    every?: CancelBookingWhereInput
    some?: CancelBookingWhereInput
    none?: CancelBookingWhereInput
  }

  export type AccessListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DenyBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CancelBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    BKNumber?: SortOrder
    BKDate?: SortOrder
    ENo?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    BKNumber?: SortOrder
    ENo?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    BKNumber?: SortOrder
    BKDate?: SortOrder
    ENo?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    BKNumber?: SortOrder
    BKDate?: SortOrder
    ENo?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    BKNumber?: SortOrder
    ENo?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type BookingStatusScalarRelationFilter = {
    is?: BookingStatusWhereInput
    isNot?: BookingStatusWhereInput
  }

  export type BookingListCountOrderByAggregateInput = {
    BKLNumber?: SortOrder
    BKLNo?: SortOrder
    RNo?: SortOrder
    Start_Date?: SortOrder
    Start_Time?: SortOrder
    End_Time?: SortOrder
    details?: SortOrder
    QR?: SortOrder
    SNo?: SortOrder
  }

  export type BookingListAvgOrderByAggregateInput = {
    BKLNumber?: SortOrder
    BKLNo?: SortOrder
    RNo?: SortOrder
    SNo?: SortOrder
  }

  export type BookingListMaxOrderByAggregateInput = {
    BKLNumber?: SortOrder
    BKLNo?: SortOrder
    RNo?: SortOrder
    Start_Date?: SortOrder
    Start_Time?: SortOrder
    End_Time?: SortOrder
    details?: SortOrder
    QR?: SortOrder
    SNo?: SortOrder
  }

  export type BookingListMinOrderByAggregateInput = {
    BKLNumber?: SortOrder
    BKLNo?: SortOrder
    RNo?: SortOrder
    Start_Date?: SortOrder
    Start_Time?: SortOrder
    End_Time?: SortOrder
    details?: SortOrder
    QR?: SortOrder
    SNo?: SortOrder
  }

  export type BookingListSumOrderByAggregateInput = {
    BKLNumber?: SortOrder
    BKLNo?: SortOrder
    RNo?: SortOrder
    SNo?: SortOrder
  }

  export type BookingListScalarRelationFilter = {
    is?: BookingListWhereInput
    isNot?: BookingListWhereInput
  }

  export type AccessListCountOrderByAggregateInput = {
    ACNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    AccessTime?: SortOrder
  }

  export type AccessListAvgOrderByAggregateInput = {
    ACNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
  }

  export type AccessListMaxOrderByAggregateInput = {
    ACNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    AccessTime?: SortOrder
  }

  export type AccessListMinOrderByAggregateInput = {
    ACNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    AccessTime?: SortOrder
  }

  export type AccessListSumOrderByAggregateInput = {
    ACNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
  }

  export type DenyBookingCountOrderByAggregateInput = {
    DNNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    details?: SortOrder
  }

  export type DenyBookingAvgOrderByAggregateInput = {
    DNNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
  }

  export type DenyBookingMaxOrderByAggregateInput = {
    DNNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    details?: SortOrder
  }

  export type DenyBookingMinOrderByAggregateInput = {
    DNNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    details?: SortOrder
  }

  export type DenyBookingSumOrderByAggregateInput = {
    DNNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
  }

  export type CancelBookingCountOrderByAggregateInput = {
    CCNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    details?: SortOrder
  }

  export type CancelBookingAvgOrderByAggregateInput = {
    CCNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
  }

  export type CancelBookingMaxOrderByAggregateInput = {
    CCNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    details?: SortOrder
  }

  export type CancelBookingMinOrderByAggregateInput = {
    CCNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
    details?: SortOrder
  }

  export type CancelBookingSumOrderByAggregateInput = {
    CCNumber?: SortOrder
    BKLNo?: SortOrder
    BKNo?: SortOrder
  }

  export type LockListCountOrderByAggregateInput = {
    LKNo?: SortOrder
    ENo?: SortOrder
    LKDate?: SortOrder
  }

  export type LockListAvgOrderByAggregateInput = {
    LKNo?: SortOrder
    ENo?: SortOrder
  }

  export type LockListMaxOrderByAggregateInput = {
    LKNo?: SortOrder
    ENo?: SortOrder
    LKDate?: SortOrder
  }

  export type LockListMinOrderByAggregateInput = {
    LKNo?: SortOrder
    ENo?: SortOrder
    LKDate?: SortOrder
  }

  export type LockListSumOrderByAggregateInput = {
    LKNo?: SortOrder
    ENo?: SortOrder
  }

  export type UnlockListCountOrderByAggregateInput = {
    ULKNo?: SortOrder
    ENo?: SortOrder
    LKDate?: SortOrder
  }

  export type UnlockListAvgOrderByAggregateInput = {
    ULKNo?: SortOrder
    ENo?: SortOrder
  }

  export type UnlockListMaxOrderByAggregateInput = {
    ULKNo?: SortOrder
    ENo?: SortOrder
    LKDate?: SortOrder
  }

  export type UnlockListMinOrderByAggregateInput = {
    ULKNo?: SortOrder
    ENo?: SortOrder
    LKDate?: SortOrder
  }

  export type UnlockListSumOrderByAggregateInput = {
    ULKNo?: SortOrder
    ENo?: SortOrder
  }

  export type EmployeeCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EmployeeUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeCreateNestedManyWithoutPositionInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutPositionNestedInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutPositionInput | EmployeeUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutPositionInput | EmployeeUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutPositionInput | EmployeeUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutPositionInput | EmployeeUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutPositionInput | EmployeeUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutPositionInput | EmployeeUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutRoomStatusInput = {
    create?: XOR<RoomCreateWithoutRoomStatusInput, RoomUncheckedCreateWithoutRoomStatusInput> | RoomCreateWithoutRoomStatusInput[] | RoomUncheckedCreateWithoutRoomStatusInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomStatusInput | RoomCreateOrConnectWithoutRoomStatusInput[]
    createMany?: RoomCreateManyRoomStatusInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutRoomStatusInput = {
    create?: XOR<RoomCreateWithoutRoomStatusInput, RoomUncheckedCreateWithoutRoomStatusInput> | RoomCreateWithoutRoomStatusInput[] | RoomUncheckedCreateWithoutRoomStatusInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomStatusInput | RoomCreateOrConnectWithoutRoomStatusInput[]
    createMany?: RoomCreateManyRoomStatusInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUpdateManyWithoutRoomStatusNestedInput = {
    create?: XOR<RoomCreateWithoutRoomStatusInput, RoomUncheckedCreateWithoutRoomStatusInput> | RoomCreateWithoutRoomStatusInput[] | RoomUncheckedCreateWithoutRoomStatusInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomStatusInput | RoomCreateOrConnectWithoutRoomStatusInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutRoomStatusInput | RoomUpsertWithWhereUniqueWithoutRoomStatusInput[]
    createMany?: RoomCreateManyRoomStatusInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutRoomStatusInput | RoomUpdateWithWhereUniqueWithoutRoomStatusInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutRoomStatusInput | RoomUpdateManyWithWhereWithoutRoomStatusInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutRoomStatusNestedInput = {
    create?: XOR<RoomCreateWithoutRoomStatusInput, RoomUncheckedCreateWithoutRoomStatusInput> | RoomCreateWithoutRoomStatusInput[] | RoomUncheckedCreateWithoutRoomStatusInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomStatusInput | RoomCreateOrConnectWithoutRoomStatusInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutRoomStatusInput | RoomUpsertWithWhereUniqueWithoutRoomStatusInput[]
    createMany?: RoomCreateManyRoomStatusInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutRoomStatusInput | RoomUpdateWithWhereUniqueWithoutRoomStatusInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutRoomStatusInput | RoomUpdateManyWithWhereWithoutRoomStatusInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type EmployeeCreateNestedManyWithoutStatusInput = {
    create?: XOR<EmployeeCreateWithoutStatusInput, EmployeeUncheckedCreateWithoutStatusInput> | EmployeeCreateWithoutStatusInput[] | EmployeeUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutStatusInput | EmployeeCreateOrConnectWithoutStatusInput[]
    createMany?: EmployeeCreateManyStatusInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<EmployeeCreateWithoutStatusInput, EmployeeUncheckedCreateWithoutStatusInput> | EmployeeCreateWithoutStatusInput[] | EmployeeUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutStatusInput | EmployeeCreateOrConnectWithoutStatusInput[]
    createMany?: EmployeeCreateManyStatusInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutStatusNestedInput = {
    create?: XOR<EmployeeCreateWithoutStatusInput, EmployeeUncheckedCreateWithoutStatusInput> | EmployeeCreateWithoutStatusInput[] | EmployeeUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutStatusInput | EmployeeCreateOrConnectWithoutStatusInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutStatusInput | EmployeeUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: EmployeeCreateManyStatusInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutStatusInput | EmployeeUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutStatusInput | EmployeeUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<EmployeeCreateWithoutStatusInput, EmployeeUncheckedCreateWithoutStatusInput> | EmployeeCreateWithoutStatusInput[] | EmployeeUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutStatusInput | EmployeeCreateOrConnectWithoutStatusInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutStatusInput | EmployeeUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: EmployeeCreateManyStatusInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutStatusInput | EmployeeUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutStatusInput | EmployeeUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type BookingListCreateNestedManyWithoutStatusInput = {
    create?: XOR<BookingListCreateWithoutStatusInput, BookingListUncheckedCreateWithoutStatusInput> | BookingListCreateWithoutStatusInput[] | BookingListUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutStatusInput | BookingListCreateOrConnectWithoutStatusInput[]
    createMany?: BookingListCreateManyStatusInputEnvelope
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
  }

  export type BookingListUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<BookingListCreateWithoutStatusInput, BookingListUncheckedCreateWithoutStatusInput> | BookingListCreateWithoutStatusInput[] | BookingListUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutStatusInput | BookingListCreateOrConnectWithoutStatusInput[]
    createMany?: BookingListCreateManyStatusInputEnvelope
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
  }

  export type BookingListUpdateManyWithoutStatusNestedInput = {
    create?: XOR<BookingListCreateWithoutStatusInput, BookingListUncheckedCreateWithoutStatusInput> | BookingListCreateWithoutStatusInput[] | BookingListUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutStatusInput | BookingListCreateOrConnectWithoutStatusInput[]
    upsert?: BookingListUpsertWithWhereUniqueWithoutStatusInput | BookingListUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: BookingListCreateManyStatusInputEnvelope
    set?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    disconnect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    delete?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    update?: BookingListUpdateWithWhereUniqueWithoutStatusInput | BookingListUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: BookingListUpdateManyWithWhereWithoutStatusInput | BookingListUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: BookingListScalarWhereInput | BookingListScalarWhereInput[]
  }

  export type BookingListUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<BookingListCreateWithoutStatusInput, BookingListUncheckedCreateWithoutStatusInput> | BookingListCreateWithoutStatusInput[] | BookingListUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutStatusInput | BookingListCreateOrConnectWithoutStatusInput[]
    upsert?: BookingListUpsertWithWhereUniqueWithoutStatusInput | BookingListUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: BookingListCreateManyStatusInputEnvelope
    set?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    disconnect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    delete?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    update?: BookingListUpdateWithWhereUniqueWithoutStatusInput | BookingListUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: BookingListUpdateManyWithWhereWithoutStatusInput | BookingListUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: BookingListScalarWhereInput | BookingListScalarWhereInput[]
  }

  export type FloorCreateNestedManyWithoutBuildingInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
  }

  export type FloorUncheckedCreateNestedManyWithoutBuildingInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
  }

  export type FloorUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    upsert?: FloorUpsertWithWhereUniqueWithoutBuildingInput | FloorUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    set?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    disconnect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    delete?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    update?: FloorUpdateWithWhereUniqueWithoutBuildingInput | FloorUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: FloorUpdateManyWithWhereWithoutBuildingInput | FloorUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: FloorScalarWhereInput | FloorScalarWhereInput[]
  }

  export type FloorUncheckedUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    upsert?: FloorUpsertWithWhereUniqueWithoutBuildingInput | FloorUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    set?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    disconnect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    delete?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    update?: FloorUpdateWithWhereUniqueWithoutBuildingInput | FloorUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: FloorUpdateManyWithWhereWithoutBuildingInput | FloorUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: FloorScalarWhereInput | FloorScalarWhereInput[]
  }

  export type BuildingCreateNestedOneWithoutFloorsInput = {
    create?: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutFloorsInput
    connect?: BuildingWhereUniqueInput
  }

  export type RoomCreateNestedManyWithoutFloorInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutFloorInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type BuildingUpdateOneRequiredWithoutFloorsNestedInput = {
    create?: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutFloorsInput
    upsert?: BuildingUpsertWithoutFloorsInput
    connect?: BuildingWhereUniqueInput
    update?: XOR<XOR<BuildingUpdateToOneWithWhereWithoutFloorsInput, BuildingUpdateWithoutFloorsInput>, BuildingUncheckedUpdateWithoutFloorsInput>
  }

  export type RoomUpdateManyWithoutFloorNestedInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutFloorInput | RoomUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutFloorInput | RoomUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutFloorInput | RoomUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutFloorNestedInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutFloorInput | RoomUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutFloorInput | RoomUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutFloorInput | RoomUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomStatusCreateNestedOneWithoutRoomsInput = {
    create?: XOR<RoomStatusCreateWithoutRoomsInput, RoomStatusUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomStatusCreateOrConnectWithoutRoomsInput
    connect?: RoomStatusWhereUniqueInput
  }

  export type FloorCreateNestedOneWithoutRoomsInput = {
    create?: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutRoomsInput
    connect?: FloorWhereUniqueInput
  }

  export type BookingListCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingListCreateWithoutRoomInput, BookingListUncheckedCreateWithoutRoomInput> | BookingListCreateWithoutRoomInput[] | BookingListUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutRoomInput | BookingListCreateOrConnectWithoutRoomInput[]
    createMany?: BookingListCreateManyRoomInputEnvelope
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
  }

  export type BookingListUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingListCreateWithoutRoomInput, BookingListUncheckedCreateWithoutRoomInput> | BookingListCreateWithoutRoomInput[] | BookingListUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutRoomInput | BookingListCreateOrConnectWithoutRoomInput[]
    createMany?: BookingListCreateManyRoomInputEnvelope
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
  }

  export type RoomStatusUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<RoomStatusCreateWithoutRoomsInput, RoomStatusUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomStatusCreateOrConnectWithoutRoomsInput
    upsert?: RoomStatusUpsertWithoutRoomsInput
    connect?: RoomStatusWhereUniqueInput
    update?: XOR<XOR<RoomStatusUpdateToOneWithWhereWithoutRoomsInput, RoomStatusUpdateWithoutRoomsInput>, RoomStatusUncheckedUpdateWithoutRoomsInput>
  }

  export type FloorUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutRoomsInput
    upsert?: FloorUpsertWithoutRoomsInput
    connect?: FloorWhereUniqueInput
    update?: XOR<XOR<FloorUpdateToOneWithWhereWithoutRoomsInput, FloorUpdateWithoutRoomsInput>, FloorUncheckedUpdateWithoutRoomsInput>
  }

  export type BookingListUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingListCreateWithoutRoomInput, BookingListUncheckedCreateWithoutRoomInput> | BookingListCreateWithoutRoomInput[] | BookingListUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutRoomInput | BookingListCreateOrConnectWithoutRoomInput[]
    upsert?: BookingListUpsertWithWhereUniqueWithoutRoomInput | BookingListUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingListCreateManyRoomInputEnvelope
    set?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    disconnect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    delete?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    update?: BookingListUpdateWithWhereUniqueWithoutRoomInput | BookingListUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingListUpdateManyWithWhereWithoutRoomInput | BookingListUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingListScalarWhereInput | BookingListScalarWhereInput[]
  }

  export type BookingListUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingListCreateWithoutRoomInput, BookingListUncheckedCreateWithoutRoomInput> | BookingListCreateWithoutRoomInput[] | BookingListUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutRoomInput | BookingListCreateOrConnectWithoutRoomInput[]
    upsert?: BookingListUpsertWithWhereUniqueWithoutRoomInput | BookingListUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingListCreateManyRoomInputEnvelope
    set?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    disconnect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    delete?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    update?: BookingListUpdateWithWhereUniqueWithoutRoomInput | BookingListUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingListUpdateManyWithWhereWithoutRoomInput | BookingListUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingListScalarWhereInput | BookingListScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<PositionCreateWithoutEmployeesInput, PositionUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: PositionCreateOrConnectWithoutEmployeesInput
    connect?: PositionWhereUniqueInput
  }

  export type EmployeeStatusCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<EmployeeStatusCreateWithoutEmployeesInput, EmployeeStatusUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: EmployeeStatusCreateOrConnectWithoutEmployeesInput
    connect?: EmployeeStatusWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput> | BookingCreateWithoutEmployeeInput[] | BookingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEmployeeInput | BookingCreateOrConnectWithoutEmployeeInput[]
    createMany?: BookingCreateManyEmployeeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type LockListCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LockListCreateWithoutEmployeeInput, LockListUncheckedCreateWithoutEmployeeInput> | LockListCreateWithoutEmployeeInput[] | LockListUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LockListCreateOrConnectWithoutEmployeeInput | LockListCreateOrConnectWithoutEmployeeInput[]
    createMany?: LockListCreateManyEmployeeInputEnvelope
    connect?: LockListWhereUniqueInput | LockListWhereUniqueInput[]
  }

  export type UnlockListCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<UnlockListCreateWithoutEmployeeInput, UnlockListUncheckedCreateWithoutEmployeeInput> | UnlockListCreateWithoutEmployeeInput[] | UnlockListUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: UnlockListCreateOrConnectWithoutEmployeeInput | UnlockListCreateOrConnectWithoutEmployeeInput[]
    createMany?: UnlockListCreateManyEmployeeInputEnvelope
    connect?: UnlockListWhereUniqueInput | UnlockListWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput> | BookingCreateWithoutEmployeeInput[] | BookingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEmployeeInput | BookingCreateOrConnectWithoutEmployeeInput[]
    createMany?: BookingCreateManyEmployeeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type LockListUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LockListCreateWithoutEmployeeInput, LockListUncheckedCreateWithoutEmployeeInput> | LockListCreateWithoutEmployeeInput[] | LockListUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LockListCreateOrConnectWithoutEmployeeInput | LockListCreateOrConnectWithoutEmployeeInput[]
    createMany?: LockListCreateManyEmployeeInputEnvelope
    connect?: LockListWhereUniqueInput | LockListWhereUniqueInput[]
  }

  export type UnlockListUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<UnlockListCreateWithoutEmployeeInput, UnlockListUncheckedCreateWithoutEmployeeInput> | UnlockListCreateWithoutEmployeeInput[] | UnlockListUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: UnlockListCreateOrConnectWithoutEmployeeInput | UnlockListCreateOrConnectWithoutEmployeeInput[]
    createMany?: UnlockListCreateManyEmployeeInputEnvelope
    connect?: UnlockListWhereUniqueInput | UnlockListWhereUniqueInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    upsert?: DepartmentUpsertWithoutEmployeesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutEmployeesInput, DepartmentUpdateWithoutEmployeesInput>, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type PositionUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<PositionCreateWithoutEmployeesInput, PositionUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: PositionCreateOrConnectWithoutEmployeesInput
    upsert?: PositionUpsertWithoutEmployeesInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutEmployeesInput, PositionUpdateWithoutEmployeesInput>, PositionUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeStatusUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<EmployeeStatusCreateWithoutEmployeesInput, EmployeeStatusUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: EmployeeStatusCreateOrConnectWithoutEmployeesInput
    upsert?: EmployeeStatusUpsertWithoutEmployeesInput
    connect?: EmployeeStatusWhereUniqueInput
    update?: XOR<XOR<EmployeeStatusUpdateToOneWithWhereWithoutEmployeesInput, EmployeeStatusUpdateWithoutEmployeesInput>, EmployeeStatusUncheckedUpdateWithoutEmployeesInput>
  }

  export type BookingUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput> | BookingCreateWithoutEmployeeInput[] | BookingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEmployeeInput | BookingCreateOrConnectWithoutEmployeeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutEmployeeInput | BookingUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: BookingCreateManyEmployeeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutEmployeeInput | BookingUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutEmployeeInput | BookingUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type LockListUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LockListCreateWithoutEmployeeInput, LockListUncheckedCreateWithoutEmployeeInput> | LockListCreateWithoutEmployeeInput[] | LockListUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LockListCreateOrConnectWithoutEmployeeInput | LockListCreateOrConnectWithoutEmployeeInput[]
    upsert?: LockListUpsertWithWhereUniqueWithoutEmployeeInput | LockListUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LockListCreateManyEmployeeInputEnvelope
    set?: LockListWhereUniqueInput | LockListWhereUniqueInput[]
    disconnect?: LockListWhereUniqueInput | LockListWhereUniqueInput[]
    delete?: LockListWhereUniqueInput | LockListWhereUniqueInput[]
    connect?: LockListWhereUniqueInput | LockListWhereUniqueInput[]
    update?: LockListUpdateWithWhereUniqueWithoutEmployeeInput | LockListUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LockListUpdateManyWithWhereWithoutEmployeeInput | LockListUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LockListScalarWhereInput | LockListScalarWhereInput[]
  }

  export type UnlockListUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<UnlockListCreateWithoutEmployeeInput, UnlockListUncheckedCreateWithoutEmployeeInput> | UnlockListCreateWithoutEmployeeInput[] | UnlockListUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: UnlockListCreateOrConnectWithoutEmployeeInput | UnlockListCreateOrConnectWithoutEmployeeInput[]
    upsert?: UnlockListUpsertWithWhereUniqueWithoutEmployeeInput | UnlockListUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: UnlockListCreateManyEmployeeInputEnvelope
    set?: UnlockListWhereUniqueInput | UnlockListWhereUniqueInput[]
    disconnect?: UnlockListWhereUniqueInput | UnlockListWhereUniqueInput[]
    delete?: UnlockListWhereUniqueInput | UnlockListWhereUniqueInput[]
    connect?: UnlockListWhereUniqueInput | UnlockListWhereUniqueInput[]
    update?: UnlockListUpdateWithWhereUniqueWithoutEmployeeInput | UnlockListUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: UnlockListUpdateManyWithWhereWithoutEmployeeInput | UnlockListUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: UnlockListScalarWhereInput | UnlockListScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput> | BookingCreateWithoutEmployeeInput[] | BookingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEmployeeInput | BookingCreateOrConnectWithoutEmployeeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutEmployeeInput | BookingUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: BookingCreateManyEmployeeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutEmployeeInput | BookingUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutEmployeeInput | BookingUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type LockListUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LockListCreateWithoutEmployeeInput, LockListUncheckedCreateWithoutEmployeeInput> | LockListCreateWithoutEmployeeInput[] | LockListUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LockListCreateOrConnectWithoutEmployeeInput | LockListCreateOrConnectWithoutEmployeeInput[]
    upsert?: LockListUpsertWithWhereUniqueWithoutEmployeeInput | LockListUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LockListCreateManyEmployeeInputEnvelope
    set?: LockListWhereUniqueInput | LockListWhereUniqueInput[]
    disconnect?: LockListWhereUniqueInput | LockListWhereUniqueInput[]
    delete?: LockListWhereUniqueInput | LockListWhereUniqueInput[]
    connect?: LockListWhereUniqueInput | LockListWhereUniqueInput[]
    update?: LockListUpdateWithWhereUniqueWithoutEmployeeInput | LockListUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LockListUpdateManyWithWhereWithoutEmployeeInput | LockListUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LockListScalarWhereInput | LockListScalarWhereInput[]
  }

  export type UnlockListUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<UnlockListCreateWithoutEmployeeInput, UnlockListUncheckedCreateWithoutEmployeeInput> | UnlockListCreateWithoutEmployeeInput[] | UnlockListUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: UnlockListCreateOrConnectWithoutEmployeeInput | UnlockListCreateOrConnectWithoutEmployeeInput[]
    upsert?: UnlockListUpsertWithWhereUniqueWithoutEmployeeInput | UnlockListUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: UnlockListCreateManyEmployeeInputEnvelope
    set?: UnlockListWhereUniqueInput | UnlockListWhereUniqueInput[]
    disconnect?: UnlockListWhereUniqueInput | UnlockListWhereUniqueInput[]
    delete?: UnlockListWhereUniqueInput | UnlockListWhereUniqueInput[]
    connect?: UnlockListWhereUniqueInput | UnlockListWhereUniqueInput[]
    update?: UnlockListUpdateWithWhereUniqueWithoutEmployeeInput | UnlockListUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: UnlockListUpdateManyWithWhereWithoutEmployeeInput | UnlockListUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: UnlockListScalarWhereInput | UnlockListScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutBookingsInput = {
    create?: XOR<EmployeeCreateWithoutBookingsInput, EmployeeUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutBookingsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type BookingListCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingListCreateWithoutBookingInput, BookingListUncheckedCreateWithoutBookingInput> | BookingListCreateWithoutBookingInput[] | BookingListUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutBookingInput | BookingListCreateOrConnectWithoutBookingInput[]
    createMany?: BookingListCreateManyBookingInputEnvelope
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
  }

  export type AccessListCreateNestedManyWithoutBookingInput = {
    create?: XOR<AccessListCreateWithoutBookingInput, AccessListUncheckedCreateWithoutBookingInput> | AccessListCreateWithoutBookingInput[] | AccessListUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AccessListCreateOrConnectWithoutBookingInput | AccessListCreateOrConnectWithoutBookingInput[]
    createMany?: AccessListCreateManyBookingInputEnvelope
    connect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
  }

  export type DenyBookingCreateNestedManyWithoutBookingInput = {
    create?: XOR<DenyBookingCreateWithoutBookingInput, DenyBookingUncheckedCreateWithoutBookingInput> | DenyBookingCreateWithoutBookingInput[] | DenyBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: DenyBookingCreateOrConnectWithoutBookingInput | DenyBookingCreateOrConnectWithoutBookingInput[]
    createMany?: DenyBookingCreateManyBookingInputEnvelope
    connect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
  }

  export type CancelBookingCreateNestedManyWithoutBookingInput = {
    create?: XOR<CancelBookingCreateWithoutBookingInput, CancelBookingUncheckedCreateWithoutBookingInput> | CancelBookingCreateWithoutBookingInput[] | CancelBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CancelBookingCreateOrConnectWithoutBookingInput | CancelBookingCreateOrConnectWithoutBookingInput[]
    createMany?: CancelBookingCreateManyBookingInputEnvelope
    connect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
  }

  export type BookingListUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingListCreateWithoutBookingInput, BookingListUncheckedCreateWithoutBookingInput> | BookingListCreateWithoutBookingInput[] | BookingListUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutBookingInput | BookingListCreateOrConnectWithoutBookingInput[]
    createMany?: BookingListCreateManyBookingInputEnvelope
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
  }

  export type AccessListUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<AccessListCreateWithoutBookingInput, AccessListUncheckedCreateWithoutBookingInput> | AccessListCreateWithoutBookingInput[] | AccessListUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AccessListCreateOrConnectWithoutBookingInput | AccessListCreateOrConnectWithoutBookingInput[]
    createMany?: AccessListCreateManyBookingInputEnvelope
    connect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
  }

  export type DenyBookingUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<DenyBookingCreateWithoutBookingInput, DenyBookingUncheckedCreateWithoutBookingInput> | DenyBookingCreateWithoutBookingInput[] | DenyBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: DenyBookingCreateOrConnectWithoutBookingInput | DenyBookingCreateOrConnectWithoutBookingInput[]
    createMany?: DenyBookingCreateManyBookingInputEnvelope
    connect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
  }

  export type CancelBookingUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<CancelBookingCreateWithoutBookingInput, CancelBookingUncheckedCreateWithoutBookingInput> | CancelBookingCreateWithoutBookingInput[] | CancelBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CancelBookingCreateOrConnectWithoutBookingInput | CancelBookingCreateOrConnectWithoutBookingInput[]
    createMany?: CancelBookingCreateManyBookingInputEnvelope
    connect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeeUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<EmployeeCreateWithoutBookingsInput, EmployeeUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutBookingsInput
    upsert?: EmployeeUpsertWithoutBookingsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutBookingsInput, EmployeeUpdateWithoutBookingsInput>, EmployeeUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingListUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingListCreateWithoutBookingInput, BookingListUncheckedCreateWithoutBookingInput> | BookingListCreateWithoutBookingInput[] | BookingListUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutBookingInput | BookingListCreateOrConnectWithoutBookingInput[]
    upsert?: BookingListUpsertWithWhereUniqueWithoutBookingInput | BookingListUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingListCreateManyBookingInputEnvelope
    set?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    disconnect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    delete?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    update?: BookingListUpdateWithWhereUniqueWithoutBookingInput | BookingListUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingListUpdateManyWithWhereWithoutBookingInput | BookingListUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingListScalarWhereInput | BookingListScalarWhereInput[]
  }

  export type AccessListUpdateManyWithoutBookingNestedInput = {
    create?: XOR<AccessListCreateWithoutBookingInput, AccessListUncheckedCreateWithoutBookingInput> | AccessListCreateWithoutBookingInput[] | AccessListUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AccessListCreateOrConnectWithoutBookingInput | AccessListCreateOrConnectWithoutBookingInput[]
    upsert?: AccessListUpsertWithWhereUniqueWithoutBookingInput | AccessListUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: AccessListCreateManyBookingInputEnvelope
    set?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    disconnect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    delete?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    connect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    update?: AccessListUpdateWithWhereUniqueWithoutBookingInput | AccessListUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: AccessListUpdateManyWithWhereWithoutBookingInput | AccessListUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: AccessListScalarWhereInput | AccessListScalarWhereInput[]
  }

  export type DenyBookingUpdateManyWithoutBookingNestedInput = {
    create?: XOR<DenyBookingCreateWithoutBookingInput, DenyBookingUncheckedCreateWithoutBookingInput> | DenyBookingCreateWithoutBookingInput[] | DenyBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: DenyBookingCreateOrConnectWithoutBookingInput | DenyBookingCreateOrConnectWithoutBookingInput[]
    upsert?: DenyBookingUpsertWithWhereUniqueWithoutBookingInput | DenyBookingUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: DenyBookingCreateManyBookingInputEnvelope
    set?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    disconnect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    delete?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    connect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    update?: DenyBookingUpdateWithWhereUniqueWithoutBookingInput | DenyBookingUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: DenyBookingUpdateManyWithWhereWithoutBookingInput | DenyBookingUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: DenyBookingScalarWhereInput | DenyBookingScalarWhereInput[]
  }

  export type CancelBookingUpdateManyWithoutBookingNestedInput = {
    create?: XOR<CancelBookingCreateWithoutBookingInput, CancelBookingUncheckedCreateWithoutBookingInput> | CancelBookingCreateWithoutBookingInput[] | CancelBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CancelBookingCreateOrConnectWithoutBookingInput | CancelBookingCreateOrConnectWithoutBookingInput[]
    upsert?: CancelBookingUpsertWithWhereUniqueWithoutBookingInput | CancelBookingUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: CancelBookingCreateManyBookingInputEnvelope
    set?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    disconnect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    delete?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    connect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    update?: CancelBookingUpdateWithWhereUniqueWithoutBookingInput | CancelBookingUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: CancelBookingUpdateManyWithWhereWithoutBookingInput | CancelBookingUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: CancelBookingScalarWhereInput | CancelBookingScalarWhereInput[]
  }

  export type BookingListUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingListCreateWithoutBookingInput, BookingListUncheckedCreateWithoutBookingInput> | BookingListCreateWithoutBookingInput[] | BookingListUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingListCreateOrConnectWithoutBookingInput | BookingListCreateOrConnectWithoutBookingInput[]
    upsert?: BookingListUpsertWithWhereUniqueWithoutBookingInput | BookingListUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingListCreateManyBookingInputEnvelope
    set?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    disconnect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    delete?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    connect?: BookingListWhereUniqueInput | BookingListWhereUniqueInput[]
    update?: BookingListUpdateWithWhereUniqueWithoutBookingInput | BookingListUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingListUpdateManyWithWhereWithoutBookingInput | BookingListUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingListScalarWhereInput | BookingListScalarWhereInput[]
  }

  export type AccessListUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<AccessListCreateWithoutBookingInput, AccessListUncheckedCreateWithoutBookingInput> | AccessListCreateWithoutBookingInput[] | AccessListUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AccessListCreateOrConnectWithoutBookingInput | AccessListCreateOrConnectWithoutBookingInput[]
    upsert?: AccessListUpsertWithWhereUniqueWithoutBookingInput | AccessListUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: AccessListCreateManyBookingInputEnvelope
    set?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    disconnect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    delete?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    connect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    update?: AccessListUpdateWithWhereUniqueWithoutBookingInput | AccessListUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: AccessListUpdateManyWithWhereWithoutBookingInput | AccessListUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: AccessListScalarWhereInput | AccessListScalarWhereInput[]
  }

  export type DenyBookingUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<DenyBookingCreateWithoutBookingInput, DenyBookingUncheckedCreateWithoutBookingInput> | DenyBookingCreateWithoutBookingInput[] | DenyBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: DenyBookingCreateOrConnectWithoutBookingInput | DenyBookingCreateOrConnectWithoutBookingInput[]
    upsert?: DenyBookingUpsertWithWhereUniqueWithoutBookingInput | DenyBookingUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: DenyBookingCreateManyBookingInputEnvelope
    set?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    disconnect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    delete?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    connect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    update?: DenyBookingUpdateWithWhereUniqueWithoutBookingInput | DenyBookingUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: DenyBookingUpdateManyWithWhereWithoutBookingInput | DenyBookingUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: DenyBookingScalarWhereInput | DenyBookingScalarWhereInput[]
  }

  export type CancelBookingUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<CancelBookingCreateWithoutBookingInput, CancelBookingUncheckedCreateWithoutBookingInput> | CancelBookingCreateWithoutBookingInput[] | CancelBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CancelBookingCreateOrConnectWithoutBookingInput | CancelBookingCreateOrConnectWithoutBookingInput[]
    upsert?: CancelBookingUpsertWithWhereUniqueWithoutBookingInput | CancelBookingUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: CancelBookingCreateManyBookingInputEnvelope
    set?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    disconnect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    delete?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    connect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    update?: CancelBookingUpdateWithWhereUniqueWithoutBookingInput | CancelBookingUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: CancelBookingUpdateManyWithWhereWithoutBookingInput | CancelBookingUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: CancelBookingScalarWhereInput | CancelBookingScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutBookingListsInput = {
    create?: XOR<BookingCreateWithoutBookingListsInput, BookingUncheckedCreateWithoutBookingListsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBookingListsInput
    connect?: BookingWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutBookingListsInput = {
    create?: XOR<RoomCreateWithoutBookingListsInput, RoomUncheckedCreateWithoutBookingListsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingListsInput
    connect?: RoomWhereUniqueInput
  }

  export type BookingStatusCreateNestedOneWithoutBookingListsInput = {
    create?: XOR<BookingStatusCreateWithoutBookingListsInput, BookingStatusUncheckedCreateWithoutBookingListsInput>
    connectOrCreate?: BookingStatusCreateOrConnectWithoutBookingListsInput
    connect?: BookingStatusWhereUniqueInput
  }

  export type AccessListCreateNestedManyWithoutBookingListInput = {
    create?: XOR<AccessListCreateWithoutBookingListInput, AccessListUncheckedCreateWithoutBookingListInput> | AccessListCreateWithoutBookingListInput[] | AccessListUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: AccessListCreateOrConnectWithoutBookingListInput | AccessListCreateOrConnectWithoutBookingListInput[]
    createMany?: AccessListCreateManyBookingListInputEnvelope
    connect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
  }

  export type DenyBookingCreateNestedManyWithoutBookingListInput = {
    create?: XOR<DenyBookingCreateWithoutBookingListInput, DenyBookingUncheckedCreateWithoutBookingListInput> | DenyBookingCreateWithoutBookingListInput[] | DenyBookingUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: DenyBookingCreateOrConnectWithoutBookingListInput | DenyBookingCreateOrConnectWithoutBookingListInput[]
    createMany?: DenyBookingCreateManyBookingListInputEnvelope
    connect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
  }

  export type CancelBookingCreateNestedManyWithoutBookingListInput = {
    create?: XOR<CancelBookingCreateWithoutBookingListInput, CancelBookingUncheckedCreateWithoutBookingListInput> | CancelBookingCreateWithoutBookingListInput[] | CancelBookingUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: CancelBookingCreateOrConnectWithoutBookingListInput | CancelBookingCreateOrConnectWithoutBookingListInput[]
    createMany?: CancelBookingCreateManyBookingListInputEnvelope
    connect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
  }

  export type AccessListUncheckedCreateNestedManyWithoutBookingListInput = {
    create?: XOR<AccessListCreateWithoutBookingListInput, AccessListUncheckedCreateWithoutBookingListInput> | AccessListCreateWithoutBookingListInput[] | AccessListUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: AccessListCreateOrConnectWithoutBookingListInput | AccessListCreateOrConnectWithoutBookingListInput[]
    createMany?: AccessListCreateManyBookingListInputEnvelope
    connect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
  }

  export type DenyBookingUncheckedCreateNestedManyWithoutBookingListInput = {
    create?: XOR<DenyBookingCreateWithoutBookingListInput, DenyBookingUncheckedCreateWithoutBookingListInput> | DenyBookingCreateWithoutBookingListInput[] | DenyBookingUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: DenyBookingCreateOrConnectWithoutBookingListInput | DenyBookingCreateOrConnectWithoutBookingListInput[]
    createMany?: DenyBookingCreateManyBookingListInputEnvelope
    connect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
  }

  export type CancelBookingUncheckedCreateNestedManyWithoutBookingListInput = {
    create?: XOR<CancelBookingCreateWithoutBookingListInput, CancelBookingUncheckedCreateWithoutBookingListInput> | CancelBookingCreateWithoutBookingListInput[] | CancelBookingUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: CancelBookingCreateOrConnectWithoutBookingListInput | CancelBookingCreateOrConnectWithoutBookingListInput[]
    createMany?: CancelBookingCreateManyBookingListInputEnvelope
    connect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
  }

  export type BookingUpdateOneRequiredWithoutBookingListsNestedInput = {
    create?: XOR<BookingCreateWithoutBookingListsInput, BookingUncheckedCreateWithoutBookingListsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBookingListsInput
    upsert?: BookingUpsertWithoutBookingListsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutBookingListsInput, BookingUpdateWithoutBookingListsInput>, BookingUncheckedUpdateWithoutBookingListsInput>
  }

  export type RoomUpdateOneRequiredWithoutBookingListsNestedInput = {
    create?: XOR<RoomCreateWithoutBookingListsInput, RoomUncheckedCreateWithoutBookingListsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingListsInput
    upsert?: RoomUpsertWithoutBookingListsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutBookingListsInput, RoomUpdateWithoutBookingListsInput>, RoomUncheckedUpdateWithoutBookingListsInput>
  }

  export type BookingStatusUpdateOneRequiredWithoutBookingListsNestedInput = {
    create?: XOR<BookingStatusCreateWithoutBookingListsInput, BookingStatusUncheckedCreateWithoutBookingListsInput>
    connectOrCreate?: BookingStatusCreateOrConnectWithoutBookingListsInput
    upsert?: BookingStatusUpsertWithoutBookingListsInput
    connect?: BookingStatusWhereUniqueInput
    update?: XOR<XOR<BookingStatusUpdateToOneWithWhereWithoutBookingListsInput, BookingStatusUpdateWithoutBookingListsInput>, BookingStatusUncheckedUpdateWithoutBookingListsInput>
  }

  export type AccessListUpdateManyWithoutBookingListNestedInput = {
    create?: XOR<AccessListCreateWithoutBookingListInput, AccessListUncheckedCreateWithoutBookingListInput> | AccessListCreateWithoutBookingListInput[] | AccessListUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: AccessListCreateOrConnectWithoutBookingListInput | AccessListCreateOrConnectWithoutBookingListInput[]
    upsert?: AccessListUpsertWithWhereUniqueWithoutBookingListInput | AccessListUpsertWithWhereUniqueWithoutBookingListInput[]
    createMany?: AccessListCreateManyBookingListInputEnvelope
    set?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    disconnect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    delete?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    connect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    update?: AccessListUpdateWithWhereUniqueWithoutBookingListInput | AccessListUpdateWithWhereUniqueWithoutBookingListInput[]
    updateMany?: AccessListUpdateManyWithWhereWithoutBookingListInput | AccessListUpdateManyWithWhereWithoutBookingListInput[]
    deleteMany?: AccessListScalarWhereInput | AccessListScalarWhereInput[]
  }

  export type DenyBookingUpdateManyWithoutBookingListNestedInput = {
    create?: XOR<DenyBookingCreateWithoutBookingListInput, DenyBookingUncheckedCreateWithoutBookingListInput> | DenyBookingCreateWithoutBookingListInput[] | DenyBookingUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: DenyBookingCreateOrConnectWithoutBookingListInput | DenyBookingCreateOrConnectWithoutBookingListInput[]
    upsert?: DenyBookingUpsertWithWhereUniqueWithoutBookingListInput | DenyBookingUpsertWithWhereUniqueWithoutBookingListInput[]
    createMany?: DenyBookingCreateManyBookingListInputEnvelope
    set?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    disconnect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    delete?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    connect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    update?: DenyBookingUpdateWithWhereUniqueWithoutBookingListInput | DenyBookingUpdateWithWhereUniqueWithoutBookingListInput[]
    updateMany?: DenyBookingUpdateManyWithWhereWithoutBookingListInput | DenyBookingUpdateManyWithWhereWithoutBookingListInput[]
    deleteMany?: DenyBookingScalarWhereInput | DenyBookingScalarWhereInput[]
  }

  export type CancelBookingUpdateManyWithoutBookingListNestedInput = {
    create?: XOR<CancelBookingCreateWithoutBookingListInput, CancelBookingUncheckedCreateWithoutBookingListInput> | CancelBookingCreateWithoutBookingListInput[] | CancelBookingUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: CancelBookingCreateOrConnectWithoutBookingListInput | CancelBookingCreateOrConnectWithoutBookingListInput[]
    upsert?: CancelBookingUpsertWithWhereUniqueWithoutBookingListInput | CancelBookingUpsertWithWhereUniqueWithoutBookingListInput[]
    createMany?: CancelBookingCreateManyBookingListInputEnvelope
    set?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    disconnect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    delete?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    connect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    update?: CancelBookingUpdateWithWhereUniqueWithoutBookingListInput | CancelBookingUpdateWithWhereUniqueWithoutBookingListInput[]
    updateMany?: CancelBookingUpdateManyWithWhereWithoutBookingListInput | CancelBookingUpdateManyWithWhereWithoutBookingListInput[]
    deleteMany?: CancelBookingScalarWhereInput | CancelBookingScalarWhereInput[]
  }

  export type AccessListUncheckedUpdateManyWithoutBookingListNestedInput = {
    create?: XOR<AccessListCreateWithoutBookingListInput, AccessListUncheckedCreateWithoutBookingListInput> | AccessListCreateWithoutBookingListInput[] | AccessListUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: AccessListCreateOrConnectWithoutBookingListInput | AccessListCreateOrConnectWithoutBookingListInput[]
    upsert?: AccessListUpsertWithWhereUniqueWithoutBookingListInput | AccessListUpsertWithWhereUniqueWithoutBookingListInput[]
    createMany?: AccessListCreateManyBookingListInputEnvelope
    set?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    disconnect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    delete?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    connect?: AccessListWhereUniqueInput | AccessListWhereUniqueInput[]
    update?: AccessListUpdateWithWhereUniqueWithoutBookingListInput | AccessListUpdateWithWhereUniqueWithoutBookingListInput[]
    updateMany?: AccessListUpdateManyWithWhereWithoutBookingListInput | AccessListUpdateManyWithWhereWithoutBookingListInput[]
    deleteMany?: AccessListScalarWhereInput | AccessListScalarWhereInput[]
  }

  export type DenyBookingUncheckedUpdateManyWithoutBookingListNestedInput = {
    create?: XOR<DenyBookingCreateWithoutBookingListInput, DenyBookingUncheckedCreateWithoutBookingListInput> | DenyBookingCreateWithoutBookingListInput[] | DenyBookingUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: DenyBookingCreateOrConnectWithoutBookingListInput | DenyBookingCreateOrConnectWithoutBookingListInput[]
    upsert?: DenyBookingUpsertWithWhereUniqueWithoutBookingListInput | DenyBookingUpsertWithWhereUniqueWithoutBookingListInput[]
    createMany?: DenyBookingCreateManyBookingListInputEnvelope
    set?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    disconnect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    delete?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    connect?: DenyBookingWhereUniqueInput | DenyBookingWhereUniqueInput[]
    update?: DenyBookingUpdateWithWhereUniqueWithoutBookingListInput | DenyBookingUpdateWithWhereUniqueWithoutBookingListInput[]
    updateMany?: DenyBookingUpdateManyWithWhereWithoutBookingListInput | DenyBookingUpdateManyWithWhereWithoutBookingListInput[]
    deleteMany?: DenyBookingScalarWhereInput | DenyBookingScalarWhereInput[]
  }

  export type CancelBookingUncheckedUpdateManyWithoutBookingListNestedInput = {
    create?: XOR<CancelBookingCreateWithoutBookingListInput, CancelBookingUncheckedCreateWithoutBookingListInput> | CancelBookingCreateWithoutBookingListInput[] | CancelBookingUncheckedCreateWithoutBookingListInput[]
    connectOrCreate?: CancelBookingCreateOrConnectWithoutBookingListInput | CancelBookingCreateOrConnectWithoutBookingListInput[]
    upsert?: CancelBookingUpsertWithWhereUniqueWithoutBookingListInput | CancelBookingUpsertWithWhereUniqueWithoutBookingListInput[]
    createMany?: CancelBookingCreateManyBookingListInputEnvelope
    set?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    disconnect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    delete?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    connect?: CancelBookingWhereUniqueInput | CancelBookingWhereUniqueInput[]
    update?: CancelBookingUpdateWithWhereUniqueWithoutBookingListInput | CancelBookingUpdateWithWhereUniqueWithoutBookingListInput[]
    updateMany?: CancelBookingUpdateManyWithWhereWithoutBookingListInput | CancelBookingUpdateManyWithWhereWithoutBookingListInput[]
    deleteMany?: CancelBookingScalarWhereInput | CancelBookingScalarWhereInput[]
  }

  export type BookingListCreateNestedOneWithoutAccessListsInput = {
    create?: XOR<BookingListCreateWithoutAccessListsInput, BookingListUncheckedCreateWithoutAccessListsInput>
    connectOrCreate?: BookingListCreateOrConnectWithoutAccessListsInput
    connect?: BookingListWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutAccessListsInput = {
    create?: XOR<BookingCreateWithoutAccessListsInput, BookingUncheckedCreateWithoutAccessListsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAccessListsInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingListUpdateOneRequiredWithoutAccessListsNestedInput = {
    create?: XOR<BookingListCreateWithoutAccessListsInput, BookingListUncheckedCreateWithoutAccessListsInput>
    connectOrCreate?: BookingListCreateOrConnectWithoutAccessListsInput
    upsert?: BookingListUpsertWithoutAccessListsInput
    connect?: BookingListWhereUniqueInput
    update?: XOR<XOR<BookingListUpdateToOneWithWhereWithoutAccessListsInput, BookingListUpdateWithoutAccessListsInput>, BookingListUncheckedUpdateWithoutAccessListsInput>
  }

  export type BookingUpdateOneRequiredWithoutAccessListsNestedInput = {
    create?: XOR<BookingCreateWithoutAccessListsInput, BookingUncheckedCreateWithoutAccessListsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAccessListsInput
    upsert?: BookingUpsertWithoutAccessListsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutAccessListsInput, BookingUpdateWithoutAccessListsInput>, BookingUncheckedUpdateWithoutAccessListsInput>
  }

  export type BookingListCreateNestedOneWithoutDenyBookingsInput = {
    create?: XOR<BookingListCreateWithoutDenyBookingsInput, BookingListUncheckedCreateWithoutDenyBookingsInput>
    connectOrCreate?: BookingListCreateOrConnectWithoutDenyBookingsInput
    connect?: BookingListWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutDenyBookingsInput = {
    create?: XOR<BookingCreateWithoutDenyBookingsInput, BookingUncheckedCreateWithoutDenyBookingsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutDenyBookingsInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingListUpdateOneRequiredWithoutDenyBookingsNestedInput = {
    create?: XOR<BookingListCreateWithoutDenyBookingsInput, BookingListUncheckedCreateWithoutDenyBookingsInput>
    connectOrCreate?: BookingListCreateOrConnectWithoutDenyBookingsInput
    upsert?: BookingListUpsertWithoutDenyBookingsInput
    connect?: BookingListWhereUniqueInput
    update?: XOR<XOR<BookingListUpdateToOneWithWhereWithoutDenyBookingsInput, BookingListUpdateWithoutDenyBookingsInput>, BookingListUncheckedUpdateWithoutDenyBookingsInput>
  }

  export type BookingUpdateOneRequiredWithoutDenyBookingsNestedInput = {
    create?: XOR<BookingCreateWithoutDenyBookingsInput, BookingUncheckedCreateWithoutDenyBookingsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutDenyBookingsInput
    upsert?: BookingUpsertWithoutDenyBookingsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutDenyBookingsInput, BookingUpdateWithoutDenyBookingsInput>, BookingUncheckedUpdateWithoutDenyBookingsInput>
  }

  export type BookingListCreateNestedOneWithoutCancelBookingsInput = {
    create?: XOR<BookingListCreateWithoutCancelBookingsInput, BookingListUncheckedCreateWithoutCancelBookingsInput>
    connectOrCreate?: BookingListCreateOrConnectWithoutCancelBookingsInput
    connect?: BookingListWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutCancelBookingsInput = {
    create?: XOR<BookingCreateWithoutCancelBookingsInput, BookingUncheckedCreateWithoutCancelBookingsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCancelBookingsInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingListUpdateOneRequiredWithoutCancelBookingsNestedInput = {
    create?: XOR<BookingListCreateWithoutCancelBookingsInput, BookingListUncheckedCreateWithoutCancelBookingsInput>
    connectOrCreate?: BookingListCreateOrConnectWithoutCancelBookingsInput
    upsert?: BookingListUpsertWithoutCancelBookingsInput
    connect?: BookingListWhereUniqueInput
    update?: XOR<XOR<BookingListUpdateToOneWithWhereWithoutCancelBookingsInput, BookingListUpdateWithoutCancelBookingsInput>, BookingListUncheckedUpdateWithoutCancelBookingsInput>
  }

  export type BookingUpdateOneRequiredWithoutCancelBookingsNestedInput = {
    create?: XOR<BookingCreateWithoutCancelBookingsInput, BookingUncheckedCreateWithoutCancelBookingsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCancelBookingsInput
    upsert?: BookingUpsertWithoutCancelBookingsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutCancelBookingsInput, BookingUpdateWithoutCancelBookingsInput>, BookingUncheckedUpdateWithoutCancelBookingsInput>
  }

  export type EmployeeCreateNestedOneWithoutLockListsInput = {
    create?: XOR<EmployeeCreateWithoutLockListsInput, EmployeeUncheckedCreateWithoutLockListsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLockListsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutLockListsNestedInput = {
    create?: XOR<EmployeeCreateWithoutLockListsInput, EmployeeUncheckedCreateWithoutLockListsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLockListsInput
    upsert?: EmployeeUpsertWithoutLockListsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutLockListsInput, EmployeeUpdateWithoutLockListsInput>, EmployeeUncheckedUpdateWithoutLockListsInput>
  }

  export type EmployeeCreateNestedOneWithoutUnlockListsInput = {
    create?: XOR<EmployeeCreateWithoutUnlockListsInput, EmployeeUncheckedCreateWithoutUnlockListsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUnlockListsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutUnlockListsNestedInput = {
    create?: XOR<EmployeeCreateWithoutUnlockListsInput, EmployeeUncheckedCreateWithoutUnlockListsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUnlockListsInput
    upsert?: EmployeeUpsertWithoutUnlockListsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUnlockListsInput, EmployeeUpdateWithoutUnlockListsInput>, EmployeeUncheckedUpdateWithoutUnlockListsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmployeeCreateWithoutDepartmentInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    position: PositionCreateNestedOneWithoutEmployeesInput
    status: EmployeeStatusCreateNestedOneWithoutEmployeesInput
    bookings?: BookingCreateNestedManyWithoutEmployeeInput
    lockLists?: LockListCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDepartmentInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    PNo: number
    SNo: number
    bookings?: BookingUncheckedCreateNestedManyWithoutEmployeeInput
    lockLists?: LockListUncheckedCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeCreateManyDepartmentInputEnvelope = {
    data: EmployeeCreateManyDepartmentInput | EmployeeCreateManyDepartmentInput[]
  }

  export type EmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutDepartmentInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    ENumber?: IntFilter<"Employee"> | number
    FName?: StringFilter<"Employee"> | string
    LName?: StringFilter<"Employee"> | string
    score?: IntFilter<"Employee"> | number
    Email?: StringFilter<"Employee"> | string
    username?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    DNo?: IntFilter<"Employee"> | number
    PNo?: IntFilter<"Employee"> | number
    SNo?: IntFilter<"Employee"> | number
  }

  export type EmployeeCreateWithoutPositionInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    status: EmployeeStatusCreateNestedOneWithoutEmployeesInput
    bookings?: BookingCreateNestedManyWithoutEmployeeInput
    lockLists?: LockListCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutPositionInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    DNo: number
    SNo: number
    bookings?: BookingUncheckedCreateNestedManyWithoutEmployeeInput
    lockLists?: LockListUncheckedCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutPositionInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput>
  }

  export type EmployeeCreateManyPositionInputEnvelope = {
    data: EmployeeCreateManyPositionInput | EmployeeCreateManyPositionInput[]
  }

  export type EmployeeUpsertWithWhereUniqueWithoutPositionInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutPositionInput, EmployeeUncheckedUpdateWithoutPositionInput>
    create: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutPositionInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutPositionInput, EmployeeUncheckedUpdateWithoutPositionInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutPositionInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutPositionInput>
  }

  export type RoomCreateWithoutRoomStatusInput = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    floor: FloorCreateNestedOneWithoutRoomsInput
    bookingLists?: BookingListCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomStatusInput = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    FlNo: number
    bookingLists?: BookingListUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomStatusInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomStatusInput, RoomUncheckedCreateWithoutRoomStatusInput>
  }

  export type RoomCreateManyRoomStatusInputEnvelope = {
    data: RoomCreateManyRoomStatusInput | RoomCreateManyRoomStatusInput[]
  }

  export type RoomUpsertWithWhereUniqueWithoutRoomStatusInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutRoomStatusInput, RoomUncheckedUpdateWithoutRoomStatusInput>
    create: XOR<RoomCreateWithoutRoomStatusInput, RoomUncheckedCreateWithoutRoomStatusInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutRoomStatusInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutRoomStatusInput, RoomUncheckedUpdateWithoutRoomStatusInput>
  }

  export type RoomUpdateManyWithWhereWithoutRoomStatusInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutRoomStatusInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    RNumber?: IntFilter<"Room"> | number
    RName?: StringFilter<"Room"> | string
    Capacity?: IntFilter<"Room"> | number
    VIP?: IntFilter<"Room"> | number
    FlNo?: IntFilter<"Room"> | number
    SNo?: IntFilter<"Room"> | number
  }

  export type EmployeeCreateWithoutStatusInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    bookings?: BookingCreateNestedManyWithoutEmployeeInput
    lockLists?: LockListCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutStatusInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    DNo: number
    PNo: number
    bookings?: BookingUncheckedCreateNestedManyWithoutEmployeeInput
    lockLists?: LockListUncheckedCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutStatusInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutStatusInput, EmployeeUncheckedCreateWithoutStatusInput>
  }

  export type EmployeeCreateManyStatusInputEnvelope = {
    data: EmployeeCreateManyStatusInput | EmployeeCreateManyStatusInput[]
  }

  export type EmployeeUpsertWithWhereUniqueWithoutStatusInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutStatusInput, EmployeeUncheckedUpdateWithoutStatusInput>
    create: XOR<EmployeeCreateWithoutStatusInput, EmployeeUncheckedCreateWithoutStatusInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutStatusInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutStatusInput, EmployeeUncheckedUpdateWithoutStatusInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutStatusInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutStatusInput>
  }

  export type BookingListCreateWithoutStatusInput = {
    BKLNumber: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    booking: BookingCreateNestedOneWithoutBookingListsInput
    room: RoomCreateNestedOneWithoutBookingListsInput
    accessLists?: AccessListCreateNestedManyWithoutBookingListInput
    denyBookings?: DenyBookingCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingCreateNestedManyWithoutBookingListInput
  }

  export type BookingListUncheckedCreateWithoutStatusInput = {
    BKLNumber: number
    BKLNo: number
    RNo: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    accessLists?: AccessListUncheckedCreateNestedManyWithoutBookingListInput
    denyBookings?: DenyBookingUncheckedCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingUncheckedCreateNestedManyWithoutBookingListInput
  }

  export type BookingListCreateOrConnectWithoutStatusInput = {
    where: BookingListWhereUniqueInput
    create: XOR<BookingListCreateWithoutStatusInput, BookingListUncheckedCreateWithoutStatusInput>
  }

  export type BookingListCreateManyStatusInputEnvelope = {
    data: BookingListCreateManyStatusInput | BookingListCreateManyStatusInput[]
  }

  export type BookingListUpsertWithWhereUniqueWithoutStatusInput = {
    where: BookingListWhereUniqueInput
    update: XOR<BookingListUpdateWithoutStatusInput, BookingListUncheckedUpdateWithoutStatusInput>
    create: XOR<BookingListCreateWithoutStatusInput, BookingListUncheckedCreateWithoutStatusInput>
  }

  export type BookingListUpdateWithWhereUniqueWithoutStatusInput = {
    where: BookingListWhereUniqueInput
    data: XOR<BookingListUpdateWithoutStatusInput, BookingListUncheckedUpdateWithoutStatusInput>
  }

  export type BookingListUpdateManyWithWhereWithoutStatusInput = {
    where: BookingListScalarWhereInput
    data: XOR<BookingListUpdateManyMutationInput, BookingListUncheckedUpdateManyWithoutStatusInput>
  }

  export type BookingListScalarWhereInput = {
    AND?: BookingListScalarWhereInput | BookingListScalarWhereInput[]
    OR?: BookingListScalarWhereInput[]
    NOT?: BookingListScalarWhereInput | BookingListScalarWhereInput[]
    BKLNumber?: IntFilter<"BookingList"> | number
    BKLNo?: IntFilter<"BookingList"> | number
    RNo?: IntFilter<"BookingList"> | number
    Start_Date?: DateTimeFilter<"BookingList"> | Date | string
    Start_Time?: StringFilter<"BookingList"> | string
    End_Time?: StringFilter<"BookingList"> | string
    details?: StringFilter<"BookingList"> | string
    QR?: StringFilter<"BookingList"> | string
    SNo?: IntFilter<"BookingList"> | number
  }

  export type FloorCreateWithoutBuildingInput = {
    FlNumber: number
    FlName: string
    rooms?: RoomCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateWithoutBuildingInput = {
    FlNumber: number
    FlName: string
    rooms?: RoomUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorCreateOrConnectWithoutBuildingInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput>
  }

  export type FloorCreateManyBuildingInputEnvelope = {
    data: FloorCreateManyBuildingInput | FloorCreateManyBuildingInput[]
  }

  export type FloorUpsertWithWhereUniqueWithoutBuildingInput = {
    where: FloorWhereUniqueInput
    update: XOR<FloorUpdateWithoutBuildingInput, FloorUncheckedUpdateWithoutBuildingInput>
    create: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput>
  }

  export type FloorUpdateWithWhereUniqueWithoutBuildingInput = {
    where: FloorWhereUniqueInput
    data: XOR<FloorUpdateWithoutBuildingInput, FloorUncheckedUpdateWithoutBuildingInput>
  }

  export type FloorUpdateManyWithWhereWithoutBuildingInput = {
    where: FloorScalarWhereInput
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyWithoutBuildingInput>
  }

  export type FloorScalarWhereInput = {
    AND?: FloorScalarWhereInput | FloorScalarWhereInput[]
    OR?: FloorScalarWhereInput[]
    NOT?: FloorScalarWhereInput | FloorScalarWhereInput[]
    FlNumber?: IntFilter<"Floor"> | number
    FlName?: StringFilter<"Floor"> | string
    BNo?: IntFilter<"Floor"> | number
  }

  export type BuildingCreateWithoutFloorsInput = {
    BNumber: number
    BName: string
  }

  export type BuildingUncheckedCreateWithoutFloorsInput = {
    BNumber: number
    BName: string
  }

  export type BuildingCreateOrConnectWithoutFloorsInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
  }

  export type RoomCreateWithoutFloorInput = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    roomStatus: RoomStatusCreateNestedOneWithoutRoomsInput
    bookingLists?: BookingListCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutFloorInput = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    SNo: number
    bookingLists?: BookingListUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutFloorInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput>
  }

  export type RoomCreateManyFloorInputEnvelope = {
    data: RoomCreateManyFloorInput | RoomCreateManyFloorInput[]
  }

  export type BuildingUpsertWithoutFloorsInput = {
    update: XOR<BuildingUpdateWithoutFloorsInput, BuildingUncheckedUpdateWithoutFloorsInput>
    create: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
    where?: BuildingWhereInput
  }

  export type BuildingUpdateToOneWithWhereWithoutFloorsInput = {
    where?: BuildingWhereInput
    data: XOR<BuildingUpdateWithoutFloorsInput, BuildingUncheckedUpdateWithoutFloorsInput>
  }

  export type BuildingUpdateWithoutFloorsInput = {
    BNumber?: IntFieldUpdateOperationsInput | number
    BName?: StringFieldUpdateOperationsInput | string
  }

  export type BuildingUncheckedUpdateWithoutFloorsInput = {
    BNumber?: IntFieldUpdateOperationsInput | number
    BName?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUpsertWithWhereUniqueWithoutFloorInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutFloorInput, RoomUncheckedUpdateWithoutFloorInput>
    create: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutFloorInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutFloorInput, RoomUncheckedUpdateWithoutFloorInput>
  }

  export type RoomUpdateManyWithWhereWithoutFloorInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutFloorInput>
  }

  export type RoomStatusCreateWithoutRoomsInput = {
    SNumber: number
    SName: string
  }

  export type RoomStatusUncheckedCreateWithoutRoomsInput = {
    SNumber: number
    SName: string
  }

  export type RoomStatusCreateOrConnectWithoutRoomsInput = {
    where: RoomStatusWhereUniqueInput
    create: XOR<RoomStatusCreateWithoutRoomsInput, RoomStatusUncheckedCreateWithoutRoomsInput>
  }

  export type FloorCreateWithoutRoomsInput = {
    FlNumber: number
    FlName: string
    building: BuildingCreateNestedOneWithoutFloorsInput
  }

  export type FloorUncheckedCreateWithoutRoomsInput = {
    FlNumber: number
    FlName: string
    BNo: number
  }

  export type FloorCreateOrConnectWithoutRoomsInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
  }

  export type BookingListCreateWithoutRoomInput = {
    BKLNumber: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    booking: BookingCreateNestedOneWithoutBookingListsInput
    status: BookingStatusCreateNestedOneWithoutBookingListsInput
    accessLists?: AccessListCreateNestedManyWithoutBookingListInput
    denyBookings?: DenyBookingCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingCreateNestedManyWithoutBookingListInput
  }

  export type BookingListUncheckedCreateWithoutRoomInput = {
    BKLNumber: number
    BKLNo: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    SNo: number
    accessLists?: AccessListUncheckedCreateNestedManyWithoutBookingListInput
    denyBookings?: DenyBookingUncheckedCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingUncheckedCreateNestedManyWithoutBookingListInput
  }

  export type BookingListCreateOrConnectWithoutRoomInput = {
    where: BookingListWhereUniqueInput
    create: XOR<BookingListCreateWithoutRoomInput, BookingListUncheckedCreateWithoutRoomInput>
  }

  export type BookingListCreateManyRoomInputEnvelope = {
    data: BookingListCreateManyRoomInput | BookingListCreateManyRoomInput[]
  }

  export type RoomStatusUpsertWithoutRoomsInput = {
    update: XOR<RoomStatusUpdateWithoutRoomsInput, RoomStatusUncheckedUpdateWithoutRoomsInput>
    create: XOR<RoomStatusCreateWithoutRoomsInput, RoomStatusUncheckedCreateWithoutRoomsInput>
    where?: RoomStatusWhereInput
  }

  export type RoomStatusUpdateToOneWithWhereWithoutRoomsInput = {
    where?: RoomStatusWhereInput
    data: XOR<RoomStatusUpdateWithoutRoomsInput, RoomStatusUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomStatusUpdateWithoutRoomsInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type RoomStatusUncheckedUpdateWithoutRoomsInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type FloorUpsertWithoutRoomsInput = {
    update: XOR<FloorUpdateWithoutRoomsInput, FloorUncheckedUpdateWithoutRoomsInput>
    create: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    where?: FloorWhereInput
  }

  export type FloorUpdateToOneWithWhereWithoutRoomsInput = {
    where?: FloorWhereInput
    data: XOR<FloorUpdateWithoutRoomsInput, FloorUncheckedUpdateWithoutRoomsInput>
  }

  export type FloorUpdateWithoutRoomsInput = {
    FlNumber?: IntFieldUpdateOperationsInput | number
    FlName?: StringFieldUpdateOperationsInput | string
    building?: BuildingUpdateOneRequiredWithoutFloorsNestedInput
  }

  export type FloorUncheckedUpdateWithoutRoomsInput = {
    FlNumber?: IntFieldUpdateOperationsInput | number
    FlName?: StringFieldUpdateOperationsInput | string
    BNo?: IntFieldUpdateOperationsInput | number
  }

  export type BookingListUpsertWithWhereUniqueWithoutRoomInput = {
    where: BookingListWhereUniqueInput
    update: XOR<BookingListUpdateWithoutRoomInput, BookingListUncheckedUpdateWithoutRoomInput>
    create: XOR<BookingListCreateWithoutRoomInput, BookingListUncheckedCreateWithoutRoomInput>
  }

  export type BookingListUpdateWithWhereUniqueWithoutRoomInput = {
    where: BookingListWhereUniqueInput
    data: XOR<BookingListUpdateWithoutRoomInput, BookingListUncheckedUpdateWithoutRoomInput>
  }

  export type BookingListUpdateManyWithWhereWithoutRoomInput = {
    where: BookingListScalarWhereInput
    data: XOR<BookingListUpdateManyMutationInput, BookingListUncheckedUpdateManyWithoutRoomInput>
  }

  export type DepartmentCreateWithoutEmployeesInput = {
    DNumber: number
    DName: string
  }

  export type DepartmentUncheckedCreateWithoutEmployeesInput = {
    DNumber: number
    DName: string
  }

  export type DepartmentCreateOrConnectWithoutEmployeesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
  }

  export type PositionCreateWithoutEmployeesInput = {
    PNumber: number
    PName: string
    AccessNo: string
  }

  export type PositionUncheckedCreateWithoutEmployeesInput = {
    PNumber: number
    PName: string
    AccessNo: string
  }

  export type PositionCreateOrConnectWithoutEmployeesInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutEmployeesInput, PositionUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeStatusCreateWithoutEmployeesInput = {
    SNumber: number
    SName: string
  }

  export type EmployeeStatusUncheckedCreateWithoutEmployeesInput = {
    SNumber: number
    SName: string
  }

  export type EmployeeStatusCreateOrConnectWithoutEmployeesInput = {
    where: EmployeeStatusWhereUniqueInput
    create: XOR<EmployeeStatusCreateWithoutEmployeesInput, EmployeeStatusUncheckedCreateWithoutEmployeesInput>
  }

  export type BookingCreateWithoutEmployeeInput = {
    BKNumber: number
    BKDate: Date | string
    bookingLists?: BookingListCreateNestedManyWithoutBookingInput
    accessLists?: AccessListCreateNestedManyWithoutBookingInput
    denyBookings?: DenyBookingCreateNestedManyWithoutBookingInput
    cancelBookings?: CancelBookingCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutEmployeeInput = {
    BKNumber: number
    BKDate: Date | string
    bookingLists?: BookingListUncheckedCreateNestedManyWithoutBookingInput
    accessLists?: AccessListUncheckedCreateNestedManyWithoutBookingInput
    denyBookings?: DenyBookingUncheckedCreateNestedManyWithoutBookingInput
    cancelBookings?: CancelBookingUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutEmployeeInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput>
  }

  export type BookingCreateManyEmployeeInputEnvelope = {
    data: BookingCreateManyEmployeeInput | BookingCreateManyEmployeeInput[]
  }

  export type LockListCreateWithoutEmployeeInput = {
    LKNo: number
    LKDate: Date | string
  }

  export type LockListUncheckedCreateWithoutEmployeeInput = {
    LKNo: number
    LKDate: Date | string
  }

  export type LockListCreateOrConnectWithoutEmployeeInput = {
    where: LockListWhereUniqueInput
    create: XOR<LockListCreateWithoutEmployeeInput, LockListUncheckedCreateWithoutEmployeeInput>
  }

  export type LockListCreateManyEmployeeInputEnvelope = {
    data: LockListCreateManyEmployeeInput | LockListCreateManyEmployeeInput[]
  }

  export type UnlockListCreateWithoutEmployeeInput = {
    ULKNo: number
    LKDate: Date | string
  }

  export type UnlockListUncheckedCreateWithoutEmployeeInput = {
    ULKNo: number
    LKDate: Date | string
  }

  export type UnlockListCreateOrConnectWithoutEmployeeInput = {
    where: UnlockListWhereUniqueInput
    create: XOR<UnlockListCreateWithoutEmployeeInput, UnlockListUncheckedCreateWithoutEmployeeInput>
  }

  export type UnlockListCreateManyEmployeeInputEnvelope = {
    data: UnlockListCreateManyEmployeeInput | UnlockListCreateManyEmployeeInput[]
  }

  export type DepartmentUpsertWithoutEmployeesInput = {
    update: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartmentUpdateWithoutEmployeesInput = {
    DNumber?: IntFieldUpdateOperationsInput | number
    DName?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateWithoutEmployeesInput = {
    DNumber?: IntFieldUpdateOperationsInput | number
    DName?: StringFieldUpdateOperationsInput | string
  }

  export type PositionUpsertWithoutEmployeesInput = {
    update: XOR<PositionUpdateWithoutEmployeesInput, PositionUncheckedUpdateWithoutEmployeesInput>
    create: XOR<PositionCreateWithoutEmployeesInput, PositionUncheckedCreateWithoutEmployeesInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutEmployeesInput, PositionUncheckedUpdateWithoutEmployeesInput>
  }

  export type PositionUpdateWithoutEmployeesInput = {
    PNumber?: IntFieldUpdateOperationsInput | number
    PName?: StringFieldUpdateOperationsInput | string
    AccessNo?: StringFieldUpdateOperationsInput | string
  }

  export type PositionUncheckedUpdateWithoutEmployeesInput = {
    PNumber?: IntFieldUpdateOperationsInput | number
    PName?: StringFieldUpdateOperationsInput | string
    AccessNo?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeStatusUpsertWithoutEmployeesInput = {
    update: XOR<EmployeeStatusUpdateWithoutEmployeesInput, EmployeeStatusUncheckedUpdateWithoutEmployeesInput>
    create: XOR<EmployeeStatusCreateWithoutEmployeesInput, EmployeeStatusUncheckedCreateWithoutEmployeesInput>
    where?: EmployeeStatusWhereInput
  }

  export type EmployeeStatusUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: EmployeeStatusWhereInput
    data: XOR<EmployeeStatusUpdateWithoutEmployeesInput, EmployeeStatusUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeStatusUpdateWithoutEmployeesInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeStatusUncheckedUpdateWithoutEmployeesInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutEmployeeInput, BookingUncheckedUpdateWithoutEmployeeInput>
    create: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutEmployeeInput, BookingUncheckedUpdateWithoutEmployeeInput>
  }

  export type BookingUpdateManyWithWhereWithoutEmployeeInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    BKNumber?: IntFilter<"Booking"> | number
    BKDate?: DateTimeFilter<"Booking"> | Date | string
    ENo?: IntFilter<"Booking"> | number
  }

  export type LockListUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: LockListWhereUniqueInput
    update: XOR<LockListUpdateWithoutEmployeeInput, LockListUncheckedUpdateWithoutEmployeeInput>
    create: XOR<LockListCreateWithoutEmployeeInput, LockListUncheckedCreateWithoutEmployeeInput>
  }

  export type LockListUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: LockListWhereUniqueInput
    data: XOR<LockListUpdateWithoutEmployeeInput, LockListUncheckedUpdateWithoutEmployeeInput>
  }

  export type LockListUpdateManyWithWhereWithoutEmployeeInput = {
    where: LockListScalarWhereInput
    data: XOR<LockListUpdateManyMutationInput, LockListUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type LockListScalarWhereInput = {
    AND?: LockListScalarWhereInput | LockListScalarWhereInput[]
    OR?: LockListScalarWhereInput[]
    NOT?: LockListScalarWhereInput | LockListScalarWhereInput[]
    LKNo?: IntFilter<"LockList"> | number
    ENo?: IntFilter<"LockList"> | number
    LKDate?: DateTimeFilter<"LockList"> | Date | string
  }

  export type UnlockListUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: UnlockListWhereUniqueInput
    update: XOR<UnlockListUpdateWithoutEmployeeInput, UnlockListUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UnlockListCreateWithoutEmployeeInput, UnlockListUncheckedCreateWithoutEmployeeInput>
  }

  export type UnlockListUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: UnlockListWhereUniqueInput
    data: XOR<UnlockListUpdateWithoutEmployeeInput, UnlockListUncheckedUpdateWithoutEmployeeInput>
  }

  export type UnlockListUpdateManyWithWhereWithoutEmployeeInput = {
    where: UnlockListScalarWhereInput
    data: XOR<UnlockListUpdateManyMutationInput, UnlockListUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type UnlockListScalarWhereInput = {
    AND?: UnlockListScalarWhereInput | UnlockListScalarWhereInput[]
    OR?: UnlockListScalarWhereInput[]
    NOT?: UnlockListScalarWhereInput | UnlockListScalarWhereInput[]
    ULKNo?: IntFilter<"UnlockList"> | number
    ENo?: IntFilter<"UnlockList"> | number
    LKDate?: DateTimeFilter<"UnlockList"> | Date | string
  }

  export type EmployeeCreateWithoutBookingsInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    status: EmployeeStatusCreateNestedOneWithoutEmployeesInput
    lockLists?: LockListCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutBookingsInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    DNo: number
    PNo: number
    SNo: number
    lockLists?: LockListUncheckedCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutBookingsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutBookingsInput, EmployeeUncheckedCreateWithoutBookingsInput>
  }

  export type BookingListCreateWithoutBookingInput = {
    BKLNumber: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    room: RoomCreateNestedOneWithoutBookingListsInput
    status: BookingStatusCreateNestedOneWithoutBookingListsInput
    accessLists?: AccessListCreateNestedManyWithoutBookingListInput
    denyBookings?: DenyBookingCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingCreateNestedManyWithoutBookingListInput
  }

  export type BookingListUncheckedCreateWithoutBookingInput = {
    BKLNumber: number
    RNo: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    SNo: number
    accessLists?: AccessListUncheckedCreateNestedManyWithoutBookingListInput
    denyBookings?: DenyBookingUncheckedCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingUncheckedCreateNestedManyWithoutBookingListInput
  }

  export type BookingListCreateOrConnectWithoutBookingInput = {
    where: BookingListWhereUniqueInput
    create: XOR<BookingListCreateWithoutBookingInput, BookingListUncheckedCreateWithoutBookingInput>
  }

  export type BookingListCreateManyBookingInputEnvelope = {
    data: BookingListCreateManyBookingInput | BookingListCreateManyBookingInput[]
  }

  export type AccessListCreateWithoutBookingInput = {
    ACNumber: number
    AccessTime: string
    bookingList: BookingListCreateNestedOneWithoutAccessListsInput
  }

  export type AccessListUncheckedCreateWithoutBookingInput = {
    ACNumber: number
    BKLNo: number
    AccessTime: string
  }

  export type AccessListCreateOrConnectWithoutBookingInput = {
    where: AccessListWhereUniqueInput
    create: XOR<AccessListCreateWithoutBookingInput, AccessListUncheckedCreateWithoutBookingInput>
  }

  export type AccessListCreateManyBookingInputEnvelope = {
    data: AccessListCreateManyBookingInput | AccessListCreateManyBookingInput[]
  }

  export type DenyBookingCreateWithoutBookingInput = {
    DNNumber: number
    details: string
    bookingList: BookingListCreateNestedOneWithoutDenyBookingsInput
  }

  export type DenyBookingUncheckedCreateWithoutBookingInput = {
    DNNumber: number
    BKLNo: number
    details: string
  }

  export type DenyBookingCreateOrConnectWithoutBookingInput = {
    where: DenyBookingWhereUniqueInput
    create: XOR<DenyBookingCreateWithoutBookingInput, DenyBookingUncheckedCreateWithoutBookingInput>
  }

  export type DenyBookingCreateManyBookingInputEnvelope = {
    data: DenyBookingCreateManyBookingInput | DenyBookingCreateManyBookingInput[]
  }

  export type CancelBookingCreateWithoutBookingInput = {
    CCNumber: number
    details: string
    bookingList: BookingListCreateNestedOneWithoutCancelBookingsInput
  }

  export type CancelBookingUncheckedCreateWithoutBookingInput = {
    CCNumber: number
    BKLNo: number
    details: string
  }

  export type CancelBookingCreateOrConnectWithoutBookingInput = {
    where: CancelBookingWhereUniqueInput
    create: XOR<CancelBookingCreateWithoutBookingInput, CancelBookingUncheckedCreateWithoutBookingInput>
  }

  export type CancelBookingCreateManyBookingInputEnvelope = {
    data: CancelBookingCreateManyBookingInput | CancelBookingCreateManyBookingInput[]
  }

  export type EmployeeUpsertWithoutBookingsInput = {
    update: XOR<EmployeeUpdateWithoutBookingsInput, EmployeeUncheckedUpdateWithoutBookingsInput>
    create: XOR<EmployeeCreateWithoutBookingsInput, EmployeeUncheckedCreateWithoutBookingsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutBookingsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutBookingsInput, EmployeeUncheckedUpdateWithoutBookingsInput>
  }

  export type EmployeeUpdateWithoutBookingsInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    status?: EmployeeStatusUpdateOneRequiredWithoutEmployeesNestedInput
    lockLists?: LockListUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutBookingsInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DNo?: IntFieldUpdateOperationsInput | number
    PNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
    lockLists?: LockListUncheckedUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type BookingListUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingListWhereUniqueInput
    update: XOR<BookingListUpdateWithoutBookingInput, BookingListUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingListCreateWithoutBookingInput, BookingListUncheckedCreateWithoutBookingInput>
  }

  export type BookingListUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingListWhereUniqueInput
    data: XOR<BookingListUpdateWithoutBookingInput, BookingListUncheckedUpdateWithoutBookingInput>
  }

  export type BookingListUpdateManyWithWhereWithoutBookingInput = {
    where: BookingListScalarWhereInput
    data: XOR<BookingListUpdateManyMutationInput, BookingListUncheckedUpdateManyWithoutBookingInput>
  }

  export type AccessListUpsertWithWhereUniqueWithoutBookingInput = {
    where: AccessListWhereUniqueInput
    update: XOR<AccessListUpdateWithoutBookingInput, AccessListUncheckedUpdateWithoutBookingInput>
    create: XOR<AccessListCreateWithoutBookingInput, AccessListUncheckedCreateWithoutBookingInput>
  }

  export type AccessListUpdateWithWhereUniqueWithoutBookingInput = {
    where: AccessListWhereUniqueInput
    data: XOR<AccessListUpdateWithoutBookingInput, AccessListUncheckedUpdateWithoutBookingInput>
  }

  export type AccessListUpdateManyWithWhereWithoutBookingInput = {
    where: AccessListScalarWhereInput
    data: XOR<AccessListUpdateManyMutationInput, AccessListUncheckedUpdateManyWithoutBookingInput>
  }

  export type AccessListScalarWhereInput = {
    AND?: AccessListScalarWhereInput | AccessListScalarWhereInput[]
    OR?: AccessListScalarWhereInput[]
    NOT?: AccessListScalarWhereInput | AccessListScalarWhereInput[]
    ACNumber?: IntFilter<"AccessList"> | number
    BKLNo?: IntFilter<"AccessList"> | number
    BKNo?: IntFilter<"AccessList"> | number
    AccessTime?: StringFilter<"AccessList"> | string
  }

  export type DenyBookingUpsertWithWhereUniqueWithoutBookingInput = {
    where: DenyBookingWhereUniqueInput
    update: XOR<DenyBookingUpdateWithoutBookingInput, DenyBookingUncheckedUpdateWithoutBookingInput>
    create: XOR<DenyBookingCreateWithoutBookingInput, DenyBookingUncheckedCreateWithoutBookingInput>
  }

  export type DenyBookingUpdateWithWhereUniqueWithoutBookingInput = {
    where: DenyBookingWhereUniqueInput
    data: XOR<DenyBookingUpdateWithoutBookingInput, DenyBookingUncheckedUpdateWithoutBookingInput>
  }

  export type DenyBookingUpdateManyWithWhereWithoutBookingInput = {
    where: DenyBookingScalarWhereInput
    data: XOR<DenyBookingUpdateManyMutationInput, DenyBookingUncheckedUpdateManyWithoutBookingInput>
  }

  export type DenyBookingScalarWhereInput = {
    AND?: DenyBookingScalarWhereInput | DenyBookingScalarWhereInput[]
    OR?: DenyBookingScalarWhereInput[]
    NOT?: DenyBookingScalarWhereInput | DenyBookingScalarWhereInput[]
    DNNumber?: IntFilter<"DenyBooking"> | number
    BKLNo?: IntFilter<"DenyBooking"> | number
    BKNo?: IntFilter<"DenyBooking"> | number
    details?: StringFilter<"DenyBooking"> | string
  }

  export type CancelBookingUpsertWithWhereUniqueWithoutBookingInput = {
    where: CancelBookingWhereUniqueInput
    update: XOR<CancelBookingUpdateWithoutBookingInput, CancelBookingUncheckedUpdateWithoutBookingInput>
    create: XOR<CancelBookingCreateWithoutBookingInput, CancelBookingUncheckedCreateWithoutBookingInput>
  }

  export type CancelBookingUpdateWithWhereUniqueWithoutBookingInput = {
    where: CancelBookingWhereUniqueInput
    data: XOR<CancelBookingUpdateWithoutBookingInput, CancelBookingUncheckedUpdateWithoutBookingInput>
  }

  export type CancelBookingUpdateManyWithWhereWithoutBookingInput = {
    where: CancelBookingScalarWhereInput
    data: XOR<CancelBookingUpdateManyMutationInput, CancelBookingUncheckedUpdateManyWithoutBookingInput>
  }

  export type CancelBookingScalarWhereInput = {
    AND?: CancelBookingScalarWhereInput | CancelBookingScalarWhereInput[]
    OR?: CancelBookingScalarWhereInput[]
    NOT?: CancelBookingScalarWhereInput | CancelBookingScalarWhereInput[]
    CCNumber?: IntFilter<"CancelBooking"> | number
    BKLNo?: IntFilter<"CancelBooking"> | number
    BKNo?: IntFilter<"CancelBooking"> | number
    details?: StringFilter<"CancelBooking"> | string
  }

  export type BookingCreateWithoutBookingListsInput = {
    BKNumber: number
    BKDate: Date | string
    employee: EmployeeCreateNestedOneWithoutBookingsInput
    accessLists?: AccessListCreateNestedManyWithoutBookingInput
    denyBookings?: DenyBookingCreateNestedManyWithoutBookingInput
    cancelBookings?: CancelBookingCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutBookingListsInput = {
    BKNumber: number
    BKDate: Date | string
    ENo: number
    accessLists?: AccessListUncheckedCreateNestedManyWithoutBookingInput
    denyBookings?: DenyBookingUncheckedCreateNestedManyWithoutBookingInput
    cancelBookings?: CancelBookingUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutBookingListsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBookingListsInput, BookingUncheckedCreateWithoutBookingListsInput>
  }

  export type RoomCreateWithoutBookingListsInput = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    roomStatus: RoomStatusCreateNestedOneWithoutRoomsInput
    floor: FloorCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutBookingListsInput = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    FlNo: number
    SNo: number
  }

  export type RoomCreateOrConnectWithoutBookingListsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBookingListsInput, RoomUncheckedCreateWithoutBookingListsInput>
  }

  export type BookingStatusCreateWithoutBookingListsInput = {
    SNumber: number
    SName: string
  }

  export type BookingStatusUncheckedCreateWithoutBookingListsInput = {
    SNumber: number
    SName: string
  }

  export type BookingStatusCreateOrConnectWithoutBookingListsInput = {
    where: BookingStatusWhereUniqueInput
    create: XOR<BookingStatusCreateWithoutBookingListsInput, BookingStatusUncheckedCreateWithoutBookingListsInput>
  }

  export type AccessListCreateWithoutBookingListInput = {
    ACNumber: number
    AccessTime: string
    booking: BookingCreateNestedOneWithoutAccessListsInput
  }

  export type AccessListUncheckedCreateWithoutBookingListInput = {
    ACNumber: number
    BKNo: number
    AccessTime: string
  }

  export type AccessListCreateOrConnectWithoutBookingListInput = {
    where: AccessListWhereUniqueInput
    create: XOR<AccessListCreateWithoutBookingListInput, AccessListUncheckedCreateWithoutBookingListInput>
  }

  export type AccessListCreateManyBookingListInputEnvelope = {
    data: AccessListCreateManyBookingListInput | AccessListCreateManyBookingListInput[]
  }

  export type DenyBookingCreateWithoutBookingListInput = {
    DNNumber: number
    details: string
    booking: BookingCreateNestedOneWithoutDenyBookingsInput
  }

  export type DenyBookingUncheckedCreateWithoutBookingListInput = {
    DNNumber: number
    BKNo: number
    details: string
  }

  export type DenyBookingCreateOrConnectWithoutBookingListInput = {
    where: DenyBookingWhereUniqueInput
    create: XOR<DenyBookingCreateWithoutBookingListInput, DenyBookingUncheckedCreateWithoutBookingListInput>
  }

  export type DenyBookingCreateManyBookingListInputEnvelope = {
    data: DenyBookingCreateManyBookingListInput | DenyBookingCreateManyBookingListInput[]
  }

  export type CancelBookingCreateWithoutBookingListInput = {
    CCNumber: number
    details: string
    booking: BookingCreateNestedOneWithoutCancelBookingsInput
  }

  export type CancelBookingUncheckedCreateWithoutBookingListInput = {
    CCNumber: number
    BKNo: number
    details: string
  }

  export type CancelBookingCreateOrConnectWithoutBookingListInput = {
    where: CancelBookingWhereUniqueInput
    create: XOR<CancelBookingCreateWithoutBookingListInput, CancelBookingUncheckedCreateWithoutBookingListInput>
  }

  export type CancelBookingCreateManyBookingListInputEnvelope = {
    data: CancelBookingCreateManyBookingListInput | CancelBookingCreateManyBookingListInput[]
  }

  export type BookingUpsertWithoutBookingListsInput = {
    update: XOR<BookingUpdateWithoutBookingListsInput, BookingUncheckedUpdateWithoutBookingListsInput>
    create: XOR<BookingCreateWithoutBookingListsInput, BookingUncheckedCreateWithoutBookingListsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutBookingListsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutBookingListsInput, BookingUncheckedUpdateWithoutBookingListsInput>
  }

  export type BookingUpdateWithoutBookingListsInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutBookingsNestedInput
    accessLists?: AccessListUpdateManyWithoutBookingNestedInput
    denyBookings?: DenyBookingUpdateManyWithoutBookingNestedInput
    cancelBookings?: CancelBookingUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutBookingListsInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ENo?: IntFieldUpdateOperationsInput | number
    accessLists?: AccessListUncheckedUpdateManyWithoutBookingNestedInput
    denyBookings?: DenyBookingUncheckedUpdateManyWithoutBookingNestedInput
    cancelBookings?: CancelBookingUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type RoomUpsertWithoutBookingListsInput = {
    update: XOR<RoomUpdateWithoutBookingListsInput, RoomUncheckedUpdateWithoutBookingListsInput>
    create: XOR<RoomCreateWithoutBookingListsInput, RoomUncheckedCreateWithoutBookingListsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutBookingListsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutBookingListsInput, RoomUncheckedUpdateWithoutBookingListsInput>
  }

  export type RoomUpdateWithoutBookingListsInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
    roomStatus?: RoomStatusUpdateOneRequiredWithoutRoomsNestedInput
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutBookingListsInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
    FlNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
  }

  export type BookingStatusUpsertWithoutBookingListsInput = {
    update: XOR<BookingStatusUpdateWithoutBookingListsInput, BookingStatusUncheckedUpdateWithoutBookingListsInput>
    create: XOR<BookingStatusCreateWithoutBookingListsInput, BookingStatusUncheckedCreateWithoutBookingListsInput>
    where?: BookingStatusWhereInput
  }

  export type BookingStatusUpdateToOneWithWhereWithoutBookingListsInput = {
    where?: BookingStatusWhereInput
    data: XOR<BookingStatusUpdateWithoutBookingListsInput, BookingStatusUncheckedUpdateWithoutBookingListsInput>
  }

  export type BookingStatusUpdateWithoutBookingListsInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type BookingStatusUncheckedUpdateWithoutBookingListsInput = {
    SNumber?: IntFieldUpdateOperationsInput | number
    SName?: StringFieldUpdateOperationsInput | string
  }

  export type AccessListUpsertWithWhereUniqueWithoutBookingListInput = {
    where: AccessListWhereUniqueInput
    update: XOR<AccessListUpdateWithoutBookingListInput, AccessListUncheckedUpdateWithoutBookingListInput>
    create: XOR<AccessListCreateWithoutBookingListInput, AccessListUncheckedCreateWithoutBookingListInput>
  }

  export type AccessListUpdateWithWhereUniqueWithoutBookingListInput = {
    where: AccessListWhereUniqueInput
    data: XOR<AccessListUpdateWithoutBookingListInput, AccessListUncheckedUpdateWithoutBookingListInput>
  }

  export type AccessListUpdateManyWithWhereWithoutBookingListInput = {
    where: AccessListScalarWhereInput
    data: XOR<AccessListUpdateManyMutationInput, AccessListUncheckedUpdateManyWithoutBookingListInput>
  }

  export type DenyBookingUpsertWithWhereUniqueWithoutBookingListInput = {
    where: DenyBookingWhereUniqueInput
    update: XOR<DenyBookingUpdateWithoutBookingListInput, DenyBookingUncheckedUpdateWithoutBookingListInput>
    create: XOR<DenyBookingCreateWithoutBookingListInput, DenyBookingUncheckedCreateWithoutBookingListInput>
  }

  export type DenyBookingUpdateWithWhereUniqueWithoutBookingListInput = {
    where: DenyBookingWhereUniqueInput
    data: XOR<DenyBookingUpdateWithoutBookingListInput, DenyBookingUncheckedUpdateWithoutBookingListInput>
  }

  export type DenyBookingUpdateManyWithWhereWithoutBookingListInput = {
    where: DenyBookingScalarWhereInput
    data: XOR<DenyBookingUpdateManyMutationInput, DenyBookingUncheckedUpdateManyWithoutBookingListInput>
  }

  export type CancelBookingUpsertWithWhereUniqueWithoutBookingListInput = {
    where: CancelBookingWhereUniqueInput
    update: XOR<CancelBookingUpdateWithoutBookingListInput, CancelBookingUncheckedUpdateWithoutBookingListInput>
    create: XOR<CancelBookingCreateWithoutBookingListInput, CancelBookingUncheckedCreateWithoutBookingListInput>
  }

  export type CancelBookingUpdateWithWhereUniqueWithoutBookingListInput = {
    where: CancelBookingWhereUniqueInput
    data: XOR<CancelBookingUpdateWithoutBookingListInput, CancelBookingUncheckedUpdateWithoutBookingListInput>
  }

  export type CancelBookingUpdateManyWithWhereWithoutBookingListInput = {
    where: CancelBookingScalarWhereInput
    data: XOR<CancelBookingUpdateManyMutationInput, CancelBookingUncheckedUpdateManyWithoutBookingListInput>
  }

  export type BookingListCreateWithoutAccessListsInput = {
    BKLNumber: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    booking: BookingCreateNestedOneWithoutBookingListsInput
    room: RoomCreateNestedOneWithoutBookingListsInput
    status: BookingStatusCreateNestedOneWithoutBookingListsInput
    denyBookings?: DenyBookingCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingCreateNestedManyWithoutBookingListInput
  }

  export type BookingListUncheckedCreateWithoutAccessListsInput = {
    BKLNumber: number
    BKLNo: number
    RNo: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    SNo: number
    denyBookings?: DenyBookingUncheckedCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingUncheckedCreateNestedManyWithoutBookingListInput
  }

  export type BookingListCreateOrConnectWithoutAccessListsInput = {
    where: BookingListWhereUniqueInput
    create: XOR<BookingListCreateWithoutAccessListsInput, BookingListUncheckedCreateWithoutAccessListsInput>
  }

  export type BookingCreateWithoutAccessListsInput = {
    BKNumber: number
    BKDate: Date | string
    employee: EmployeeCreateNestedOneWithoutBookingsInput
    bookingLists?: BookingListCreateNestedManyWithoutBookingInput
    denyBookings?: DenyBookingCreateNestedManyWithoutBookingInput
    cancelBookings?: CancelBookingCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutAccessListsInput = {
    BKNumber: number
    BKDate: Date | string
    ENo: number
    bookingLists?: BookingListUncheckedCreateNestedManyWithoutBookingInput
    denyBookings?: DenyBookingUncheckedCreateNestedManyWithoutBookingInput
    cancelBookings?: CancelBookingUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutAccessListsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutAccessListsInput, BookingUncheckedCreateWithoutAccessListsInput>
  }

  export type BookingListUpsertWithoutAccessListsInput = {
    update: XOR<BookingListUpdateWithoutAccessListsInput, BookingListUncheckedUpdateWithoutAccessListsInput>
    create: XOR<BookingListCreateWithoutAccessListsInput, BookingListUncheckedCreateWithoutAccessListsInput>
    where?: BookingListWhereInput
  }

  export type BookingListUpdateToOneWithWhereWithoutAccessListsInput = {
    where?: BookingListWhereInput
    data: XOR<BookingListUpdateWithoutAccessListsInput, BookingListUncheckedUpdateWithoutAccessListsInput>
  }

  export type BookingListUpdateWithoutAccessListsInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutBookingListsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingListsNestedInput
    status?: BookingStatusUpdateOneRequiredWithoutBookingListsNestedInput
    denyBookings?: DenyBookingUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUpdateManyWithoutBookingListNestedInput
  }

  export type BookingListUncheckedUpdateWithoutAccessListsInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    RNo?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    SNo?: IntFieldUpdateOperationsInput | number
    denyBookings?: DenyBookingUncheckedUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUncheckedUpdateManyWithoutBookingListNestedInput
  }

  export type BookingUpsertWithoutAccessListsInput = {
    update: XOR<BookingUpdateWithoutAccessListsInput, BookingUncheckedUpdateWithoutAccessListsInput>
    create: XOR<BookingCreateWithoutAccessListsInput, BookingUncheckedCreateWithoutAccessListsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutAccessListsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutAccessListsInput, BookingUncheckedUpdateWithoutAccessListsInput>
  }

  export type BookingUpdateWithoutAccessListsInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutBookingsNestedInput
    bookingLists?: BookingListUpdateManyWithoutBookingNestedInput
    denyBookings?: DenyBookingUpdateManyWithoutBookingNestedInput
    cancelBookings?: CancelBookingUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutAccessListsInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ENo?: IntFieldUpdateOperationsInput | number
    bookingLists?: BookingListUncheckedUpdateManyWithoutBookingNestedInput
    denyBookings?: DenyBookingUncheckedUpdateManyWithoutBookingNestedInput
    cancelBookings?: CancelBookingUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingListCreateWithoutDenyBookingsInput = {
    BKLNumber: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    booking: BookingCreateNestedOneWithoutBookingListsInput
    room: RoomCreateNestedOneWithoutBookingListsInput
    status: BookingStatusCreateNestedOneWithoutBookingListsInput
    accessLists?: AccessListCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingCreateNestedManyWithoutBookingListInput
  }

  export type BookingListUncheckedCreateWithoutDenyBookingsInput = {
    BKLNumber: number
    BKLNo: number
    RNo: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    SNo: number
    accessLists?: AccessListUncheckedCreateNestedManyWithoutBookingListInput
    cancelBookings?: CancelBookingUncheckedCreateNestedManyWithoutBookingListInput
  }

  export type BookingListCreateOrConnectWithoutDenyBookingsInput = {
    where: BookingListWhereUniqueInput
    create: XOR<BookingListCreateWithoutDenyBookingsInput, BookingListUncheckedCreateWithoutDenyBookingsInput>
  }

  export type BookingCreateWithoutDenyBookingsInput = {
    BKNumber: number
    BKDate: Date | string
    employee: EmployeeCreateNestedOneWithoutBookingsInput
    bookingLists?: BookingListCreateNestedManyWithoutBookingInput
    accessLists?: AccessListCreateNestedManyWithoutBookingInput
    cancelBookings?: CancelBookingCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutDenyBookingsInput = {
    BKNumber: number
    BKDate: Date | string
    ENo: number
    bookingLists?: BookingListUncheckedCreateNestedManyWithoutBookingInput
    accessLists?: AccessListUncheckedCreateNestedManyWithoutBookingInput
    cancelBookings?: CancelBookingUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutDenyBookingsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutDenyBookingsInput, BookingUncheckedCreateWithoutDenyBookingsInput>
  }

  export type BookingListUpsertWithoutDenyBookingsInput = {
    update: XOR<BookingListUpdateWithoutDenyBookingsInput, BookingListUncheckedUpdateWithoutDenyBookingsInput>
    create: XOR<BookingListCreateWithoutDenyBookingsInput, BookingListUncheckedCreateWithoutDenyBookingsInput>
    where?: BookingListWhereInput
  }

  export type BookingListUpdateToOneWithWhereWithoutDenyBookingsInput = {
    where?: BookingListWhereInput
    data: XOR<BookingListUpdateWithoutDenyBookingsInput, BookingListUncheckedUpdateWithoutDenyBookingsInput>
  }

  export type BookingListUpdateWithoutDenyBookingsInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutBookingListsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingListsNestedInput
    status?: BookingStatusUpdateOneRequiredWithoutBookingListsNestedInput
    accessLists?: AccessListUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUpdateManyWithoutBookingListNestedInput
  }

  export type BookingListUncheckedUpdateWithoutDenyBookingsInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    RNo?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    SNo?: IntFieldUpdateOperationsInput | number
    accessLists?: AccessListUncheckedUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUncheckedUpdateManyWithoutBookingListNestedInput
  }

  export type BookingUpsertWithoutDenyBookingsInput = {
    update: XOR<BookingUpdateWithoutDenyBookingsInput, BookingUncheckedUpdateWithoutDenyBookingsInput>
    create: XOR<BookingCreateWithoutDenyBookingsInput, BookingUncheckedCreateWithoutDenyBookingsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutDenyBookingsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutDenyBookingsInput, BookingUncheckedUpdateWithoutDenyBookingsInput>
  }

  export type BookingUpdateWithoutDenyBookingsInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutBookingsNestedInput
    bookingLists?: BookingListUpdateManyWithoutBookingNestedInput
    accessLists?: AccessListUpdateManyWithoutBookingNestedInput
    cancelBookings?: CancelBookingUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutDenyBookingsInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ENo?: IntFieldUpdateOperationsInput | number
    bookingLists?: BookingListUncheckedUpdateManyWithoutBookingNestedInput
    accessLists?: AccessListUncheckedUpdateManyWithoutBookingNestedInput
    cancelBookings?: CancelBookingUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingListCreateWithoutCancelBookingsInput = {
    BKLNumber: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    booking: BookingCreateNestedOneWithoutBookingListsInput
    room: RoomCreateNestedOneWithoutBookingListsInput
    status: BookingStatusCreateNestedOneWithoutBookingListsInput
    accessLists?: AccessListCreateNestedManyWithoutBookingListInput
    denyBookings?: DenyBookingCreateNestedManyWithoutBookingListInput
  }

  export type BookingListUncheckedCreateWithoutCancelBookingsInput = {
    BKLNumber: number
    BKLNo: number
    RNo: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    SNo: number
    accessLists?: AccessListUncheckedCreateNestedManyWithoutBookingListInput
    denyBookings?: DenyBookingUncheckedCreateNestedManyWithoutBookingListInput
  }

  export type BookingListCreateOrConnectWithoutCancelBookingsInput = {
    where: BookingListWhereUniqueInput
    create: XOR<BookingListCreateWithoutCancelBookingsInput, BookingListUncheckedCreateWithoutCancelBookingsInput>
  }

  export type BookingCreateWithoutCancelBookingsInput = {
    BKNumber: number
    BKDate: Date | string
    employee: EmployeeCreateNestedOneWithoutBookingsInput
    bookingLists?: BookingListCreateNestedManyWithoutBookingInput
    accessLists?: AccessListCreateNestedManyWithoutBookingInput
    denyBookings?: DenyBookingCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCancelBookingsInput = {
    BKNumber: number
    BKDate: Date | string
    ENo: number
    bookingLists?: BookingListUncheckedCreateNestedManyWithoutBookingInput
    accessLists?: AccessListUncheckedCreateNestedManyWithoutBookingInput
    denyBookings?: DenyBookingUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCancelBookingsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCancelBookingsInput, BookingUncheckedCreateWithoutCancelBookingsInput>
  }

  export type BookingListUpsertWithoutCancelBookingsInput = {
    update: XOR<BookingListUpdateWithoutCancelBookingsInput, BookingListUncheckedUpdateWithoutCancelBookingsInput>
    create: XOR<BookingListCreateWithoutCancelBookingsInput, BookingListUncheckedCreateWithoutCancelBookingsInput>
    where?: BookingListWhereInput
  }

  export type BookingListUpdateToOneWithWhereWithoutCancelBookingsInput = {
    where?: BookingListWhereInput
    data: XOR<BookingListUpdateWithoutCancelBookingsInput, BookingListUncheckedUpdateWithoutCancelBookingsInput>
  }

  export type BookingListUpdateWithoutCancelBookingsInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutBookingListsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingListsNestedInput
    status?: BookingStatusUpdateOneRequiredWithoutBookingListsNestedInput
    accessLists?: AccessListUpdateManyWithoutBookingListNestedInput
    denyBookings?: DenyBookingUpdateManyWithoutBookingListNestedInput
  }

  export type BookingListUncheckedUpdateWithoutCancelBookingsInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    RNo?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    SNo?: IntFieldUpdateOperationsInput | number
    accessLists?: AccessListUncheckedUpdateManyWithoutBookingListNestedInput
    denyBookings?: DenyBookingUncheckedUpdateManyWithoutBookingListNestedInput
  }

  export type BookingUpsertWithoutCancelBookingsInput = {
    update: XOR<BookingUpdateWithoutCancelBookingsInput, BookingUncheckedUpdateWithoutCancelBookingsInput>
    create: XOR<BookingCreateWithoutCancelBookingsInput, BookingUncheckedCreateWithoutCancelBookingsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutCancelBookingsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutCancelBookingsInput, BookingUncheckedUpdateWithoutCancelBookingsInput>
  }

  export type BookingUpdateWithoutCancelBookingsInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutBookingsNestedInput
    bookingLists?: BookingListUpdateManyWithoutBookingNestedInput
    accessLists?: AccessListUpdateManyWithoutBookingNestedInput
    denyBookings?: DenyBookingUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCancelBookingsInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ENo?: IntFieldUpdateOperationsInput | number
    bookingLists?: BookingListUncheckedUpdateManyWithoutBookingNestedInput
    accessLists?: AccessListUncheckedUpdateManyWithoutBookingNestedInput
    denyBookings?: DenyBookingUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type EmployeeCreateWithoutLockListsInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    status: EmployeeStatusCreateNestedOneWithoutEmployeesInput
    bookings?: BookingCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutLockListsInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    DNo: number
    PNo: number
    SNo: number
    bookings?: BookingUncheckedCreateNestedManyWithoutEmployeeInput
    unlockLists?: UnlockListUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutLockListsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutLockListsInput, EmployeeUncheckedCreateWithoutLockListsInput>
  }

  export type EmployeeUpsertWithoutLockListsInput = {
    update: XOR<EmployeeUpdateWithoutLockListsInput, EmployeeUncheckedUpdateWithoutLockListsInput>
    create: XOR<EmployeeCreateWithoutLockListsInput, EmployeeUncheckedCreateWithoutLockListsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutLockListsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutLockListsInput, EmployeeUncheckedUpdateWithoutLockListsInput>
  }

  export type EmployeeUpdateWithoutLockListsInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    status?: EmployeeStatusUpdateOneRequiredWithoutEmployeesNestedInput
    bookings?: BookingUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutLockListsInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DNo?: IntFieldUpdateOperationsInput | number
    PNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutUnlockListsInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    status: EmployeeStatusCreateNestedOneWithoutEmployeesInput
    bookings?: BookingCreateNestedManyWithoutEmployeeInput
    lockLists?: LockListCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutUnlockListsInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    DNo: number
    PNo: number
    SNo: number
    bookings?: BookingUncheckedCreateNestedManyWithoutEmployeeInput
    lockLists?: LockListUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutUnlockListsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUnlockListsInput, EmployeeUncheckedCreateWithoutUnlockListsInput>
  }

  export type EmployeeUpsertWithoutUnlockListsInput = {
    update: XOR<EmployeeUpdateWithoutUnlockListsInput, EmployeeUncheckedUpdateWithoutUnlockListsInput>
    create: XOR<EmployeeCreateWithoutUnlockListsInput, EmployeeUncheckedCreateWithoutUnlockListsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUnlockListsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUnlockListsInput, EmployeeUncheckedUpdateWithoutUnlockListsInput>
  }

  export type EmployeeUpdateWithoutUnlockListsInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    status?: EmployeeStatusUpdateOneRequiredWithoutEmployeesNestedInput
    bookings?: BookingUpdateManyWithoutEmployeeNestedInput
    lockLists?: LockListUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUnlockListsInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DNo?: IntFieldUpdateOperationsInput | number
    PNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutEmployeeNestedInput
    lockLists?: LockListUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyDepartmentInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    PNo: number
    SNo: number
  }

  export type EmployeeUpdateWithoutDepartmentInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    status?: EmployeeStatusUpdateOneRequiredWithoutEmployeesNestedInput
    bookings?: BookingUpdateManyWithoutEmployeeNestedInput
    lockLists?: LockListUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDepartmentInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    PNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutEmployeeNestedInput
    lockLists?: LockListUncheckedUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    PNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateManyPositionInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    DNo: number
    SNo: number
  }

  export type EmployeeUpdateWithoutPositionInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    status?: EmployeeStatusUpdateOneRequiredWithoutEmployeesNestedInput
    bookings?: BookingUpdateManyWithoutEmployeeNestedInput
    lockLists?: LockListUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPositionInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutEmployeeNestedInput
    lockLists?: LockListUncheckedUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutPositionInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DNo?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateManyRoomStatusInput = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    FlNo: number
  }

  export type RoomUpdateWithoutRoomStatusInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    bookingLists?: BookingListUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomStatusInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
    FlNo?: IntFieldUpdateOperationsInput | number
    bookingLists?: BookingListUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutRoomStatusInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
    FlNo?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateManyStatusInput = {
    ENumber: number
    FName: string
    LName: string
    score: number
    Email: string
    username: string
    password: string
    DNo: number
    PNo: number
  }

  export type EmployeeUpdateWithoutStatusInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    bookings?: BookingUpdateManyWithoutEmployeeNestedInput
    lockLists?: LockListUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutStatusInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DNo?: IntFieldUpdateOperationsInput | number
    PNo?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutEmployeeNestedInput
    lockLists?: LockListUncheckedUpdateManyWithoutEmployeeNestedInput
    unlockLists?: UnlockListUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutStatusInput = {
    ENumber?: IntFieldUpdateOperationsInput | number
    FName?: StringFieldUpdateOperationsInput | string
    LName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DNo?: IntFieldUpdateOperationsInput | number
    PNo?: IntFieldUpdateOperationsInput | number
  }

  export type BookingListCreateManyStatusInput = {
    BKLNumber: number
    BKLNo: number
    RNo: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
  }

  export type BookingListUpdateWithoutStatusInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutBookingListsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingListsNestedInput
    accessLists?: AccessListUpdateManyWithoutBookingListNestedInput
    denyBookings?: DenyBookingUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUpdateManyWithoutBookingListNestedInput
  }

  export type BookingListUncheckedUpdateWithoutStatusInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    RNo?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    accessLists?: AccessListUncheckedUpdateManyWithoutBookingListNestedInput
    denyBookings?: DenyBookingUncheckedUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUncheckedUpdateManyWithoutBookingListNestedInput
  }

  export type BookingListUncheckedUpdateManyWithoutStatusInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    RNo?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
  }

  export type FloorCreateManyBuildingInput = {
    FlNumber: number
    FlName: string
  }

  export type FloorUpdateWithoutBuildingInput = {
    FlNumber?: IntFieldUpdateOperationsInput | number
    FlName?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateWithoutBuildingInput = {
    FlNumber?: IntFieldUpdateOperationsInput | number
    FlName?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateManyWithoutBuildingInput = {
    FlNumber?: IntFieldUpdateOperationsInput | number
    FlName?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateManyFloorInput = {
    RNumber: number
    RName: string
    Capacity: number
    VIP: number
    SNo: number
  }

  export type RoomUpdateWithoutFloorInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
    roomStatus?: RoomStatusUpdateOneRequiredWithoutRoomsNestedInput
    bookingLists?: BookingListUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutFloorInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
    bookingLists?: BookingListUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutFloorInput = {
    RNumber?: IntFieldUpdateOperationsInput | number
    RName?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    VIP?: IntFieldUpdateOperationsInput | number
    SNo?: IntFieldUpdateOperationsInput | number
  }

  export type BookingListCreateManyRoomInput = {
    BKLNumber: number
    BKLNo: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    SNo: number
  }

  export type BookingListUpdateWithoutRoomInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutBookingListsNestedInput
    status?: BookingStatusUpdateOneRequiredWithoutBookingListsNestedInput
    accessLists?: AccessListUpdateManyWithoutBookingListNestedInput
    denyBookings?: DenyBookingUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUpdateManyWithoutBookingListNestedInput
  }

  export type BookingListUncheckedUpdateWithoutRoomInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    SNo?: IntFieldUpdateOperationsInput | number
    accessLists?: AccessListUncheckedUpdateManyWithoutBookingListNestedInput
    denyBookings?: DenyBookingUncheckedUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUncheckedUpdateManyWithoutBookingListNestedInput
  }

  export type BookingListUncheckedUpdateManyWithoutRoomInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    SNo?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyEmployeeInput = {
    BKNumber: number
    BKDate: Date | string
  }

  export type LockListCreateManyEmployeeInput = {
    LKNo: number
    LKDate: Date | string
  }

  export type UnlockListCreateManyEmployeeInput = {
    ULKNo: number
    LKDate: Date | string
  }

  export type BookingUpdateWithoutEmployeeInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingLists?: BookingListUpdateManyWithoutBookingNestedInput
    accessLists?: AccessListUpdateManyWithoutBookingNestedInput
    denyBookings?: DenyBookingUpdateManyWithoutBookingNestedInput
    cancelBookings?: CancelBookingUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutEmployeeInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingLists?: BookingListUncheckedUpdateManyWithoutBookingNestedInput
    accessLists?: AccessListUncheckedUpdateManyWithoutBookingNestedInput
    denyBookings?: DenyBookingUncheckedUpdateManyWithoutBookingNestedInput
    cancelBookings?: CancelBookingUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutEmployeeInput = {
    BKNumber?: IntFieldUpdateOperationsInput | number
    BKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LockListUpdateWithoutEmployeeInput = {
    LKNo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LockListUncheckedUpdateWithoutEmployeeInput = {
    LKNo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LockListUncheckedUpdateManyWithoutEmployeeInput = {
    LKNo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockListUpdateWithoutEmployeeInput = {
    ULKNo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockListUncheckedUpdateWithoutEmployeeInput = {
    ULKNo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockListUncheckedUpdateManyWithoutEmployeeInput = {
    ULKNo?: IntFieldUpdateOperationsInput | number
    LKDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingListCreateManyBookingInput = {
    BKLNumber: number
    RNo: number
    Start_Date: Date | string
    Start_Time: string
    End_Time: string
    details: string
    QR: string
    SNo: number
  }

  export type AccessListCreateManyBookingInput = {
    ACNumber: number
    BKLNo: number
    AccessTime: string
  }

  export type DenyBookingCreateManyBookingInput = {
    DNNumber: number
    BKLNo: number
    details: string
  }

  export type CancelBookingCreateManyBookingInput = {
    CCNumber: number
    BKLNo: number
    details: string
  }

  export type BookingListUpdateWithoutBookingInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutBookingListsNestedInput
    status?: BookingStatusUpdateOneRequiredWithoutBookingListsNestedInput
    accessLists?: AccessListUpdateManyWithoutBookingListNestedInput
    denyBookings?: DenyBookingUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUpdateManyWithoutBookingListNestedInput
  }

  export type BookingListUncheckedUpdateWithoutBookingInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    RNo?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    SNo?: IntFieldUpdateOperationsInput | number
    accessLists?: AccessListUncheckedUpdateManyWithoutBookingListNestedInput
    denyBookings?: DenyBookingUncheckedUpdateManyWithoutBookingListNestedInput
    cancelBookings?: CancelBookingUncheckedUpdateManyWithoutBookingListNestedInput
  }

  export type BookingListUncheckedUpdateManyWithoutBookingInput = {
    BKLNumber?: IntFieldUpdateOperationsInput | number
    RNo?: IntFieldUpdateOperationsInput | number
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_Time?: StringFieldUpdateOperationsInput | string
    End_Time?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    QR?: StringFieldUpdateOperationsInput | string
    SNo?: IntFieldUpdateOperationsInput | number
  }

  export type AccessListUpdateWithoutBookingInput = {
    ACNumber?: IntFieldUpdateOperationsInput | number
    AccessTime?: StringFieldUpdateOperationsInput | string
    bookingList?: BookingListUpdateOneRequiredWithoutAccessListsNestedInput
  }

  export type AccessListUncheckedUpdateWithoutBookingInput = {
    ACNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    AccessTime?: StringFieldUpdateOperationsInput | string
  }

  export type AccessListUncheckedUpdateManyWithoutBookingInput = {
    ACNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    AccessTime?: StringFieldUpdateOperationsInput | string
  }

  export type DenyBookingUpdateWithoutBookingInput = {
    DNNumber?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    bookingList?: BookingListUpdateOneRequiredWithoutDenyBookingsNestedInput
  }

  export type DenyBookingUncheckedUpdateWithoutBookingInput = {
    DNNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type DenyBookingUncheckedUpdateManyWithoutBookingInput = {
    DNNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type CancelBookingUpdateWithoutBookingInput = {
    CCNumber?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    bookingList?: BookingListUpdateOneRequiredWithoutCancelBookingsNestedInput
  }

  export type CancelBookingUncheckedUpdateWithoutBookingInput = {
    CCNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type CancelBookingUncheckedUpdateManyWithoutBookingInput = {
    CCNumber?: IntFieldUpdateOperationsInput | number
    BKLNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type AccessListCreateManyBookingListInput = {
    ACNumber: number
    BKNo: number
    AccessTime: string
  }

  export type DenyBookingCreateManyBookingListInput = {
    DNNumber: number
    BKNo: number
    details: string
  }

  export type CancelBookingCreateManyBookingListInput = {
    CCNumber: number
    BKNo: number
    details: string
  }

  export type AccessListUpdateWithoutBookingListInput = {
    ACNumber?: IntFieldUpdateOperationsInput | number
    AccessTime?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutAccessListsNestedInput
  }

  export type AccessListUncheckedUpdateWithoutBookingListInput = {
    ACNumber?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    AccessTime?: StringFieldUpdateOperationsInput | string
  }

  export type AccessListUncheckedUpdateManyWithoutBookingListInput = {
    ACNumber?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    AccessTime?: StringFieldUpdateOperationsInput | string
  }

  export type DenyBookingUpdateWithoutBookingListInput = {
    DNNumber?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutDenyBookingsNestedInput
  }

  export type DenyBookingUncheckedUpdateWithoutBookingListInput = {
    DNNumber?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type DenyBookingUncheckedUpdateManyWithoutBookingListInput = {
    DNNumber?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type CancelBookingUpdateWithoutBookingListInput = {
    CCNumber?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutCancelBookingsNestedInput
  }

  export type CancelBookingUncheckedUpdateWithoutBookingListInput = {
    CCNumber?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type CancelBookingUncheckedUpdateManyWithoutBookingListInput = {
    CCNumber?: IntFieldUpdateOperationsInput | number
    BKNo?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}