<<<<<<< HEAD
function cambiarEstilosParrafos() {
    let parrafos = document.querySelectorAll('p');
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('parrafo-estilo');
    });
}

function aplicarEstiloPares() {
    let parrafos = document.querySelectorAll('p:nth-child(even)');
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('par-impar-estilo');
    });
}

function aplicarEstiloImpares() {
    let parrafos = document.querySelectorAll('p:nth-child(odd)');
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('par-impar-estilo');
    });
}

function mostrarImagenes() {
    document.getElementById('imagenes').classList.remove('oculto');
}

function ocultarImagenes() {
    document.getElementById('imagenes').classList.add('oculto');
}

function cambiarFondo() {
    document.body.classList.toggle('fondo');
}

function cambiarColoresTitulos() {
    let titulos = document.querySelectorAll('h1, h2, h3');
    titulos.forEach(titulo => {
        titulo.classList.toggle('titulo-estilo');
    });
}
=======
function cambiarEstilosParrafos() {
    let parrafos = document.querySelectorAll('p');
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('parrafo-estilo');
    });
}

function aplicarEstiloPares() {
    let parrafos = document.querySelectorAll('p:nth-child(even)');
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('par-impar-estilo');
    });
}

function aplicarEstiloImpares() {
    let parrafos = document.querySelectorAll('p:nth-child(odd)');
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('par-impar-estilo');
    });
}

function mostrarImagenes() {
    document.getElementById('imagenes').classList.remove('oculto');
}

function ocultarImagenes() {
    document.getElementById('imagenes').classList.add('oculto');
}

function cambiarFondo() {
    document.body.classList.toggle('fondo');
}

function cambiarColoresTitulos() {
    let titulos = document.querySelectorAll('h1, h2, h3');
    titulos.forEach(titulo => {
        titulo.classList.toggle('titulo-estilo');
    });
}
>>>>>>> c30a722 ('Actualizacion')
