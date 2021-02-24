$(document).ready(function () {

    $('input[data-gnl-valid-selection]').each(function () {
        var btn = $('button[type="submit"]', $(this).closest('form'));
        btn.attr('disabled', true);
        var isvalid = $(this).data('gnlValidSelection');

        $(this).click(function () {
            $(btn).attr('disabled', !isvalid);
        });
    });

    $(function () {
        $('.gnl-button--noscript').css('display','inline-flex');
    });

});