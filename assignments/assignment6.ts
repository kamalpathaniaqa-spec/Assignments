function isPrime(n: number): boolean {
  // Prime numbers must be greater than 1
  if (n <= 1) {
    return false;
  }

  // Check divisibility up to square root of n
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false; // Not a prime number
    }
  }

  return true; // Prime number
}

console.log(isPrime(7));   // true
console.log(isPrime(25));  // false
console.log(isPrime(1));   // false