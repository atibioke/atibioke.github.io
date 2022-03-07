const logoContainer = document.getElementById("logoContainer");
const allOptions= document.querySelectorAll('option');

const categoriesContainer = document.querySelector(".yimu");


for (let i = 0; i < companyLogos.length; i++) {
  const fileName = companyLogos[i].filename;
  const title = companyLogos[i].title;
  const category = companyLogos[i].category.filter((a) => a.length).join(' / ');
  const logoUrl = `https://nigerialogos.com/logos/${fileName}/${fileName}.png`;
  logoContainer.innerHTML += `
    <div class="card-box">
        <div class="card">
        <img src="${logoUrl}" alt="${fileName}" class="card-image">
    </div>
        <p class="title">
            <a href="" >${title}</a>
        </p>
        <h3>
        <span class="category">${category}</span>
         </h3>
    </div>
    `;
}




document.getElementById("Categories").addEventListener('change', function(e) {
    console.log(this.value, e.target.value);
    let categoryValue=this.value;
    logoContainer.innerHTML="";

    for(let i=0;i < companyLogos.length; i++ ){
        
       // console.log(companyLogos[i].category)
       if(companyLogos[i].category.includes(categoryValue)){
        
        console.log(companyLogos[i])

        const fileName = companyLogos[i].filename;
  const title = companyLogos[i].title;
  const category = companyLogos[i].category.filter((a) => a.length).join(' / ');
  const logoUrl = `https://nigerialogos.com/logos/${fileName}/${fileName}.png`;
  logoContainer.innerHTML += `
    <div class="card-box">
        <div class="card">
        <img src="${logoUrl}" alt="${fileName}" class="card-image">
    </div>
        <p class="title">
            <a href="" >${title}</a>
        </p>
        <h3>
        <span class="category">${category}</span>
         </h3>
    </div>
    `;

       }
    }

  });




