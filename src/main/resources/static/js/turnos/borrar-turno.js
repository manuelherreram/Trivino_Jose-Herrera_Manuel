function deleteBy(id) {
L
    const url = '/turnos/' + id;
    const settings = {
        method: 'DELETE'
    }
    fetch(url, settings)
        .then(response => response.json())

    //borrar la fila del turno eliminada
    let row_id = "#tr_" + id;
    document.querySelector(row_id).remove();

}
