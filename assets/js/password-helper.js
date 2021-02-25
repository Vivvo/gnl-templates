$(document).ready(function () {

    function addTogglePasswordIcon(pwd, group) {

        var label = $(group).find('.gnl-form-label');

        var txt = $(label).text();

        var icon = $('<div class="gnl-icon gnl-icon--visibility gnl-icon--visibility--show">&ensp;<span>Show</span></div>');

        label.css({ 'display': 'block' })
            .html(
                $('<div class="gnl-flex-container gnl-flex-container--space-between" />')
                    .append($('<span />').text(txt))
                    .append(icon));

        $(icon).on('click', function () {
            if ($(icon).hasClass('gnl-icon--visibility--show')) {
                $(icon).removeClass('gnl-icon--visibility--show')
                    .addClass('gnl-icon--visibility--hide')
                    .html('&ensp;<span>Hide</span>');
                $(pwd).attr('type', 'text');
            }
            else {
                $(icon).removeClass('gnl-icon--visibility--hide')
                    .addClass('gnl-icon--visibility--show')
                    .html('&ensp;<span>Show</span>');
                $(pwd).attr('type', 'password');
            }
        });
    }

    function addHelpTextValidation(pwd, group) {
        var helptext = $(group).find('.gnl-form-help-text');

        var minlength = $(pwd).data('val-minlength-min');

        $(pwd).on('input', function () {
            function passwordLength() {
                return $(pwd)[0].value.length;
            }

            if ($(helptext).hasClass('gnl-valid')) {
                if (passwordLength() < minlength) {
                    $(helptext).removeClass('gnl-valid');
                }
            }
            else if (passwordLength() >= minlength) {
                $(helptext).addClass('gnl-valid');
            }
        });
    }

    $('input[type="password"]').each(function () {
        var pwd = this;

        var group = $(pwd).closest('.gnl-form-group');

        addTogglePasswordIcon(pwd, group);

        addHelpTextValidation(pwd, group);
    });
});