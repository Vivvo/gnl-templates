$(document).ready(function () {
    function toNumber(s) {
        return s && !isNaN(s) ? s - 0 : 0;
    }

    function makeDate(year, month, day) {
        if (toNumber(year) && toNumber(month) && toNumber(day)) {
            return new Date(year - 0, month - 1, day - 0);
        }

        return null;
    }

    function toDate(s) {
        var m = s.match(/^(\d{4})-(\d\d)-(\d\d)$/);

        if (m !== null) {
            return makeDate(m[1], m[2], m[3]);
        }

        return null;
    }

    function getDateInfo(picker, element) {
        var id = $(element).attr('id');
        var prfx = id.substring(0, id.lastIndexOf('_'));

        var ids = {
            day: '#' + prfx + '_Day',
            month: '#' + prfx + '_Month',
            year: '#' + prfx + '_Year'
        };

        var day = $(ids.day).val();
        var month = $(ids.month).val();
        var year = $(ids.year).val();
        var date = makeDate(year, month, day);

        return {
            picker: picker,
            element: element,
            idprefix: prfx,
            ids: ids,
            calendarid: '#' + prfx + '_Calendar',
            day: day,
            month: month,
            year: year,
            date: date,
            hasUserInput: year || month || day
        }
    }

    function getAttr(info, attr, suffix) {
        return $(info.picker).attr('data-datepicker-' + attr + '-' + suffix);
    }

    function getAttrValue(info, attr) {
        return getAttr(info, attr, 'value');
    }

    function isDayFirstFormat(format) {
        return format.indexOf('d') < format.indexOf('y');
    }

    function isMonthNameFormat(format) {
        return format.match(/mmm/) !== null;
    }

    function getErrorMessage(info, attr) {
        var errMsg = getAttr(info, attr, 'error');

        if (errMsg.indexOf('{value}' > 0)) {
            var format = getAttrValue(info, 'format');
            var v1 = info.year;
            var v2 = info.month;
            var v3 = info.day;

            if (isDayFirstFormat(format)) {
                v1 = info.day;
                v3 = info.year;
            }

            if (isMonthNameFormat(format)) {
                v2 = $('option[value="' + v2 + '"]', $(info.ids.month)).text();
            }

            var val = v1;
            val += (val && v2 ? ' ' + v2 : v2);
            val += (val && v3 ? ' ' + v3 : v3);

            errMsg = errMsg.replace('{value}', val);
        }

        return errMsg;
    }

    function displayError(info, attr, el) {
        var fieldset = $(info.picker).closest('fieldset');

        var errId = info.idprefix + "-error";

        el = el || info.element;

        $(el).addClass('input-validation-error');
        $(el).attr('aria-invalid', true);
        $(el).attr('aria-describedby', errId);

        var errMsg = getErrorMessage(info, attr);

        $('.gnl-form-validation-message', fieldset).empty().append($('<span />').attr('id', errId).text(errMsg));
    }

    function resetError(el) {
        $(el).removeClass('input-validation-error');
        $(el).attr('aria-invalid', false);
        $(el).attr('aria-describedby', null);
    }

    function resetErrors(info) {
        var fieldset = $(info.picker).closest('fieldset');

        $('.input-validation-error', fieldset).each(function () {
            resetError(this);
        });

        $('.gnl-form-validation-message', fieldset).empty();
    }

    function validateDatePicker(info, preserveErrors) {
        if (!preserveErrors) {
            resetErrors(info);
        }

        return validateDateValue(info) && validateMinDate(info) && validateMaxDate(info);
    }

    function validateDateValue(info) {
        var required = getAttrValue(info, 'required');

        if (info.hasUserInput) {
            var vd = info.day && validateDay(info);
            var vm = info.month && validateMonth(info);
            var vy = info.year && validateYear(info);

            if (vd === false || vm === false || vy === false) {
                return false;
            }
        }
        else if (required !== true && required !== 'true') {
            return true;
        }

        // skip validation if the user's currently entering a date
        for (var id in info.ids) {
            if ($(info.ids[id]).is(':focus')) {
                return true;
            }
        }

        !info.day && displayError(info, 'required', info.ids.day);
        !info.month && displayError(info, 'required', info.ids.month);
        !info.year && displayError(info, 'required', info.ids.year);

        return info.day && info.month && info.year;
    }

    function validateDay(info) {
        var dayn = toNumber(info.day);
        if (dayn < 1 || dayn > 31 || (info.date && info.date.getDate() !== dayn)) {
            displayError(info, 'valid', info.ids.day);
            return false;
        }

        return true;
    }

    function validateMonth(info) {
        var monthn = toNumber(info.month);
        if (monthn < 1 || monthn > 12 || (info.date && info.date.getMonth() !== monthn - 1)) {
            displayError(info, 'valid', info.ids.month);
            return false;
        }

        return true;
    }

    function validateYear(info) {
        if (info.year.match(/^\d{4}$/) === null || (info.date && info.date.getFullYear() !== toNumber(info.year))) {
            displayError(info, 'valid', info.ids.year);
            return false;
        }

        return true;
    }

    function validateMinDate(info) {
        if (info.date) {
            var attrVal = getAttrValue(info, 'mindate');

            if (attrVal) {
                var minDate = toDate(attrVal);

                if (minDate && info.date < minDate) {
                    if (toNumber(info.year) < minDate.getFullYear()) {
                        displayError(info, 'mindate', info.ids.year);
                        return false;
                    }

                    resetError(info.ids.year);

                    if (toNumber(info.month) - 1 < minDate.getMonth()) {
                        displayError(info, 'mindate', info.ids.month);
                        return false;
                    }

                    resetError(info.ids.month);

                    displayError(info, 'mindate', info.ids.day);
                    return false;
                }
            }

            resetErrors(info);
        }

        return true;
    }

    function validateMaxDate(info) {
        if (info.date) {
            var attrVal = getAttrValue(info, 'maxdate');

            if (attrVal) {
                var maxDate = toDate(attrVal);

                if (maxDate && info.date > maxDate) {
                    if (toNumber(info.year) > maxDate.getFullYear()) {
                        displayError(info, 'maxdate', info.ids.year);
                        return false;
                    }

                    resetError(info.ids.year);

                    if (toNumber(info.month) - 1 > maxDate.getMonth()) {
                        displayError(info, 'maxdate', info.ids.month);
                        return false;
                    }

                    resetError(info.ids.month);

                    displayError(info, 'maxdate', info.ids.day);
                    return false;
                }
            }

            resetErrors(info);
        }

        return true;
    }

    function pad(val) {
        if (val && !isNaN(val) && val < 10) {
            return '0' + (val - 0);
        }

        return val;
    }

    function formatValue(info) {
        var format = getAttrValue(info, 'format');

        if (format.match(/dd/)) {
            info.day = pad(info.day);
            $(info.ids.day).val(info.day);
        }

        if (!isMonthNameFormat(format)) {
            info.month = pad(info.month);
            $(info.ids.month).val(info.month);
        }
    }

    function pasteDate(text, picker, input) {
        if (text) {
            var year, month, day;

            // start out looking for year-first
            var m = text.match(/^\s*(\d{4})[-/]?(\d\d)[-/]?(\d\d)\s*$/);
            if (m !== null) {
                year = m[1] - 0;
                month = m[2] - 0;
                day = m[3] - 0;
            }
            else {
                // next look for day-first (or month-first, if US format)
                m = text.match(/^\s*(\d\d)[-/]?(\d\d)[-/]?(\d{4})\s*$/);

                if (m !== null) {
                    var first = m[1] - 0;
                    var second = m[2] - 0;
                    year = m[3] - 0;

                    // handle obvious US format dates, but default to Canadian format
                    if (second > 12) {
                        day = second;
                        month = first;
                    }
                    else {
                        day = first;
                        month = second;
                    }
                }
                else {
                    // fall back to a simple date parse
                    var time = Date.parse(text);

                    if (time && !isNaN(time)) {
                        var dt = new Date();
                        dt.setTime(time);

                        year = dt.getFullYear();
                        month = dt.getMonth() + 1;
                        day = dt.getDate();
                    }
                }
            }

            if (year && month && day) {
                var info = getDateInfo(picker, input);
                info.year = year;
                info.month = month;
                info.day = day;
                info.date = makeDate(year, month, day);

                $(info.ids.year).val(year);
                $(info.ids.month).val(month);
                $(info.ids.day).val(day);

                formatValue(info);
                return true;
            }

            return false;
        }
    }

    function updateCalendar(info) {
        var val = '';

        if (info.date) {
            val = info.date.getFullYear() + '-' + pad(info.date.getMonth() + 1) + '-' + pad(info.date.getDate());
        }

        $(info.calendarid).val(val);
    }

    function addCalendarLauncher(picker) {
        // check to see if the browser supports input type="date"
        var checker = document.createElement('input');
        checker.setAttribute('type', 'date');
        if (checker.type !== 'date') {
            return;
        }

        var input = $('.gnl-datepicker__input', picker).first();

        var info = getDateInfo(picker, input);

        $(picker).addClass('gnl-datepicker--with-calendar');

        $(picker).append(
            '<div class="gnl-calendar-launcher">' +
            '<span class="gnl-calendar-launcher__icon"></span>' +
            '<input class="gnl-calendar-launcher__input" type="date" id="' + info.idprefix + '_Calendar" />' +
            '</div>');

        updateCalendar(info);

        $(info.calendarid).on('change', function () {
            var date = $(this).val();

            if (date.match(/^\d{4}-\d\d-\d\d$/)) {
                pasteDate(date, picker, input);
                validateDatePicker(getDateInfo(picker, input), false);
            }
        });

        window.addEventListener('gnl-drawer-open', function () {
            $(picker).removeClass('gnl-datepicker--with-calendar');
        });

        window.addEventListener('gnl-drawer-close', function () {
            if (!$(picker).hasClass('gnl-datepicker--with-calendar')) {
                $(picker).addClass('gnl-datepicker--with-calendar');
            }
        });
    }

    $('.gnl-datepicker').each(function () {
        var picker = this;

        if ($(picker).attr('data-datepicker-calendar')) {
            addCalendarLauncher(picker);
        }

        $(picker).closest('form').on('submit', function (ev) {
            if (ev.originalEvent &&
                ev.originalEvent.submitter &&
                ev.originalEvent.submitter.formNoValidate === true) {
                return true;
            }

            var isValid = true;

            $(':input', picker).each(function () {
                // shortcircuit if the element's already been validated
                if ($(this).hasClass('input-validation-error')) {
                    isValid = false;
                    return;
                }

                var info = getDateInfo(picker, this);

                isValid = validateDatePicker(info, true);
            });

            if (!isValid) {
                ev.preventDefault();
                return false;
            }
        });

        $(':input', picker).on('change, blur', function () {
            var input = this;

            // use a (quick!) timeout to allow focus change to take effect
            setTimeout(
                function () {
                    var info = getDateInfo(picker, input);

                    formatValue(info);
                    validateDatePicker(info);
                    updateCalendar(info);
                },
                25);
        });

        $('.gnl-datepicker__input', picker).on('paste', function (ev) {
            var input = this;

            var text = (event.clipboardData || window.clipboardData).getData('text');

            if (pasteDate(text, picker, input)) {
                ev.preventDefault();
                return false;
            }
        });
    });
});