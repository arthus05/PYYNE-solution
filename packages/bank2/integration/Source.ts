import { Balance, IBalance } from './Balance'
import { Transaction, ITransaction, TRANSACTION_TYPE } from './Transaction'

export class Source {
  public getBalance(accountNum?: number): IBalance {
    return new Balance(512.5, "USD")
  }

  public getTransactions(accountNum?: number, fromDate?: Date, toDate?: Date): ITransaction[] {
    return [
      new Transaction(125, TRANSACTION_TYPE.TYPE_DEBIT, "Amazon.com"),
      new Transaction(500, TRANSACTION_TYPE.TYPE_DEBIT, "Car insurance"),
      new Transaction(800, TRANSACTION_TYPE.TYPE_CREDIT, "Salary")
    ]
  }
}
