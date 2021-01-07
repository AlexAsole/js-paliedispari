// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function random (min, max){ //funzione per numero randomico del pc
  var pcNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  return pcNumber;
}

function check (result){//funzione per controllare se il risultato è pari o dispari (pari = true; dispari = false)
  var check
  if (result % 2 === 0) {
    check = true;
  } else {
    check = false;
  }
  return check;
}

var pcNumber = random(1, 5);
var result = 0;
var choose = prompt('Pari o dispari?')
choose = choose.toLowerCase();//non importa come lo si scriva sarà sempre minuscolo per il computer
if (choose === 'pari' || choose === 'dispari'){//se ho scritto pari o dispari vado avanti
  var userNumber = parseInt(prompt('scegli un numero da 1 a 5!'))
  if (!isNaN(userNumber)) {//se è un numero (se non è un NON numero, doppia negazione) vado avanti
    if (userNumber >= 1 && userNumber <= 5) {//se è compreso tra 1 e 5 vado avanti
      console.log(userNumber);
      console.log(pcNumber);
      result = userNumber + pcNumber;//sommo i numeri dell'utente e del computer
      console.log(result);
      var check = check(result);
      console.log(check)
      if (check && choose === 'pari') {//se ho scelto pari e check è true, ho vinto
        alert('Hai vinto!')
      }
      if (check && choose === 'dispari'){//se ho scelto pari e check è false, ho perso
        alert('Hai perso!')
      }
      if (!check && choose === 'pari'){//se ho scelto dispari e check è true, ho perso
        alert('Hai perso!')
      }
      if (!check && choose === 'dispari'){//se ho scelto dispari e check è false, ho vinto
        alert('Hai vinto!')
      }
    } else {//se non è compreso tra 1 e 5 ti blocca
      alert('Non è compreso tra 1 e 5')
    }
  } else {//se non è un numero ti blocca
    alert('Non è un numero')
  }
} else {//se non scegli pari o dispari ti blocca
  alert('Non hai molta scelta!')
}
