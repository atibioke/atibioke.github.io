const container = document.querySelector('.container')
let progress = document.getElementById("file");


 setInterval(() => {
    const randomIndex = Math.floor(Math.random() * countryWithImages.length )
   
    const selectedCountry = countryWithImages[randomIndex]
    
    document.querySelector("img")
    .setAttribute("src", `https:${selectedCountry.file_url}`)

    

}, 2500);




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
 














