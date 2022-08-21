var primerPuntoX =document.getElementById("primer_punto_x");
var botonPrimerPuntoX = document.getElementById("boton_primer_punto_x");
botonPrimerPuntoX.addEventListener("click", puntoXPrimero);

var primerPuntoY =document.getElementById("primer_punto_y");
var botonPrimerPuntoY = document.getElementById("boton_primer_punto_y");
botonPrimerPuntoY.addEventListener("click", puntoYPrimero);

var segundoPuntoX =document.getElementById("segundo_punto_x");
var botonSegundoPuntoX = document.getElementById("boton_segundo_punto_x");
botonSegundoPuntoX.addEventListener("click", puntoXSegundo);

var segundoPuntoY =document.getElementById("segundo_punto_y");
var botonSegundoPuntoY = document.getElementById("boton_segundo_punto_y");
botonSegundoPuntoY.addEventListener("click", dibujarPorClick);

var areaDibujo = document.getElementById("area_dibujo");
var lienzo = areaDibujo.getContext("2d");

dibujarlinea("black", 1, 1, 1, 299);
dibujarlinea("black", 1, 1, 299, 1);
dibujarlinea("black", 299, 1, 299, 299);
dibujarlinea("black", 1, 299, 299, 299);

function puntoXPrimero()
{
  console.log("Primer mensaje secreto");
}

function puntoYPrimero()
{
  console.log("Segundo mensaje secreto");
}

function puntoXSegundo()
{
  console.log("Tercer mensaje secreto");
}

function dibujarPorClick()
{
  var xi = parseInt(primerPuntoX.value);
  var yi = parseInt(primerPuntoY.value);
  var xf = parseInt(segundoPuntoX.value);
  var yf = parseInt(segundoPuntoY.value);

  dibujarlinea("red", xi, yi, xf, yf);
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
