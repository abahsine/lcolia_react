let cartes = ["cart_1", "cart_2", "cart_3", "cart_4"];
let i = 0;

const cart_4 = document.querySelector("#cart_4");
const cart_3 = document.querySelector("#cart_3");

const next = document.querySelector("#nextBtn");
const previous = document.querySelector("#prevBtn");

const mediaQuery = screen.width;

// Fonction pour mettre à jour les classes des cartes
function afficherCarte(index) {
  cartes.forEach((id, pas) => {
    const carte = document.querySelector("#" + id);
    if (pas === index) {
      carte.className = "cart cart_" + (index + 1); // Affiche la carte actuelle
    } else {
      carte.className = "cart_hidden"; // Masque les autres cartes
    }
    console.log(carte);
  });
}

// Fonction pour aller à la carte suivante
function suivant() {
  i = (i + 1) % cartes.length; // Calcul circulaire pour avancer
  afficherCarte(i);
}

// Fonction pour aller à la carte précédente
function precedent() {
  i = (i - 1 + cartes.length) % cartes.length; // Calcul circulaire pour reculer
  afficherCarte(i);
}

if (mediaQuery < 850) {
  // Ajout des événements aux boutons
  next.addEventListener("click", suivant);
  previous.addEventListener("click", precedent);
  // Initialisation : masquer toutes les cartes sauf la première
  afficherCarte(i);
} else if (mediaQuery >= 850 && mediaQuery < 1300) {
  cart_4.className = "cart_hidden";
  cart_3.className = "cart_hidden";
  next.style.display = "none";
  previous.style.display = "none";
} else {
  cart_4.className = "cart_hidden";
}

function buildCloudinaryUrl(publicId, width) {
  const cloudName = "dma14j8mz";
  const transformations = "w_100,h_100,c_fill,q_auto,f_auto";
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`;
}

//remove parenthese fonction
function removePar(str) {
  return str.replace(/\([^)]*\)/g, '');
}
//gestion de overflow








async function loadAnnouncements() {
  try {
    const response = await fetch(
      "https://lcolia-api-b5f8c985444a.herokuapp.com/public/search-announcements"
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des annonces");
    }
    const announcements = await response.json();

    const pubBody = document.querySelector(".pub_body");

    pubBody.innerHTML = "";

    const lastAnnouncements = announcements.slice(0, 4);
    lastAnnouncements.forEach((announcement, index) => {
      const pubUnit = document.createElement("div");
      pubUnit.className = "pub_unit";

      if (index % 2 === 1)
        pubUnit.className = pubUnit.className + " pub_laterale";

      const imgsPublicId = (announcement.imagesPublicId || "").split(",");
      let firstImgSrc = "assets/placeholder-package-img.jpg";
      if(imgsPublicId && imgsPublicId.length > 0 && imgsPublicId[0].trim().length > 0)
        firstImgSrc = buildCloudinaryUrl(imgsPublicId[0]);

      
      // Structure de la div avec les données dynamiques
      pubUnit.innerHTML = `
        <img src="${firstImgSrc}" alt="Image annonce">
        <div class="pub_unit_body">
          <h5>${announcement.title}</h5>
          <div class="pub_ville_g">
            <img src="assets/inter_ville.svg" alt="Icone ville">
            <div class="pub_ville">
              <h6>${removePar(announcement.locationFrom)}</h6>
              <h6>${removePar(announcement.locationTo)}</h6>
            </div>
          </div>
        </div>
        <div class="colis_taille">
          <h7>${announcement.sizesOfObjects[0]}</h7>
        </div>
      `;

      // Ajout de la div pub_unit à pub_body
      pubBody.appendChild(pubUnit);
    });
  } catch (error) {
    console.error("Erreur:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadAnnouncements);
