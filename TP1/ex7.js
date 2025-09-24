const notes = [12, 5, 17, 9, 20];
const somme=notes.reduce(((s,elt)=>s+elt),0);
console.log(`somme :${somme}`);
notes.sort((a, b) =>b-a);
console.log(notes);
const filtrer=notes.filter(note=>note>=10);
console.log(filtrer);