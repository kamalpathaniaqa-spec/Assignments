//A phrase us a palindrome if, after conerting all uppercase letters into lower case letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
const str1: string = "A man, a plan, a canal: Panama";
const str2: string = "race a car";

// Function to check if a string is a palindrome
function isPalindrome(s: string): boolean {

    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversed: string = cleaned.split('').reverse().join('');
     
    // compared both strings
    return cleaned === reversed;
}
console.log("Checking palindrome for string 1:");
console.log("Original String: '" + str1 + "'");
console.log("Reversed String: '" + str1.split('').reverse().join('') + "'");
console.log("Is Palindrome: " + isPalindrome(str1));

console.log("\nChecking palindrome for string 2:");
console.log("Original String: '" + str2 + "'");
console.log("Reversed String: '" + str2.split('').reverse().join('') + "'");
console.log("Is Palindrome: " + isPalindrome(str2));








    /* Initialize pointers
    let left: number = 0;
    let right: number = cleanedStr.length - 1;
    
    // Check for palindrome
    while (left < right) {
        if (cleanedStr.charAt(left) !== cleanedStr.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Test the function
console.log(isPalindrome(str1));  // Output: true
console.log(isPalindrome(str2));// Output: false8*/

     
