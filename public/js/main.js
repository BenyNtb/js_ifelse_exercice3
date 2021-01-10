// EXO 1
// let tabPrenoms = ["Aaliyah", "Rihanna", "Kehlani", "Saweetie", "Iggy"]
// let tabLength = tabPrenoms.length
// console.log(tabPrenoms);
// tabPrenoms.forEach("Bonjour")
// console.log(tabPrenoms);

// let nbr = ['3']
// let ask = prompt('Entrez un chiffre entre 1 et 10')
// if (ask == 3) {
//     alert("Félicitations cest la bonne réponse")
// } else {
//     prompt('Entrez un chiffre entre 1 et 10')
// }

let first = prompt("Qui est là plus talentueuse ?")
let star2 = ["Rihanna"]
if (first == star2) {
    alert("Félicitations! C'est la bonne réponse")
} else if (first == star1 || first == star3) {
    alert("Abuse pas aussi")
}
let second = prompt("Qui est la plus belle ?")
let star1 = ["Aaliyah"]
if (second == star1) {
    alert("Félicitations! C'est la bonne réponse")
} else if (second == star3 || first == star2) {
    alert("Reste concentré(e)")
}
let third = prompt("Qui est la plus récompensée ?")
let star3 = ["Beyoncé"]
    if (third == star3) {
        alert("Félicitations! C'est la bonne réponse")
    } else if (second == star1 || first == star2) {
        alert("Recompte stp")
    }
//  1.Rihanna, 2.Aaliyah, 3.Beyoncé


// PARTIE UNE
// 1 ) 
// Créez un tableau
// let tabPrenoms = ["ayhan", "elias", "andre", "nicolas", "myriam"];

// stockez longueur du tableau
// let tabLength = tabPrenoms.length;
// console.log(tabLength);

// Affichez bonjour + prenom
// console.log(`Bonjour, ${tabPrenoms[0]}`);
// console.log(`Bonjour, ${tabPrenoms[1]}`);
// console.log(`Bonjour, ${tabPrenoms[2]}`);
// console.log(`Bonjour, ${tabPrenoms[3]}`);
// console.log(`Bonjour, ${tabPrenoms[4]}`);


// 2 ) 
// chiffre aléatoire entre 1 et 10
// let random = Math.round(Math.random() * (10 - 1) + 1);

// d'entrer un chiffre entre 1 et 10
// let reponse = parseInt(prompt("Entrez un chiffre entre 1 et 10: "));

// // Si le nombre entré par l'utilisateur est différent du nombre aléatoire généré alors répétez la question
// if (reponse != random) {
//     reponse = parseInt(prompt("Reponse incorrecte, Entrez un autre chiffre entre 1 et 10: "));
//     if (reponse != random){
//         reponse = parseInt(prompt("Reponse incorrecte, Entrez un autre chiffre entre 1 et 10: "))
//         if (reponse != random){
//             alert(`T'as raté 3x. la reponse est ${random}`);
//         } else {
//             alert("Reponse correcte! ");
//         };
//     } else {
//         alert("Reponse correcte! ");
//     };
// } else {
//     alert("Reponse correcte! ");
// };



// 3 ) Bonus : Le QCM
// let tabQuestions = ["2 + 3 = ", "5 + 7 = ", "10 + 32 = "];
// let tabReponses = ["5", "12", "42"];
// let tabQuestRepo = [];

//question 1
// let reponse = parseInt(prompt(`${tabQuestions[0]} ?`));
// if(reponse != tabReponses[0]) {
//     reponse = parseInt(prompt(`${tabQuestions[0]} ?`));
//     if(reponse != tabReponses[0]) {
//         reponse = parseInt(prompt(`${tabQuestions[0]} ?`));
//         if(reponse != tabReponses[0]) {
//             alert(`T'as raté 3x, la reponse est ${tabReponses[0]}`);
//         } else {
//             alert("Reponse correcte");
//             tabQuestRepo.push(`${tabQuestions[0]} ${reponse}`);
//         }
//     } else {
//         alert("Reponse correcte");
//         tabQuestRepo.push(`${tabQuestions[0]} ${reponse}`);
//     };
// } else {
//     alert("Reponse correcte");
//     tabQuestRepo.push(`${tabQuestions[0]} ${reponse}`);
// };
// console.log(tabQuestRepo);

// reponse = parseInt(prompt(`${tabQuestions[1]} ?`));

// // question 2
// if(reponse != tabReponses[1]) {
//     reponse = parseInt(prompt(`${tabQuestions[1]} ?`));
//     if(reponse != tabReponses[1]) {
//         reponse = parseInt(prompt(`${tabQuestions[1]} ?`));
//         if(reponse != tabReponses[1]) {
//             alert(`T'as raté 3x, la reponse est ${tabReponses[1]}`);
//         } else {
//             alert("Reponse correcte");
//             tabQuestRepo.push(`${tabQuestions[1]} ${reponse}`);
//         }
//     } else {
//         alert("Reponse correcte");
//         tabQuestRepo.push(`${tabQuestions[1]} ${reponse}`);
//     };
// } else {
//     alert("Reponse correcte");
//     tabQuestRepo.push(`${tabQuestions[1]} ${reponse}`);
// };
// console.log(tabQuestRepo);

// reponse = parseInt(prompt(`${tabQuestions[2]} ?`));

// question 3
// if(reponse != tabReponses[2]) {
//     reponse = parseInt(prompt(`${tabQuestions[2]} ?`));
//     if(reponse != tabReponses[2]) {
//         reponse = parseInt(prompt(`${tabQuestions[2]} ?`));
//         if(reponse != tabReponses[2]) {
//             alert(`T'as raté 3x, la reponse est ${tabReponses[2]}`);
//         } else {
//             alert("Reponse correcte");
//             tabQuestRepo.push(`${tabQuestions[2]} ${reponse}`);
//         }
//     } else {
//         alert("Reponse correcte");
//         tabQuestRepo.push(`${tabQuestions[2]} ${reponse}`);
//     };
// } else {
//     alert("Reponse correcte");
//     tabQuestRepo.push(`${tabQuestions[2]} ${reponse}`);
// };

//resultat final
// console.log(tabQuestRepo);


        // PARTI DEUX

//  prompt
// let reponse = prompt("Bonjour comment vas-tu ?");
// console.log(reponse);

//  alert
// alert("Super je suis content que tu ailles bien");


// let question = prompt('Comment vas-tu ?');
// if(question == "bien"){
//   alert('Super je suis content que tu ailles bien');
// }
// else if(question == "tres bien"){
//   alert('Woaw tu as la pêche !');
// }
// else{
//   alert(":'(");
// };

//  programme météo (trés trés simple x) )
let quelTemps = prompt('Quelle temps fait-il aujourd’hui ?');

if(quelTemps == "soleil"){
  console.log('Sortez en T-shirt');
}else if(quelTemps == "vent"){
  console.log('Sortez en Pull');
}else if(quelTemps == "pluie"){
  console.log("Mettez une veste");
}else if(quelTemps == "Neige"){
  console.log("Reste chez toi, il fait froid")
}else{
  console.log("Je n'ai pas compris !");
}


