/**
 * Calculadora de Compresion de un motor.
 * @method ampliarR
 * @param {string} id - El id de los inputs cantcil,cc.
 * @param {number} valor - El valor de los inputs de cantcil, cc.
 * @return resultado
 */

function ampliarR(){

    var cantcilindros, cilindrada, resultado;

    cantcilindros = document.getElementsByName("cantcilindros") [0].value;
    cilindrada = document.getElementsByName("cilindrada") [0].value;

    if(isNaN(cantcilindros)){
        alert("Se ingreso un valor invalido en Cantidad de Cilindros");
        document.getElementsByName("cantcilindros")[0].value = "";
    }else if(isNaN(cilindrada)){
        alert("Se ingreso un valor invalido en Cilindrada")
        document.getElementsByName("cilindrada")[0].value = "";
    }else{
        resultado = ((cilindrada / cantcilindros) + cantcilindros * 10) / (cantcilindros * 10);
        document.getElementsByName("resultadoo")[0].value = resultado;
        return resultado;
    }
}


y=0;
dy=2;
function animarPiston(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var resultado = ampliarR();

    canvas.width=canvas.width;


    var img = new Image();
    img.src = "MediaFiles/pistondiagrama.png";
    img.onload = function(){
        ctx.drawImage(img, 0, y);
    }


    var img2 = new Image();
    img2.src = "MediaFiles/camisa.png";
    img2.onload = function(){
        ctx.drawImage(img2, 0, 15);
    }

    var t=5;

    if(y>120){
        y=0;
    }

    y+=dy;

    ctx.font = "italic small-caps bold 20px arial";
    ctx.fillStyle= "white";
    ctx.fillText(resultado + " : 1",250,55);
}

