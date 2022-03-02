const countryButtonElement = document.querySelector("button")

countryButtonElement.addEventListener("click", function(amebo){
    
    const randomIndex = Math.floor(Math.random() * countryWithImages.length )
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

    container.innerHTML = ""
    for(let i = 0; i < shuffledOptionIndex.length; i++){
        const selectedCountry = countryWithImages[optionIndex[i]]

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


    countryForm.addEventListener("click", function(e) {
        if (e.target.tagName.toUpperCase() === "INPUT") {
            var value = e.target.value.toLowerCase(); 

           if(selectedCountry.name.toLowerCase() === value){
               alert("Correct")
             } else {
               alert("Incorrect")
           }
        }
    });


})