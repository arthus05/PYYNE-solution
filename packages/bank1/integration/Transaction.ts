export enum TRANSACTION_TYPE {
  TYPE_CREDIT = 1,
  TYPE_DEBIT = 2
}

export interface ITransaction {
  amount: number
  type: number
  text: string
}

export class Transaction implements ITransaction {
  private _amount: number
  private _type: 1 | 2
  private _text: string

  constructor(amount: number, type: 1 | 2, text: string) {
    this._amount = amount
    this._type = type
    this._text = text
  }

  public get amount(): number {
    return this._amount
  }

  public get type(): number {
    return this._type
  }

  public get text(): string {
    return this._text
  }
}