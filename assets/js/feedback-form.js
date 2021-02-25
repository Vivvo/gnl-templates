$(document).ready(function () {

    $(".feedbackForm").on("submit", function (e) {
        e.preventDefault();

        var form = $(this);

        $.ajax({
            url: form.attr("action"),
            method: form.attr("method"),
            data: form.serialize(),
            success: function (partialResult) {
                $("#feedbackFormBody").html(partialResult);
            }
        });
    });
});