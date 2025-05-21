const boton = document.getElementById('boton');

boton.addEventListener("click", function() {
    const base = parseInt(document.getElementById("base").value);
    const alturaA = parseInt(document.getElementById("altura").value);
    const alturaC = parseInt(document.getElementById("alturaC").value);

    
    const areaTriangulo = (base * (alturaA - alturaC) / 2);
    const areaRectangulo = base * alturaC;

    const areaTotal = areaTriangulo + areaRectangulo;
    return alert("El área total es: " + areaTotal);

});
