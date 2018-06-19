M.AutoInit();

/* ------------  Smooth scrolling ------------ */

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();


        /* !!!!!!!!!!!!!!!! Calculer hauteur nav pour scrolling exact !!!!!!!!!!!!!!!!! */
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
    /* var $burger = $('buttonBurger'); */
    var $headerHeight = $("header").height();
    var $aboutHeight = $("#about").height() + $("header").height();

$(window).scroll(function()
    {
        var scroll = $(window).scrollTop();
        if(scroll > $headerHeight)
        {
        $nav.addClass('navChange');
        }
        else
        {
            if(scroll <= $headerHeight ){

            
            $nav.removeClass('navChange');
            }
        }
        if(scroll >  $aboutHeight)
        {
        $nav.addClass('navChange2');
        /* $burger.addClass('color4'); */
        }
        else
        {
            if(scroll <=  $aboutHeight ){

            
            $nav.removeClass('navChange2');
            }
        }
    })
    
    });