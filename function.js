// Exchange rate from EUR to USD
const EUR_TO_USD_RATE = 1.08; // Example rate, you can update this with a current rate

// Function to update the conversion result from Euro to USD
function updateConversionResultEURtoUSD() {
    const euroAmount = document.getElementById("skaiciai").value;
    const usdAmount = (euroAmount * EUR_TO_USD_RATE).toFixed(2); // Converting to USD and rounding to 2 decimal places
    document.getElementById("atsakymas").value = usdAmount;
}

// Function to update the conversion result from USD to Euro
function updateConversionResultUSDtoEUR() {
    const usdAmount = document.getElementById("atsakymas").value;
    const euroAmount = (usdAmount / EUR_TO_USD_RATE).toFixed(2); // Converting to Euro and rounding to 2 decimal places
    document.getElementById("skaiciai").value = euroAmount;
}

// Add event listeners to the input fields
document.getElementById("skaiciai").addEventListener("input", function() {
    updateConversionResultEURtoUSD();
});

document.getElementById("atsakymas").addEventListener("input", function() {
    updateConversionResultUSDtoEUR();
});
function updateConversionType(conversionType) {
    document.getElementById("keitimas").textContent = conversionType;
}
document.getElementById("EuraiTo$").addEventListener("click", function() {
    updateConversionType("Eur to $");
});
document.getElementById("CTF").addEventListener("click", function() {
    updateConversionType("Celsius to Fahrenheit");
});
if(document.getElementById("EuraiTo$") = true) {
    updateConversionType("Eur to $");
}