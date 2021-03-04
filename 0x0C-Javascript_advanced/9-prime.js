function countPrimeNumbers () {
  let primes = 0;
  for (var counter = 2; counter <= 100; counter = counter + 1)
  {
    let isprime = true;
    var limit = Math.round(Math.sqrt(counter));
    for (var mod = 2; mod <= limit; mod++) {
      if (counter % mod == 0) {
        isprime = false;
        break;
      }
    }
    if (isprime) {
        primes = primes + 1;
    }
  }
  return primes;
}

let t0 = performance.now();
countPrimeNumbers();
let t1 = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (t1 - t0) + " milliseconds.");
