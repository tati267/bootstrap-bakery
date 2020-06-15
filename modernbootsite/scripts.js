$(function ()  {
    $(".hamburger-menu").click(function ()  {
      $(".toggle").toggleClass('open');
      $(".nav-list").toggle('open');
    });
  });