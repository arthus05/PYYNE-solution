export interface IBalance {
  balance: number
  currency: string
}

export class Balance implements IBalance {
    private _balance: number;
    private _currency: string;

    constructor(balance: number, currency: string) {
        this._balance = balance;
        this._currency = currency;
    }

    public get balance(): number {
        return this._balance;
    }

    public get currency(): string {
        return this._currency;
    }
}
