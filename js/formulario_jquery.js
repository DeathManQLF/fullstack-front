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