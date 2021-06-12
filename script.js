// Crear el botón de cerrar
var myNodelist = document.getElementsByTagName("LI");
var i;
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  
}
