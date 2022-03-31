/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/
window.addEventListener('load', function(){
    let todosLosComentarios = obtenerComentarios()
    
    let form = document.forms[0]
    let comentario = document.querySelector('#comentario')
    
    form.addEventListener('submit', function(e){
        e.preventDefault()
        
        realizarComentario(comentario.value)
        guardarComentarios(comentario.value)
    })
    
    function realizarComentario(textoComentario) {
        let comentarios = document.querySelector('.comentarios')
        let p = document.createElement('p')
        p.innerHTML = textoComentario
        comentarios.insertAdjacentElement('afterbegin', p)
        comentario.value = ""
    }
    
    function guardarComentarios(comentario) {
        todosLosComentarios.push(comentario)
        localStorage.setItem('comentariosViejos', JSON.stringify(todosLosComentarios))
    }
    
    function obtenerComentarios() {
        let todosLosComentarios = JSON.parse(localStorage.getItem('comentariosViejos'))

        if (!todosLosComentarios) {
            todosLosComentarios = []
        } else {

            let div = document.querySelector('.comentarios')
            todosLosComentarios.forEach(comentario => {
            let p = document.createElement('p')
            p.innerHTML = comentario
            div.insertAdjacentElement('afterbegin', p)
        });

        }
        return todosLosComentarios
    }
})