/**
 * Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
 */

/**
 * //constante che mi permette di dare di un tempo massimo alla mia funzione, senza di questo il codice potrebbe andare avanti allinfinito
const totalTime = 10000;
//variabile stabilita solo per dare un numero da poter scalare ma il comandante rimare sempre la quantita di millisecondi per il quale vogliamo il nostro codice funzioni
let secondToShow = 10;

// constante setInterval la funzione che fa funzionare il countdown. con funzione anonina come primo oggetto
const clock = setInterval(function(){

    //esplicazione della funzione anonima
    console.log(secondToShow);
    secondToShow--;
    //secondo oggetto della funzione 
},999);

setTimeout (function(){
    alert ("it's time");
    clearInterval (clock);
}, totalTime);

 */

//prendo la data a cui voglio far fermare il mio countdown in millisecondi
let deadline =new Date("may 26, 2023 09:30:00").getTime();

//inizializzo setInterval con una funzione anonima ( da poter fare anche in un secondo momento)
const clock = setInterval(function() {

    //recupero il timer del l'orario attuale
    let now = new Date().getTime();

    // sottraggo la data a cui voglio far fermare il mio countdown al tempo attuale
    let t = deadline - now;

    //inizio a fare un calcolo in base ai millisecondi derivati dal calcolo di "t" dove per calcolare i giorni devo moltiplicare 1000ms * 60m * 60h 24 cioe un giorno
    let days = Math.floor (t / (1000 * 60 * 60 * 24));

    //calcolo per ora
    let hours = Math.floor ((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    //calcolo per minuti
    let minutes = Math.floor ((t % (1000 * 60 * 60 * 24)) / (1000 * 60));

    //calcolo per secondi
    let seconds = Math.floor ((t % (1000 * 60 * 60 * 24)) / 1000);

    //aggiungo il risultato al codice precedentemente preparato
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    //aggiungo una variabile "se t sarà uguale a zero vorra dire che il tempo è scaduto "
    if (t < 0) {

        //quindi blocco la funzione
        clearInterval (clock);

        //aggiungo nel documento qualcosa per capirlo 
        document.getElementById("end").innerHTML = "Angel";
    }
    //??? da domandare a Riccardo
}, 1000);




