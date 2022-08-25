
let nombre = prompt ("Ingrese su nombre");
let residencia = "bienvenido a Mexico"
let mensaje = `Hola ${nombre}, ${residencia}`;

while (nombre != "esc") {
    alert (mensaje);
    prompt ("Ingrese su nombre");
}

alert ("Proceso completado");