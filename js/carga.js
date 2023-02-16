/* function ShowSelected()
{
 
//Para obtener el texto
var combo = document.getElementById("selector_proyectos");
var selected = combo.options[combo.selectedIndex].text;
alert(selected);
}
*/

function Boton()
{
    var selectValue = document.getElementById("selector_proyectos").value;
    var div = document.getElementById("PowerBI");
    
    switch(selectValue){
        case "proyecto1":
            document.getElementById("PowerBI").style.display="block";
            document.getElementById("PowerBI1").style.display="none";
        break;

        case "proyecto2":
            document.getElementById("PowerBI").style.display="none";
            document.getElementById("PowerBI1").style.display="block";
        break;
        




    }
    if (selectValue === "proyecto1") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  
}
