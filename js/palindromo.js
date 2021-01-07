// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
var btn = document.getElementById('btn'); // prendo il bottone in HTML
function checkP(){
  var name = prompt('Ciao, inserisci il tuo nome');// a funzione avviata, chiedo il nome
  console.log(name);
  name = name.toLowerCase();//non importa se lo scrive maiuscolo o minuscolo, per il controllo sempre minuscolo
  var arrayName = name.split('');//trasformo la stringa in array, ogni elemento sarà una lettera
  console.log(arrayName);
  var reverseArray = arrayName.reverse();//ordino al rovescio l'array
  console.log(reverseArray);
  var reverseName = reverseArray.join('');//unisco in una stringa l'array rovesciato
  console.log(reverseName);
  if (name === reverseName) { // se il nome e il suo rovescio sono uguali, è palindromo
    name = name[0].toUpperCase() + name.slice(1).toLowerCase();//nell'alert sarà con l'iniziale maiuscola
    alert('Che bello ' + name + ', il tuo nome è palindromo!');
  } else {//se il nome e il suo rovescio sono diversi, non è palindromo
    alert('Banale!');
  }


}
btn.addEventListener('click', function(){//lancio la funzione con un callback (mi pare si chiami così)
  checkP();
})
//ho lasciato i console.log() solo per chiarezza dell'operazione
