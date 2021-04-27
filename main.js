// // Exo 1
// let tab = ["Cactus","Ilyas","Alexis","Alain","Roger","Bart","Lisa","Marge","Homer"];
// let i = 0
// while (i < tab.length) {
//     alert(`Bonjour ${tab[i]}`)
//     i++
// }

// // // Exo 2
// let fruit = ["Pomme", "Banane", "Poire", "Peche", "Ananas", "Tomate"];
// while (fruit.length > 0) {
//     fruit.pop()
//     console.log(fruit)
// }

// Exo 3
// let panierLegumes = ["Courgette", "Choux", "Poireaux", "Chicons"];
// let longeur = panierLegumes.length;
// let caisseLegumes = [];
// while (longeur > 0){
//     caisseLegumes.push(panierLegumes.pop());
//     console.log(panierLegumes , caisseLegumes);
//     longeur-- 
// }

// // Exo 4
// let answer = "je ne suis personne"
// let yourTry = " "
// while (yourTry != answer) {
//     yourTry = prompt("Qui es-tu ?")
//     if (yourTry == answer) {
//         alert("BRAVO")        
//     }
// }

// // Exo 5
// let answer = "je ne suis personne"
// let yourTry = prompt("Qui es-tu ?");
// do {
//     if (yourTry != answer) {
//         yourTry = prompt("Qui es-tu ?");
//     } else {
//         alert("BRAVO");
//     } 
// } while (yourTry != answer); 

// // Exo 6
// let ourYear = 2021;
// let randomYear = Math.floor(Math.random()*(ourYear-1970 + 1))+1970;
// let answer = ourYear-randomYear;
// let yourTry = "";
// let triesNum = 3;
// console.log (randomYear)
// console.log (answer)

// while (triesNum > 0 ) {
//     yourTry = prompt("Quel age j'ai ajd ?");
//     triesNum--;
//     if (yourTry == answer) {
//         triesNum = 0
//     }
// }
// if (yourTry == answer) {
//     alert("Bravo bonne réponse")
// }else{
//     alert(`Il te reste ${triesNum} essais`)
// }


// Exo 7
// let panierFruit = []
// while (panierFruit.length < 3) {
//     let fruitraw = prompt("Pose un fruit ici miskin").trim()
//     let fruit = fruitraw.charAt(0).toUpperCase()+fruitraw.substr(1).toLowerCase()
//     panierFruit.push(fruit)
//     console.log(fruit)
// }
// alert(panierFruit);
// let fruitBool ="";
// while (fruitBool != -1 ){
//     let fruitraw = prompt("Quels fruit retirer?").trim()
//     let fruit = fruitraw.charAt(0).toUpperCase()+fruitraw.substr(1).toLowerCase()
//     fruitBool =(panierFruit.indexOf(fruit))
//     panierFruit.splice(panierFruit.indexOf(fruit),1)
// }
// alert("Merci bon appétit")

// Opti
let clos = false;
let faim = false;
let fruit;
let fruitBool;
let panierFruit = [];
while (faim == false) {

    if (clos == false) {
        while (panierFruit.length < 3) {
            fruit = prompt("Pose un fruit ici miskin").trim();
            fruit = propre(fruit)
            panierFruit.push(fruit);
            console.log(fruit);
            if (panierFruit.length == 3) {
                alert(panierFruit);
                clos = true;
            }
        }

    } else {
        while (fruitBool != -1 ) {
            fruit = prompt("Quels fruit retirer?").trim();
            fruit = propre(fruit)
            fruitBool =(panierFruit.indexOf(fruit))
            panierFruit.splice(panierFruit.indexOf(fruit),1)
            if (fruitBool == -1) {
                alert("Merci bon appétit")
                faim = true;
            }  
        }
    }

}

function propre (str){
    return str.charAt(0).toUpperCase()+str.substr(1).toLowerCase();
}






