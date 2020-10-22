/*
 *  JS file for index.html-only code
**/

$(document).ready(function() { // Cargar HTML

    if(window.location.href.indexOf('index') > -1) { // Comprobar que estamos en index.html

        // Slider galery
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        })


        // Posts section
        const posts = [
            {
                title: 'Prueba de título 1',
                date: 'Publicado el ' + moment().format('dddd') + ' ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                title: 'Prueba de título 2',
                date: 'Publicado el ' + moment().format('dddd') + ' ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                title: 'Prueba de título 3',
                date: 'Publicado el ' + moment().format('dddd') + ' ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                title: 'Prueba de título 4',
                date: 'Publicado el ' + moment().format('dddd') + ' ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                title: 'Prueba de título 5',
                date: 'Publicado el ' + moment().format('dddd') + ' ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
        ]

        posts.forEach((index, el) => {
            const post = `
                <article class="post">
                    <h2>${index.title}</h2>
                    <span class="date">${index.date}</span>
                    <p>
                        ${index.content}
                    </p>
                    <a href="#" class="button-more">Leer Más</a>
                </article>
            `
            $('#posts').append(post)
        })
        
    } // if - check index

})