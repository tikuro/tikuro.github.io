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
  //Declaracion de variables para recibir los elementos que estamos solicitando 
    var selectValue = document.getElementById("selector_proyectos").value;
    var div = document.getElementById("PowerBI");
    var clave = document.getElementById("clave").value


    

        if(selectValue=="proyecto1" && clave=="123"){
            document.getElementById("PowerBI").style.display="block";
            document.getElementById("PowerBI1").style.display="none";
          }
          else if(selectValue=="powerapps"){
            document.getElementById("PowerApps").style.display="block";
            document.getElementById("PowerBI").style.display="none";
            document.getElementById("PowerBI1").style.display="none";
          }
          else{
          alert("clave incorrecta")
          } 

 }
        
