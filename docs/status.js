(function() {

    var platform = 'http://127.0.0.1:8892';
    $.getJSON(platform + "/stats").done(function(data) {
        $(miners).text(data.miners);
        $(connections).text(data.connections);
    }).fail(function() {
        $(online).hide();
        $(offline).show();
    })


})();