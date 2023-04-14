
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

//Creamos un arreglo que contiene los objetos. Con encripDesencrip[0] seleccionamos el objeto encritar y con de encripDesencrip[1] seleccionamos el objeto desencriptar.
const encripDesencrip = [encriptar, desencriptar];
//Creamos un arreglo que contiene las dos expresiones regulares a utilizar, las cuales contienen las claves para encriptar expresionBusqueda[0] ='[aeiou]' y desencriptar expresionBusqueda[1] ='(ai|enter|imes|ober|ufat)'. 
const expresionBusqueda = ['[aeiou]', '(ai|enter|imes|ober|ufat)'];

//palabras a encriptar y desencriptar.
// const palabraEncrip = 'silencio';
// const palabraDesencript = 'simeslenterncimesober';

//funcion que realiza la operacion de encriptar o desencriptar. Recibe tres parametro "palabra" que es la palabra a encriptar/desencriptar,"selecExpresion" que selecciona si se encripta(0) o desencripta(1) y "objEncDesenc" que es el arreglo que contiene los dos objetos para encriptar o desencriptar.
const encriptDescript = (palabra, selecExpresion, objEncDesenc) => {
    //Seleccionamos por medio de "selecExpresion" si se encripta (selecExpresion=0) o se desencripta (selecExpresion=1).
    objEncDesenc = encripDesencrip[selecExpresion];
    //Seleccionamos por medio de "selecExpresion" la expresion regular a buscar para remplazar. con selecExpresion=0 escojemos [aeiou] y con selecExpresion=1 escojemos (ai|enter|imes|ober|ufat)
    const pattern = expresionBusqueda[selecExpresion];
    //Formamos la exprecion regular
    const regex = new RegExp(pattern, "g");
    //Con el metodo replace() realizamos la sustitucion.
    return palabra.replace(regex, key => objEncDesenc[key]);
}


// almacenamos los botones y los input en constantes javascript
const inputEncrip = document.querySelector('#enc');
const inputDesencript = document.querySelector('#des');

const botonEncrip = document.querySelector('#btenc');
const botonDesencript = document.querySelector('#btdes');



//Definimos la funcion encripta que sera llamada cuando demos click al boton encriptar, la palabra encriptada aparecera en el input desencriptar.
function encripta() {
    const palabraEncrip = inputEncrip.value;
    inputDesencript.value = '';
    inputDesencript.value = encriptDescript(palabraEncrip, 0, encripDesencrip);
};
//Definimos la funcion desEncripta que sera llamada cuando demos click al boton desencriptar, la palabra desencriptada aparecera en el input encriptar.
function desEncripta() {
    const palabraDesencript = inputDesencript.value;
    inputEncrip.value='';
    inputEncrip.value = encriptDescript(palabraDesencript, 1, encripDesencrip);
};

//ponemos a la escucha ambos botones.
botonEncrip.addEventListener('click', encripta);
botonDesencript.addEventListener('click', desEncripta);