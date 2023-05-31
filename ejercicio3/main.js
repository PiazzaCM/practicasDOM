 function calcular () {

    let operaciones = document.getElementById("opciones").value;
    let numero1 = parseInt(document.getElementById("numerouno").value);
    let numero2 = parseInt(document.getElementById("numerodos").value);
    let calculo = document.getElementById("resultado");
    let resultado = 0;

    switch(operaciones) {
     case 'suma':
        resultado = numero1+numero2
        break;
     case 'resta':
        resultado = numero1-numero2
        break;
     case 'multiplicacion':
        resultado = numero1*numero2
        break;
     case 'division':
        resultado = numero1/numero2
        break;
    
        default:
        resultado = 'no coicide con las opciones'    
        break;
    }
    
    calculo.innerHTML = resultado


}
