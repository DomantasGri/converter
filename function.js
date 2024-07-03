let currentConversion = "EUR_TO_USD";

const EUR_TO_USD_RATE = 1.08;

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function updateConversionResult() {
    const inputAmount = document.getElementById("skaiciai").value;
    let outputAmount;

    if (currentConversion === "EUR_TO_USD") {
        outputAmount = (inputAmount * EUR_TO_USD_RATE).toFixed(2);
    } else if (currentConversion === "CELSIUS_TO_FAHRENHEIT") {
        outputAmount = celsiusToFahrenheit(parseFloat(inputAmount)).toFixed(2);
    }

    document.getElementById("atsakymas").value = outputAmount;
}

function updateReverseConversionResult() {
    const inputAmount = document.getElementById("atsakymas").value;
    let outputAmount;

    if (currentConversion === "EUR_TO_USD") {
        outputAmount = (inputAmount / EUR_TO_USD_RATE).toFixed(2);
    } else if (currentConversion === "CELSIUS_TO_FAHRENHEIT") {
        outputAmount = fahrenheitToCelsius(parseFloat(inputAmount)).toFixed(2);
    }

    document.getElementById("skaiciai").value = outputAmount;
}

function changeConversionMode(mode) {
    currentConversion = mode;
    document.getElementById("skaiciai").value = "0.00";
    document.getElementById("atsakymas").value = "0.00";

    if (mode === "EUR_TO_USD") {
        document.getElementById("keitimas").textContent = "Eur to $";
        document.getElementById("KeitimasPirmas").textContent = "Eur";
        document.getElementById("KeitimasAntras").textContent = "$";
    } else if (mode === "CELSIUS_TO_FAHRENHEIT") {
        document.getElementById("keitimas").textContent = "Celsius to Fahrenheit";
        document.getElementById("KeitimasPirmas").textContent = "Celsius";
        document.getElementById("KeitimasAntras").textContent = "Fahrenheit";
    }
}

document.getElementById("EuraiTo$").addEventListener("click", function() {
    changeConversionMode("EUR_TO_USD");
});

document.getElementById("CTF").addEventListener("click", function() {
    changeConversionMode("CELSIUS_TO_FAHRENHEIT");
});

document.getElementById("skaiciai").addEventListener("input", function() {
    updateConversionResult();
});

document.getElementById("atsakymas").addEventListener("input", function() {
    updateReverseConversionResult();
});
function updateConversionType(conversionType) {
    document.getElementById("keitimas").textContent = conversionType;
}
