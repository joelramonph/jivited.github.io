var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = '¡Bienvenidos!';


/*document.querySelector ('html').onclick = function() {

alert ("deja de pinchar");

}
*/
var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'imagenes/escudo.png') {
      miImage.setAttribute('src','imagenes/logojivi.png');
    } else {
      miImage.setAttribute('src', 'imagenes/escudo.png');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Estamos Innovando en Educación de Niños,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Jivited Academia Maker';
}


miBoton.onclick = function() {
    estableceNombreUsuario();
}

