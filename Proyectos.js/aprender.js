//Metodo de validacion de campos
(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault(); // Evita envío para mostrar alerta

        Swal.fire({
          title: "¡Regeneracion exitosa!",
          text: "Tu información ha sido guardada correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
          allowOutsideClick: false
        }).then(() => {
          // Limpia los campos del formulario
          form.reset();
          // Quita clases de validación para reiniciar
          form.classList.remove('was-validated');
        });
      }

      form.classList.add('was-validated');
    }, false);
  });
})();
