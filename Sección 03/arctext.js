var $texto = $("#txtArct");

$texto.arctext({
    radius: 300,
    //dir: -1
    //rotate: false
});

setInterval(() => {
    $texto.arctext('set', {
        radius: 500,
        dir: -1,
        animation: {
            speed: 300,
            easing: 'ease-out'
        }
    })
}, 300);

setInterval(() => {
    $texto.arctext('set', {
        radius: 500,
        dir: 1,
        animation: {
            speed: 300,
            easing: 'ease-out'
        }
    })
}, 500);
