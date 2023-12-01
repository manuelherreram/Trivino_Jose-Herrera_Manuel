window.addEventListener('load', function () {
    const url = '/pacientes/listar';
    const settings = {
        method: 'GET'
    }

    fetch(url, settings)
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById("pacienteTable");

            data.forEach(paciente => {
                const pacienteRow = table.insertRow();
                pacienteRow.id = `tr_${paciente.id}`;

                const deleteButton = `<button id="btn_delete_${paciente.id}" type="button" onclick="deleteBy(${paciente.id})" class="btn btn-danger btn_delete">&times;</button>`;
                const updateButton = `<button id="btn_id_${paciente.id}" type="button" onclick="findBy(${paciente.id})" class="btn btn-info btn_id">${paciente.id}</button>`;

                pacienteRow.innerHTML = `
                    <td>${updateButton}</td>
                    <td class="td_apellido">${paciente.apellido.toUpperCase()}</td>
                    <td class="td_nombre">${paciente.nombre.toUpperCase()}</td>
                    <td class="td_DNI">${paciente.dni}</td>
                    <td class="td_fechaIngreso">${paciente.fechaIngreso}</td>
                    <td class="td_domicilio">${updateButton}</td>
                    <td>${deleteButton}</td>`;

                const domicilioRow = table.insertRow();
                domicilioRow.id = `tr_domicilio_${paciente.id}`;
                domicilioRow.innerHTML = `
                    <td>ID Domicilio: ${paciente.domicilioSalidaDto.id}</td>
                    <td>Calle: ${paciente.domicilioSalidaDto.calle.toUpperCase()}</td>
                    <td>Número: ${paciente.domicilioSalidaDto.numero.toUpperCase()}</td>`;
            });
        });
});

