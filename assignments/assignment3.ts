// A bank evaluates loan applicant based on the following criteria;

//Loan Eligibility check 
function LoanEligibilityCheck(
    customerName: string = "john Doe",
    creditScore: number = 720,
    income: number = 55000,
    isEmployed: boolean = true,
    debtToIncomeRatio: number = 35
): void {
    let isLoanApproved: boolean = false;
    
    if (creditScore > 750) {
        isLoanApproved = true;
    }
    else if (creditScore >= 650 && creditScore <= 750) {
        if (income >= 50000) {
            if (isEmployed) {
                if (debtToIncomeRatio < 40) {
                    isLoanApproved = true;
                } else {
                    isLoanApproved = false;
                }
            } else {
                isLoanApproved = false;
            }
        } else {
            isLoanApproved = false;
        }
    }
    else {
        //Credit score below 650
        isLoanApproved = false;
    }
    
    // output result 
    if (isLoanApproved) {
        console.log(`${customerName} is eligible for the loan`);
    } else {
        console.log(`${customerName} is Not eligible for the loan`);
    }
}

// Call the function to see output
LoanEligibilityCheck();

export {};
