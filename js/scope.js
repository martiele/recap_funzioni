

//Scope locale e globale

var x = 10;
var p = document.getElementById('demo');
p.innerHTML = window.x;


var x = "fuori";
function faiQualcosa() {
	//scope locale della funzione
	var x = "dentro";
	console.log(x);
}
faiQualcosa(); // dentro
console.log(x); // fuori


//ma se non la ridichiaro...
var x = "fuori";
function faiQualcosa() {
	x = "dentro";
	console.log(x);
}
faiQualcosa(); // dentro
console.log(x); // dentro





//BLOCK SCOPE

//visibilità di blocco (con "var")
var i = 0;
if (true) {
	var i = 1;
}
console.log(i); // 1

//visibilità di blocco (con "let")
let i = 0;
if (true) {
	let i = 1;
}
console.log(i); // 0



//Quindi anche nei cicli (con "var")
var i = 5;
for (var i = 0; i < 10; i++) {
	// operazioni
}
// Qui i è 10

//Quindi anche nei cicli (con "let")
let i = 5;
for (let i = 0; i < 10; i++) {
	// operazioni
}
// Qui i è 5




//FUNCTION SCOPE

//var e let hanno entrambi uno scope locale per quanto riguarda la dichiarazione nelle funzioni:

function myFunction() {
	var myName = "Riccardo"; // Function Scope
}
function myOtherFunction() {
	let myName = "Riccardo";   // Function Scope
}



//SCOPE GLOBALE

var x = 2; 	// Global scope
let y = 2;  // Global scope

var myName = "Riccardo";
var p = document.getElementById('demo');
p.innerHTML = window.myName; // okay

let myName = "Riccardo";
var p = document.getElementById('demo');
p.innerHTML = window.myName; // errore





//RIDICHIARAZIONE

//Ridichiarare una variabile var utilizzando l'identificatore var è consentito (ovunque):

var x = 2;
// ora x è 2
var x = 3;
// ora x è 3



//Ridichiarare una variabile let utilizzando l'identificatore let in uno scope differente (come quello di blocco) è consentito:
let x = 2; // consentito
{
let x = 3; // consentito
}
{
let x = 4; // consentito
}


