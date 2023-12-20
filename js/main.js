// document.getElementById("FormularioPizza").addEventListener("submit", function (event) {

//     var nombre = document.getElementById("nombre");
//     var apellidos = document.getElementById("apellidos");

//     var labels = document.querySelectorAll('label[for="nombre"], label[for="apellidos"]');

//     if (nombre.value == "") {
//         labels.forEach(function (label) {
//             if (label.getAttribute("for") === "nombre") {
//                 label.style.color = "red"; // Aplica el color rojo solo al campo de nombre vacío
//             }
//         });
//         event.preventDefault();
//     }

//     if (apellidos.value == "") {
//         labels.forEach(function (label) {
//             if (label.getAttribute("for") === "apellidos") {
//                 label.style.color = "red"; // Aplica el color rojo solo al campo de apellidos vacío
//             }
//         });
//         event.preventDefault();
//     }

//     });

$(document).ready(function () {
    $("#FormularioPizza").submit(function (event) {
      
        var nombre = $("#nombre").val();

        if (nombre === "") {
            alert("Debe introducir un valor en el campo del nombre.");
            $("label[for='nombre']").css("color", "red");
            event.preventDefault(); 
        } else {
            $("label[for='nombre']").css("color", ""); 
        }

        var apellidos = $("#apellidos").val();
        
        if (apellidos === "") {
            alert("Debe introducir un valor en el campo de los apellidos.");
            $("label[for='apellidos']").css("color", "red");
            event.preventDefault(); 
        } else {
            $("label[for='apellidos']").css("color", ""); 
        }
    });
});

//Solicitud Onchange & AJAX

$("#tamano").on('change', function() {
    console.log(this.value);
    tamano = this.value;
    
    $.ajax({
        type: "POST",
        url: "http://localhost:5000/checksize",
        data: { size: tamano },
        success: function(response) {
            $('#resultado_tamano').text(response);
        }, 
    });
});
