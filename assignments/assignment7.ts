// Best Time to Buy and Sell Stock


function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let price of prices){
        if(price < minPrice){

        minPrice = price;
        
    } else if (price - minPrice > maxProfit){
      maxProfit = price - minPrice;
    }
} 
return maxProfit;
}
   //calling the function
   console.log(maxProfit([7, 1, 5, 3, 6, 4])); 
    console.log(maxProfit([7, 6, 4, 3, 1])); 


  export{};
