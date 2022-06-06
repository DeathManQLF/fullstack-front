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

$("#tamano").on('change', function () {
    tamano = $(this).val();
    $.ajax({
        url: 'http://localhost:5000/checksize',
        method: 'POST',
        success: function () {
            if (tamano == 'M' | tamano == 'L' | tamano == 'XXL') {
                $('#resultado_tamano').append('Disponible')
            } else if (tamano == 'S') {
                $('#resultado_tamano').append('No Disponible')
            }
        }
    });
});
