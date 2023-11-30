window.addEventListener('load', function () {

    (function () {
        const url = '/pacientes/listar';
        const settings = {
            method: 'GET'
        }

        fetch(url, settings)
            .then(response => response.json())
            .then(data => {
                for (paciente of data) {

                    var table = document.getElementById("pacienteTable");
                    var pacienteRow = table.insertRow();
                    let tr_id = 'tr_' + paciente.id;
                    pacienteRow.id = tr_id;

                    let deleteButton = '<button' +
                        ' id=' + '\"' + 'btn_delete_' + paciente.id + '\"' +
                        ' type="button" onclick="deleteBy(' + paciente.id + ')" class="btn btn-danger btn_delete">' +
                        '&times' +
                        '</button>';
                    let updateButton = '<button' +
                        ' id=' + '\"' + 'btn_id_' + paciente.id + '\"' +
                        ' type="button" onclick="findBy(' + paciente.id + ')" class="btn btn-info btn_id">' +
                        paciente.id +
                        '</button>';
                    pacienteRow.innerHTML =
                                            '<td>' + updateButton + '</td>' +
                                            '<td class=\"td_apellido\">' + paciente.apellido.toUpperCase() + '</td>' +
                                            '<td class=\"td_nombre\">' + paciente.nombre.toUpperCase() + '</td>' +
                                            '<td class=\"td_DNI\">' + paciente.dni + '</td>' +
                                            '<td class=\"td_F.Ingreso\">' + paciente.fechaIngreso + '</td>' +
                                            '<td class=\"td_domicilio\">' + paciente.domicilioEntradaDto.calle +
                                            " " + paciente.domicilioEntradaDto.numero + '</td>' +
                                            '<td>' + deleteButton + '</td>';
                }
            })
    })
})