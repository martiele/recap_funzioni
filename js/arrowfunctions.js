/*
Consideriamo ad esempio una funzione anonima che implementa la somma, come quella che segue:
*/
var somma = function(x, y) {
    return x + y;
};
/*
Possiamo implementarla utilizzando la sintassi delle arrow function nel seguente modo:
*/
var somma = (x, y) => x + y;
/*
Come possiamo vedere, la definizione della funzione è ridotta al minimo: non esiste la parola chiave function, non vengono utilizzate le parentesi graffe per individuare il corpo della funzione e non viene nemmeno utilizzata l'istruzione return.

La sua invocazione è del tutto identica a quella di una funzione anonima assegnata ad una variabile:
*/
var totale = somma(3, 2);


/*
VARIANTI

La sintassi generale di una arrow function prevede le parentesi tonde intorno alla lista dei parametri e le parentesi graffe per delimitare il corpo della funzione, come nel seguente esempio:
*/
(x, y) => {return x + y; }
/*
Se il corpo è costituito dalla sola istruzione return che restituisce una espressione, possiamo omettere la parola chiave return e le parentesi graffe, come nell'esempio iniziale:
*/
(x, y) => x + y;
/*
Se la funzione prevede un solo parametro, possiamo omettere le parentesi tonde, come nel seguente esempio:
*/
x => x * 2
/*
Se la funzione non prevede alcun parametro, è obbligatorio l'uso delle parentesi tonde:
*/
() => "Hello world!"



/*
Quando utilizzare le arrow function
Data la sintassi compatta delle arrow function, esse si prestano molto bene ad essere utilizzate come callback. Consideriamo ad esempio il seguente codice:
*/
var numeri = [18, 13, 24]; 
numeri.forEach(function(valore) {
    console.log(valore);
});
/*
Possiamo semplificare la sua sintassi riscrivendolo nel seguente modo:
*/
var numeri = [18, 13, 24]; 
numeri.forEach(valore => console.log(valore));
/*
Abbiamo ridotto ai minimi termini la sintassi della funzione di callback sfruttando la sintassi delle arrow function.
*/




/* THIS ALL'INTERNO DELLA FUNZIONE */

/*
L'aspetto più importante da tener presente è che la parola chiave this all'interno di una arrow function non rappresenta il contesto di esecuzione a runtime come avviene per le funzioni standard.
*/
var numeri = {
    x: 12,
    y: 3,
    calcola: function(operazione) {
        var fn;
        switch (operazione) {
            case '+':
                fn = function() { return this.x + this.y};
            break;
            case '-':
                fn = function() { return this.x - this.y};
            break;
            default:
                fn = function() {};
        }
        return fn();
    }
} 
//QUI NON FUNZIONA COME CI ASPETTEREMMO!
numeri.calcola('+');
//this infatti si riferisce al programma principale!
/*
La parola chiave this utilizzata nelle funzioni anonime definite all'interno del metodo calcola() non sta indicando l'oggetto numeri, ma il loro contesto di esecuzione.
*/


/*
Possiamo però riscrivere il codice precedente come mostrato di seguito per ovviare all'inconveniente:
*/
var numeri = {
    x: 12,
    y: 3,
    calcola: function(operazione) {
        var fn;
        switch (operazione) {
            case '+':
                fn = () => this.x + this.y;
            break;
            case '-':
                fn = () => this.x - this.y
            break;
            default:
                fn = () => {};
        }
        return fn();
    }
} 
numeri.calcola('+');
/*
Con questo approccio abbiamo reso il codice più compatto ed aggirato il problema del contesto di esecuzione, dal momento che in questo caso this rappresenterà il contesto al momento della definizione delle funzioni, e cioè l'oggetto numeri stesso.
*/






