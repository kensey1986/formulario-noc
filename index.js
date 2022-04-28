const persona = JSON.parse( localStorage.getItem("objeto"))
console.log(persona);

function formulario (){
    
    const nodoNombre = document.getElementById("nombre");
    const nombre = nodoNombre.value;

    const nodoApellido = document.getElementById("apellido");
    const apellido = nodoApellido.value;
    
    const nodoFechaNac = document.getElementById("fechaNa");
    const fechaNac = nodoFechaNac.value;

    const nodoEdad = document.getElementById("edad");
    const edad = nodoEdad.valueAsNumber;

    const persona = new Object();

    persona.nombre= nombre;
    persona.edad = edad;
    persona.fechaNac = fechaNac;

    
    localStorage.setItem("objeto", JSON.stringify(persona));

    const nodoPersona= document.getElementById("mostrarPersona");
    // nodoPersona.textContent = persona.nombre+' '+persona.edad+' '+ persona.civil;
    // nodoPersona.textContent = 'Nombre: '+ persona.nombre+' - '+ 'edad: '+ persona.edad+' - '+'Estado: '+  persona.civil;
    nodoPersona.textContent = `Nombre:  ${persona.nombre} edad:  ${persona.edad} Fecha-Nacimiento: ${persona.fechaNac}`;
    console.log(nodoPersona);
    console.log(persona)
}

