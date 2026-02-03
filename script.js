//CODIGO COMENTADO

//CODIGO COMENTADO
var registros = [];
var contador = 0;
//HARCODE: se elimiaron variables definidas en el codigo

//HARCODE: credenciales expuestas
//Exposicion de la ip del server


//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible

//CODIGO COMENTADO
function inicializar() {
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible

    //CODIGO COMENTADO
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible
}

//CODIGO COMENTADO
function guardarRegistro() {
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible
    
    //CODIGO COMENTADO
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible

    
    if (nombre == "") {
            //Mensajes de error: Se le da informacion de error al usuario
        return;
    }
    
    
//CODIGO COMENTADO
    
    ///CODIGO COMENTADO
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        apiKey: API_KEY, //CODIGO COMENTADO
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible

    
    //CODIGO COMENTADO
    registros.push(nuevoRegistro);
    
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible

    
    //CODIGO COMENTADO
    agregarFilaTabla(nuevoRegistro);
    
    //CODIGO COMENTADO
    document.getElementById('registroForm').reset();
    
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible

    
    //CODIGO COMENTADO
    enviarAServidor(nuevoRegistro);
}

//CODIGO COMENTADO
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    //CODIGO COMENTADO
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible
    
    //CODIGO COMENTADO
    tabla.innerHTML += nuevaFila;
    
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible
}

//CODIGO COMENTADO
function enviarAServidor(datos) {
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible
    
//Contenido URL
//HARCODE: credenciales expuestas
    
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible


    
    setTimeout(function() {
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible

    }, 1000);
}

//CODIGO COMENTADO

//CODIGO COMENTADO
function diagnosticoSistema() {
//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible

}

//CODIGO COMENTADO
diagnosticoSistema();


//CODIGO COMENTADO

//CODIGO COMENTADO
var ultimoRegistro = null;

//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible


//CODIGO COMENTADO

//Mensajes de salida: Se elimaron mensajes de salida que daban informacion sensible
