$(".fecha").pickadate({
    format: "dd/mmmm/yyyy"
});

$("#btnObtener").on("click", function() {
    var valor = $(".fecha").val();

    console.log(valor);
})