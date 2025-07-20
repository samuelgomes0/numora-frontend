export enum TransactionType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export interface ITransactionCreatePayload {
  amount: number;
  transactionType: TransactionType;
  description?: string | null;
  date: Date | string;
  accountId: string;
  categoryId?: string | null;
}

export interface ICategory {
  id: string;
  name: string;
  color: string;
}

export interface IAccount {
  id: string;
  name: string;
  type: "CHECKING" | "SAVINGS" | "CREDIT_CARD" | "CASH";
}
