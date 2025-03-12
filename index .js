//let film ={
   // title: "a contre sens" ,
    //realiateur : "maryline" ,
   // anneeDeSortie : 2020   ,
   // acteurs: ["nicole", "gabrielle", "varonne"]
//}
//console.log(film)
//console.log(Object.values(film.acteurs[0]))
//exo2
//let ordinateur ={
    //marque: "a contre sens" ,
    //modele : "maryline" ,
    //processeur : 2020   ,
    //ram: ["nicole", "gabrielle", "varonne"],
    //stockage :0
//}
//for( const prop in ordinateur) {
   // console.log(`ordinateur.${prop} = ${ordinateur[prop]}`)
//}
//console.log(Object.keys(ordinateur))

//exo 3
let voitures = [
   {
      marque:"toyota",
      modele : "gjhjhjh",
      annee: 2009
   },
   {
      marque : "land cruiser",
      modele : "jjjjj",
      annee: 2010
   },   {
      marque:"range rover",
      modele : "hhhhhh",
      annee: 2005
   },
   {
      marque: "land rover",
      modele :"jhjjj",
      annee: 2020
   },
   {
      marque:"kia",
      modele:"yaris",
      annee:376
   },
   {
      marque :"dacia duster",
      modele : "hhhhhh",
      annee: 2008
   }

]
const result = voitures.filter((voiture) => voiture.annee  > 2015);
console.log(result)
//exo 
const  etudiants = [
   {
      nom:"toyota",
      age : "gjhjhjh",
      moyenne: 20
   },
   {
      nom : "land cruiser",
      age : "jjjjj",
      moyenne: 19
   },   {
      nom:"range rover",
      age : "hhhhhh",
      moyenne: 5
   },
   {
      nom: "land rover",
      age :"jhjjj",
      moyenne: 2
   },
   {
      nom:"kia",
      age:"yaris",
      moyenne:36
   },
   {
      nom :"dacia duster",
      age : "hhhhhh",
      moyenne: 28
   }

]

const resultat = etudiants.filter(( etudiant) => etudiant.moyenne > 15);
console.log(resultat)
//exo 5
let produits = [
   {
      nom:"lait",
      prix:"1500"
   },
   {
      nom:"ananas",
      prix:"1500"
   },
   {
      nom:"sucre",
      prix:"1500"
   }

]
console.log(produits.map((produit) => produit.nom))
//exo 6
// let employes = [
//    {
//       nom:"lisouk",
//       poste:"gardien",
//       salaire  : 50000
//    },
//    {
//       nom:"ina",
//       poste:"gardien",
//       salaire  : 50000
//    },

//    {
//       nom:"lait",
//       poste:"directeur",
//       salaire : 500000
//    },
//    {
//       nom:"adam",
//       poste:"pdg",
//       salaire : 1000000
//    }

// ]
// function totaux({salaire}){
//    total= salaire
//    return total += salaire
// }
// const res = Object.groupBy(employes , ({poste}), ({salaire}) => poste , totaux)
// console.log(res)

array = [];
 
var objectApple = {
    name : "pomme",
    price : 500
};
 
var objectPotatoes = {
    name : "potatoes",
    price : 250
};
 
var objectPasta = {
    name : "pasta",
    price : 300
};
 
var arrayOfItems = [objectApple,objectPotatoes,objectPasta ];
 
 
// Somme du prix des objects
//var totalPriceOfItems = arrayOfItems[0].price + arrayOfItems[1].price + arrayOfItems[2].price ;
 
 
for(i = 0; i< arrayOfItems.length; i++){
    totalPricesOfItems = arrayOfItems[i].price; //  donne les 3 resultats des items
    console.log(totalPricesOfItems);
}
