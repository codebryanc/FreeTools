
$(document).ready(function(){ 

	// $.smallBox({
    //     title: "Hola mundo",
    //     content:"Este es el cuerpo de la notificación, ahora es posible enviar info para que el cliente la vea",
    //     fa: "fa-star-o",
    //     sound: true,
    //     color: "#6B1BA1",
    //     //timeout: 2000,

    //     buttons: ["aceptar", "cancelar"]
    // }, function(action, button) {
    //     alert(action, " ", button);
    // });


    $.metroMessageBox({
        title: "Hola mundo",
        content:"Este es el cuerpo de la notificación, ahora es posible enviar info para que el cliente la vea",
        fa: "fa-star-o",
        sound: true,
        color: "#6B1BA1",
        //timeout: 2000,
        
        buttons: ["aceptar", "cancelar"]
    }, function(action, button) {
        alert(action, " ", button);
    });


});