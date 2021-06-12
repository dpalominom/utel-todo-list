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
// Al dar click en el botón cerrar se oculta el elemento
var close = document.getElementsByClassName("close");
var i;
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";  
  }
}
