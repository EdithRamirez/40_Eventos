function agregarText() {
	//los valores de textarea se guardan en la variable addLista
	var addLista = document.getElementById("tarea").value;
	//Crea un nodo tipo texto
	var texto = document.createTextNode(addLista);
	
	//comprueba si textarea esta vacio
	if (addLista == "") {
    	alert("No se puede agregar texto en blanco");
 	} else {
 		//atributos del label e input de checkbox
		var newLista = document.createElement("label");
		newLista.setAttribute("class","center-block panel gris");


		var checkbox = document.createElement("input");
		checkbox.setAttribute("type","checkbox");

		var span = document.createElement("span");
		span.setAttribute("class","fa fa-trash rojo");

		newLista.appendChild(checkbox);
		newLista.appendChild(texto);
		newLista.appendChild(span);

		document.getElementById("agregarText").appendChild(newLista);	

		//esta linea limpia lo que se tiene en textarea cuando se da clic en boton agregar
		addLista = document.getElementById("tarea").value = ""; 
    }



    //elimina al dar clic al span de basura
	span.onclick = function(){
		newLista.parentElement.removeChild(newLista);
	}


	//valida si se da checked al input y le agrega la clase de linea
	checkbox.onclick = function () {
		if(checkbox.checked == true){
			texto.parentElement.classList.add("linea");
		}else{
			texto.parentElement.classList.remove("linea");
		}
	}
}
