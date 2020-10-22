/*
 *  JS file for common code for all .html files
**/

$(document).ready(function() {

    // Theme Selector
    var theme = $('#theme')
    $('#green-theme').click(function() {
        theme.attr('href', 'css/green.css')
    })
    $('#red-theme').click(function() {
        theme.attr('href', 'css/red.css')
    })
    $('#blue-theme').click(function() {
        theme.attr('href', 'css/blue.css')
    })


    // Scroll to top page
    $('.goto-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })

    // Login Fake
    $('#login form').submit(function(){
        let form_name = $('#form_name').val()
        localStorage.setItem('form_name', form_name)
    })
    const form_name = localStorage.getItem('form_name')
    if(form_name != null || form_name != undefined) {
        const about_p = $('#about p')
        about_p.html('Bienvenido, ' + form_name)
        about_p.append('<br><a href="#" id="logout">Cerrar sesión</a>')
        $('#login').hide()

        $('#logout').click(function() {
            localStorage.clear()
            location.reload()
        })
    }
})