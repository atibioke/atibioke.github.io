
// TO GENERATE PRIMES WITHIN A RANGE
function primes(n) {
    let array = [2];
    for(let i=3; i<=n; i++){
      if(Math.pow(2,i)%i===2){
        array.push(i)
      }
    }

      return array;
    }
    
    primes(1000000);


 // PROBLEM 1
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


  // PROBLEM 2
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
  


        // PROBLEM 3
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



    // PROBLEM 4
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

    // PROBLEM 5
    //  smallest positive number that is evenly divisible by all of the numbers in a range

    function smallestMult(n) {
        let multiple=1;
        let array = [2];
        for(let i=3; i<=n; i++){
          if(Math.pow(2,i)%i===2){
            array.push(i)
          }
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

        // PROBLEM 6
        // SUM SQUARE DIFFERENCE

        function sumSquareDifference(n) {
            let sumOfSquare = (n*((2*n)+1)*(n+1))/6;
            let squareOfSum = Math.pow((n*(n+1))/2, 2);
            let difference = ( squareOfSum - sumOfSquare);
             return difference;
           }
           
           sumSquareDifference(100);


           // PROBLEM 7
        //    nthPrime

        function nthPrime(k) {
            let array = []; 
           // let target = k>=100  ? k : k-1
            let  upperBound = Math.sqrt(150000); 
             let result = [];
        
            for (let i = 0; i <= 150000; i++) {
                array.push(i);
            }
           
            for (let i = 2; i <= upperBound; i++) {
                if (array[i]) {
                    for (let j = i * i; j < 150000; j += i) {
                        array[j] = false;
                    }
                }
            }
        
            for (let i = 2; i < 150000; i++) {
                if(array[i]) {
                    result.push(i);
                }
            }
            return result[k-1];
        };
        
        console.log(nthPrime(100))


          // PROBLEM 8
          function largestProductinaSeries(number){
            let str = `73167176531330624919225119674426574742355349194934
          96983520312774506326239578318016984801869478851843
          85861560789112949495459501737958331952853208805511
          12540698747158523863050715693290963295227443043557
          66896648950445244523161731856403098711121722383113
          62229893423380308135336276614282806444486645238749
          30358907296290491560440772390713810515859307960866
          70172427121883998797908792274921901699720888093776
          65727333001053367881220235421809751254540594752243
          52584907711670556013604839586446706324415722155397
          53697817977846174064955149290862569321978468622482
          83972241375657056057490261407972968652414535100474
          82166370484403199890008895243450658541227588666881
          16427171479924442928230863465674813919123162824586
          17866458359124566529476545682848912883142607690042
          24219022671055626321111109370544217506941658960408
          07198403850962455444362981230987879927244284909188
          84580156166097919133875499200524063689912560717606
          05886116467109405077541002256983155200055935729725
          71636269561882670428252483600823257530420752963450`;
          str = str.replace(/\n/g, "");
          let max = 0;
          for (let i = 0; i < (str.length - (number-1)); i++) {
            let part = str.substr(i, number);
            
            let currentProduct = 1;
            for (let n of part) {
              currentProduct *= +n;
            }
            max = Math.max(max, currentProduct);
          }
          return max;
          }
          
          
          largestProductinaSeries()







