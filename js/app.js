// Inicializamos la variable con la que controlaremos la pantalla de la calculadora
var pantalla = document.getElementById('display');


// Cambia los estilos de la tecla, mientras la mantienes presionada con el mouse
function presionarTecla(elemento) {
  elemento.style.transform="scale(0.95, 0.95)";
}

// Retorna los estilos de la tecla, cuando la sueltas
function soltarTecla(elemento) {
  elemento.style.transform="none";
}

// Recibe el valor de la tecla en la que has hecho click
function recibirValorTecla(elemento) {
  var valor;
  if (!isNaN(Number(elemento.id)) || elemento.id == "punto" || elemento.id == "sign") {
    // Cuando hagas click en un numero, convierte su valor a numerico
    // excepto cuando es un punto... o un signo
    // y lo guarda en la variable valor
    if (!isNaN(Number(elemento.id))) {
      valor = Number(elemento.id);
    } else if (elemento.id == "punto") {
      valor = ".";
    } else {
      valor = "-";
    }
    // Esta funcion coloca el numero, o el punto, en la pantalla de la calculadora
    colocarNumero(valor);
  } else {
    // Cuando hagas click en cualquier otra tecla
    valor = elemento.id;
    // Esta funcion realiza una operacion
    realizarOperacion(valor);
  }
}

// En esta funcion, se coloca el numero clickeado en la pantalla
function colocarNumero(valor) {
  // Si la pantalla solo tiene un 0, reemplazalo por el valor
  if (pantalla.innerHTML == "0") {
    // Si el valor no es un punto, ni un guion, sobreescribe el 0
    if (!isNaN(valor)) {
      pantalla.innerHTML = valor;
    } else if (valor == ".") {
      // De ser un punto, o un numero, agregalo a su derecha
      pantalla.innerHTML += valor;
    }
  } else if (pantalla.innerHTML.length < 8 || valor == "-") {
    // Si la pantalla tiene menos de 7 digitos, puedes añadirle uno más
    if (valor != "." && valor != "-") {
      pantalla.innerHTML+= valor;
    } else if (valor == ".") {
      // Si el valor es un punto, y no se encuentra otro en la pantalla, puedes agregarlo
      if (pantalla.innerHTML.indexOf(".") == -1) {
        pantalla.innerHTML+= valor;
      }
    } else {
      // Si el valor es un guion...
      if (pantalla.innerHTML.indexOf("-") == -1) {
        var auxiliar = valor + pantalla.innerHTML;
        pantalla.innerHTML = auxiliar;
      } else {
        var auxiliar = pantalla.innerHTML.slice(1);
        pantalla.innerHTML = auxiliar;
      }

    }

  }
}

// En esta funcion, se realiza la operacion de acuerdo a la tecla clickeada
function realizarOperacion(valor) {
  if (valor == "on") {
    pantalla.innerHTML = 0;
  }
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
      teclas[i].onclick = this.recibirValorTeclaCal;
    }
  },
  presionarTeclaCal: function(event) {
    presionarTecla(event.target);
  },
  soltarTeclaCal: function(event) {
    soltarTecla(event.target);
  },
  recibirValorTeclaCal: function(event) {
    recibirValorTecla(event.target);
  }
}

Calculadora.init();
