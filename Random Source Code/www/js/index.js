// ------------ INDEX

var myApp = {
		min: 1,
		max: 100
};

function changeMax(){
	var x=document.getElementById("max");
	myApp.max=parseInt(x.value);
}

function changeMin(){
	var x=document.getElementById("min");
	myApp.min=parseInt(x.value);
}

function changeMax2(){
	var x=document.getElementById("max2");
	myApp.max=parseInt(x.value);
}

function changeMin2(){
	var x=document.getElementById("min2");
	myApp.min=parseInt(x.value);
}

// --- Numero
function randomNumber1() {
    var minNumber = myApp.min; 
    var maxNumber = myApp.max;
    var randomnumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    var res = document.getElementById('resultNumber1');
    var hex = Math.floor( Math.random() * 0xFFFFFF );
    
    res.innerHTML = randomnumber;
    res.style.color = "#" + hex.toString(16);;
}

function randomNumber2() {
    var minNumber = myApp.min; 
    var maxNumber = myApp.max;
    var randomnumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    var res = document.getElementById('resultNumber2');
    var hex = Math.floor( Math.random() * 0xFFFFFF );
    
    res.innerHTML = randomnumber;
    res.style.color = "#" + hex.toString(16);;
}

// ---- Color
function randomColor(){
	var hex = Math.floor( Math.random() * 0xFFFFFF );
	var res = document.getElementById('resultColor');
	var result = "#" + hex.toString(16);

	res.style.backgroundColor = result;
	res.innerHTML = "<br> <br> <br> <br> <br> <br> <br> <br> ";
}

function randomColor2(){
	var hex = Math.floor( Math.random() * 0xFFFFFF );
	var res = document.getElementById('resultColor2');
	var result = "#" + hex.toString(16);

	res.style.backgroundColor = result;
	res.innerHTML = "<br> <br> <br> <br> <br> <br> <br> <br> ";
}

// --- Direccion
function randomDirect1(){
	var minNumber = 0; 
	var maxNumber = 360;
	var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
	$("#resultDirect1").rotate({ animateTo:randomnumber});
}

function randomDirect2(){
	var minNumber = 0; 
	var maxNumber = 360;
	var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
	$("#resultDirect2").rotate({ animateTo:randomnumber});
}



// ------------ BASICOS

function sonido(elem) { 
    var snd = new Audio(elem); 
    snd.play();
}

// Salir del programa
function onSalir() {
	navigator.app.exitApp();
}

// Interfaz para compenzar una actividad en android
function onGotoStart() {
	window.MiInterfaz.onGotoStart();
}


// Usos BaseDatos local
function onInsertItem(){
	var nombre = $('#name').val();
	localStorage.setItem('usuario', nombre);
}
function onGetItem(){
	return localStorage.getItem('usuario');
}
function onDeleteItem(){
	localStorage.removeItem('usuario');
}

/*  ----- Ejemplo con tipos -----
	var persona = {
		nombre:'juan',
		apellido:'perez',
		edad:25
	}
	function onInsertJson(persona){
		localStorage.setItem('persona', JSON.stringify(persona) );
	}
	function onGetJson(){
		var persona = JSON.parse(localStorage.setItem('persona')); 
	}
 ----- Uso en HTML -----
	<div data-role="fieldcontain">
		<label for="name">Text Input:</label> 
		<input type="text" name="name" id="name" value="" />
	</div>
	<input onclick="onInsertItem()" type="button" data-inline="true" value="Insertar">
	<input onclick="alert(onGetItem())" type="button" data-inline="true" value="Mostrar"> */



