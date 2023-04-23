
//creamos un objeto para el proceso de encriptar al cual accedemos a su valor por medio de la clave.
const encriptar = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};
//creamos un objeto para el proceso de desencriptar al cual accedemos a su valor por medio de la clave.
const desencriptar = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u'
}

//Creamos un arreglo que contiene los dos objetos. Con encripDesencrip[0] seleccionamos el objeto encritar y con de encripDesencrip[1] seleccionamos el objeto desencriptar.
const encripDesencrip = [encriptar, desencriptar];

//Creamos un arreglo que contiene las dos expresiones regulares a utilizar, las cuales contienen las claves para encriptar expresionBusqueda[0] ='[aeiou]' y desencriptar expresionBusqueda[1] ='(ai|enter|imes|ober|ufat)'. 
const expresionBusqueda = ['[aeiou]', '(ai|enter|imes|ober|ufat)'];

//funcion que realiza la operacion de encriptar o desencriptar. Recibe tres parametro "palabra" que es la palabra a encriptar/desencriptar,"selecExpresion" que selecciona si se encripta(0) o desencripta(1) y "objEncDesenc" que es el arreglo que contiene los dos objetos para encriptar o desencriptar.
const encriptDescript = (palabra, selecExpresion, objEncDesenc) => {
    //Seleccionamos por medio de "selecExpresion" si se encripta (selecExpresion=0) o se desencripta (selecExpresion=1).
    objEncDesenc = encripDesencrip[selecExpresion];
    //Seleccionamos por medio de "selecExpresion" la expresion regular a buscar para remplazar. con selecExpresion=0 escojemos [aeiou] y con selecExpresion=1 escojemos (ai|enter|imes|ober|ufat)
    const pattern = expresionBusqueda[selecExpresion];
    //Formamos la expresion regular
    const regex = new RegExp(pattern, "g");
    //Con el metodo replace() realizamos la sustitucion.
    return palabra.replace(regex, key => objEncDesenc[key]);
}
//Determinamos la resolución del dispositivo.
let anchoPantalla = screen.width;
let altoPantalla = screen.height;

// almacenamos los elementos necesarios en variables javascript.
let inputEncrip = document.querySelector('#entrada');
let inputDesencript = document.querySelector('#salida');
let parrafo = document.querySelector('#parrafos');
let contenedorPrincipal = document.querySelector('#principal');
let botonEncrip = document.querySelector('#btEnc');
let botonDesencript = document.querySelector('#btDesenc');
let botonCopiar = document.querySelector('#btCopiar');
let munieco = document.querySelector('#imagen')
// Eleminamos la imagien del muñeco en caso la resolucion sea menor de 960.
if (anchoPantalla <= 960) {
    munieco.remove();
}

//Funcion manejadora de botones encripta y desencripta
function codi() {
    let valor = inputEncrip.value;
    //Determina si se hecho click sin introducir ningun caracter o solo se han introducido espacios en blanco.
    if (/^(null|\s*)$/.test(valor)) {
        alert("Introduzca un texto");
        //determina si solo se han introducido minuscalas sin espacios en blanco.    
    } else if (/^[a-z\s]+$/.test(valor)) {
        const palabra = valor;
        inputDesencript.style.visibility = 'visible';
        inputDesencript.style.outline = 'none';
        inputDesencript.style.border = 'none';
        inputDesencript.style.height = '40%';
        botonCopiar.style.visibility = 'visible';
        parrafo.style.visibility = 'hidden';
        munieco.style.display = 'none';
        if (anchoPantalla <= 960)
         { botonCopiar.style.height = '7vh';
            parrafo.remove();
            if (anchoPantalla <= 600) {
                botonCopiar.style.height = '6vh';
                inputDesencript.style.height = '60%';
            }
        }


        if (this.id == 'btEnc') {
            inputDesencript.value = encriptDescript(palabra, 0, encripDesencrip);
        } else if (this.id == 'btDesenc') {
            inputDesencript.value = encriptDescript(palabra, 1, encripDesencrip);
        }
        //Algun caracter diferente de minuscalas o espacios en blanco
    } else { alert('Solo minusculas sin acentos') }
}


//Pasa el texto de salida a la entrada limpiando la salida.
function copiar() {
    inputEncrip.value = inputDesencript.value;
    inputDesencript.value = " ";
    return false;
}

//ponemos a la escucha los botones.
botonEncrip.addEventListener('click', codi);
botonDesencript.addEventListener('click', codi);
botonCopiar.addEventListener('click', copiar);