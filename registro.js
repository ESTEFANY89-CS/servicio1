function salida(){
    alert('Hola, tu registro ha sido exitoso');
}
function sali(){
    alert('Inicio de Sesion, Exitosa');
}

    function Men(){
        var nombre;
        var apellido;
        var edad;
        nombre=window.prompt('ingrese nombre');
        apellido=window.prompt('ingrese apellido');
        edad=parseInt(prompt('ingresa tu edad'));
    
        if(edad >= 18){
            alert('Hola' +" "+ nombre +" "+ apellido +' te damos la bienvenida a Almacenes E&M y puedes accerder a nuestra pagina por ser mayor de edad');
        }
        else{
            alert('Hola' +" "+ nombre +" "+ apellido +' te informamos que no puedes accerder a nuestra pagina por ser menor de edad');
        } 
    }
     
    function compra(){
        var opcion1;
        var opcion2;
        var opcion3;

  

        opcion1=window.prompt('Ingrese la cantidad de modulos para la opcion 1');
       
        opcion2=window.prompt('Ingrese la cantidad de modulos para la opcion 2');
       
        opcion3=window.prompt('Ingrese la cantidad de modulos para la opcion 3');
        
        
        var suma=Number.parseInt(opcion1)+Number.parseInt(opcion2)+Number.parseInt(opcion3);


        alert('La suma total de modulos es ' +" "+ suma + " "+ ', la cantidad de opcion 1 es '+" "+ opcion1 +" "+',cantidad de opcion 2 es' +" "+ opcion2 + " " + 'y la cantidad de opcion 3 es' + " " + opcion3 );

    
}
     
function Inicio(){
    alert('Gracias por visitarnos, puedes registrarse gratuitamente');

}


function precio1() {
    var cantidad;
    var precio = 1000;
    var igv;
    var compra;
    var pagar;
    var resto;

    cantidad = parseInt(prompt("ingrese la cantidad a comprar: "));
    pagar = parseInt(prompt("Ingrese el monto con el que pagara: "));

    compra = precio * cantidad;
    igv = compra * 0.18;
    resto = pagar - compra;

    document.write("el monto a comprar es : " + compra + "<br>");
    document.write(" el igv por la compra es : " + igv + "<br>");
    document.write(" el resto de dinero que le queda es : " + resto);

}

function precio2() {
    var cantidad;
    var precio = 1250;
    var igv;
    var compra;
    var pagar;
    var resto;

    cantidad = parseInt(prompt("ingrese la cantidad a comprar: "));
    pagar = parseInt(prompt("Ingrese el monto con el que pagara: "));

    compra = precio * cantidad;
    igv = compra * 0.18;
    resto = pagar - compra;

    document.write("el monto a comprar es : " + compra + "<br>");
    document.write(" el igv por la compra es : " + igv + "<br>");
    document.write(" el resto de dinero que le queda es : " + resto);

}

function precio3() {
    var cantidad;
    var precio = 1500;
    var igv;
    var compra;
    var pagar;
    var resto;

    cantidad = parseInt(prompt("ingrese la cantidad a comprar: "));
    pagar = parseInt(prompt("Ingrese el monto con el que pagara: "));

    compra = precio * cantidad;
    igv = compra * 0.18;
    resto = pagar - compra;

    document.write("el monto a comprar es : " + compra + "<br>");
    document.write(" el igv por la compra es : " + igv + "<br>");
    document.write(" el resto de dinero que le queda es : " + resto);

}



// codigo Scroll 

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
   
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 8));
    }
}

buttonUp=document.getElementById("button-up");
window.onscroll= function(){
    
    var scroll = document.documentElement.scrollTop;

    if (scroll >500) {
        buttonUp.style.transform="scale(1)";

    } else if (scroll <-500) {
        buttonUp.style.transform="scale (0)";

    }
}


   