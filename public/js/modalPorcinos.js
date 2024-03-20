const modalPorcino = new bootstrap.Modal(document.getElementById('modalPorcino'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};
on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
     cedula_editar.value = fila.children[0].innerHTML;
     nombre_editar.value  = fila.children[1].innerHTML;
     dir_editar.value  = fila.children[2].innerHTML;
     tel_editar.value  = fila.children[3].innerHTML;
     cedula_editar.setAttribute('readonly', true)
        modalCliente.show();
  })