const container = document.querySelector('.container')
let progress = document.getElementsByClassName("progress-bar")[0];


 setInterval(() => {
    const randomIndex = Math.floor(Math.random() * countryWithImages.length )
   
    const selectedCountry = countryWithImages[randomIndex]
    
    document.querySelector("img")
    .setAttribute("src", `https:${selectedCountry.file_url}`)


}, 2500);
// setInterval(() => {
//   const computedStyle = getComputedStyle(progress);
// const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
// progress.style.setProperty("--width", width+0.1)
    
// })




function move() {
    
        let a = setInterval(function() {
          for(let i=0; i<=100; i+=1){
            progress.value =  i;
          }
            if (progress.value == 100) {
              clearInterval(a);
            }
          }, );

    }
 














