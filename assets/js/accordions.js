$(document).ready(function () {

    if ($('.gnl-accordion')) {

        $('.gnl-accordion__container').addClass('gnl-accordion__container--collapsed');
        $('.gnl-accordion__heading').attr('tabIndex', 0);
        $('.gnl-accordion__heading').css('cursor', 'pointer');
        $('.gnl-icon--toggle').show();

        $('.gnl-accordion').on('click', '.gnl-accordion__heading', function (event) {
            accordionControl(event);
        }).on('keypress keydown', '.gnl-accordion__heading', function (event) {
            accordionControl(event);
        });
    }
});

function accordionIsCollapsed(panel) {
    return $(panel).hasClass('gnl-accordion__container--collapsed');
}

function accordionControl(event) {

    var heading = $(event.target);
    var panel = $(heading).parent();
    var body = $('.gnl-accordion__body', panel);
    var animating = false;
    var validEvent = false;

    if ((event.type === 'keydown' && (event.key === ' ' || event.key === 'Enter'))) {
        event.preventDefault();
        validEvent = true;
    } else if (event.type === 'click') {
        validEvent = true;
    }

    if (validEvent) {
        if (!animating) {
            animating = true;
            if (accordionIsCollapsed(panel)) {
                if (!$(panel).closest('.gnl-accordion').hasClass('gnl-accordion--expand-multiple')) {
                    $('.gnl-accordion__container').each(function () {
                        $('.gnl-icon--toggle').removeClass('gnl-icon--toggle--expanded').addClass('gnl-icon--toggle--collapsed');
                        $('.gnl-accordion__body').slideUp(function () {
                            $('.gnl-accordion__container').removeClass('gnl-accordion__container--expanded').addClass('gnl-accordion__container--collapsed');
                        });
                    });
                }

                $('.gnl-icon--toggle', heading).addClass('gnl-icon--toggle--expanded').removeClass('gnl-icon--toggle--collapsed');

                $(body).stop(true, false).slideDown(function () {
                    $(panel).removeClass('gnl-accordion__container--collapsed').addClass('gnl-accordion__container--expanded');
                });
            }
            else {
                $('.gnl-icon--toggle', heading).removeClass('gnl-icon--toggle--expanded').addClass('gnl-icon--toggle--collapsed');
                $(body).slideUp(function () {
                    $(panel).removeClass('gnl-accordion__container--expanded').addClass('gnl-accordion__container--collapsed');
                });
            }
            animating = false;
        }
    }
}
