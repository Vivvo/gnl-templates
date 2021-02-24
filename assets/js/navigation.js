$(document).ready(function () {

    var Keys = {
        Enter: 13,
        Esc: 27,
        Space: 32
    };

    var eventKey = null;
    var lgScreenWidth = 991.99;

    function displayDrawerMenuButton(navType) {

        if ($(window).width() < lgScreenWidth) {
            $(navType.children('.gnl-navigation__nav')).hide();
            $('.gnl-navigation-drawer__button-container').css("display", "flex");
        } else {
            $('.gnl-navigation-drawer__button-container').hide();
            $(navType.children('.gnl-navigation__nav')).css("display", "flex");
        }
    }

    function openDrawer(navID) {
        $(navID).removeAttr('hidden');
        $(navID).addClass('gnl-navigation-drawer--open');
        $(navID).children('.gnl-navigation-drawer__content').addClass('gnl-navigation-drawer__content--open');
        $(navID).children('.gnl-navigation-drawer__scrim').fadeIn();
        $('body').css("overflow", "hidden");

        window.dispatchEvent(new Event('gnl-drawer-open'));
    }

    function closeDrawer(navID) {
        $('body').css("overflow", "visible");
        $(navID).children('.gnl-navigation-drawer__scrim').fadeOut().delay();
        $(navID).children('.gnl-navigation-drawer__content').removeClass('gnl-navigation-drawer__content--open');
        $(navID).removeClass('gnl-navigation-drawer--open');
        $(navID).attr('hidden');

        window.dispatchEvent(new Event('gnl-drawer-close'));
    }

    $(window).resize(function () {
        if ($('.gnl-navigation__nav')) {
            displayDrawerMenuButton($('.gnl-navigation__nav').parent());
        }
    });

    $('.gnl-navigate-back').click(function () {
        parent.history.back();
        return false;
    });

    if ($('.gnl-navigation__nav')) {
        var navClassParent = $('.gnl-navigation__nav').parent();
        var navID = "#";

        if (navClassParent.hasClass('gnl-navigation--header')) {

            $('.gnl-navigation__nav .gnl-navigation__nav-item:last-child').hide();
        }

        $('.gnl-header__container').css("flex-direction", "row");
        $('.gnl-navigation-drawer__scrim').attr('onclick', '');
        displayDrawerMenuButton(navClassParent);

        $('.gnl-navigation-drawer__button')
            .on('click', function (event) {
                navID = "#" + $(event.target).parent().parent().parent().parent().next().attr('id');
                openDrawer(navID)
            })
            .on('keyup', function (event) {
                eventKey = KeyboardEvent.keyCode || event.keyCode;
                if ($('.gnl-navigation-drawer__scrim').is(':visible')) {
                    if (eventKey === Keys.Esc || eventKey === Keys.Space || eventKey === Keys.Enter) {
                        event.preventDefault();
                        closeDrawer(navID);
                    }
                } else if (eventKey === Keys.Space || eventKey === Keys.Enter) {
                    navID = "#" + $(event.target).parent().parent().parent().next().attr('id');
                    openDrawer(navID);
                }
            });

        $(document).on('click', function (event) {
            if ($('.gnl-navigation-drawer__scrim').is(':visible') && $('.gnl-navigation-drawer__scrim').is(event.target)) {
                    closeDrawer(navID);
                }
        }).on('keyup', function (event) {
            eventKey = KeyboardEvent.keyCode || event.keyCode;
            if ((eventKey === Keys.Esc) && $('.gnl-navigation-drawer__scrim').is(':visible')) {
                    closeDrawer(navID);
            }
        });
    }
});