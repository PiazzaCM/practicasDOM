let reaccionboton = document.getElementById("boton");
let reaccionparrafo = document.getElementById("parrafo");

reaccionboton.addEventListener("click", function() {
    if (reaccionparrafo.classList.contains("violeta")) {
        reaccionparrafo.classList.remove("violeta");
        reaccionparrafo.classList.add("naranja");
    } else {
        reaccionparrafo.classList.remove("naranja");
        reaccionparrafo.classList.add("violeta");
    }
});
