
var cajaRoja = $("#divCajaRoja");

// 2 es la duración en segundos

TweenMax.to(cajaRoja, 2, {
    x: '+=200',
    y: '+=50',
    ease: Elastic.easeOut
});

var cajaAzul = $("#divCajaAzul");

TweenMax.to(cajaAzul, 1.5, {
    y: '+=200',
    ease: Bounce.easeOut
});




var tl = new TimelineMax();

tl.to(cajaRoja, 4, {
                        opacity: 1,
                        width: '+=100',
                        height: '+=100'
                    }
    )
.to(cajaAzul, 6, {
                    opacity: 1,
                    width: '+=50',
                    hieght: '+=50',
                    backgroundColor: "red"
                },
    '-0.5'); // Este tiempo es un delay


setTimeout( ()=> {
    tl.pause()
}, 1000);


setTimeout( ()=> {
    tl.play()
}, 6000);



// las palabras en CSS separadas por linea como background-color => se debe anotar así => backgroudColor