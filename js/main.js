////////////////////////////////
//RECAP DEL GIORNO (07/03/2023)
////////////////////////////////

// SCOPE (let, var, const) - globale, funzione, blocco

//Quindi anche nei cicli (con "var")

// FUNZIONI e PARAMETRI (di ingresso e di ritorno)

// FUNZIONI CHE CHIAMANO ALTRE FUNZIONI 

function eleva_quadrato(a){
    return a*a;
}
function somma(a, b){
    return a+b;
}
function somma_quadrati(a, b){
    //restituisci la somma dei quadrati
    /*
    var i = eleva_quadrato(a);
    var j = eleva_quadrato(b);
    return i+j;
    */

    //oppure
    //return eleva_quadrato(a) + eleva_quadrato(b);

    //oppure
    return somma( eleva_quadrato(a), eleva_quadrato(b) );

}
somma_quadrati(2,3);
//vogliamo la somma dei quadrati

// FUNZIONI COLLEGATE AD UN EVENTO (click)

//invece che
//function somma_quadrati(a, b){
let somma_quadrati2 = function(a,b){
    return somma( eleva_quadrato(a), eleva_quadrato(b) );
}



let elem = document.getElementById("content");
elem.addEventListener("click", function(e){

    //Attiva il debug
    debugger;
    
    console.log(e);

});


