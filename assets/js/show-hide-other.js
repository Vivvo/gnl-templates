//TODO: take this out of UI project and into MrdBundle.Web (requires change in configuration)

$(document).ready(function () {

    $('.gnl-provider-select').each(function () {
        var selectedVal = $(this).val();
        if (selectedVal == 'Other') {
            $("#OtherProvider").show();
        }
        else {
            $("#OtherProvider").hide();
        }
    });

    $('#ProviderSelect').on('change', function () {
        var selectedVal = this.value;
        if (selectedVal == 'Other') {
            $("#OtherProvider").show();
        }
        else {
            $("#OtherProvider").hide();
        }
    });
});