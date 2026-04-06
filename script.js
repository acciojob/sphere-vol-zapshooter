function volume_sphere() {
    // 1. Retrieve the radius value from the input field
    var radiusInput = document.getElementById('radius').value;

    // 2. Convert to a number (non-numeric strings become NaN)
    var r = Number(radiusInput);

    // 3. Calculate volume — negative radius produces NaN per spec
    var volume;
    if (r < 0 || isNaN(r)) {
        volume = NaN;
    } else {
        // V = (4/3) * π * r³
        volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    }

    // 4. Display result rounded to 4 decimal places (NaN stays 'NaN')
    var result = isNaN(volume) ? 'NaN' : volume.toFixed(4);
    document.getElementById('volume').value = result;

    // Prevent the form from submitting / reloading the page
    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;