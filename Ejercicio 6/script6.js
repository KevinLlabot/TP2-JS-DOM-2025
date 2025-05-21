        const form = document.getElementById('form');
        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const edad = document.getElementById('edad');
        const altura = document.getElementById('altura');
        const mail = document.getElementById('mail');
        const resultado = document.getElementById('resultado');

        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            resultado.textContent = ''; 
            resultado.classList.remove('rojo', 'verde');

            if (nombre.value.trim() === '' || apellido.value.trim() === '') {
                resultado.classList.add('rojo');
                resultado.textContent = 'Por favor, completa todos los campos correctamente.';
            } else if (nombre.value.length > 50 || apellido.value.length > 50) {
                resultado.classList.add('rojo');
                resultado.textContent = 'El nombre y el apellido no pueden tener más de 50 caracteres.';
            } else if (edad.value <= 0 || edad.value < 18) {
                resultado.classList.add('rojo');
                resultado.textContent = 'La edad no puede ser negativa ni cero y debe ser mayor de 18 años.';
            } else if (altura.value <= 0 || altura.value > 230) {
                resultado.classList.add('rojo');
                resultado.textContent = 'La altura no puede ser negativa ni cero y debe ser menor a 230 mts.';
            } else if (!validateEmail(mail.value)) {
                resultado.classList.add('rojo');
                resultado.textContent = 'El correo electrónico no es válido.';
            } else {
                resultado.classList.add('verde');
                resultado.textContent = 'Formulario con exito.';
            }

            function validateEmail(email) {
                const signos = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return signos.test(String(email).toLowerCase());
            }
        });