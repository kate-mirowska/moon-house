//collapse mobile menu after click
$('.navbar-collapse a').click(function (e) {
    $('.navbar-collapse.show').collapse('toggle');
});

//scroll to anchor
$('.scroll-to').click(function(event){
    var target = $(this.hash);
    event.preventDefault();
    $('html,body').animate({scrollTop:$(target).offset().top - 30}, 700);
});