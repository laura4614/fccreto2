


function palindrome(entrada) {
   
    let str = entrada.toLowerCase()
        .trim()
        .replace(/\s+/g, '')
        .replace(/[^a-zA-Z0-9+]/g, "");

    let strTamano = str.length;

    let alreves = new Array();

    for (let i = strTamano; i >= 0; i--) {
        alreves[i] = str[strTamano - i];
    }

    console.log(alreves.join(''))

    if (str === alreves.join('')) {
        return true;
    } else {
        return false;
    }
}
document.getElementById("ingresar").addEventListener("click",()=>{
 let text=  document.getElementById("text").value;
console.log(text)
 let resultado= palindrome(text);
 console.log(resultado)
 if (resultado == true ){
     alert("el texto es un polidromo")
 }else{
    alert("el texto no es un polidromo")
 }


})
