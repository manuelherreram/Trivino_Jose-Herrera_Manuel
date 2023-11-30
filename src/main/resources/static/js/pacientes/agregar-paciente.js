window.addEventListener('load', function () {

    const formulario = document.querySelector('#add_new_paciente');

    formulario.addEventListener('submit', function (event) {
        const formData = {
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,
            dni: document.querySelector('#dni').value,
            fechaIngreso: document.querySelector('#fechaIngreso').value,
            domicilioEntradaDto: {
                calle: document.querySelector('#calle').value,
                numero: document.querySelector('#numero').value,
            }

        };

        const url = '/pacientes/registrar';
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }

        fetch(url, settings)
            .then(response => response.json())
            .then(data => {
                let successAlert = '<div class="alert alert-success alert-dismissible">' +
                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong></strong> Paciente success </div>'

                document.querySelector('#response').innerHTML = successAlert;
                resetUploadForm();
            })
            .catch(error => {
                //Si hay algun error se muestra un mensaje diciendo que el paciente
                //no se pudo guardar y se intente nuevamente
                let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong> Error intente nuevamente</strong> </div>'

                document.querySelector('#response').innerHTML = errorAlert;
                resetUploadForm();
            })
    });

    function resetUploadForm() {
        document.querySelector('#nombre').value = "";
        document.querySelector('#apellido').value = "";
        document.querySelector('#dni').value = "";
        document.querySelector('#fechaIngreso').value = "";
        document.querySelector('#calle').value = "";
        document.querySelector('#numero').value = "";

    }
});