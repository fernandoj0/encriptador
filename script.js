let input = document.querySelector("textarea");
input.focus();

function encrypt() {
    const userText = document.getElementById("text-to-change");
    let sentence = userText.value;
    let trimmedValue = sentence.trim();
    if (trimmedValue == '') {
        input.focus();
    } else {
        let arrayOfChar = sentence.split('');
    let outputText = "";
    for (let i = 0; i <= arrayOfChar.length; i++) {

        if (arrayOfChar[i] == "e") {
            arrayOfChar[i] = "enter"
        }
        else if (arrayOfChar[i] == "i") {
            arrayOfChar[i] = "imes"
        }
        else if (arrayOfChar[i] == "a") {
            arrayOfChar[i] = "ai"
        }
        else if (arrayOfChar[i] == "o") {
            arrayOfChar[i] = "ober"
        }
        else if (arrayOfChar[i] == "u") {
            arrayOfChar[i] = "ufat"
        }
    }
    let encryptText = arrayOfChar.join('');
    outputText += encryptText;
    document.getElementById("output").innerHTML = outputText;
    document.getElementById("output").value = outputText;
    document.getElementById("imagenMuneco").style.display = "none";
    input.focus();
    }
}


function getEncryptedVowels(word) {
    while (word.includes("ufat")) {
        let arrayOfChar = word.split('')
        let ufatIndex = word.indexOf('ufat');
        arrayOfChar.splice(ufatIndex + 1, 3);
        word = arregloLetras.join('');
    }
    while (word.includes("ai")) {
        let arrayOfChar = word.split('')
        let aiIndex = word.indexOf('ai');
        arrayOfChar.splice(aiIndex + 1, 1);
        word = arrayOfChar.join('');
    }

    while (word.includes("ober")) {
        let arrayOfChar = word.split('')
        let oberIndex = word.indexOf('ober');
        arrayOfChar.splice(oberIndex + 1, 3);
        word = arrayOfChar.join('');
    }

    while (word.includes("enter")) {
        let arrayOfChar = word.split('')
        let enterIndex = word.indexOf('enter');
        arrayOfChar.splice(enterIndex + 1, 4);
        word = arrayOfChar.join('');
    }

    while (word.includes("imes")) {
        let arrayOfChar = word.split('')
        let imesIndex = word.indexOf('imes');
        arrayOfChar.splice(imesIndex + 1, 3);
        word = arrayOfChar.join('');
    }
    return (word)
}



function decryptSentence() {
    let outputText = "";
    let userText = document.getElementById("text-to-change");
    let encryptedUserText = userText.value;
    let arrayEncryptedWords = encryptedUserText.split(' ');
    let arrayOfDecryptedWords = [];
    for (let i = 0; i < arrayEncryptedWords.length; i++) {
        while (arrayEncryptedWords[i].includes("enter") || arrayEncryptedWords[i].includes("ober") || arrayEncryptedWords[i].includes("ai") || arrayEncryptedWords[i].includes("ufat") || arrayEncryptedWords[i].includes("imes")) {
            arrayEncryptedWords[i] = getEncryptedVowels(arrayEncryptedWords[i]);
        }
        arrayOfDecryptedWords.push(arrayEncryptedWords[i]);
    }
    let decryptedSentence = arrayOfDecryptedWords.join(' ')
    outputText += decryptedSentence;
    document.getElementById("output").innerHTML = outputText;
    document.getElementById("output").value = outputText;
    input.focus();
}


function copy() {
    let textoc = document.getElementById("output").value;
    console.log(textoc);
    document.getElementById("text-to-change").value = textoc;

}

let anchorWhatsapp = document.getElementById("share-to-whatsapp");
anchorWhatsapp.addEventListener("click", function(event) {
    let encryptedText = document.getElementById("output").value;
    if (encryptedText == undefined  && encryptedText == "Ningún mensaje fue encontrado") {
        console.log("entre aqui");
        let alertMessage = document.getElementById("share-description");
        alertMessage.innerHTML = "Aún no encriptas nada";
    }
    else {
        console.log(encryptedText);
        anchorWhatsapp.setAttribute('href', `https://wa.me/?text=${encryptedText}`);
    }
});


