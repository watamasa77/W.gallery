$(function () {

  // drawer Menu
  // _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ 

  $('.js-button-hamburger').click(function () {
    $('body').toggleClass('is-active-drawer');

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    }
  });
});