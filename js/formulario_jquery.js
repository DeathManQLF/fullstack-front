$(function () {
    $("#formularioPizza").submit(function (e) {
        if ($("#nombre").val().length < 1) {
            $("#nRojo").css("color", "red");
            e.preventDefault();
        } if ($("#apellido").val().length < 1) {
            $("#aRojo").css("color", "red")
            e.preventDefault();
        }
    });
});

$("#tamaño").on('change', function () {
    tamaño = $(this).val();
    $.ajax({
        url: 'http://localhost:5000/checksize',
        method: 'POST',
        success: function () {
            if (tamaño == 'M' | tamaño == 'L' | tamaño == 'XXL') {
                $('#resultado_tamaño').append('Disponible')
            } else if (tamaño == 'S') {
                $('#resultado_tamaño').append('No Disponible')
            }
        }
    });
});
