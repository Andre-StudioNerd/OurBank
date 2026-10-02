import { ITransactionRepository } from "../repositories/ITransactionRepository";

export class ListAllTransactions {
  constructor(private repository: ITransactionRepository) {}

  execute() {
    return this.repository.listAll();
  }
}
