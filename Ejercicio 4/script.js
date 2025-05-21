const boton = document.getElementById('boton');

boton.addEventListener('click', function() { 
        
        const peso = parseFloat(document.getElementById('peso').value);
        const estatura = parseFloat(document.getElementById('estatura').value);

        const imc = peso / (estatura * estatura);

        alert(`Tu IMC es: ${imc}`);
    });

    