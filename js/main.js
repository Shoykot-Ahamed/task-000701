$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:4,
        autoplay: true,
        autoplayTimeout:3000,
        loop:true,
        margin:75,
        nav:true,
        navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
    });
  });