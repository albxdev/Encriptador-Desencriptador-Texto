const textArea = document.querySelector(".text-input");
const message = document.querySelector(".message");


function btnEncriptador(){
    const textoEncriptado = encriptar(textArea.value)
    message.value = textoEncriptado
    textArea.value = "";
    message.style.backgroundImage = "none"

}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){           
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        
        }   
    }
    return stringEncriptada
}


function btnDesencriptador(){
    const textoDesencriptado = desencriptar(textArea.value)
    message.value = textoDesencriptado
    textArea.value = "";

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){           
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        
        }   
    }
    return stringDesencriptada
}


// Función para copiar el texto al portapapeles
function copyToClipboard() {
    // Obtener el elemento del área de texto
    const messageElement = document.querySelector('.message');
    
    // Seleccionar el texto del área de texto
    messageElement.select();
    messageElement.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand('copy');
    
    // Opcional: Notificar al usuario que el texto ha sido copiado
    alert('Texto copiado al portapapeles!');
}

// Añadir un evento click al botón de copiar después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copy');
    if (copyButton) {
        copyButton.addEventListener('click', copyToClipboard);
    }
});
