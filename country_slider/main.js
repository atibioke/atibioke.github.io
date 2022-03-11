const container = document.querySelector('.container')


 setInterval(() => {
    const randomIndex = Math.floor(Math.random() * countryWithImages.length )
   
    const selectedCountry = countryWithImages[randomIndex]
    
    document.querySelector("img")
    .setAttribute("src", `https:${selectedCountry.file_url}`)

}, 2500);









