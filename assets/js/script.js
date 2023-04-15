function muestraLaMagia() {
    var resultado = document.getElementById("resultado");
    var a = parseInt(document.getElementById("a").value);
    // var b = parseInt(document.getElementById("b").value);
    var areaCua = a * a;
    var areaTri = a * a * 0.25 * 1.7320508 ;
    var areaCir = a * a * 3.14159;

    var periCua = a * 4;
    var periTri = a * 3 ;
    var periCir = 2 * a * 3.14159;

    resultado.innerHTML = "El resultado es: " + areaCua;
    resultado.innerHTML = "El resultado es: " + areaTri;
    resultado.innerHTML = "El resultado es: " + areaCir;
    resultado.innerHTML = "El resultado es: " + periCua;
    resultado.innerHTML = "El resultado es: " + periTri;
    resultado.innerHTML = "El resultado es: " + periCir;

var img = document.getElementById("magicGif");
img.style.display = "inline";
}

function limpiarCampos() {
    document.getElementById("a").value="";
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