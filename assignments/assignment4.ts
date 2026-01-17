 

 const transactions :number[]=[50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
  
  let creditCount = 0;
  let debitCount = 0;
  let totalCredited = 0;
  let totalDebited = 0;
  let balance = 0;
  let suspiciousCount = 0;

  // loop through transcation
    for (const amount of transactions){

        //credit transaction
        if(amount >0){
            creditCount++;
            totalCredited += amount;
        }else{
            debitCount++;
            totalDebited += amount;  
        }
            


            // Suspicious transaction
            if (amount > 10000 || amount < -10000) {
               console.log("Suspicious " + amount + " Transaction: " + amount);
                suspiciousCount++;
            }
            }
     
          //final balance
              balance = totalCredited + totalDebited;

    
     
                  console.log("Total credit transactions:", creditCount);
                   console.log("Total debit transactions:", debitCount);

                   console.log("Total Amount Credited:", totalCredited);
                    console.log("Total Amount Debited:", totalDebited);

                    console.log("Total Amount Remaining in Bank Account:", balance);   
                    console.log("Suspicious Count:", suspiciousCount);

        

        export{};
