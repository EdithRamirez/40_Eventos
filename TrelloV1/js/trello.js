/*Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre 
un input y un botón (formulario) para que el usuario ingrese el nombre de la lista.*/



function ingresarLista(){
	var inputNombre = document.createElement("input");
	inputNombre.setAttribute("placeholder","Nombre lista");
	var btnEnviar = document.createElement("button");
	btnEnviar.setAttribute("type","button");
	btnEnviar.setAttribute("class","btn btn-success");
	btnEnviar.innerHTML = "Guardar"

	document.getElementById("lista").appendChild(inputNombre);
	document.getElementById("lista").appendChild(btnEnviar);
}
