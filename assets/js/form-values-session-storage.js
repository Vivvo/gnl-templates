$(document).ready(function () {

    function getId(el) {
        return $(el)[0].id;
    }

    $('form[data-restore-from-session-key]').each(function () {
        var frm = this;
        var key = $(frm).data('restore-from-session-key');

        var data = JSON.parse(window.sessionStorage.getItem(key));

        if (data) {
            $(':input', frm).each(function () {
                var el = this;

                var id = getId(el);

                if (id && data[id]) {
                    if (data[id] == 'checked') {
                        $(el).attr('checked', 'checked');
                    } else {
                        $(el).val(data[id]);
                    } 
                }
            });
        }

        window.sessionStorage.removeItem(key);
    });

    $('[data-save-to-session-key]').each(function () {
        var el = this;

        $(el).on('click', function () {
            var key = $(el).data('save-to-session-key');
            var frm = $('form[data-restore-from-session-key]');
            var data = {};

            $(':input', frm).each(function () {
                var ipt = this;

                var id = getId(ipt);

                if (id) {
                    if ($(ipt).is(':checked')) {
                        data[id] = 'checked';
                    } else {
                        data[id] = $(ipt).val();
                    }
                }
            });

            window.sessionStorage.setItem(key, JSON.stringify(data));
        });
    });

    $('[data-clear-session-key]').each(function () {
        var el = this;

        $(el).on('click', function () {
            var key = $(el).data('clear-session-key');
            window.sessionStorage.removeItem(key);
        });
    });

    $('[data-purge-session-key]').each(function () {
        var key = $(this).data('purge-session-key');
        window.sessionStorage.removeItem(key);
    });

    $('[data-purge-session]').click(function () {
        window.sessionStorage.clear();
    });
});