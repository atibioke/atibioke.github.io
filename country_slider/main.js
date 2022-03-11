const container = document.querySelector('.container')
let progress = document.getElementById("file");


 setInterval(() => {
    const randomIndex = Math.floor(Math.random() * countryWithImages.length )
   
    const selectedCountry = countryWithImages[randomIndex]
    
    document.querySelector("img")
    .setAttribute("src", `https:${selectedCountry.file_url}`)

    

}, 2500);




function move() {
  var a = setInterval(function() {
    progress.value = progress.value + 1;

    if (progress.value == 100) {
      clearInterval(a);
    }
  }, 2500);
}













