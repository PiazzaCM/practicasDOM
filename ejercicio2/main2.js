let sanrio = [
    {
        titulo: 'Kuromi',
        descripcion: 'Kuromi es la antagonista principal quien siente ira y rencor contra My Melody y Baku. Ella es una conejita y usa un sombrero de bufón negro con una calavera rosa en el centro de su frente, la cual imita la expresión facial que tiene Kuromi en ese momento.',
        imagen: './img/kuromi.jpg'
    },
    {
        titulo: 'My melody',
        descripcion: 'My Melody es una conejita que durante toda la serie se muestra usando una capucha rosada que también cubre sus orejas. Con una habilidad adecuada para cocinar, My Melody es la que les prepara la comida a Uta y su familia.',
        imagen: './img/melody.png'
    },
    {
        titulo: 'Cinnamonroll',
        descripcion: 'Cinnamoroll es la mascota oficial de Cafe Cinnamon. Él es bastante tímido, pero muy amable, y a veces toma una siesta en vuelta de los clientes. Puede volar por el aire batiendo sus enormes orejas, y muchos no saben que él es un perrito.',
        imagen: './img/cinna.png'
    }
];

let container = document.getElementById('container');

container.innerHTML += sanrio.map( personaje =>{
    return `
    <div class="col">
      <div class="card">
        <img src="${personaje.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${personaje.titulo}</h5>
          <p class="card-text">${personaje.descripcion}</p>
        </div>
      </div>
    </div>`
}).join("")