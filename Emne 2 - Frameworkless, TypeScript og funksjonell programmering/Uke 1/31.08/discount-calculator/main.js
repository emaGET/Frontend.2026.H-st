import {
    percentDiscount,
    fixedDiscount,
    percentDiscountWithMax
} from "./offers.js" ;

function calculateDiscount() {
    const price = parseFloat(document.getElementById("price").value);
    const selectedDiscount = document.getElementById("discountType").value;

    if (!price || price < 0) {
        alert("Vennligst skriv inn en gyldig pris.");
        return;
    }

    let newPrice = 0;

    if (selectedDiscount === "percentDiscount") {
        newPrice = percentDiscount(price);
    } 
    
    else if (selectedDiscount === "fixedDiscount") {
        newPrice = fixedDiscount(price);
    }

    else if (selectedDiscount === "percentDiscountWithMax") {
        newPrice = percentDiscountWithMax(price);
    }

    document.getElementById("result").textContent = `Ny pris: ${newPrice.toFixed(2)} kr`;
}

// console.log(percentDiscount(5000));
// console.log(fixedDiscount(5000));
// console.log(percentDiscountWithMax(1000));
// console.log(percentDiscountWithMax(5000));

const app = document.querySelector("#app");

const heading = document.createElement("h1");
heading.textContent = "Rabatt Kalkulator";

const pris = document.createElement("label");
pris.setAttribute("for", "price");
pris.textContent = "Pris:";

const prisInput = document.createElement("input");
prisInput.setAttribute("type", "number");
prisInput.id = "price";
prisInput.placeholder = "Skriv inn pris";

const discountType = document.createElement("label");
discountType.setAttribute("for", "discountType");
discountType.textContent = "Velg rabattype:";

const rabattTypeSelect = document.createElement("select");
rabattTypeSelect.id = "discountType";

const percent = document.createElement("option");
percent.value = "percentDiscount";
percent.textContent = "20 % rabatt";

const fixed = document.createElement("option");
fixed.value = "fixedDiscount";
fixed.textContent = "50 kr rabatt";

const percentMax = document.createElement("option");
percentMax.value = "percentDiscountWithMax";
percentMax.textContent = "40% rabatt, men maks. rabatt 100kr";

rabattTypeSelect.append(
    percent,
    fixed,
    percentMax
);

const calculateButton = document.createElement("button");
calculateButton.setAttribute("type", "button");
calculateButton.textContent = "Beregn pris";

const result = document.createElement("h2");
result.id = "result";
result.textContent = "Ny pris: -";

app.replaceChildren(
    heading,
    pris,
    prisInput,
    discountType,
    rabattTypeSelect,
    calculateButton,
    result
);

calculateButton.addEventListener("click", calculateDiscount);