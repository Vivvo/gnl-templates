$(document).ready(function () {

    var inputSelections = '.gnl-button, .gnl-form-check, .gnl-form-radio, .gnl-accordion__heading, .gnl-file__input, .gnl-list-group__selection > input';

    $(document)
        .on('click mouseup mousedown', inputSelections, function (event) {
            $(event.target).addClass('gnl-outline-remove');
        })
        .on('keypress keydown keyup', inputSelections, function (event) {
            $(event.target).removeClass('gnl-outline-remove');
        });
});
