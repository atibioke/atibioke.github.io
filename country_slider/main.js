let counter = 0;
let width = 0;
let timer;


function flagQuiz(amebo){
 
    
  // const randomIndex = Math.floor(Math.random() * countryWithImages.length )
  const randomIndex = counter
 
  const selectedCountry = countryWithImages[randomIndex]
  
  document.querySelector("img")
  .setAttribute("src", `https:${selectedCountry.file_url}`)
  
  const optionIndex = [randomIndex];

  for(let i = 1; i <= 3; i++){
      let randomOptionIndex = Math.floor(Math.random() * countryWithImages.length)
      optionIndex.push(randomOptionIndex)
  }


  const shuffledOptionIndex = optionIndex.sort(() => .5 - Math.random())



  let container = document.getElementById('container');

  container.innerHTML = "";
 
  for(let i = 0; i < shuffledOptionIndex.length; i++){
      const selectedCountry = countryWithImages[shuffledOptionIndex[i]]

      let checkbox = document.createElement('input');
      checkbox.type = 'radio';
      checkbox.class = 'checkbox';
      checkbox.name = 'country';
      checkbox.value = selectedCountry.name;
    
      let label = document.createElement('label')
      label.htmlFor = selectedCountry.name;
      label.appendChild(document.createTextNode(selectedCountry.name));
      
      let br = document.createElement('br');
    
      container.appendChild(checkbox);
      container.appendChild(label);
      container.appendChild(br);
  }

  
  const countryForm = document.querySelector('#container');
  const quizResult = document.querySelector('#result');
  quizResult.innerHTML="";

  countryForm.addEventListener("click", function(e) {
      if (e.target.tagName.toUpperCase() === "INPUT") {
          var value = e.target.value.toLowerCase(); 
       if(selectedCountry.name.toLowerCase() === value){
          quizResult.innerHTML= "correct!"
           
           } else {
          
            quizResult.innerHTML= "incorrect!"
         }
      }

  });
 counter++

}


let bar = setInterval(() => {
  const progressBar = document.getElementById('progressBar');
  width++;
  progressBar.style.width = `${width}%`
 
 
 
if(width === 100){
  clearInterval(bar)
  progressBar.style.width="0px"
}
 
}, 10);








if(counter===countryWithImages.length){
  clearInterval(timer)
};


 timer = setInterval(()=> flagQuiz(), 3000)












// const container = document.querySelector('.container')
// let progress = document.getElementsByClassName("progress-bar")[0];
// console.log(progress)


//  setInterval(() => {
//     const randomIndex = Math.floor(Math.random() * countryWithImages.length )
   
//     const selectedCountry = countryWithImages[randomIndex]
    
//     document.querySelector("img")
//     .setAttribute("src", `https:${selectedCountry.file_url}`)


// }, 2500);


// setInterval(() => {
//   const computedStyle = getComputedStyle(progress);
// const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
// progress.style.setProperty("--width", width+0.1)
    
// })




// function move() {
//         let a = setInterval(function() {
//           for(let i=0; i<=100; i+=1){
//             progress.value =  i;
//           }
//             if (progress.value == 100) {
//               clearInterval(a);
//             }
//           }, );

//     }
 














