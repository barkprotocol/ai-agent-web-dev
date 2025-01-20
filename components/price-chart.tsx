'use client';

import React, { useMemo } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { ExternalLink } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { formatChartPrice } from '@/lib/format';
import { TIMEFRAME } from '@/app/types/chart';
import { Button } from '@/components/ui/button';

interface PriceChartProps {
  data: {
    time: number;
    value: number;
  }[];
  timeFrame: TIMEFRAME;
  tokenInfo: {
    symbol: string;
    address: string;
  };
}

function formatDate(time: number, timeFrame: TIMEFRAME) {
  const date = new Date(time);
  switch (timeFrame) {
    case TIMEFRAME.DAYS:
      return date.toLocaleDateString(undefined, { month: 'short', day: '2-digit' });
    case TIMEFRAME.HOURS:
      return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    case TIMEFRAME.MINUTES:
      return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    default:
      return date.toLocaleDateString(undefined, { month: 'short', day: '2-digit' });
  }
}

function shortenAddress(addr: string) {
  if (addr.length <= 10) return addr;
  return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
}

export default function PriceChart({
  data,
  timeFrame,
  tokenInfo: { symbol, address },
}: PriceChartProps) {
  const transformedData = useMemo(() => 
    data.map((point) => ({
      date: formatDate(point.time, timeFrame),
      price: point.value,
    })),
    [data, timeFrame]
  );

  const priceChange = useMemo(() => {
    if (data.length < 2) return 0;
    const firstPrice = data[0].value;
    const lastPrice = data[data.length - 1].value;
    return ((lastPrice - firstPrice) / firstPrice) * 100;
  }, [data]);

  const priceChangeColor = priceChange >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <Card>
      <CardHeader className="border-b py-5">
        <div className="flex items-center justify-between">
          <div className="grid flex-1 gap-1">
            <CardTitle className="flex items-center gap-2">
              {symbol} Price
              <span className={`text-sm font-normal ${priceChangeColor}`}>
                {priceChange.toFixed(2)}%
              </span>
            </CardTitle>
            <CardDescription>
              Contract Address:
              <span className="hidden sm:inline"> {address}</span>
              <span className="inline sm:hidden"> {shortenAddress(address)}</span>
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex"
            onClick={() => window.open(`https://solscan.io/token/${address}`, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View on Solscan
          </Button>
        </div>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={{
            price: {
              label: 'Price',
              color: 'hsl(var(--chart-1))',
            },
          }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={transformedData}>
              <CartesianGrid vertical={false} stroke="hsl(var(--border))" />
              <XAxis
                dataKey="date"
                tickLine={true}
                axisLine={true}
                tickMargin={8}
                stroke="hsl(var(--foreground))"
              />
              <YAxis
                domain={[
                  (dataMin: number) => dataMin * 0.95,
                  (dataMax: number) => dataMax * 1.05,
                ]}
                tickFormatter={(val) => formatChartPrice(val)}
                stroke="hsl(var(--foreground))"
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value) => formatChartPrice(Number(value))}
                  />
                }
              />
              <Line
                dataKey="price"
                strokeWidth={2}
                type="monotone"
                dot={false}
                activeDot={{ r: 4 }}
                stroke="hsl(var(--chart-1))"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

