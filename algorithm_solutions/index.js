
// TO GENERATE PRIMES WITHIN A RANGE
function smallestMult(n) {
    let array = [2];
    for(let i=3; i<=n; i++){
      if(Math.pow(2,i)%i===2){
        array.push(i)
      }
    }
      return array;
    }
    
    smallestMult(n);



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


// LARGEST PALINDROME

function largestPalindromeProduct(m) {
    let prod;
    if(m===2){
     result = 0;
    for (let i = 99; i >= 10; i --) {
        for (let j = 99; j >= 10; j --) {
            let prod = i * j;
            let stringProd = String(prod);
            let reverseStringProd = stringProd.split('').reverse().join('');
            if (stringProd === reverseStringProd ) {
                result = Math.max(result, prod);
            }
        }
    }
    }
      if(m===3){
     result = 0;
    for (let i = 999; i >= 100; i --) {
        for (let j = 999; j >= 100; j --) {
            let prod = i * j;
            let stringProd = String(prod);
            let reverseStringProd  = stringProd.split('').reverse().join('');
            if (stringProd === reverseStringProd ) {
                result = Math.max(result, prod);
            }
        }
    }
    }
     
    console.log(ans);
      return ans;
    }
    
    largestPalindromeProduct(3);


    //  smallest positive number that is evenly divisible by all of the numbers in a range

    function smallestMult(n) {
        let multiple=1;
        let array = [2];
        for(let i=3; i<=n; i++){
          if(Math.pow(2,i)%i===2){
            array.push(i)
          }
          console.log(array)
        }
        
         for(let j = 0; j < array.length; j++){
           for(let k = 1; k <= n; k++){
             const currentPower = Math.pow(array[j], k);
             const power = currentPower === n ? k : k-1;
             if(currentPower > n){
               const previousNum = Math.pow(array[j], power);
               multiple *= previousNum;
               break;
             }
           }
          
         }
        
         return multiple;
        }



