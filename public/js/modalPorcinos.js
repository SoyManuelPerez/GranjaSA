const modalPorcino = new bootstrap.Modal(document.getElementById('modalPorcino'))
console.log ("sirve el modarl")
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};
on(document, 'click', '.btnEditarPorcino', e => {
    const fila = e.target.parentNode.parentNode;
    id_por_editar.value = fila.children[0].innerHTML;
    raza_por_editar.value  = fila.children[1].innerHTML;
    edad_por_editar.value  = fila.children[2].innerHTML;
    peso_por_editar.value  = fila.children[3].innerHTML;
    alim_por_editar.value  = fila.children[4].innerHTML;
    cliente_por_editar.value  = fila.children[5].innerHTML;
    id_por_editar.setAttribute('readonly', true)
    modalPorcino.show();
  })
 