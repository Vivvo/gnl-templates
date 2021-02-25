(function ($) {
    $.validator.addMethod(
        'mustbechecked',
        function (value, element, propId) {
            return element.checked;
        });

    $.validator.unobtrusive.adapters.addBool('mustbechecked');
}(jQuery));