$(document).ready(function () {

    $('.gnl-file').each(function () {
        var uploader = this;

        var fileInput = $('.gnl-file__input', uploader);

        $(fileInput).addClass('gnl-file__input--masked');

        var label = $('.gnl-file__label', uploader);

        var lblcontent = $(label).html();

        $(label).html(
            '<span class="gnl-file__top"><span class="gnl-icon gnl-icon--xl gnl-file__icon material-icons">cloud_upload</span></span>' +
            '<span class="gnl-file__name">' + lblcontent + '</span>');

        $(label).detach().insertAfter(fileInput);

        if ($(fileInput).hasClass('input-validation-error')) {
            $(uploader).addClass('gnl-file--error');
        }

        var fileInputElement = $(fileInput)[0];

        $(fileInput).on('change', function () {
            if (fileInputElement.files.length > 0) {
                $('.gnl-file__name', uploader).text(fileInputElement.files[0].name);
            }
        });

        var btn = $('button[type="submit"]', $(uploader).closest('form'));

        $(btn).click(function () {
            if (fileInputElement.files.length <= 0) {
                $(uploader).addClass('gnl-file--error');
            }
        });
    });
});