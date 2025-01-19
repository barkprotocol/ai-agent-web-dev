import React from 'react';
import { chartTools } from '@/app/ai/solana/chart';

const ChartExample: React.FC = () => {
  const [chartData, setChartData] = React.useState<any>(null);

  const fetchChartData = async () => {
    const result = await chartTools.priceChartTool.execute({
      contractAddress: '2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg', // BARK token address
      timeFrame: 'days',
      timeDelta: 7,
      tokenSymbol: 'BARK',
    });
    setChartData(result);
  };

  React.useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">BARK Token Price Chart</h2>
      {chartData ? (
        chartTools.priceChartTool.render(chartData)
      ) : (
        <div className="text-muted-foreground">Loading chart data...</div>
      )}
    </div>
  );
};

export default ChartExample;

