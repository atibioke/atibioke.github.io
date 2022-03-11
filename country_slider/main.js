const container = document.querySelector('.container')


function countryImagesSlider(){

const randomIndex = Math.floor(Math.random() * countryWithImages.length )
   
const selectedCountry = countryWithImages[randomIndex]

document.querySelector("img")
.setAttribute("src", `https:${selectedCountry.file_url}`)

}