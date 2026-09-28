// MON PARCOURS PROFESSIONNEL MMI
// Séance 1 : les données (stage, missions, outils, bilan)

// LES 5 COMPÉTENCES DU BUT MMI
const COMPETENCES = ["Comprendre", "Concevoir", "Exprimer", "Développer", "Entreprendre"];

// MON STAGE
const stage = {
  entreprise: "Mairie de Bouillante",
  secteur: "Collectivité territoriale, communication institutionnelle",
  lieu: "Bouillante, Guadeloupe",
  periode: "Du 1er au 26 juin 2026",
  poste: "Stagiaire infographiste",
  service: "Service infographie, en lien avec le service communication",
  tuteur: "Christian RECULARD"
};

// MES MISSIONS
// images : liste de chemins vers des images de assets/images/.
// Laisse [] tant que tu n'as pas les images : un encadré "Image à venir" s'affiche.
// Ne mets que des visuels dont la diffusion est autorisée.
const missions = [
  {
    titre: "Exercice d'évaluation Photoshop",
    categorie: "Évaluation",
    description: "Le premier jour, reproduction de créations réalisées en cours pour que mon tuteur évalue ma maîtrise de Photoshop (composition, typographie, retouche). Il m'a ensuite confié les missions de la mairie.",
    outils: ["Photoshop"],
    competences: ["Exprimer"],
    images: ["assets/images/avatar.png", "assets/images/Black_Pink.png", "assets/images/mel_ramos.png"]
  },
  {
    titre: "Flyer de la Cérémonie des Récompenses 2026",
    categorie: "Communication événementielle",
    description: "Flyer pour la cérémonie « Mérites et Réussites » des écoles, dans le respect de la charte graphique de la mairie et en intégrant les retours du tuteur et de la communication. Diffusé sur les réseaux sociaux de la mairie.",
    outils: ["Photoshop"],
    competences: ["Comprendre", "Exprimer"],
    images:  ["assets/images/AFFICHE.jpg"]
  },
  {
    titre: "Maquettes de pochettes RH",
    categorie: "Identité visuelle",
    description: "Quatre propositions de pochettes pour le service RH, avec une grande liberté créative. Les propositions ont été retenues puis adaptées en A3 et livrées en Word pour que le service modifie les titres lui-même.",
    outils: ["Photoshop", "Word"],
    competences: ["Concevoir", "Exprimer"],
    images: ["assets/images/1.png", "assets/images/2.png", "assets/images/3.png", "assets/images/4.1.png"]
  },
  {
    titre: "Diplômes de la cérémonie des récompenses",
    categorie: "Mise en page",
    description: "Maquette des diplômes avec mon tuteur, puis personnalisation de chaque diplôme (nom de l'élève et mention), préparation des fichiers et participation à l'impression.",
    outils: ["Photoshop"],
    competences: ["Exprimer", "Entreprendre"],
    images: ["assets/images/DIPLOME.png"]
  },
  {
    titre: "Carte d'invitation de la Fête des Pères",
    categorie: "Déclinaison graphique",
    description: "Adaptation d'une affiche existante en carte d'invitation : mêmes couleurs, typographie et illustrations, mais une mise en page repensée pour rester lisible sur un format réduit.",
    outils: ["Photoshop"],
    competences: ["Concevoir", "Exprimer"],
    images: ["assets/images/VFC.png"]
  },
  {
    titre: "Flyer du Marché du Terroir",
    categorie: "Communication événementielle",
    description: "Flyer conçu à partir du brief des organisateurs, diffusé sur les réseaux sociaux de la mairie et sur les panneaux publicitaires de la commune.",
    outils: ["Photoshop"],
    competences: ["Comprendre", "Concevoir", "Exprimer"],
    images: ["assets/images/Capture.png"]
  },
  {
    titre: "Affiche de la fête de fin d'année d'une école",
    categorie: "Communication événementielle",
    description: "Affiche à partir des attentes transmises par la directrice, avec des éléments générés par IA retravaillés pour s'accorder à l'identité de l'événement.",
    outils: ["Photoshop", "Canva"],
    competences: ["Comprendre", "Exprimer"],
    images: ["assets/images/fete_Ecole.png"]
  }
];

// MES OUTILS
// Chaque outil apparaît une seule fois. La liste est déduite des missions.
const usageOutils = {
  "Photoshop": "Outil principal : mise en page, composition, typographie, couleurs et retouche.",
  "Canva": "Éléments graphiques que j'ai fournis à mon tuteur grâce à mon abonnement.",
  "Word": "Livraison des maquettes de pochettes, modifiables par le service RH."
};

// MON BILAN
const bilan = {
  appris: "L'importance de respecter la charte graphique et d'adapter un support à son format.",
  difficulte: "Rendre une carte d'invitation lisible sur un format bien plus petit que l'affiche d'origine.",
  resolution: "En repensant la hiérarchie des informations, avec plusieurs ajustements et les conseils de mon tuteur.",
  fierte: "Les maquettes de pochettes RH : le service en a été très satisfait et les a retenues.",
  aDevelopper: "Illustrator et InDesign pour compléter Photoshop, et le développement web, que je n'ai pas encore pratiqué en entreprise."
};

// FONCTIONS D'AFFICHAGE

// Ajoute une ligne "Libellé : valeur" dans une liste de définitions
function ajouterLigne(liste, libelle, valeur) {
  const ligne = document.createElement("div");
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = libelle;
  dd.textContent = valeur;
  ligne.append(dt, dd);
  liste.appendChild(ligne);
}

// Classe CSS d'une compétence ("Développer" devient "developper")
function classeCompetence(nom) {
  return nom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Liste des outils sans doublon
function outilsUniques() {
  const tous = missions.flatMap(function(m) { return m.outils; });
  return [...new Set(tous)];
}

// Nombre de missions qui mobilisent une compétence
function compterCompetence(nom) {
  return missions.filter(function(m) { return m.competences.includes(nom); }).length;
}

// CARROUSEL ET AGRANDISSEMENT DES IMAGES

// Passe à l'image suivante (pas = 1) ou précédente (pas = -1), en boucle
function decaler(index, total, pas) {
  return (index + pas + total) % total;
}

function creerBouton(classe, texte, libelle) {
  const bouton = document.createElement("button");
  bouton.type = "button";
  bouton.classList.add("fleche", classe);
  bouton.textContent = texte;
  bouton.setAttribute("aria-label", libelle);
  return bouton;
}

// Fenêtre d'agrandissement, créée une seule fois
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
const lbImage = document.createElement("img");
const lbCompteur = document.createElement("p");
lbCompteur.classList.add("compteur");
const lbFermer = creerBouton("fermer", "×", "Fermer");
const lbPrecedent = creerBouton("precedent", "‹", "Image précédente");
const lbSuivant = creerBouton("suivant", "›", "Image suivante");
lightbox.append(lbImage, lbCompteur, lbFermer, lbPrecedent, lbSuivant);
document.body.appendChild(lightbox);

let lbImages = [];
let lbIndex = 0;

function lbAfficher() {
  lbImage.src = lbImages[lbIndex];
  lbCompteur.textContent = (lbIndex + 1) + " / " + lbImages.length;
  const plusieurs = lbImages.length > 1;
  lbPrecedent.hidden = !plusieurs;
  lbSuivant.hidden = !plusieurs;
  lbCompteur.hidden = !plusieurs;
}

function ouvrirLightbox(images, index, titre) {
  lbImages = images;
  lbIndex = index;
  lbImage.alt = titre;
  lbAfficher();
  lightbox.classList.add("ouvert");
}

function fermerLightbox() {
  lightbox.classList.remove("ouvert");
}

lbFermer.addEventListener("click", fermerLightbox);
lbPrecedent.addEventListener("click", function() {
  lbIndex = decaler(lbIndex, lbImages.length, -1);
  lbAfficher();
});
lbSuivant.addEventListener("click", function() {
  lbIndex = decaler(lbIndex, lbImages.length, 1);
  lbAfficher();
});
// Un clic sur le fond sombre ferme aussi la fenêtre
lightbox.addEventListener("click", function(e) {
  if (e.target === lightbox) fermerLightbox();
});
// Clavier : Échap pour fermer, flèches pour naviguer
document.addEventListener("keydown", function(e) {
  if (!lightbox.classList.contains("ouvert")) return;
  if (e.key === "Escape") fermerLightbox();
  if (e.key === "ArrowLeft" && lbImages.length > 1) lbPrecedent.click();
  if (e.key === "ArrowRight" && lbImages.length > 1) lbSuivant.click();
});

// Construit le visuel d'une mission : carrousel, ou encadré "Image à venir"
function creerVisuel(mission) {
  const images = mission.images;
  const visuel = document.createElement("div");

  if (images.length === 0) {
    visuel.classList.add("visuel");
    visuel.textContent = "Image à venir";
    return visuel;
  }

  visuel.classList.add("carrousel");
  let index = 0;

  const img = document.createElement("img");
  const compteur = document.createElement("p");
  compteur.classList.add("compteur");
  const precedent = creerBouton("precedent", "‹", "Image précédente");
  const suivant = creerBouton("suivant", "›", "Image suivante");

  function afficher() {
    img.src = images[index];
    img.alt = mission.titre + " (" + (index + 1) + "/" + images.length + ")";
    compteur.textContent = (index + 1) + " / " + images.length;
  }

  precedent.addEventListener("click", function() {
    index = decaler(index, images.length, -1);
    afficher();
  });
  suivant.addEventListener("click", function() {
    index = decaler(index, images.length, 1);
    afficher();
  });
  img.addEventListener("click", function() {
    ouvrirLightbox(images, index, mission.titre);
  });

  afficher();
  visuel.appendChild(img);
  // Flèches et compteur seulement s'il y a plusieurs images
  if (images.length > 1) visuel.append(precedent, suivant, compteur);
  return visuel;
}

// AFFICHAGE DANS LA PAGE

// Stage
const infosStage = document.getElementById("infos-stage");
ajouterLigne(infosStage, "Entreprise", stage.entreprise);
ajouterLigne(infosStage, "Secteur", stage.secteur);
ajouterLigne(infosStage, "Lieu", stage.lieu);
ajouterLigne(infosStage, "Période", stage.periode);
ajouterLigne(infosStage, "Poste", stage.poste);
ajouterLigne(infosStage, "Service", stage.service);
ajouterLigne(infosStage, "Tuteur", stage.tuteur);

// Missions
document.getElementById("resume-missions").textContent = missions.length + " missions réalisées";

const conteneurMissions = document.getElementById("liste-missions");

missions.forEach(function(mission) {
  const bloc = document.createElement("article");
  bloc.classList.add("mission");

  const visuel = creerVisuel(mission);

  const texte = document.createElement("div");
  const titre = document.createElement("h3");
  titre.textContent = mission.titre;
  const categorie = document.createElement("p");
  categorie.classList.add("categorie");
  categorie.textContent = mission.categorie;
  const description = document.createElement("p");
  description.textContent = mission.description;
  const outils = document.createElement("p");
  outils.classList.add("outils");
  outils.textContent = "Outils : " + mission.outils.join(", ");

  const badges = document.createElement("div");
  badges.classList.add("badges");
  mission.competences.forEach(function(nom) {
    const badge = document.createElement("span");
    badge.classList.add("badge", classeCompetence(nom));
    badge.textContent = nom;
    badges.appendChild(badge);
  });

  texte.append(titre, categorie, description, outils, badges);
  bloc.append(visuel, texte);
  conteneurMissions.appendChild(bloc);
});

// Compétences
const listeCompetences = document.getElementById("liste-competences");
COMPETENCES.forEach(function(nom) {
  const nombre = compterCompetence(nom);
  const li = document.createElement("li");

  const label = document.createElement("span");
  label.textContent = nom;

  const barre = document.createElement("div");
  barre.classList.add("barre");
  const remplissage = document.createElement("span");
  remplissage.classList.add(classeCompetence(nom));
  remplissage.style.width = (nombre / missions.length * 100) + "%";
  barre.appendChild(remplissage);

  const valeur = document.createElement("span");
  valeur.textContent = nombre;

  li.append(label, barre, valeur);
  listeCompetences.appendChild(li);
});

// Outils
const listeOutils = document.getElementById("liste-outils");
outilsUniques().forEach(function(nom) {
  const li = document.createElement("li");
  const strong = document.createElement("strong");
  strong.textContent = nom;
  li.append(strong, " : " + usageOutils[nom]);
  listeOutils.appendChild(li);
});

// Bilan
const infosBilan = document.getElementById("infos-bilan");
ajouterLigne(infosBilan, "Ce que j'ai appris", bilan.appris);
ajouterLigne(infosBilan, "Une difficulté rencontrée", bilan.difficulte);
ajouterLigne(infosBilan, "Comment j'ai tenté de la résoudre", bilan.resolution);
ajouterLigne(infosBilan, "La réalisation dont je suis le plus fière", bilan.fierte);
ajouterLigne(infosBilan, "Ce que je souhaite approfondir", bilan.aDevelopper);

// DÉFIS JAVASCRIPT (Activité 7)

// Défi n°1 : nom et catégorie de chaque mission
missions.forEach(function(mission) {
  console.log(mission.titre + " - " + mission.categorie);
});

// Défi n°2 : nombre de missions réalisées
console.log(missions.length + " missions réalisées");

// MENU BURGER ET THÈME CLAIR/SOMBRE (commun à toutes les pages)

// MENU BURGER
const menu = document.getElementById("menu");
const overlay = document.getElementById("menu-overlay");
const btnBurger = document.getElementById("btn-burger");
const btnFermerMenu = document.getElementById("btn-fermer-menu");

function ouvrirMenu() {
  menu.classList.add("ouvert");
  overlay.classList.add("actif");
  btnBurger.setAttribute("aria-expanded", "true");
}

function fermerMenu() {
  menu.classList.remove("ouvert");
  overlay.classList.remove("actif");
  btnBurger.setAttribute("aria-expanded", "false");
}

btnBurger.addEventListener("click", ouvrirMenu);
btnFermerMenu.addEventListener("click", fermerMenu);
overlay.addEventListener("click", fermerMenu);
menu.querySelectorAll("a").forEach(function(lien) {
  lien.addEventListener("click", fermerMenu);
});
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") fermerMenu();
});

// THÈME CLAIR / SOMBRE
const btnTheme = document.getElementById("btn-theme");

function appliquerTheme(sombre) {
  document.body.classList.toggle("dark-mode", sombre);
  btnTheme.textContent = sombre ? "☀" : "☾";
  btnTheme.setAttribute("aria-label", sombre ? "Passer en mode clair" : "Passer en mode sombre");
}

// On retrouve le choix précédent (le try évite une erreur si le stockage est bloqué)
let sombre = false;
try {
  sombre = localStorage.getItem("theme") === "sombre";
} catch (e) {}
appliquerTheme(sombre);

btnTheme.addEventListener("click", function() {
  sombre = !document.body.classList.contains("dark-mode");
  appliquerTheme(sombre);
  try {
    localStorage.setItem("theme", sombre ? "sombre" : "clair");
  } catch (e) {}
});
