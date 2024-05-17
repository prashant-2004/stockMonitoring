import { useEffect, useMemo, useState} from "react";
import { getStockData } from "./services";
import { formatStockData } from "./utils";
import ReactApexChart from "react-apexcharts";

function LiveChart({ symbol }: { symbol: string }): JSX.Element {
    const [stockData, setStockData] = useState({});

    useEffect(() =>{
        getStockData(symbol).then(data =>{
            setStockData(data);
        });
    }, [symbol])

    const seriesData = useMemo(()=> formatStockData(stockData),[stockData]);

    console.log("SeriesData",seriesData);
    return(
        <ReactApexChart
            series={
                [
                    {
                        data:seriesData
                    }
                ]
            }
            height={350}
            type="candlestick"
            options={{
                chart: {
                    type: 'candlestick',
                    height: 350
                  },
                  title: {
                    text: 'CandleStick Chart',
                    align: 'left'
                  },
                  xaxis: {
                    type: 'datetime'
                  },
                  yaxis: {
                    tooltip: {
                      enabled: true
                    }
                  }
            }}
        />
    )
}

export default LiveChart;