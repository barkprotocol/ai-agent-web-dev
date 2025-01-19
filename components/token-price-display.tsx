'use client'

import React, { useState, useEffect } from 'react';
import { fetchTokenPrices, TokenConfig, tokenConfigs } from '@/app/utils/fetch-price-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PriceData {
  pyth: number | null;
  coingecko: number | null;
  coinmarketcap: number | null;
  jupiter: number | null;
}

export function TokenPriceDisplay() {
  const [selectedToken, setSelectedToken] = useState<string>('SOL');
  const [prices, setPrices] = useState<PriceData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPrices = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const tokenPrices = await fetchTokenPrices(selectedToken);
      setPrices(tokenPrices);
    } catch (err) {
      setError(`Failed to fetch ${selectedToken} prices`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, [selectedToken]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{selectedToken}/USD Prices</span>
          <Select value={selectedToken} onValueChange={setSelectedToken}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select token" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(tokenConfigs).map((symbol) => (
                <SelectItem key={symbol} value={symbol}>
                  {symbol}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : prices ? (
          <div className="space-y-2">
            <p><strong>Pyth:</strong> ${prices.pyth?.toFixed(2) ?? 'N/A'}</p>
            <p><strong>CoinGecko:</strong> ${prices.coingecko?.toFixed(2) ?? 'N/A'}</p>
            <p><strong>CoinMarketCap:</strong> ${prices.coinmarketcap?.toFixed(2) ?? 'N/A'}</p>
            <p><strong>Jupiter:</strong> ${prices.jupiter?.toFixed(2) ?? 'N/A'}</p>
          </div>
        ) : null}
        <Button onClick={fetchPrices} disabled={isLoading} className="w-full mt-4">
          Refresh Prices
        </Button>
      </CardContent>
    </Card>
  );
}

