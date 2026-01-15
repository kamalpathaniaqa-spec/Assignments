// A bank evaluates loan applicant based on the following criteria;

//Loan Eligibility check 
function LoanEligibilityCheck(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
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

export {};
