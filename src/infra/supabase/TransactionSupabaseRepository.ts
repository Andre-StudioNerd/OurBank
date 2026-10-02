import { ITransaction } from "../../domain/entities/ITransaction";
import { ITransactionRepository } from "../../domain/repositories/ITransactionRepository";
import { supabase } from "./config";

export class TransactionSupabaseRepository implements ITransactionRepository {
  async listAll(): Promise<ITransaction[]> {
    const { data, error } = await supabase.from("transaction").select(`
      *,
      transaction_type (id, display)
    `);

    if (error) {
      throw error;
    }

    if (!data) {
      return [];
    }

    const result: ITransaction[] = data.map((row) => {
      if (!row.transaction_type) {
        throw new Error("Transação sem tipo encontrada!");
      }

      // Trata o retorno caso o Supabase entenda a relação como Array
      const typeObj = Array.isArray(row.transaction_type)
        ? row.transaction_type[0]
        : row.transaction_type;

      return {
        id: row.id,
        date: new Date(row.created_at),
        value: row.value,
        type: typeObj,
      };
    });

    return result;
  }

  async create(value: number, typeId: number, userId: string): Promise<void> {
    const { error } = await supabase.from("transaction").insert([
      {
        transaction_type_id: typeId,
        value,
        user_id: userId,
      },
    ]);

    if (error) {
      throw error;
    }
  }
}
