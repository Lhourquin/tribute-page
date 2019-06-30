const h1 = document.getElementById('title');
const str = h1.innerText;

const str2 = String(str);

if(str2.includes('Spider')){
    str2.slice(1, 5);
    console.log(str2);
}
/* test pour colorer une partie seulement de mon h1 en l'occurence spider */