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
            document.getElementById("Time").style.display="block";
            document.getElementById("Perfomance").style.display="block";
            document.getElementById("Disclaimer").style.display="block";
            document.getElementById("titulo").style.display="block";
          }
          else if(selectValue=="powerapps"){
            document.getElementById("PowerApps").style.display="block";
            document.getElementById("PowerBI").style.display="none";
            document.getElementById("PowerBI1").style.display="none";
          }
          else{
          alert("clave incorrecta, intente de nuevo por favor")
          } 

 }

 function getListItems(listName, success, failure) {
  var requestUri = _spPageContextInfo.webAbsoluteUrl +
                   "/_api/web/lists/getbytitle('" + 'ProjectProgresReportSummary' + "')/items";
  $.ajax({
    url: requestUri,
    method: "GET",
    headers: { "Accept": "application/json; odata=verbose" },
    success: function (data) {
      success(data.d.results);
      alert("exito");
    },
    error: function (data) {
      failure(data);
      alert("error");
    }
  });
}

function printDiv(main) {
  var contenido= document.getElementById(main).innerHTML;
  var contenidoOriginal= document.body.innerHTML;
  
  document.body.innerHTML = contenido;

  window.print();

  document.body.innerHTML = contenidoOriginal;
}

function ocultarClase() {
var elementos_lateral = document.getElementsByClassName("sidebar-sticky");
var elementos_header = document.getElementsByClassName("h2");
var elementos_botones = document.getElementsByClassName("btn-group mr-2"); 
for (var i=0; i<elementos_lateral.length; i++){
    elementos_lateral[i].style.display="none";
  };
for (var i=0; i<elementos_header.length; i++){
    elementos_header[i].style.display="none";
  };
for (var i=0; i<elementos_botones.length; i++){
    elementos_botones[i].style.display="none";
  };
document.getElementById("clave").style.display="none";
document.getElementById("selector_proyectos").style.display="none"      
window.print();
}