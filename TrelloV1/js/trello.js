//guarda en variable lo que se obtiene del input que esta en html
var btnAgregar = document.getElementById("btnAgregar");
//manda a llamar el evento
btnAgregar.addEventListener("click",agregarLista);
var lista = document.getElementById("lista");
//llama a la funcion agregarLista cuando se da click en el boton
function agregarLista(){
	//Crea el elemento input con sus atributos
	var inputNombre = document.createElement("input");
	inputNombre.setAttribute("placeholder","Añadir lista...");
	//Crea el elemento boton con sus atributos
	var btnEnviar = document.createElement("button");
	btnEnviar.setAttribute("type","button");
	btnEnviar.setAttribute("class","btn btn-success");
	btnEnviar.textContent = "Guardar";
	//Se crea la caja 
	var divCaja = document.createElement("div");
	divCaja.setAttribute("class","caja")
	divCaja.appendChild(inputNombre);
	divCaja.appendChild(btnEnviar);
	// lista.appendChild(divCaja);

	lista.insertBefore(divCaja,btnAgregar);

	//llama a la funcion agregarTarjeta cuando se da click en el boton
	btnEnviar.addEventListener("click",agregarTarjeta);	
	function agregarTarjeta(){
		//comprueba si el input esta vacio
		if(inputNombre.value == ""||inputNombre.value == null){
			alert("Debe ingresar un titulo");
		}else{
			//elimina el input y el boton
			inputNombre.parentNode.removeChild(inputNombre);
			btnEnviar.parentNode.removeChild(btnEnviar);
			//Guarda el valor del input en un h4
			var titulo = document.createElement("h4");
			titulo.innerHTML = inputNombre.value;

			divCaja.appendChild(titulo);

			var btnTarjeta = document.createElement("input");
			btnTarjeta.setAttribute("type","button");
			btnTarjeta.setAttribute("class","btn btn-opaco");
			btnTarjeta.setAttribute("value","Añadir tarjeta...")
			divCaja.appendChild(btnTarjeta);

			btnTarjeta.addEventListener("click",crearTarjeta);
			
			function crearTarjeta(){

				var txtTarjeta = document.createElement("textarea");
				txtTarjeta.setAttribute("placeholder","Añadir tarjeta...");
				txtTarjeta.setAttribute("class","tarjeta");

				var btnAnadir = document.createElement("button");
				btnAnadir.setAttribute("type","button");
				btnAnadir.setAttribute("class","btn btn-success");
				btnAnadir.textContent = "Añadir";

				divCaja.insertBefore(txtTarjeta,btnTarjeta);
				divCaja.insertBefore(btnAnadir,btnTarjeta);
				//aqui debe guardar la tarjeta
				btnAnadir.addEventListener("click",anadirTarjeta);
				function anadirTarjeta(){	
					if(txtTarjeta.value == ""||txtTarjeta.value == null){
						alert("Debe ingresar el nombre de la tarjeta");
					} else {
						btnAnadir.parentNode.removeChild(btnAnadir);
					}
				}
			}
		}
	}
}
