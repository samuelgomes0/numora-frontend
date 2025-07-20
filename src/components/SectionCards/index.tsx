"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFinancialMetrics } from "@/hooks/useFinancialMetrics";
import { ITransactionCreatePayload } from "@/types/transaction";
import formatNumber from "@/utils/formatNumber";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

interface SectionCardsProps {
  transactions?: ITransactionCreatePayload[];
}

function SectionCards({ transactions = [] }: SectionCardsProps) {
  const metrics = useFinancialMetrics(transactions);

  const getGrowthMessage = (growth: number, type: "income" | "expense") => {
    if (growth > 0) {
      return type === "income"
        ? `Aumento de ${growth.toFixed(1)}%`
        : `Redução de ${growth.toFixed(1)}%`;
    } else if (growth < 0) {
      return type === "income"
        ? `Redução de ${Math.abs(growth).toFixed(1)}%`
        : `Aumento de ${Math.abs(growth).toFixed(1)}%`;
    } else {
      return type === "income" ? "Sem alteração" : "Sem alteração";
    }
  };

  const getGrowthIcon = (growth: number) => {
    return growth >= 0 ? (
      <TrendingUpIcon className="size-4" />
    ) : (
      <TrendingDownIcon className="size-4" />
    );
  };

  const getGrowthBadge = (growth: number) => {
    const isPositive = growth >= 0;
    return (
      <Badge variant="outline">
        {isPositive ? <TrendingUpIcon /> : <TrendingDownIcon />}
        {isPositive ? "+" : ""}
        {growth.toFixed(1)}%
      </Badge>
    );
  };

  const getValueColor = (
    value: number,
    type: "balance" | "income" | "expense" | "savings",
  ) => {
    if (type === "savings") {
      return value >= 0 ? "text-green-500" : "text-red-500";
    }
    if (type === "expense") {
      return "text-red-500";
    }
    return "text-green-500";
  };

  const formatValue = (value: number) => {
    const formatted = formatNumber(value);
    return value < 0
      ? `-R$ ${formatted.replace("R$ ", "")}`
      : `R$ ${formatted.replace("R$ ", "")}`;
  };

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Saldo Total</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <span className={getValueColor(metrics.totalBalance, "balance")}>
              {formatValue(metrics.totalBalance)}
            </span>
          </CardTitle>
          <CardAction>{getGrowthBadge(metrics.balanceGrowth)}</CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {getGrowthMessage(metrics.balanceGrowth, "income")}{" "}
            {getGrowthIcon(metrics.balanceGrowth)}
          </div>
          <div className="text-muted-foreground">Saldo em todas as contas</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Receitas do Mês</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <span className={getValueColor(metrics.monthlyIncome, "income")}>
              {formatValue(metrics.monthlyIncome)}
            </span>
          </CardTitle>
          <CardAction>{getGrowthBadge(metrics.incomeGrowth)}</CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {getGrowthMessage(metrics.incomeGrowth, "income")}{" "}
            {getGrowthIcon(metrics.incomeGrowth)}
          </div>
          <div className="text-muted-foreground">
            Incluindo salário e extras
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Despesas do Mês</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <span className={getValueColor(metrics.monthlyExpenses, "expense")}>
              {formatValue(metrics.monthlyExpenses)}
            </span>
          </CardTitle>
          <CardAction>{getGrowthBadge(metrics.expenseReduction)}</CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {getGrowthMessage(metrics.expenseReduction, "expense")}{" "}
            {getGrowthIcon(metrics.expenseReduction)}
          </div>
          <div className="text-muted-foreground">
            Controle de gastos eficiente
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Economias</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <span className={getValueColor(metrics.savings, "savings")}>
              {formatValue(metrics.savings)}
            </span>
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUpIcon />+{metrics.savingsRate.toFixed(1)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {metrics.savings >= 0
              ? metrics.savingsRate >= 20
                ? "Meta atingida"
                : "Meta em andamento"
              : "Déficit este mês"}{" "}
            <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {metrics.savings >= 0
              ? `${metrics.savingsRate.toFixed(1)}% da receita mensal`
              : `Gastos superaram receitas em ${Math.abs(metrics.savings).toLocaleString("pt-BR")}`}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
export default SectionCards;
