function calculateDiscount() {
    const price = parseFloat(document.getElementById("price").value);
    const selectedDiscount = document.getElementById("discountType").value;

    if (!price || price < 0) {
        alert("Vennligst skriv inn en gyldig pris.");
        return;
    }

    let newPrice = 0;
    document.getElementById("result").textContent = `Ny pris: ${newPrice.toFixed(2)} kr`;
}