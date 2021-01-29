// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class BalancesProxy {
  public readonly address: string;
  public readonly balance: BalanceProxy;
  public static Parse(d: string): BalancesProxy {
    return BalancesProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BalancesProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.address, false, field + ".address");
    d.balance = BalanceProxy.Create(d.balance, field + ".balance");
    return new BalancesProxy(d);
  }
  private constructor(d: any) {
    this.address = d.address;
    this.balance = d.balance;
  }
}

export class BalanceProxy {
  public readonly value: number;
  public static Parse(d: string): BalanceProxy {
    return BalanceProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BalanceProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.value, false, field + ".value");
    return new BalanceProxy(d);
  }
  private constructor(d: any) {
    this.value = d.value;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
