const logoContainer = document.getElementById("logoContainer");
const allAnchors = document.getElementsByTagName("a");

function pickOutCompany(companyEntity) {
  const fileName = companyEntity.filename;
  const title = companyEntity.title;
  const category = companyEntity.category.filter((a) => a.length).join(" / ");
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

for (let i = 0; i < companyLogos.length; i++) {
  pickOutCompany(companyLogos[i]);
}

document.getElementById("Categories").addEventListener("change", function (e) {
  let categoryValue = this.value;
  logoContainer.innerHTML = "";

  for (let i = 0; i < companyLogos.length; i++) {
    if (companyLogos[i].category.includes(categoryValue)) {
      pickOutCompany(companyLogos[i]);
    }
  }
});

//Getting logos that start with a letter

for (let i = 0; i < allAnchors.length; i++) {
  allAnchors[i].addEventListener("click", function (e) {
    const presentLetter = e.currentTarget.textContent;
    logoContainer.innerHTML = "";

    for (let i = 0; i < companyLogos.length; i++) {
      if (companyLogos[i].title.startsWith(presentLetter)) {
        pickOutCompany(companyLogos[i]);
      }
    }
  });
}
