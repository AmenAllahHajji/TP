const livre = {
  title: "Harry Potter",
  auteur: "JK ROWLING",
  annee: 1997,
  getInfo()
  {
    return `${this.title} a été ecrit par ${this.auteur} en ${this.annee}.`;
  }
};
console.log(livre.getInfo());
