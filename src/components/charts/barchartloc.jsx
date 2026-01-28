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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,

} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

const chartConfig = {
 male: {
    label: "Male",
    color: "var(--chart-7)",
  },
  female: {
    label: "Female",
    color: "var(--chart-6)",
  },
} 

export function UsersByCountryBarChart({ data }) {
  return (
    <Card>
       <CardHeader>
        <CardTitle>Utilisateurs par pays</CardTitle>
        <CardDescription>Répartition par genre</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="country"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="male"
              stackId="a"
              fill="var(--color-male)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="female"
              stackId="a"
              fill="var(--color-female)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="text-muted-foreground leading-none">
          Showing total user by country
        </div>
      </CardFooter>
    </Card>
  )
}
