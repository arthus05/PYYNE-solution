import { Transaction, ITransaction, TRANSACTION_TYPE } from './Transaction'

export class Source {
  getAccountBalance(accountId?: number): number {
    return 215.5
  }

  getAccountCurrency(accountId?: number): string {
    return 'USD'
  }

  getTransactions(accountId?: number, fromDate?: Date, toDate?: Date): ITransaction[] {
    return [
      new Transaction(100, TRANSACTION_TYPE.TYPE_CREDIT, 'Check deposit'),
      new Transaction(25.5, TRANSACTION_TYPE.TYPE_DEBIT, 'Debit card purchase'),
      new Transaction(225, TRANSACTION_TYPE.TYPE_DEBIT, 'Rent payement')
    ]
  }
}
