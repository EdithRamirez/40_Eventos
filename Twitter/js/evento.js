function agregarText() {
	var addLista = document.getElementById("tarea").value;
	var texto = document.createTextNode(addLista);
	var newLista = document.createElement("label");
	var checkbox = document.createElement("input");

	if (addLista == "") {
    	alert("No se puede agregar texto en blanco");
 	} else {
 		//atributos del label e input de checkbox
		newLista.setAttribute("class","center-block input-checkbox");
		var inputs = document.getElementsByClassName("input-checkbox");

		checkbox.setAttribute("type","checkbox");


		newLista.appendChild(checkbox);
		newLista.appendChild(texto);
		document.getElementById("agregarText").appendChild(newLista);	

		addLista = document.getElementById("tarea").value = "";


		newLista.onclick = function () {
			this.parentElement.removeChild(this);
		};

    }

}
