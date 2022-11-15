import { Source as Bank1Source } from '../../../../packages/bank1/integration/Source'
import { BalancePayload, IBalance } from '../../../useCase/balances/interface';
import { ITransaction, TransactionPayload, TRANSACTION_TYPE_ENUM } from '../../../useCase/transactions/interface';

export class Bank1Adapter {
  private bankSource: Bank1Source

  constructor() {
    this.bankSource = new Bank1Source()
  }

  public async getBalance(payload: BalancePayload): Promise<IBalance>  {
    const balance = await this.bankSource.getAccountBalance(payload.account.id)
    const currency = await this.bankSource.getAccountCurrency(payload.account.id)

    if (!balance || !currency) throw Error("Error trying to fetch bank2 balance")

    return {
      balance,
      currency
    }
  }

  public async getTransactions(payload: TransactionPayload): Promise<ITransaction[]> {
    const res = await this.bankSource.getTransactions(payload.account.id, payload.fromDate, payload.toDate)

    if (!res) throw Error("Error trying to fetch bank1 transactions")

    const adaptedTransactions: ITransaction[] = res.map(transaction => {
      if (transaction.type === 2) {
        return {
          amount: transaction.amount,
          text: transaction.text,
          type: TRANSACTION_TYPE_ENUM.TYPE_DEBIT
        }
      } else {
        return {
          amount: transaction.amount,
          text: transaction.text,
          type: TRANSACTION_TYPE_ENUM.TYPE_CREDIT
        }
      }
    })

    return adaptedTransactions
  }
}