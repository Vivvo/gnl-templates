$(document).ready(function () {

    function isCollapsed(panel) {
        return $(panel).hasClass('gnl-expansion-panel--collapsed');
    }

    $('.gnl-expansion-panel').not('.gnl-expansion-panel--expanded').each(function () {
        var panel = this;
        $(panel).addClass('gnl-expansion-panel--collapsed');
    });

    $('.gnl-expansion-panel__summary:empty').each(function () {
        var summary = this;
        var panel = $(summary).parent();

        var linkText = $(summary).data('gnl-expansion-panel-link') || 'View details';
        var toggleClass = isCollapsed(panel) ? 'gnl-icon--toggle--collapsed' : 'gnl-icon--toggle--expanded';

        $(summary).html(
            '<div class="gnl-flex-container gnl-flex-container--space-between">' +
                '<span class="gnl-button gnl-button--link">' + linkText + '</span>' +
                '<div class="gnl-icon gnl-icon--toggle ' + toggleClass + '"></div>' +
            '</div>'
        );
    });

    $('.gnl-expansion-panel__summary').on('click', function () {
        var summary = this;
        var panel = $(summary).parent();
        var body = $('.gnl-expansion-panel__body', panel);

        if (isCollapsed(panel)) {
            $('.gnl-icon--toggle', summary).removeClass('gnl-icon--toggle--collapsed').addClass('gnl-icon--toggle--expanded').attr("aria-expanded", "true");

            $(body).slideDown(function () {
                $(panel).removeClass('gnl-expansion-panel--collapsed').addClass('gnl-expansion-panel--expanded').attr("aria-expanded", "true");
            });
        }
        else {
            $('.gnl-icon--toggle', summary).removeClass('gnl-icon--toggle--expanded').addClass('gnl-icon--toggle--collapsed').attr("aria-expanded", "false");

            $(body).slideUp(function () {
                $(panel).removeClass('gnl-expansion-panel--expanded').addClass('gnl-expansion-panel--collapsed').attr("aria-expanded", "false");
            });
        }
    });
});