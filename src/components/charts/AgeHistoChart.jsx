"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
// ]

// const chartConfig = {
//   age: {
//     label: "Age",
//     color: "var(--chart-1)",
//   },
// } 

export function AgeHistogramChart({ data }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Répartition par âge</CardTitle>
        <CardDescription>Tranches d’âge des utilisateurs</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "Utilisateurs",
              color: "var(--chart-7)",
            },
          }}
        >
          <BarChart data={data}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="range"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />

            <Bar
              dataKey="value"
              fill="var(--color-value)"
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

