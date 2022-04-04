/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/
window.addEventListener("load", function () {
  // CONSTANTES
  const form = document.forms[0];
  const comentarios = document.querySelector(".comentarios");
  const comentario = document.querySelector("#comentario");
  const btnBorrar = this.document.querySelector("#borrar");
  const todosLosComentarios = obtenerComentarios();

  // EVENTO ENVIAR FORMULARIO
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (comentario.value != "") {
      realizarComentario(comentario.value);
      guardarComentarios(comentario.value);
    } else {
      alert("Los comentarios no pueden estar vacíos");
      comentario.focus();
    }
  });

  // EVENTO BORRAR TODOS LOS COMENTARIOS
  btnBorrar.addEventListener("click", function () {
    const confirmacion = confirm(
      "¿Seguro que quieres borrar todos los comentarios?\nEsta operación no se puede deshacer"
    );

    if (confirmacion) {
      borrarComentarios();
      comentarios.innerHTML = "";
    }
  });

  // ESCRIBIR COMENTARIO
  function realizarComentario(textoComentario) {
    const p = document.createElement("p");
    p.innerHTML = textoComentario;
    comentarios.insertAdjacentElement("afterbegin", p);
    form.reset();
  }

  // GUARDAR COMENTARIOS EN LOCAL STORAGE
  function guardarComentarios(comentario) {
    todosLosComentarios.push(comentario);
    localStorage.setItem(
      "comentariosViejos",
      JSON.stringify(todosLosComentarios)
    );
  }

  // OBTENER COMENTARIOS DEL LOCAL STORAGE
  function obtenerComentarios() {
    let todosLosComentarios = JSON.parse(
      localStorage.getItem("comentariosViejos")
    );

    if (!todosLosComentarios) {
      todosLosComentarios = [];
    } else {
      todosLosComentarios.forEach((comentario) => {
        const p = document.createElement("p");
        p.innerHTML = comentario;
        div.insertAdjacentElement("afterbegin", p);
      });
    }
    return todosLosComentarios;
  }

  // BORRAR TODOS LOS COMENTARIOS
  function borrarComentarios() {
    localStorage.removeItem("comentariosViejos");
  }
});
