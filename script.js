document.getElementById('precio').addEventListener('input', calcularPrecioPorMetro);
document.getElementById('metros').addEventListener('input', calcularPrecioPorMetro);
document.getElementById('form-anuncio').addEventListener('submit', guardarAnuncio);
document.getElementById('form-eliminar').addEventListener('submit', eliminarAnuncio);

// Cálculo del precio por metro cuadrado
function calcularPrecioPorMetro() {
    const precio = parseFloat(document.getElementById('precio').value) || 0;
    const metros = parseFloat(document.getElementById('metros').value) || 0;
    const precioPorMetro = metros ? (precio / metros).toFixed(2) : 0;
    document.getElementById('precioPorMetro').value = precioPorMetro;
}
reader.onload=(e)=>{
    imagePreview.src=e.target.result;
    imagePreview.style.width='100px';

};
/*const input = document.getElementById('descripcion');/funcion maximo de 20 caracteres
input.addEventListener('input',() => {
    if(input.value.length>20) {
        input.value=input.value.slice(0,20);
        alert('has excedido el limite de caracteres.');
    }
});*/
// Guardar anuncio en el almacenamiento local
function guardarAnuncio(event) {
    event.preventDefault();
   
    
    const anuncio = {
        imagen: document.getElementById('urlImage').value || document.getElementById('image').files[0]?.name,
        referencia: document.getElementById('referencia').value,
        direccion: document.getElementById('direccion').value,
        precio: document.getElementById('precio').value,
        metros: document.getElementById('metros').value,
        habitaciones: document.getElementById('habitaciones').value,
        banos: document.getElementById('banos').value,
        descripcion: document.getElementById('descripcion').value,
    };

    const anuncios = JSON.parse(localStorage.getItem('anuncios')) || [];
    anuncios.push(anuncio);
    localStorage.setItem('anuncios', JSON.stringify(anuncios));

    alert("Anuncio guardado correctamente");
    event.target.reset();
}

// Eliminar un anuncio
function eliminarAnuncio(event) {
    event.preventDefault();
    const referenciaEliminar = document.getElementById('referenciaEliminar').value;
    let anuncios = JSON.parse(localStorage.getItem('anuncios')) || [];

    anuncios = anuncios.filter(anuncio => anuncio.referencia !== referenciaEliminar);
    localStorage.setItem('anuncios', JSON.stringify(anuncios));

    if (anuncios.length < localStorage.length) {
        alert("Anuncio eliminado correctamente");
    } else {
        alert("Referencia no encontrada");
    }

    event.target.reset();
}
