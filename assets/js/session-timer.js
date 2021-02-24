$(document).ready(function () {

    var srcElement = $('html').data('sessionTimerSrcElement') || 'html';

    var pingUrl = $(srcElement).data('sessionTimerPingUrl');
    var buttonUrl = $(srcElement).data('sessionTimerButtonUrl');
    var buttonText = $(srcElement).data('sessionTimerButtonText');

    var redirectUrl = $(srcElement).data('sessionTimerRedirectUrl');
    var redirectSecs = $(srcElement).data('sessionTimerRedirectSeconds');

    if (!redirectSecs || isNaN(redirectSecs)) {
        redirectSecs = 15;
    }

    var selfReg = $(srcElement).data('selfRegistration');

    var timeoutMins;
    var warningSecs;
    var warningAfter;
    var expireAfter;
    var countdown;
    var sessionTimer;

    if (srcElement) {
        setup();
    }

    function setup() {
        timeoutMins = $(srcElement).data('sessionTimerExpiryMinutes');

        if (!isNaN(timeoutMins) && timeoutMins > 0) {
            warningSecs = $(srcElement).data('sessionTimerWarningSeconds') || 30;

            if (!isNaN(warningSecs) && (timeoutMins * 60) - warningSecs > 0) {
                var now = Date.now();
                expireAfter = now + timeoutMins * 60000;
                warningAfter = expireAfter - warningSecs * 1000;

                doTickTock();
            }
        }
    }

    function doTickTock() {
        if (sessionTimer) {
            clearTimeout(sessionTimer);
        }

        var now = Date.now();

        if (now >= expireAfter) {
            doSessionTimeout();

            sessionTimer = setTimeout(doRedirect, redirectSecs * 1000);
        }
        else {
            if (countdown) {
                updateWarning();
            }
            else if (now >= warningAfter) {
                createWarning();
            }

            sessionTimer = setTimeout(doTickTock, 1000);
        }
    }

    function doRedirect() {
        if (redirectUrl) {
            window.location = redirectUrl;
        }
    }

    function createModal() {
        $('body').append(
            '<div class="modal fade" id="timeoutModal" tabindex="-1" role="dialog" aria-labelledby="timeoutModalLabel" aria-hidden="true">' +
            ' <div class="modal-dialog" role="document">' +
            '  <div class="modal-content">' +
            '   <section class="gnl-text-center">' +
            '    <div class="material-icons gnl-icon--round gnl-icon--warning gnl-icon--xl"></div>' +
            '    <h4 class="gnl-header-4" id="timeoutModalLabel"></h4>' +
            '   </section>' +
            '   <div id="timeoutBody" class="gnl-text-center modal-body"></div>' +
            '   <div id="timeoutFooter" class="gnl-text-center"></div> ' +
            '  </div>' +
            ' </div>' +
            '</div>');
    }

    function createWarning() {
        countdown = warningSecs;

        createModal();

        $('#timeoutModalLabel').text('Your session is about to time out');
        $('#timeoutBody').html('Your session will time out in <span id="timeoutCounter"></span>.');

        if (pingUrl) {
            $('#timeoutModal').attr('data-backdrop', 'static');
            $('#timeoutModal').attr('data-keyboard', 'false');

            $('#timeoutFooter').html(
                '<div class="gnl-divider gnl-divider--regular">' +
                ' <button id="timeoutButton" class="gnl-button gnl-button--contained gnl-click-wait">Extend session</button>' +
                '</div>');

            $('#timeoutButton').focus().click(extendSession);
        }

        updateWarning();

        $('#timeoutModal').modal('show');
    }

    function updateWarning() {
        $('#timeoutCounter').text(countdown + ' second' + (countdown === 1 ? '' : 's'));
        countdown--;
    }

    function doSessionTimeout() {
        window.sessionStorage.clear();

        if ($('#timeoutModal').length === 0) {
            createModal();
        }

        $('#timeoutModal').attr('data-backdrop', 'static');
        $('#timeoutModal').attr('data-keyboard', 'false');
        $('#timeoutModalLabel').text('Your session has timed out');

        var bodyText = 'Your session has timed out after ' + timeoutMins + ' minute' + (timeoutMins === 1 ? '' : 's') + ' of inactivity.';

        if (selfReg) {
            buttonUrl = buttonUrl || '/';
            buttonText = buttonText || 'Restart registration';
            bodyText += ' If you wish to restart the registration process, click "Restart registration" below.';
        }

        buttonText = buttonText || 'Sign in';

        if (buttonUrl) {
            $('#timeoutFooter').html(
                '<div class="gnl-divider gnl-divider--regular">' +
                ' <a href="' + buttonUrl + '" class="gnl-button gnl-button--contained">' + buttonText + '</a>' +
                '</div>');
        }
        else {
            $('#timeoutFooter').html(
                $('<div/>', { id: "timeoutLogoutForm", class: "gnl-divider gnl-divider--regular" }).html(
                    $('<form/>', { action: "/logout", method: "post" })
                        .append($('input[name="__RequestVerificationToken"]', '#logout-form'))
                        .append($('<button/>', { class: "gnl-button gnl-button--contained" }).text(buttonText))));
        }

        $('#timeoutBody').text(bodyText);

        $('#timeoutModal').modal('show');
    }

    function extendSession() {
        if (sessionTimer) {
            clearTimeout(sessionTimer);
        }

        $.ajax({
            type: 'POST',
            url: pingUrl,
            success: function (data, status, xhr) {
                $('#timeoutModal').modal('hide');
                setup();
            },
            error: function (xhr, status, err) {
                doTickTock();
            }
        });
    }
});