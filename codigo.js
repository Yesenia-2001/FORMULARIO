
 function suma(){
    var parcial1= document.formulario.parcial1.value;
    var parcial2= document.formulario.parcial2.value;
    var parcial3= document.formulario.parcial3.value;
    var fin= document.formulario.fin.value;


    var resultado= parseInt(parcial1) + parseInt(parcial2) + parseInt(parcial3) + parseInt(fin);
    document.getElementById("sumar").innerHTML= resultado;
 }