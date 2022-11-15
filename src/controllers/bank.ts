import { Request, Response } from "express";
import { BankAdapter } from "../adapters/bank"

/**
 * Controller that pulls information form multiple bank integrations and prints them to the console.
 *
 * Created by Par Renyard on 5/12/21.
 */
export class BankController {
  private bankAdapter: BankAdapter

  constructor(bankAdapter: BankAdapter) {
    this.bankAdapter = bankAdapter
  }

  public async printBalances(request: Request, response: Response): Promise<Response> {
    try {
      const balances = await this.bankAdapter.getBalances(request.body)

      console.table(balances)
      return response.status(200).send()
    } catch (err) {
      return response.status(400).json({
        message: err || 'Unexpected error'
      })
    }
  }

  public async printTransactions(request: Request, response: Response): Promise<Response> {
    try {
      const transactions = await this.bankAdapter.getTransactions(request.body)

      console.table(transactions)
      return response.status(200).send()
    } catch (err) {
      return response.status(400).json({
        message: err || 'Unexpected error'
      })
    }
  }
}
