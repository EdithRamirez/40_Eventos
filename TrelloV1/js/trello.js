//guarda en variable lo que se obtiene del input que esta en html
var btnAgregar = document.getElementById("btnAgregar");
//manda a llamar el evento
btnAgregar.addEventListener("click",agregarLista);
var lista = document.getElementById("lista");
//llama a la funcion agregarLista cuando se da click en el boton
function agregarLista(){
	//Crea el elemento input y el boton de guardar
	var inputNombre = document.createElement("input");
	inputNombre.setAttribute("placeholder","Añadir lista...");
	var btnEnviar = document.createElement("button");
	btnEnviar.setAttribute("type","button");
	btnEnviar.setAttribute("class","btn btn-success");
	btnEnviar.textContent = "Guardar";
	//input y boton son hijos de lista
	lista.appendChild(inputNombre);
	lista.appendChild(btnEnviar);
	//llama a la funcion agregarTarjeta cuando se da click en el boton
	btnEnviar.addEventListener("click",agregarTarjeta);	
	function agregarTarjeta(){
		//comprueba si el input esta vacio
		if(inputNombre.value == ""||inputNombre.value == null){
			alert("Debe ingresar un titulo");
		}else{
			var titulo = document.createElement("h4");
			titulo.innerHTML = inputNombre.value;
			var divTarjeta = document.createElement("div");
			divTarjeta.appendChild(titulo);
			lista.appendChild(divTarjeta);

			var btnTarjeta = document.createElement("input");
			btnTarjeta.setAttribute("type","button");
			btnTarjeta.setAttribute("class","btn transparente");
			btnTarjeta.setAttribute("value","Añadir tarjeta...")
			divTarjeta.appendChild(btnTarjeta);
			
			btnTarjeta.addEventListener("click",crearTarjeta);

			function crearTarjeta(){
				var txtTarjeta = document.createElement("textarea");

				var btnAnadir = document.createElement("button");
				btnAnadir.setAttribute("type","button");
				btnAnadir.setAttribute("class","btn btn-success");
				btnAnadir.textContent = "Añadir";
				divTarjeta.appendChild(txtTarjeta);
				divTarjeta.appendChild(btnAnadir);
				//aqui debe guardar la tarjeta
			}

		}
	
	}
}
