(function() {

    $.getJSON("http://" + platform + "/stats").done(function(data) {
        $(miners).text(data.miners);
        $(connections).text(data.connections);
    }).fail(function() {
        $(online).hide();
        $(offline).show();
    })


})();