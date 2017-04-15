
function presionarTecla(elemento) {
  elemento.style.transform="scale(0.95, 0.95)";
}

function soltarTecla(elemento) {
  elemento.style.transform="none";
}

var Calculadora = {
  init: function() {
    this.estadosTeclas('tecla');
  },
  estadosTeclas: function(selector) {
    var teclas = document.getElementsByClassName(selector);
    for (var i = 0; i < teclas.length; i++) {
      teclas[i].onmousedown = this.presionarTeclaCal;
      teclas[i].onmouseup = this.soltarTeclaCal;
    }
  },
  presionarTeclaCal: function(event) {
    presionarTecla(event.target);
  },
  soltarTeclaCal: function(event) {
    soltarTecla(event.target);
  }
}

Calculadora.init();
