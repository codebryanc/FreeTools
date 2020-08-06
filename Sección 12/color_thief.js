
$(document).ready(() => {    
    var imagen = $("#foto");
    
    var colorThief = new ColorThief();
    colorDominante = colorThief.getColor( imagen[0] );
    
    var red = colorDominante[0];
    var green = colorDominante[1];
    var blue = colorDominante[2];

    $("#caja").css("background-color", "rgb("+ red +","+ green +","+ blue +")")
});