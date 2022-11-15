export interface BalancePayload {
  account: {
    id?: number,
    num?: number,
    name?: string,
    email?: string
  }
}

export interface IBalance {
  balance: number
  currency: string
}
