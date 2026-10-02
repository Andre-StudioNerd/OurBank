import { ITransactionType } from "../entities/iTransactionType";

export interface ITransactionTypeRepository {
  listAll: () => Promise<ITransactionType[]>;
}
