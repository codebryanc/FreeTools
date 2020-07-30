$("#txtPass").complexify({}, function(valid, complexity){
    console.log(valid, complexity);

    var progressBar = $(".progress-bar");
    progressBar.css("width", complexity + "%");

    if(complexity < 30) {
        
        progressBar
            .removeClass("progress-bar-success")    
            .removeClass("progress-bar-warning")
            .addClass("progress-bar-danger");
    
    }
    else if(complexity > 30 & complexity < 50) {
        progressBar
            .removeClass("progress-bar-danger")
            .removeClass("progress-bar-success")
            .addClass("progress-bar-warning");
    }
    else if(complexity > 50) {
        progressBar
            .removeClass("progress-bar-warning")
            .removeClass("progress-bar-danger")
            .addClass("progress-bar-success");
    }

})