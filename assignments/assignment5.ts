// Assignment --5. 
//Claculate the hike percentage of each Employee and store the Values

//Employee Details
interface Employee{
name: string;
baseSalary: number;
experience: number;
rating: number;
 }
 const employees = [{ name: "Alice Johnson", baseSalary: 75000.0, experience: 5.1, rating: 4.2 },
     { name: "Bob Smith", baseSalary: 68000.0, experience: 3.2, rating: 3.8 },
     { name: "Carol Davis", baseSalary: 82000.0, experience: 7.1, rating: 4.5 },
     { name: "David Brown", baseSalary: 90000.0, experience: 10.2, rating: 2.5 }, 
     { name: "Eva Green", baseSalary: 60000.0, experience: 2.4, rating: 3.5 }];

   const hikeMap = new Map<string, number>(); for (const employee of employees) 
    { let variablePaypercent = 0;
         let bonus = 0; 
         let reward = 0; 
         if (employee.rating >= 4.0) 
            { variablePaypercent = 0.15; bonus = 1500; 

            } else if (employee.rating >= 3.0) 
                { variablePaypercent = 0.10; bonus = 1200; 

                } else { variablePaypercent = 0.03; bonus = 300; 

                } if (employee.experience >= 5) 
                    { reward = 5000; } 
                    // hike calculation 
                    const hikeAmount = (employee.baseSalary * variablePaypercent) + bonus + reward; 
                    const hikePercentage = (hikeAmount / employee.baseSalary) * 100; 

                    
                    // Store in Map 
                    hikeMap.set(employee.name, hikePercentage); 
                 }
                    //print the Result
                   console.log("Employee Hike Percentages:");
                   hikeMap.forEach((hikePercent, name) =>{
           
                  console.log(`${name} → ${hikePercent.toFixed(2)}%`);
                 });
            
        