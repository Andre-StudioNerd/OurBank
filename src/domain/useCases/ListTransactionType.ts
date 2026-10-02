import { ITransactionTypeRepository } from "../repositories/iTransactionTypeRepository";

export class ListTransactionType {
  constructor(private repository: ITransactionTypeRepository) {}

  async execute() {
    return this.repository.listAll();
  }
}
