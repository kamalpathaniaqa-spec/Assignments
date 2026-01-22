// Assignment8 (Arrays and Loops)

// Print the numbers in diamond-shaped pyramind of numbers.
 
function printDiamond(n: number): void {
       let result: string[] = [];
       
     // Upper half
        for (let i = 1; i <= n; i++) {

            // spaces
            let line = " " .repeat(n - i);

            // increasing numbers
            for (let j = 1; j <= i; j++) {
                line +=  j;
            }

             // decreasing numbers
            for (let j = i - 1; j >= 1; j--) {
                line += j;
            }

            console.log(line);
        }

        // Lower half
        for (let i = n - 1; i >= 1; i--) {

            // spaces
            let line = " ".repeat(n - i);

            // increasing numbers
            for (let j = 1; j <= i; j++) {
                line += j;
            }

            // decreasing numbers
            for (let j = i - 1; j >= 1; j--) {
                line += j;
            }

             result.push(line);
        }
             // Print using array loop
             for (let i = 0; i < result.length; i++) {
               console.log(result[i]);
              
        }
    }

      printDiamond(6);
      export {};

