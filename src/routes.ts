import { Router } from "express";
import { bankController } from "./controllers";

const router = Router()

router.post('/balances', (request, response) => {
  return bankController.printBalances(request, response)
})

router.post('/transactions', (request, response) => {
  return bankController.printTransactions(request, response)
})

export { router }