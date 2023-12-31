function saltarLinea() {
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}
function imprimir(texto) {
    document.write(texto);
    saltarLinea();
}


let input = document.querySelector("textarea");
input.focus();

function encriptar() {
    textoUsuario = document.getElementById("input-to-encript");
    palabra = textoUsuario.value;
    arregloLetras = palabra.split('');
    var textoResultante = "";
    for (inidiceLetra = 0; inidiceLetra <= arregloLetras.length; inidiceLetra++) {

        if (arregloLetras[inidiceLetra] == "e") {
            arregloLetras[inidiceLetra] = "enter"
        }
        else if (arregloLetras[inidiceLetra] == "i") {
            arregloLetras[inidiceLetra] = "imes"
        }
        else if (arregloLetras[inidiceLetra] == "a") {
            arregloLetras[inidiceLetra] = "ai"
        }
        else if (arregloLetras[inidiceLetra] == "o") {
            arregloLetras[inidiceLetra] = "ober"
        }
        else if (arregloLetras[inidiceLetra] == "u") {
            arregloLetras[inidiceLetra] = "ufat"
        }
    }
    palabraEncriptada = arregloLetras.join('');
    textoResultante += palabraEncriptada;
    document.getElementById("output").innerHTML = textoResultante;
    document.getElementById("output").value = textoResultante;
    document.getElementById("imagenMuneco").style.display = "none";
    input.focus();
}


function obtenerVocalesencriptadas(palabra) {

    while (palabra.includes("ufat")) {
        arregloLetras = palabra.split('')

        posicionUfat = palabra.indexOf('ufat');

        arregloLetras.splice(posicionUfat + 1, 3);

        palabra = arregloLetras.join('');

    }

    while (palabra.includes("ai")) {
        arregloLetras = palabra.split('')

        posicionAi = palabra.indexOf('ai');

        arregloLetras.splice(posicionAi + 1, 1);

        palabra = arregloLetras.join('');
    }

    while (palabra.includes("ober")) {
        arregloLetras = palabra.split('')
        posicionOber = palabra.indexOf('ober');
        arregloLetras.splice(posicionOber + 1, 3);
        palabra = arregloLetras.join('');
    }

    while (palabra.includes("enter")) {
        arregloLetras = palabra.split('')
        posicionEnter = palabra.indexOf('enter');
        arregloLetras.splice(posicionEnter + 1, 4);
        palabra = arregloLetras.join('');
    }

    while (palabra.includes("imes")) {
        arregloLetras = palabra.split('')
        posicionImes = palabra.indexOf('imes');
        arregloLetras.splice(posicionImes + 1, 3);
        palabra = arregloLetras.join('');
    }
    return (palabra)
}



function obtenerOracion() {
    var textoResultante = "";
    textoUsuario = document.querySelector("input");
    textousuarioEncriptado = textoUsuario.value;
    listadePalabras_Encriptadas = textousuarioEncriptado.split(' ');
    listaVacia = []
    for (indicePalabra = 0; indicePalabra < listadePalabras_Encriptadas.length; indicePalabra++) {
        while (listadePalabras_Encriptadas[indicePalabra].includes("enter") || listadePalabras_Encriptadas[indicePalabra].includes("ober") || listadePalabras_Encriptadas[indicePalabra].includes("ai") || listadePalabras_Encriptadas[indicePalabra].includes("ufat") || listadePalabras_Encriptadas[indicePalabra].includes("imes")) {
            listadePalabras_Encriptadas[indicePalabra] = obtenerVocalesencriptadas(listadePalabras_Encriptadas[indicePalabra]);
        }
        listaVacia.push(listadePalabras_Encriptadas[indicePalabra]);
    }
    oracionNormal = listaVacia.join(' ')
    textoResultante += oracionNormal;
    document.getElementById("output").innerHTML = textoResultante;
    document.getElementById("output").value = textoResultante;
    input.focus();
}





function copiar() {
    var textoc = document.getElementById("output").value;
    console.log(textoc)
    document.getElementById("myInput").value = textoc;

}

