import { ITransactionType } from "./iTransactionType";

export interface ITransaction {
  id: number;
  value: number | null;
  type: ITransactionType;
  date: Date;
}
