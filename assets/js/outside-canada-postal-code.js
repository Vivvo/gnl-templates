//TODO: take this out of UI project and into MrdBundle.Web(requires change in configuration)

$(document).ready(function () {

    $('#ProvinceId').change(function () {
        var selected = $(this).val();
        if (selected === "OC") {
            $('#NewOwnerPostalCode').val("B1B1B1");
            $('#NewOwnerPostalCode').attr('readonly', true);
        } else {
            $('#NewOwnerPostalCode').val("");
            $('#NewOwnerPostalCode').attr('readonly', false);
        }
    });
});