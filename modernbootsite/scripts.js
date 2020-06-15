$(function ()  {
    $(".hamburger-menu").click(function ()  {
      $(".toggle").toggleClass('open');
      $(".nav-list").toggle('open');
    });

    AOS.init({
      easing: 'ease',
      duration: 1000,
    });
  });