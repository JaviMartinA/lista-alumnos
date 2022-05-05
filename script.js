function sacarLista(){
var alumno=["Javier Martín", "Iván González", "Javier Sánchez", "Sergio Camino", "Astrid Carolina Cruces", "Javier Gutiérrez", "Javier Villalobos","Alberto Carlos Díaz","Johan Estiben Ácaro","Jose Javier Álamo","Juan del Campo","Daniel Fernández","Iker Gómez","Diego Gómez","Juan Sebastián González","John Bryan Leines","Ángel López","Mario Luquero","Rafael Martínez","Isla Peinado","Juan Marcial Portilla","Victor Sánchez","Adrián Tauste","Mario Valverde","David Valverde"];
var numero= prompt("¿Cuántos alumnos por grupo?",4);//El ejercicio dice grupos de 4, pongo de valor predeterminado el 4 pero con este metodo añadimos el numero de alumnos/grupo que queramos
var random=alumno.sort(()=>Math.random()-0.5);
var numero_grupos=Math.ceil(alumno.length/numero);
let tabla=document.getElementById("tabla");
let i=0;
    for(k=1;k<=numero_grupos;k++){
        tabla.innerHTML+=
        `<th>Grupo ${k}</th>`
        for (j=0;j<numero;j++){
            if(random[i]!==undefined){
                tabla.innerHTML+=
                `<td>${random[i]}</td>`
                i++;
            }else{
                break;
            }
        } 
    }
    document.getElementById("tabla").style.animation = "resplandor 2s";
    crear();
    function crear(){
        var boton=document.getElementById("boton");
        boton.innerHTML+='<input class="btn btn-outline-secondary" type="button" value="Mostrar Creditos" onclick="creditos()">';
    }
}
function creditos(){
    var creditos=document.getElementById("creditos");
       creditos.innerHTML+= 
       `<ul>Javier Martín Arroyo</ul>
        <ul>Desarrollador de Aplicaciones Multiplataforma</ul>
        <ul>Correo Electrónico: marroyojavier@gmail.com</ul>
        <ul>Teléfono:633957979</ul>
        <ul><a href="https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=8791302244575683916" target="blank">Infojobs</a></ul>
        <ul><a href="https://github.com/JaviMartinA" target="blank">Github</a></ul>
        <ul><a href="https://www.linkedin.com/in/javier-mart%C3%ADn-arroyo-387960225/" target="blank">Linkedin</a></ul>`
        document.getElementById("creditos").style.animation = "resplandor 2s";
}
