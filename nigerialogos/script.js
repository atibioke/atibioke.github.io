const logoContainer = document.getElementById('logoContainer');




for(let i = 0; i < companyLogos.length; i++) {
    const fileName = companyLogos[i].filename;
    const logoUrl = `https://nigerialogos.com/logos/${fileName}/${fileName}.png`;
    logoContainer.innerHTML += `
    <div class="card">
        <img src="${logoUrl}" alt="${fileName}" class="card-image">
    </div>
    `;
}


























