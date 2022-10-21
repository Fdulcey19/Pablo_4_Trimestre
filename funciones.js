// Estructura IF
function edad(){
const edadDelUsuario = parseInt(document.getElementById('edad').value);
        if(edadDelUsuario >= 18){
            alert("Eres mayor de edad");
        }else if(edadDelUsuario >0 && edadDelUsuario<18){
            alert("Eres menor de edad");
        }
}
function mayor(){
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    if(numero1 > numero2){
                alert(numero1 + ' Es mayor que '+numero2);
            }if(numero1 < numero2){
                alert(numero1 + ' Es menor que '+numero2);
            }
            else{
                alert(numero1 + ' y '+numero2+' son iguales');
            }
    }

function pares(){
    var numero = parseInt(document.getElementById('par').value);
    
    if(numero%2==0){
        
        alert("El número "+numero+" es par");
        
    }else{
        
        alert("El número "+numero+" es impar");
        
    }
}

//Condicional switch

function frutas_precio(){
    var expr = document.getElementById("frutas").value;
    switch (expr) {
        case 'Naranjas':
        case 'Naranja':
        console.log('El kilogramo de naranjas cuesta $0.59.');
        break;
        case 'Manzanas':
        console.log('El kilogramo de manzanas cuesta $0.32.');
        break;
        case 'Platanos':
        console.log('El kilogramo de platanos cuesta $0.48.');
        break;
        case 'Cerezas':
        console.log('El kilogramo de cerezas cuesta $3.00.');
        break;
        case 'Mangos':
        case 'Papayas':
        console.log('El kilogramo de mangos y papayas cuesta $2.79.');
        break;
        default:
        console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
    }
}
function noe(){
var Animal = document.getElementById("animal").value;
    switch (Animal) {
    case 'Vaca':
    case 'Jirafa':
    case 'Perro':
    case 'Cerdo':
        console.log('Este animal subirá al Arca de Noé.');
        break;
    case 'Dinosaurio':
    default:
        console.log('Este animal no subira');
    }
}

function secuencia4(){
var foo = parseInt(document.getElementById('foo').value);
var output = 'Salida: ';
    switch (foo) {
    case 10:
        output += '¿Y ';
    case 1:
        output += 'Cuál ';
        output += 'Es ';
    case 2:
        output += 'Tu ';
    case 3:
        output += 'Nombre';
    case 4:
        output += '?';
        console.log(output);
        break;
    case 5:
        output += '!';
        console.log(output);
        break;
    default:
        console.log('Por favor, selecciona un valor del 1 al 6.');
    }
}
//Estructura For

function secuencia(){
    var numeros=[];

    for(var i=0;i<=10;i++){
        numeros.push(i);
    }
    document.getElementById("mostrar-secuencia").innerHTML=numeros;
}
function secuencia2(){
    var numeros=[];
    var numero_final=parseInt(document.getElementById('numero_final').value);
    for(var i=0;i<=numero_final;i++){
        numeros.push(i);
    }
    document.getElementById("mostrar-secuencia2").innerHTML=numeros;
}
function secuencia3(){

    var numero_tabla=parseInt(document.getElementById('numero_tabla').value);

    for(var i=0;i<=10;i++){
        var resultado=(numero_tabla*i);
        console.log(numero_tabla+" * "+i + " = "+resultado);
    }
}


function secuencia1w(){
    var i=0;
    var numeros=[];
    while(i<=10){
        numeros.push(i);
        i++;
    }
    console.log(numeros);
}

function secuencia2w(){
    var i=0;
    var numeros=[];
    var limite=parseInt(document.getElementById("limite").value);

    while(i<=limite){
        numeros.push(i);
        i++;
    }
    console.log(numeros);
}
function secuencia3w(){
    var i=0;
    var numeros=[];
    var limite=parseInt(document.getElementById("tabla").value);

    while(i<=10){
        var resultado=(limite*i);
        console.log(limite + "*"+ i +" = "+ resultado);
        i++;
    }
}
