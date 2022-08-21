var pregunta = prompt("Isabedita pequeña\n ¿Me amaas? 1 si Mucho o 2 si poquito")
var respuesta;

if (pregunta == 1)
{
  respuesta = "¡Awwww Isabedita pequeña! Yo se que chiii me amaas y yo te amoooo mucho amoooor:)";
}

else if(pregunta == 2)
{
  respuesta = "Aaaaaaayyyyyy:( dijíste que no me amaas y que ya no me quiedeees:( Yo se que chi me amas sisi y mucho:)";
}

else
{
  respuesta = "Isabeditaa aay nonono solo había dos opciones.";
}

document.write("<strong>" +respuesta + "</strong>");
