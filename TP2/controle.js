console.log("Bienvenue dans la console!");
let taches = [];
const STORAGE_KEY = "mes_taches";

function chargerTaches() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      taches = JSON.parse(data);
    } catch (e) {
      console.error("Erreur parsing localStorage:", e);
      taches = [];
    }
  }
}

function sauvegarderTaches() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(taches));
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const liste = document.getElementById("liste");
  const bouton = document.getElementById("button");
  const compteurTotales = document.getElementById("compteur-totales");
  const compteurTerminees = document.getElementById("compteur-terminees");
  const compteurEnCours = document.getElementById("compteur-en-cours");
  const btntoutSupprimer = document.getElementById("tout-supprimer");
  const inputRecherche = document.getElementById("recherche");

  let filtreRecherche = "";

  function afficherTache() {
    liste.innerHTML = "";

    const tachesFiltrees = taches.filter(t =>
      t.text.toLowerCase().includes(filtreRecherche.toLowerCase())
    );

    for (let i = 0; i < tachesFiltrees.length; i++) {
      const tache = tachesFiltrees[i];
      const indexOriginal = taches.indexOf(tache);

      const li = document.createElement("li");
      li.textContent = tache.text;

      if (tache.terminee) {
        li.classList.add("terminee");
      }

      const btnSupprimer = document.createElement("button");
      btnSupprimer.textContent = "Supprimer";
      btnSupprimer.addEventListener("click", function () {
        supprimerTache(indexOriginal);
      });

      const btnTerminer = document.createElement("button");
      btnTerminer.textContent = "Terminer";
      btnTerminer.addEventListener("click", function () {
        terminerTache(indexOriginal);
      });

      li.appendChild(btnSupprimer);
      li.appendChild(btnTerminer);
      liste.appendChild(li);
    }

    compteurTotales.textContent = `Total : ${taches.length}`;
    const nbTerminees = taches.filter(t => t.terminee).length;
    compteurTerminees.textContent = `Terminées : ${nbTerminees}`;
    compteurEnCours.textContent = `En cours : ${taches.length - nbTerminees}`;
  }

  function supprimerTache(index) {
    taches.splice(index, 1);
    sauvegarderTaches();
    afficherTache();
  }

  function terminerTache(index) {
    taches[index].terminee = true;
    sauvegarderTaches();
    afficherTache();
  }

  function toutSupprimer() {
    if (confirm("Voulez-vous vraiment tout supprimer ?")) {
      taches = [];
      sauvegarderTaches();
      afficherTache();
    }
  }

  function ajouterTache() {
    const valeur = input.value.trim();
    if (valeur === "") {
      alert("Vous devez saisir une tâche !");
      return;
    }

    taches.push({ text: valeur, terminee: false });
    input.value = "";
    sauvegarderTaches();
    afficherTache();
  }

  bouton.addEventListener("click", ajouterTache);
  btntoutSupprimer.addEventListener("click", toutSupprimer);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      ajouterTache();
    }
  });

  inputRecherche.addEventListener("input", function () {
    filtreRecherche = inputRecherche.value;
    afficherTache();
  });

  chargerTaches();
  afficherTache();
});
