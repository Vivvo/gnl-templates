// TODO: this should be removed when the Gnl.Dbd.AspNetCore.Validation.EqualToValueOfAttribute class is deleted.
(function ($) {
    $.validator.addMethod(
        'equaltovalueof',
        function (value, element, propId) {
            if (!this.optional(element)) {
                var otherProp = $('#' + propId);
                return otherProp.val() === value;
            }
            return true;
        });

    $.validator.unobtrusive.adapters.addSingleVal('equaltovalueof', 'prop');
}(jQuery));