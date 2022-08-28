// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:


//dichiarazione variabili dadi
let dadoGiocatore;
let dadoComputer;


//estrazione numeri random da 1 a 6
dadoGiocatore = Math.floor(Math.random() * 6) + 1;
console.log(dadoGiocatore);

dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log(dadoComputer);

if (dadoGiocatore == dadoComputer) {
    console.log("parità");
    alert("PARITA'!");
}

else if (dadoGiocatore > dadoComputer) {
    console.log("vince giocatore");
    alert("VINCE GIOCATORE");
}

else if (dadoGiocatore < dadoComputer) {
    console.log("vince computer");
    alert("VINCE COMPUTER");

}
