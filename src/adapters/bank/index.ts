import { BalancePayload } from "../../useCase/balances/interface";
import { TransactionPayload } from "../../useCase/transactions/interface";
import { Bank1Adapter } from "./bank1";
import { Bank2Adapter } from "./bank2";

export class BankAdapter {
  constructor(
    private bank1Adapter: Bank1Adapter,
    private bank2Adapter: Bank2Adapter
  ) {}

  public async getBalances(payload: BalancePayload) {
    return [
      await this.bank1Adapter.getBalance(payload),
      await this.bank2Adapter.getBalance(payload)
    ]
  }

  public async getTransactions(payload: TransactionPayload) {
    return [
      ...(await this.bank1Adapter.getTransactions(payload)),
      ...(await this.bank2Adapter.getTransactions(payload))
    ]
  }
}