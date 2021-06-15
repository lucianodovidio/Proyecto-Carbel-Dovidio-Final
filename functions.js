/**
 * Calculadora de Compresion de un motor.
 * @method ampliarR
 * @param {string} id - El id de los inputs cantcil,cc.
 * @param ´{number} valor - El valor de los inputs de cantcil, cc.
 * @return Valor que retorna
 */


function ampliarR(id, valor){

    var cantcilindros, cilindrada;
    var canvas = document.getElementById("myCanvas");

    cantcilindros = document.getElementsByName("cantcilindros") [0].value;
    cilindrada = document.getElementsByName("cilindrada") [0].value;

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        cantcilindros = "";
        cilindrada = "";
    }else{
        document.getElementsByName("resultadoo") [0].value = ((cilindrada / cantcilindros) + cantcilindros * 10) / cantcilindros * 10;
    }


    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "MediaFiles/pistondiagrama.png";

    ctx.drawImage(img, 0, 0);

}

