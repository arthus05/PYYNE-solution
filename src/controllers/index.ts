import { BankAdapter } from "../adapters/bank";
import { Bank1Adapter } from "../adapters/bank/bank1";
import { Bank2Adapter } from "../adapters/bank/bank2";
import { BankController } from "./bank";

const bank1Adapter = new Bank1Adapter()
const bank2Adapter = new Bank2Adapter()

const bankAdapter = new BankAdapter(bank1Adapter, bank2Adapter)

const bankController = new BankController(bankAdapter)

export { bankController }