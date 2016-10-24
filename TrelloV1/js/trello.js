/*Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre 
un input y un botón (formulario) para que el usuario ingrese el nombre de la lista.*/


var btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",agregarLista);

var lista = document.getElementById("lista");

function agregarLista(){
	var inputNombre = document.createElement("input");
	inputNombre.setAttribute("placeholder","Añadir lista...");
	var btnEnviar = document.createElement("button");
	btnEnviar.setAttribute("type","button");
	btnEnviar.setAttribute("class","btn btn-success");
	btnEnviar.textContent = "Guardar";
	lista.appendChild(inputNombre);
	lista.appendChild(btnEnviar);

	btnEnviar.addEventListener("click",agregarTarjeta);

	function agregarTarjeta(){
		var titulo = document.createElement("h2");
		titulo.innerHTML = inputNombre.value;
		var divTarjeta = document.createElement("div");
		divTarjeta.appendChild(titulo);
		lista.appendChild(divTarjeta);

		
		var inputTarjeta = document.createElement("input");
		inputTarjeta.setAttribute("type","button");
		inputTarjeta.setAttribute("class","btn btn-secondary transparente");
		inputTarjeta.setAttribute("value","Añadir tarjeta...")
		divTarjeta.appendChild(inputTarjeta);

		var txtTarjeta = document.createElement("textarea");
	}
	
}
