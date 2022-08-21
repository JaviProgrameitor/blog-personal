var cajaLineas = document.getElementById("cajita_lineas");
var botonLineas = document.getElementById("boton_lineas");
botonLineas.addEventListener("click", invisible);

var cajaDibujo = document.getElementById("cajita_dibujo");
var botonDibujo = document.getElementById("boton_dibujo");
botonDibujo.addEventListener("click", dibujar);


var cajaTexto = document.getElementById("cajita_texto");
var botonTexto = document.getElementById("boton_texto");
botonTexto.addEventListener("click", invocarTexto);

var caja = document.getElementById("caja_dibujo");
var papel = caja.getContext("2d");
var ancho = caja.width;

var resultado = document.getElementById("resultado");

dibujarlinea("red", 1, 1, 1, 299, papel);
dibujarlinea("red", 1, 1, 299, 1, papel);
dibujarlinea("red", 299, 1, 299, 299, papel);
dibujarlinea("red", 299, 299, 1, 299, papel);

function invisible()
{
  console.log("Mensaje secreto");
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujar()
{
 var tipo = cajaDibujo.value;
 var lineas = parseInt(cajaLineas.value);
 var l = 0;
 var yi, xf;
 var espacio = ancho / lineas;

  if (tipo == "Normal")
  {
    for(l = 0; l < lineas; l++)
    {
      yi = espacio * l
      xf = espacio * (l + 1)
      dibujarlinea("purple", 0, yi, xf, 300, papel);
    }
  }

  else if (tipo == "Hacia abajo")
  {
    for(l = 0; l < lineas; l++)
    {
      yi = 300 - (espacio * l)
      xf = 290 - (espacio * l)
      dibujarlinea("pink", 300, yi, xf, 0, papel);
    }
  }
}

function invocarTexto()
{
 var valor = cajaTexto.value;
 var primerRespuesta = "Algo JAJAJAJAJJA";
 var segundaRespuesta= "Aaaay no quisíste que te contara algo. Ya no me quiereees:(";
 var respuesta;
 if (valor == "Si cuentame")
 {
   respuesta = primerRespuesta;
 }

 else if (valor == "No gracias")
 {
   respuesta = segundaRespuesta;
 }
 resultado.innerHTML = respuesta;
}
