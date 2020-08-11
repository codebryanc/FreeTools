// Nuestro código irá aquí

var arregloDePines = [];

// Funcion para agregar pines
function agregarMarcador(location) {
    if(location != undefined) {
        var nuevoPin = new google.maps.Marker({
            position: location,
            map: map,
            //animation: google.maps.Animation.DROP
        });

        console.log("Latitud: ", location.lat());
        console.log("Longitud: ", location.lng());

        for(var i in arregloDePines) {
            arregloDePines[i].setMap(null);
        }

        arregloDePines.push(nuevoPin);
    }
}

function cargar_mapa() {
    var options = {
        zoom: 6,
        center: new google.maps.LatLng(4.1117348, -76.1740669),
        mapTypeIde: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map( document.getElementById("gmap_canvas"), options);

    //Agregar listener click
    map.addListener('click', function(event) {
        console.log(event);
        agregarMarcador(event.latLng);
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng(4.1117348, -76.1740669),
        map: map,
        title: "Hola Mundo"
    })

    arregloDePines.push(pin);
}

// Cool => Se pueden hacer cosas como cargar mapa solo cuando hay Lat and long de la base de datos