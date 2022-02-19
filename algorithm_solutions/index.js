



// function findMultipleOfTwoNumbers(a, b, range) {
//   let  n_1 = Math.floor(range/a)
//   let n_2 = Math.floor(range/b)
//    let n_3 = Math.floor(range/(a*b))
//    let  sum_1 = ((n_1)*[2*a + ((n_1)-1)*a])/2
  
//   let  sum_2 = ((n_2)*[2*b + ((n_2)-1)*b])/2
 
//   let  sum_3 = ((n_3)*[2*a*b + ((n_3)-1)*a*b])/2

//     return((sum_1 + sum_2) - sum_3)
//   }
//   findMultipleOfTwoNumbers(a, b, range)


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
  evenSumOfFibonacci(1000000000);
  console.log(Fib(34));

    
    









