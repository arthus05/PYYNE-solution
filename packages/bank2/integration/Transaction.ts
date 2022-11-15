export enum TRANSACTION_TYPE {
  TYPE_DEBIT,
  TYPE_CREDIT
}

export interface ITransaction {
  amount: number
  type: number
  text: string
}

export class Transaction implements ITransaction {
  private _amount: number
  private _type: TRANSACTION_TYPE
  private _text: string

  constructor(amount: number, type: TRANSACTION_TYPE, text: string) {
    this._amount = amount
    this._type = type
    this._text = text
  }

  public get amount(): number {
    return this._amount
  }

  public get type(): TRANSACTION_TYPE {
    return this._type
  }

  public get text(): string {
    return this._text
  }
}