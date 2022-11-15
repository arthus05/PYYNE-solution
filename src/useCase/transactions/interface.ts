export enum TRANSACTION_TYPE_ENUM {
  TYPE_CREDIT = 'CREDIT',
  TYPE_DEBIT = 'DEBIT'
}

export interface TransactionPayload {
  account: {
    id?: number,
    num?: number,
    name?: string,
    email?: string
  }
  fromDate: Date
  toDate: Date
}

export interface ITransaction {
  amount: number
  type: TRANSACTION_TYPE_ENUM
  text: string
}
