window.addEventListener('load', function () {


    const formulario = document.querySelector('#add_new_turno');

    formulario.addEventListener('submit', function (event) {

        const formData = {
            odontologo: {
                id: document.querySelector('#odontologo').value,
            },
            paciente: {
                id: document.querySelector('#paciente').value,
            },
            fecha: document.querySelector('#fecha').value,

        };

        const url = '/turnos/registrar';
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
                    '<strong></strong> Turno success </div>'
                document.querySelector('#response').innerHTML = successAlert;
                document.querySelector('#response').style.display = "block";
                resetUploadForm();

            })
            .catch(error => {
                let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong> Error intente nuevamente</strong> </div>'

                document.querySelector('#response').innerHTML = errorAlert;
                document.querySelector('#response').style.display = "block";
                resetUploadForm();
            })
    });


    function resetUploadForm() {
        document.querySelector('#odontologo').value = "";
        document.querySelector('#paciente').value = "";
        document.querySelector('#fecha').value = "";

    }
});