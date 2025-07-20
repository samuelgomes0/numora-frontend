import {
  ITransactionCreatePayload,
  TransactionType,
} from "@/types/transaction";
import { useMemo } from "react";

export interface FinancialMetrics {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savings: number;
  incomeGrowth: number;
  expenseReduction: number;
  savingsRate: number;
}

export function useFinancialMetrics(transactions: ITransactionCreatePayload[]) {
  return useMemo(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Filtrar transações do mês atual
    const currentMonthTransactions = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return (
        transactionDate.getMonth() === currentMonth &&
        transactionDate.getFullYear() === currentYear
      );
    });

    // Filtrar transações do mês anterior
    const previousMonthTransactions = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      return (
        transactionDate.getMonth() === previousMonth &&
        transactionDate.getFullYear() === previousYear
      );
    });

    // Calcular receitas e despesas do mês atual
    const currentIncome = currentMonthTransactions
      .filter((t) => t.transactionType === TransactionType.INCOME)
      .reduce((sum, t) => sum + t.amount, 0);

    const currentExpenses = currentMonthTransactions
      .filter((t) => t.transactionType === TransactionType.EXPENSE)
      .reduce((sum, t) => sum + t.amount, 0);

    // Calcular receitas e despesas do mês anterior
    const previousIncome = previousMonthTransactions
      .filter((t) => t.transactionType === TransactionType.INCOME)
      .reduce((sum, t) => sum + t.amount, 0);

    const previousExpenses = previousMonthTransactions
      .filter((t) => t.transactionType === TransactionType.EXPENSE)
      .reduce((sum, t) => sum + t.amount, 0);

    // Calcular métricas
    const monthlyIncome = currentIncome;
    const monthlyExpenses = currentExpenses;
    const savings = monthlyIncome - monthlyExpenses;

    // Calcular crescimento/redução percentual
    const incomeGrowth =
      previousIncome > 0
        ? ((currentIncome - previousIncome) / previousIncome) * 100
        : 0;

    const expenseReduction =
      previousExpenses > 0
        ? ((previousExpenses - currentExpenses) / previousExpenses) * 100
        : 0;

    // Calcular taxa de economia
    const savingsRate = monthlyIncome > 0 ? (savings / monthlyIncome) * 100 : 0;

    // Calcular saldo total (baseado em todas as transações)
    const allIncome = transactions
      .filter((t) => t.transactionType === TransactionType.INCOME)
      .reduce((sum, t) => sum + t.amount, 0);

    const allExpenses = transactions
      .filter((t) => t.transactionType === TransactionType.EXPENSE)
      .reduce((sum, t) => sum + t.amount, 0);

    const totalBalance = allIncome - allExpenses + 10000; // Saldo inicial de R$ 10.000

    // Calcular crescimento do saldo total
    const currentMonthBalance = monthlyIncome - monthlyExpenses;
    const previousMonthBalance = previousIncome - previousExpenses;
    const balanceGrowth =
      previousMonthBalance !== 0
        ? ((currentMonthBalance - previousMonthBalance) /
            Math.abs(previousMonthBalance)) *
          100
        : 0;

    return {
      totalBalance,
      monthlyIncome,
      monthlyExpenses,
      savings,
      incomeGrowth,
      expenseReduction,
      savingsRate,
      balanceGrowth,
    };
  }, [transactions]);
}
