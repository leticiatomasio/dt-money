export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  createdAt: string;
}

export type TransactionInput = Omit<Transaction, "id" | "createdAt">;

export enum TransactionType {
  Income = 1,
  Outcome,
}
