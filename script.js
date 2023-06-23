
const c = 'AZERTYUIOPMLKJHGFDSQNBVCXWazertyuiopmlkjhgfdsqwxcvbn0123456789*/&é(-è_çà@)]=$ù!:;,';

const longueur = 20

function generatePassword(event){
    event.preventDefault()
    let input = document.querySelector('#password')
    let motDePasse = '';
    for(let i = 0; i < longueur; i++) { // boucle sur le nombre de caractères donnés. Chaque itération va être un caratère du mdp 
        const indexC = Math.floor(Math.random() * c.length);
        motDePasse += c[indexC];


    }

input.value = motDePasse

}

