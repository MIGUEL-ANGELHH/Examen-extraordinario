function Calcularpromedio() {
    const cal1 = parseFloat(document.getElementById('cal1').value);
    const cal2 = parseFloat(document.getElementById('cal2').value);

    const promedio = (cal1 + cal2) / 2;

    document.getElementById('promedio').Calificacion  = promedio.toFixed(2);
}