"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from "recharts";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMobile } from "@/hooks/use-mobile";

export const description = "Um gráfico interativo de receitas e despesas";

const chartData = [
  { date: "2024-04-01", receitas: 8500, despesas: 5200 },
  { date: "2024-04-02", receitas: 8200, despesas: 4800 },
  { date: "2024-04-03", receitas: 8800, despesas: 5100 },
  { date: "2024-04-04", receitas: 9000, despesas: 5300 },
  { date: "2024-04-05", receitas: 8700, despesas: 4900 },
  { date: "2024-04-06", receitas: 9200, despesas: 5500 },
  { date: "2024-04-07", receitas: 8500, despesas: 5200 },
  { date: "2024-04-08", receitas: 8900, despesas: 5400 },
  { date: "2024-04-09", receitas: 8600, despesas: 5000 },
  { date: "2024-04-10", receitas: 9100, despesas: 5600 },
  { date: "2024-04-11", receitas: 8800, despesas: 5200 },
  { date: "2024-04-12", receitas: 9300, despesas: 5800 },
  { date: "2024-04-13", receitas: 8700, despesas: 5100 },
  { date: "2024-04-14", receitas: 9000, despesas: 5400 },
  { date: "2024-04-15", receitas: 8500, despesas: 4900 },
  { date: "2024-04-16", receitas: 9200, despesas: 5700 },
  { date: "2024-04-17", receitas: 8900, despesas: 5300 },
  { date: "2024-04-18", receitas: 9400, despesas: 5900 },
  { date: "2024-04-19", receitas: 8600, despesas: 5000 },
  { date: "2024-04-20", receitas: 9100, despesas: 5500 },
  { date: "2024-04-21", receitas: 8800, despesas: 5200 },
  { date: "2024-04-22", receitas: 9300, despesas: 5800 },
  { date: "2024-04-23", receitas: 8700, despesas: 5100 },
  { date: "2024-04-24", receitas: 9000, despesas: 5400 },
  { date: "2024-04-25", receitas: 8500, despesas: 4900 },
  { date: "2024-04-26", receitas: 9200, despesas: 5700 },
  { date: "2024-04-27", receitas: 8900, despesas: 5300 },
  { date: "2024-04-28", receitas: 9400, despesas: 5900 },
  { date: "2024-04-29", receitas: 8600, despesas: 5000 },
  { date: "2024-04-30", receitas: 9100, despesas: 5500 },
  { date: "2024-05-01", receitas: 8800, despesas: 5200 },
  { date: "2024-05-02", receitas: 9300, despesas: 5800 },
  { date: "2024-05-03", receitas: 8700, despesas: 5100 },
  { date: "2024-05-04", receitas: 9000, despesas: 5400 },
  { date: "2024-05-05", receitas: 8500, despesas: 4900 },
  { date: "2024-05-06", receitas: 9200, despesas: 5700 },
  { date: "2024-05-07", receitas: 8900, despesas: 5300 },
  { date: "2024-05-08", receitas: 9400, despesas: 5900 },
  { date: "2024-05-09", receitas: 8600, despesas: 5000 },
  { date: "2024-05-10", receitas: 9100, despesas: 5500 },
  { date: "2024-05-11", receitas: 8800, despesas: 5200 },
  { date: "2024-05-12", receitas: 9300, despesas: 5800 },
  { date: "2024-05-13", receitas: 8700, despesas: 5100 },
  { date: "2024-05-14", receitas: 9000, despesas: 5400 },
  { date: "2024-05-15", receitas: 8500, despesas: 4900 },
  { date: "2024-05-16", receitas: 9200, despesas: 5700 },
  { date: "2024-05-17", receitas: 8900, despesas: 5300 },
  { date: "2024-05-18", receitas: 9400, despesas: 5900 },
  { date: "2024-05-19", receitas: 8600, despesas: 5000 },
  { date: "2024-05-20", receitas: 9100, despesas: 5500 },
  { date: "2024-05-21", receitas: 8800, despesas: 5200 },
  { date: "2024-05-22", receitas: 9300, despesas: 5800 },
  { date: "2024-05-23", receitas: 8700, despesas: 5100 },
  { date: "2024-05-24", receitas: 9000, despesas: 5400 },
  { date: "2024-05-25", receitas: 8500, despesas: 4900 },
  { date: "2024-05-26", receitas: 9200, despesas: 5700 },
  { date: "2024-05-27", receitas: 8900, despesas: 5300 },
  { date: "2024-05-28", receitas: 9400, despesas: 5900 },
  { date: "2024-05-29", receitas: 8600, despesas: 5000 },
  { date: "2024-05-30", receitas: 9100, despesas: 5500 },
  { date: "2024-05-31", receitas: 8800, despesas: 5200 },
  { date: "2024-06-01", receitas: 9300, despesas: 5800 },
  { date: "2024-06-02", receitas: 8700, despesas: 5100 },
  { date: "2024-06-03", receitas: 9000, despesas: 5400 },
  { date: "2024-06-04", receitas: 8500, despesas: 4900 },
  { date: "2024-06-05", receitas: 9200, despesas: 5700 },
  { date: "2024-06-06", receitas: 8900, despesas: 5300 },
  { date: "2024-06-07", receitas: 9400, despesas: 5900 },
  { date: "2024-06-08", receitas: 8600, despesas: 5000 },
  { date: "2024-06-09", receitas: 9100, despesas: 5500 },
  { date: "2024-06-10", receitas: 8800, despesas: 5200 },
  { date: "2024-06-11", receitas: 9300, despesas: 5800 },
  { date: "2024-06-12", receitas: 8700, despesas: 5100 },
  { date: "2024-06-13", receitas: 9000, despesas: 5400 },
  { date: "2024-06-14", receitas: 8500, despesas: 4900 },
  { date: "2024-06-15", receitas: 9200, despesas: 5700 },
  { date: "2024-06-16", receitas: 8900, despesas: 5300 },
  { date: "2024-06-17", receitas: 9400, despesas: 5900 },
  { date: "2024-06-18", receitas: 8600, despesas: 5000 },
  { date: "2024-06-19", receitas: 9100, despesas: 5500 },
  { date: "2024-06-20", receitas: 8800, despesas: 5200 },
  { date: "2024-06-21", receitas: 9300, despesas: 5800 },
  { date: "2024-06-22", receitas: 8700, despesas: 5100 },
  { date: "2024-06-23", receitas: 9000, despesas: 5400 },
  { date: "2024-06-24", receitas: 8500, despesas: 4900 },
  { date: "2024-06-25", receitas: 9200, despesas: 5700 },
  { date: "2024-06-26", receitas: 8900, despesas: 5300 },
  { date: "2024-06-27", receitas: 9400, despesas: 5900 },
  { date: "2024-06-28", receitas: 8600, despesas: 5000 },
  { date: "2024-06-29", receitas: 9100, despesas: 5500 },
  { date: "2024-06-30", receitas: 8800, despesas: 5200 },
];

const chartConfig = {
  receitas: {
    label: "Receitas",
    color: "var(--primary)",
  },
  despesas: {
    label: "Despesas",
    color: "#ef4444", // Vermelho mais visível
  },
} satisfies ChartConfig;

function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Receitas vs Despesas</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Comparativo dos últimos 3 meses
          </span>
          <span className="@[540px]/card:hidden">Últimos 3 meses</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Últimos 3 meses</ToggleGroupItem>
            <ToggleGroupItem value="30d">Últimos 30 dias</ToggleGroupItem>
            <ToggleGroupItem value="7d">Últimos 7 dias</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Últimos 3 meses" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Últimos 3 meses
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Últimos 30 dias
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Últimos 7 dias
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillReceitas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-receitas)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-receitas)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillDespesas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <Tooltip
              cursor={false}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length && label) {
                  return (
                    <div className="rounded-lg border border-gray-700 bg-black/90 p-3 text-white shadow-lg">
                      <div className="mb-2 text-sm font-semibold">
                        {new Date(label).toLocaleDateString("pt-BR", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="space-y-1">
                        {payload.map(
                          (
                            entry: {
                              dataKey: string;
                              color: string;
                              value: number;
                            },
                            index: number,
                          ) => (
                            <div
                              key={index}
                              className="flex items-center justify-between gap-4"
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className="h-3 w-3 rounded-sm"
                                  style={{ backgroundColor: entry.color }}
                                />
                                <span className="text-sm">
                                  {entry.dataKey === "receitas"
                                    ? "Receitas"
                                    : "Despesas"}
                                </span>
                              </div>
                              <span className="text-sm font-medium">
                                R$ {entry.value?.toLocaleString("pt-BR")}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="receitas"
              stroke="var(--color-receitas)"
              strokeWidth={2}
              fill="url(#fillReceitas)"
            />
            <Area
              type="monotone"
              dataKey="despesas"
              stroke="#ef4444"
              strokeWidth={2}
              fill="url(#fillDespesas)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ChartAreaInteractive;
