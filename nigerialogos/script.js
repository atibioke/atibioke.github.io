const logoContainer = document.getElementById("logoContainer");

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
        <p>
            <a href="" class="title">${title}</a>

        </p>
        <h3>
        <span>${category}</span>
         </h3>
    </div>
    `;
}
