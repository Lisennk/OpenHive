(function() {

    var platform = 'http://176.57.214.62:8800';
    $.getJSON(platform + "/stats").done(function(data) {
        $(miners).text(data.miners);
        $(connections).text(data.connections);
    }).fail(function() {
        $(online).hide();
        $(offline).show();
    })


})();