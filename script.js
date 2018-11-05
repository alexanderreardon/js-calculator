function calculateTip() {
    // Assign radio button inputs as variables:
    const fifteen = document.getElementById('fifteen');
    const eighteen = document.getElementById('eighteen');
    const twenty = document.getElementById('twenty');
    const twentytwo = document.getElementById('twentytwo');
    const twentyfive = document.getElementById('twentyfive');

    // Get user input:
    var totalInput = document.getElementById('total').value;
    var tipInput = document.querySelector('input[name="percent"]:checked').value;

    // Begin exception handling:
    if (isNaN(totalInput)) {
        alert('Enter a number dumbass.');
    } else if (totalInput.length == 0) {
        alert('You have to enter a number dumbass.');
    } else {
        // End exception handling

        var total = Number(totalInput);
        var output = document.getElementById('output');
        
        var tip;
        switch (tipInput) {
            case twenty.value:
                tip = total * 0.2;
                break;
            case eighteen.value:
                tip = total * 0.18;
                break;
            case fifteen.value:
                tip = total * 0.15;
                break;
            case twentytwo.value:
                tip = total * 0.22;
                break;
            case twentyfive.value:
                tip = total * 0.25;
                break;
        }
        
        // Return output while rounding & formatting:
        output.textContent = "$" + tip.toFixed(2);
    }
}