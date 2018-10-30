function calculateTip() {
    var total = Number(document.getElementById('total').value);
    var output = document.getElementById('output');
    
    if (document.getElementById('twenty').checked) {
        var tip = total * 0.2;
    }
    
    if (document.getElementById('eighteen').checked) {
        var tip = total * 0.18;
    }

    if (document.getElementById('fifteen').checked) {
        var tip = total * 0.15;
    }
    
    output.textContent = "$" + tip;
}