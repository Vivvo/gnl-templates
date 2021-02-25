$(document).ready(function () {
    function formatLocal(number) {
        return number.replace(/^(\d{3})(\d{4})$/, "$1-$2");
    }

    $('.gnl-form-control--phone').on('change', function () {
        var val = $(this).val();

        val = val.replace(/\D/g, '');

        if (val.length === 7) {
            $(this).val('709-' + formatLocal(val));
        }
        else if (val.length === 10) {
            $(this).val(val.substring(0, 3) + '-' + formatLocal(val.substring(3)));
        }
    });
});