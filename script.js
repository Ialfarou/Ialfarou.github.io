const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar (stringEncriptada) {
let matrixCode = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();

for(let i = 0; i < matrixCode.length; i++){
    if(stringEncriptada.includes(matrixCode[i][0])){
        stringEncriptada = stringEncriptada.replaceAll (matrixCode [i][0], matrixCode[i][1])
    }
}
return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
   
}


function desencriptar (stringDesencriptada) {
    let matrixCode = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < matrixCode.length; i++){
        if(stringDesencriptada.includes(matrixCode[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll (matrixCode [i][1], matrixCode[i][0])
        }
    }
    return stringDesencriptada
    }



//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"