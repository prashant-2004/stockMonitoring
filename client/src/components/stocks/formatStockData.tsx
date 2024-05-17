export const formatStockData = (stockData:any) =>{
     const formattedData: { x: string; y: string[]; }[] = [];
     if(stockData['Time Series (5min)']){
        Object.entries(
            stockData['Time Series (5min)']
        ).map(
           
            ([key, value]) => {
                const val: any = value;
                formattedData.push({
                    x : key,
                    y : [
                        val['1. open'],
                        val['2. high'],
                        val['3. low'],
                        val['4. close']
                    ]
                })
                return formattedData;
            }
        )
     }
    return formattedData;
}