class Etudiant{
    constructor(nom,note)
    {
        this.nom=nom;
        this.note=note;
    }
    getMention()
    {
        if (this.note<10 )
        {
            return ("Echec");
        }
        else if (this.note<14)
        {
            return("Passable");
        }
        else if(this.note<16)
        {
            return("Bien");
        }
        else
        {
            return("Trés Bien");
        }
    }
}
const e1=new Etudiant("Amen Allah",17);
const e2=new Etudiant("Malek",14);
const e3=new Etudiant("Samer",11);
console.log(e1.nom +" : "+e1.getMention());
console.log(e2.nom +": " +e2.getMention()); 
console.log(e3.nom +": " +e3.getMention());
