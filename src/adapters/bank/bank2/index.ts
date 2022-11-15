import { Source as Bank2Source } from '../../../../packages/bank2/integration/Source'
import { BalancePayload, IBalance } from '../../../useCase/balances/interface';
import { ITransaction, TransactionPayload, TRANSACTION_TYPE_ENUM } from '../../../useCase/transactions/interface';

export class Bank2Adapter {
  private bankSource: Bank2Source

  constructor() {
    this.bankSource = new Bank2Source()
  }

  public async getBalance(payload: BalancePayload): Promise<IBalance>  {
    const res = await this.bankSource.getBalance(payload.account.num)

    if (!res) throw Error("Error trying to fetch bank2 balance")

    return {
      balance: res.balance,
      currency: res.currency
    }
  }

  public async getTransactions(payload: TransactionPayload): Promise<ITransaction[]> {
    const res = await this.bankSource.getTransactions(payload.account.num, payload.fromDate, payload.toDate)

    if (!res) throw Error("Error trying to fetch bank2 transactions")

    const adaptedTransactions: ITransaction[] = res.map(transaction => {
      if (transaction.type === 0) {
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