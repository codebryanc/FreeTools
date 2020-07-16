var self = this;
var arreglo = ['Mensajes', 'palabras', 'otras'];
var actual = 0;

function shuffle(textName) {
    $("#" + textName).shuffleLetters();
}

function shuffleWithValInput(textName, inputName) {
    $("#" + textName).shuffleLetters({
        "text": $("#" + inputName).val()
    });
}

function shuffleWithVal(textName, inputValue) {
    $("#" + textName).shuffleLetters({
        "text": inputValue
    });
}

function shuffleInputWhenPressAction(textName, inputName, action) {
    $("#" + inputName).on(action, function(e) {
        if(e.keyCode === 13) {
            self.shuffleWithValInput(textName, inputName);
        }
    })
}

setInterval(() => {
    
    if(self.actual >= arreglo.length) {
        self.actual = 0;
    }

    self.shuffleWithVal("txtMezclar", self.arreglo[self.actual]);

    self.actual++;

}, 4000);


$("#txtMezclar").text(self.arreglo[0]);
self.shuffle("txtMezclar");
self.shuffleInputWhenPressAction("txtMezclar", "txtText", "keypress");