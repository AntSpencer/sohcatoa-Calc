// Gets the side value and returns it
function getSide() {
    const input = document.getElementById("sideInput").value;
    return input;
}

// Gets the angle value and returns it
function getAngle() {
    const input = document.getElementById("angleInput").value;
    return input;
}

// Calculates missing side using trigonometric functions
function calculateMissingSide(angle, sideLength, trigFunction) {
    var radians = angle * (Math.PI / 180);
    var result;

    switch(trigFunction) {
        case 'sin':
            result = sideLength / Math.sin(radians);
            break;
        case 'cos':
            result = sideLength / Math.cos(radians);
            break;
        case 'tan':
            result = sideLength / Math.tan(radians);
            break;
        default:
            result = "Invalid trigonometric function. Please use 'sin', 'cos', or 'tan'.";
    }

    return result;
}

// Handles calculation and updates HTML
function calculateAndDisplay() {
    var angle = parseFloat(getAngle());
    var sideLength = parseFloat(getSide());
    
    var sine = calculateMissingSide(angle, sideLength, 'sin');
    var cosine = calculateMissingSide(angle, sideLength, 'cos');
    var tangent = calculateMissingSide(angle, sideLength, 'tan');

    document.getElementById("sine").innerText = "Sine: " + sine.toFixed(2);
    document.getElementById("cosine").innerText = "Cosine: " + cosine.toFixed(2);
    document.getElementById("tangent").innerText = "Tangent: " + tangent.toFixed(2);
}
