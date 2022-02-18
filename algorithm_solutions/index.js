



// function findMultipleOfTwoNumbers(a, b, range) {
//     n_1 = Math.floor(range/a)
//     n_2 = Math.floor(range/b)
//     n_3 = Math.floor(range/(a*b))
//      sum_1 = ((n_1)*[2*a + ((n_1)-1)*a])/2
//     sum_2 = ((n_2)*[2*b + ((n_2)-1)*b])/2
//     sum_3 = ((n_3)*[2*a*b + ((n_3)-1)*a*b])/2
//     return((sum_1 + sum_2) - sum_3)
//   }


// END

// SUM FIBONACCI EVEN TERMS


function evenSumOfFibonacci(n){

    for(let n=3; n<=33; n+=3){
  let num = Math.floor(( Math.pow((1+(Math.pow(5, 0.5)))/2, n)  - Math.pow((1-(Math.pow(5, 0.5)))/2, n))*(1/(Math.pow(5, 0.5))));
    }
     let sum = num+=num
  
   console.log(sum)
  }
  evenSumOfFibonacci(n)
   
    
    









