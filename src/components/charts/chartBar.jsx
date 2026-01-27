"use client"
import React from "react"
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ChartBarProducts({ data }) {
  const totalProducts = React.useMemo(() => data.reduce((acc, d) => acc + d.count, 0), [data])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Produits par Tag</CardTitle>
        <CardDescription>Total produits: {totalProducts}</CardDescription>
      </CardHeader>
      <CardContent>
        <BarChart data={data} width={1500} height={250} margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tag" />
          <Tooltip />
          <Bar dataKey="count" fill="#8e19bd" />
        </BarChart>
      </CardContent>
    </Card>
  )
}
