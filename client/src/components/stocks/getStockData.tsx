export const getStockData = async (symbol:string) =>{
    const apiKey = process.env.ALPHA_VANTAGE_API_KEY || "UWNC92MVR8JO85DD";
    const symbol_2 = symbol;
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol_2}&interval=5min&apikey=${apiKey}`)
    const data = await response.json();
   return data;
}