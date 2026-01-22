// Best Time to Buy and Sell Stock

function maxProfitStock(prices: number[]): number
  let maxProfit: number = 0;
  let buyDay: number = 0;
  let sellDay: number = 0;

  // Loop through each day
  for (let i: number = 0; i < prices.length - 1; i++) {
    for (let j: number = i + 1; j < prices.length; j++) {
      const profit: number = prices[j] - prices[i];

      // Correct comparison
      if (profit > maxProfit) {
        maxProfit = profit;
        buyDay = i + 1;   // 1-based index
        sellDay = j + 1;
      }
    }
  }

  // Print result
  if (maxProfit > 0) {
    console.log("Max Profit is " + maxProfit);
    console.log("Buy the share on day " + buyDay);
    console.log("Sell the share on day " + sellDay);
  } else {
    console.log("You will lose your money, don't buy this share");
  }


export{};