$(document).ready(function () {

    $('.gnl-click-wait').each(function () {
        var btn = $(this);
        var btnText = btn.html();

        $(window).on("pageshow", function (ev) {
            if (ev.originalEvent.persisted) {
                btn.html(btnText);
                btn.data('clicked', false);
                btn.removeClass('gnl-click-wait-icon');
            }
        });

        btn.on('click', function (ev) {

            if (btn.data('clicked')) {
                ev.preventDefault();
                return false;
            }

            btn.data('clicked', 'true');

            setTimeout(changeText, 200);

            function changeText() {
                if ($('.input-validation-error, .field-validation-error, .password-indicator-invalid').length > 0) {
                    btn.data('clicked', null);
                    return;
                }

                var msg = btn.data('gnl-click-wait-message') || 'Please wait';
                var icon = btn.data('gnl-click-wait-icon') === false ? false : true;

                btn.html((icon ? '<span class="gnl-icon gnl-icon--spinner-button"></span> ' : '') + msg);
            }
        });
    });
});
