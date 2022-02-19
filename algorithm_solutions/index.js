
// MULTIPLES OF NUMBERS WITHIN  A RANGE


function findSumOfMultiplesOfTwoNumbers(a, b, range) {
    let  n_1;
    let  n_2;
    let  n_3;
    let sum_1;
    let sum_2;
    let sum_3;
  if(range%a===0){
    n_1 = Math.floor((range-1)/a)
  }else{
    n_1 = Math.floor((range)/a)
  }
  if(range%b===0){
    n_2 = Math.floor((range-1)/b)
  }else{
    n_2 = Math.floor((range)/b)
  }
  if(range%(a*b)===0){
    n_3 = Math.floor((range-1)/(a*b))
  }else{
    n_3 = Math.floor((range)/(a*b))
  }
       sum_1 = ((n_1)*[2*a + ((n_1)-1)*a])/2
    console.log(sum_1)
      sum_2 = ((n_2)*[2*b + ((n_2)-1)*b])/2
    console.log(sum_2)
      sum_3 = ((n_3)*[2*a*b + ((n_3)-1)*a*b])/2
   console.log(sum_3)
     console.log((sum_1 + sum_2) - sum_3)
      return((sum_1 + sum_2) - sum_3)
  }
    findMultipleOfTwoNumbers(a, b, range)

// END

// SUM FIBONACCI EVEN TERMS

// YOU'RE PASSING IN m WHERE m THE LIMIT OUR TERMS MUST NOT EXCEED


function Fib(n) {
    let num = Math.floor(
      (Math.pow((1 + Math.pow(5, 0.5)) / 2, n) -
        Math.pow((1 - Math.pow(5, 0.5)) / 2, n)) *
        (1 / Math.pow(5, 0.5))
    );
    return num;
  }
  function evenSumOfFibonacci(m) {
    let sum = 0;
    let i = 3;
    while (Fib(i) <= m) {
      sum += Fib(i);
      i += 3;
    }
    console.log(sum);
    return sum
  }
  evenSumOfFibonacci();
  

    
    // LARGEST PRIME FACTOR

    function isPrime(n) {
        if (n == 2 || n == 3) return true;
        for (let i = 2; i * i < n; i ++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    
    function largestPrimeFactor(n) {
        let prime = 2;
        while (n > 1) {
            while (n % prime === 0) {
                n /= prime;
            }
            if (n == 1) break;
            do {
               prime ++;
            } while (!isPrime(prime));
        }
        return prime;
    }









