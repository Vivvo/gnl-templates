//BOOTSTRAP VALIDATION

// Example starter JavaScript for disabling form submissions if there are invalid fields

(function() {
  'use strict';
  $(document).on("submit", "form", function (e) {
    var $form = $(this);
    if (this.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    $form.addClass('was-validated');
  });
})();


// PASSWORD SHOW HIDE

$(document).ready(function(){
  $("body").on("click", '.show-password', function(){
    $(this).find('.sr-only').text(function(i, text){
      return text === "Hide" ? "Show" : "Hide";
    });

   $(this).find('i').toggleClass('fa-eye fa-eye-slash');

    let $show_password_input = $(this).closest('.input-group').find('.form-control');
    let input_type = 'password' === $show_password_input.attr('type') ? 'text' : 'password';
    $show_password_input.prop('type', input_type);
  });
});

// SCROLL TO

$('.scroll').on('click', function(e) {
	e.preventDefault();
	var target = $(this).attr('href');
	var offset = 0;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$.scrollTo(target, 300, { offset: -offset });
});
