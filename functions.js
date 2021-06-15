/**
 * Calculadora de Compresion de un motor.
 * @method ampliarR
 * @param {string} id - El id de los inputs cantcil,cc.
 * @param ´{number} valor - El valor de los inputs de cantcil, cc.
 * @return Valor que retorna
 */


function ampliarR(id, valor){

    var cantcilindros, cilindrada;

    cantcilindros = document.getElementsByName("cantcilindros") [0].value;
    cilindrada = document.getElementsByName("cilindrada") [0].value;

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        cantcilindros = "";
        cilindrada = "";
    }else{
        document.getElementsByName("resultadoo") [0].value = ((cilindrada / cantcilindros) + cantcilindros * 10) / cantcilindros * 10;
    }
}