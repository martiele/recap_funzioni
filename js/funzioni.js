

console.log("---- let ----");

function scambia(a,b){
    let aux;
    console.log("prima",a,b);
    aux = a;
    a = b;
    b = aux;
    console.log("dopo",a,b);
}
let a=4;
let b=7;
console.log("prima di chiamarla",a,b);
scambia(a,b);
console.log("dopo averla chiamata",a,b);


console.log("---- var ----");


function scambia(){
    let aux;
    console.log("prima",c,d);
    aux = c;
    c = d;
    d = aux;
    console.log("dopo",c,d);
}
var c=4;
var d=7;
console.log("prima di chiamarla",c,d);
scambia();
console.log("dopo averla chiamata",c,d);


stampa();

function stampa(){
    let myvar = 5;
    console.log("stampa",myvar);
}

console.log("stampa2",myvar); //Errore! Non esiste!
