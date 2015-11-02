var ready = function() {
    $('#create-button').click(function() {
        window.location.href = '/events/create';
    });
}

$(document).ready(ready);
$(document).on("page:load", ready);