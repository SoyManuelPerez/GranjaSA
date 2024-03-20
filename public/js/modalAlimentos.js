const modalAlimento = new bootstrap.Modal(document.getElementById('modalAlimentos'))

const onl =(element,event,selector,handler)=>{
    element.addEventListener(event, e =>{
        if (e.target.closest(selector)) {
            handler(e);
        }
    })
}
onl(document,'click','.btnEditaralimentos',e=>{
    const fila = e.target.parentNode.parentNode;
    id_editar.value = fila.children[0].innerHTML;
    nombre_editar.value = fila.children[1].innerHTML;
    dosis_editar.value = fila.children[2].innerHTML;
    id_editar.setAttribute('readonly', true)
    modalAlimento.show()
})