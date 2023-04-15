function muestraLaMagia() {
    var resultado = document.getElementById("resultado");
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var area = a * b;

    resultado.innerHTML = "El resultado es: " + area;

var img = document.getElementById("magicGif");
img.style.display = "inline";
}

function limpiarCampos() {
    document.getElementById("a").value="";
    document.getElementById("b").value="";
    document.getElementById("resultado").innerHTML="";
    magicGif.style.display="none";
}

/*var mostrarImg = document.getElementById("magic");
mostrarImg.addEventListener("click", mostrarImagen);
}*/

/*var esconderImg = document.getElementById("noMagic");
var img = document.getElementById("magicGif");
esconderImg.addEventListener("click", () => {
    magicGif.style.display = "none";
}); */