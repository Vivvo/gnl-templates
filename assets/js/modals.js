$(document).ready(function () {

    $('.gnl-automodal').hide();

    $('.gnl-automodal').each(function() {
        var modal = this;

        var launcherType = $(modal).data('gnlAutomodalLauncherType') || 'link';
        var launcherText = $(modal).data('gnlAutomodalLauncherText') || '';
        var launcherCss = $(modal).data('gnlAutomodalLauncherCss') || '';
        var prefixTag = $(modal).data('gnlAutomodalLauncherPrefixTag') || 'span';
        var prefixText = $(modal).data('gnlAutomodalLauncherPrefix') || '';
        var prefixCss = $(modal).data('gnlAutomodalLauncherPrefixCss') || '';

        if (launcherType && launcherText) {

            if (prefixText) {
                $(modal).before(
                    '<' + prefixTag + (prefixCss ? ' class="' + prefixCss + '"' : '') + '>' +
                    prefixText + '</' + prefixTag + '> ');
            }

            var launcher;
            
            if (launcherType === 'button') {
                launcher = $('<button type="button" class="gnl-button ' + launcherCss + '">' + launcherText + '</button>');
            }
            else {
                launcher = $('<a href="#" class="gnl-launcher ' + launcherCss + '">' + launcherText + '</a>');
            }

            $(launcher).on('click', function (ev) {
                ev.preventDefault();
                $(modal).modal();
                return false;
            });

            $(modal).before(launcher);

            var title = $('.gnl-automodal__title', modal);
            var body = $('.gnl-automodal__body', modal);

            $(modal)
                .removeClass('gnl-automodal')
                .addClass('gnl-modal')
                .addClass('modal')
                .addClass('fade')
                .attr('tabindex', '-1')
                .attr('role', 'dialog')
                .attr('aria-hidden', 'true')
                .attr('aria-labelledby', $(title)[0].id)
                .html(
                    '<div class="modal-dialog" role="document">' +
                        '<div class="modal-content">' +
                            '<div class="modal-header">' +
                                $(title).removeClass('gnl-automodal__title').addClass('modal-title')[0].outerHTML +
                                '<button type="button" class="gnl-button close" data-dismiss="modal" aria-label="Close">' +
                                '<span aria-hidden="true" class="gnl-icon material-icons">close</span></button>' +
                            '</div>' +
                            $(body).removeClass('gnl-automodal__body').addClass('modal-body')[0].outerHTML +
                            '<div class="modal-footer">' +
                                '<a class="gnl-button gnl-button--link" href="#" data-dismiss="modal">' +
                                '<span class="gnl-icon material-icons">chevron_left</span> Close</a>' +
                            '</div>' +
                        '</div>' +
                    '</div>');
        }
    });
});