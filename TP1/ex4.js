const tab1=[1,2,3];
const tab2=[4,5,6];
const fusion=[...tab1,...tab2];
for (let c of fusion)
{
    console.log(c);
}
const user={name:"Amen",age:21};
const copy={...user,name:"Amen Allah"};
console.log("Nom: "+user.name+" ,Age: "+user.age)
console.log("Nom: "+copy.name+" ,Age: "+copy.age)