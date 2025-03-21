// const heading = document.getElementById("heading").animate(
//     [
//         {transform:"translateX(5px)" },
//         {transform:"translateY(-500px)" },
        
//     ],
//     {
//         duration : 5000,
//         iterations : Infinity,
        
//     },
//     {
        
//     }
// );
//creation de la balise ul, partie 1
let body = document.querySelector("body")
body.style.background = "black"
body.style.color = "white"

let liste = document.createElement("ul")

body.appendChild(liste)
console.log(liste)


for ( let i= 0 ; i<=3  ; i++){
    let l = document.createElement("li")
    l.textContent = "hello world" ,  +i
    l.className = "item-" +i
    liste.appendChild(l)

}
liste.removeChild(liste.lastChild)

// partie2

let  n = prompt("entrez trois phrases")
const cond = n.split(",")
console.log(cond)
for ( let i= 0 ; i< cond.length ; i++){
    let l = document.createElement("li")
    l.textContent = cond[i] 
    liste.appendChild(l)
    l.id = "item-" +i
    l.className = "item" +i

}
document.body.appendChild(ul)
