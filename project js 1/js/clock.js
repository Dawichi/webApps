/*
 *  JS file for clock.html-only code
**/

$(document).ready(function() { // Cargar HTML

    if(window.location.href.indexOf('clock') > -1) { // Comprobar que estamos en clock.html

        // Reloj dinámico
        setInterval(function(){
            var reloj = moment().format('h:mm:ss')
            $('#clock').html(reloj)
        }, 1000)
       
        
    } // if - check clock

})