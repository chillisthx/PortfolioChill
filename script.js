M.AutoInit();


/* ------------  Smooth scrolling ------------ */

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();

        var scroll = target.offset().top - 90;
        $('html, body').stop().animate({
            scrollTop: scroll
        }, 1000);
    }
});


/* Bouton flottant en small screen */

$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });




/* Nav changeant sur scrolling */

$(function(){

    var $nav = $('nav');
    var $liNav = $('linav');
$(window).scroll(function()
    {
            var scroll = $(window).scrollTop();
            if(scroll > 435)
        {
        $nav.addClass('navChange');
        $liNav.addClass('color4');
        }
        else
        {
            if(scroll <= 435 ){

            
            $nav.removeClass('navChange');
            }
        }
    })
    
    });