"use client";

import ChartAreaInteractive from "@/components/ChartAreaInteractive";
import DataTable from "@/components/DataTable";
import SectionCards from "@/components/SectionCards";
import SiteHeader from "@/components/SiteHeader";
import {
  ITransactionCreatePayload,
  TransactionType,
} from "@/types/transaction";
import { useState } from "react";

import data from "./data.json";

// Converter dados mockados para o formato de transações
const mockTransactions: ITransactionCreatePayload[] = [
  // Receitas do mês atual
  {
    amount: 8500,
    transactionType: TransactionType.INCOME,
    description: "Salário",
    date: new Date().toISOString(),
    accountId: "1",
    categoryId: null,
  },
  {
    amount: 1200,
    transactionType: TransactionType.INCOME,
    description: "Freelance",
    date: new Date().toISOString(),
    accountId: "1",
    categoryId: null,
  },
  // Receitas do mês anterior (para comparação)
  {
    amount: 8000,
    transactionType: TransactionType.INCOME,
    description: "Salário",
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      15,
    ).toISOString(),
    accountId: "1",
    categoryId: null,
  },
  {
    amount: 1000,
    transactionType: TransactionType.INCOME,
    description: "Freelance",
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      20,
    ).toISOString(),
    accountId: "1",
    categoryId: null,
  },
  // Despesas do mês atual
  ...data.map((item) => ({
    amount: parseFloat(item.target.replace("R$ ", "").replace(",", ".")),
    transactionType: TransactionType.EXPENSE,
    description: item.header,
    date: new Date().toISOString(),
    accountId: "1",
    categoryId: null,
  })),
  // Despesas do mês anterior (para comparação)
  {
    amount: 3500,
    transactionType: TransactionType.EXPENSE,
    description: "Aluguel",
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      5,
    ).toISOString(),
    accountId: "1",
    categoryId: null,
  },
  {
    amount: 800,
    transactionType: TransactionType.EXPENSE,
    description: "Contas",
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      10,
    ).toISOString(),
    accountId: "1",
    categoryId: null,
  },
];

export default function Page() {
  const [transactions, setTransactions] =
    useState<ITransactionCreatePayload[]>(mockTransactions);

  const handleTransactionCreate = (
    newTransaction: ITransactionCreatePayload,
  ) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards transactions={transactions} />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable
            data={data}
            onTransactionCreate={handleTransactionCreate}
          />
        </div>
      </div>
    </div>
  );
}
