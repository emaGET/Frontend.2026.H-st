// const vatRate = 0.25;

// function addVat(price) {
//     return price - price*vatRate;
// }

// export function totalWithVat(price) {
//     return addVat(price)
// }

// const discount = 50;

// function applyFixedDiscount(price, discount) {
//     return price - discount;
// }

// export function discountedPrice (total) {
//     return applyFixedDiscount(price,discount);
// }


const vatRate = 0.25;

// const discount = 50;

export function addedVat(price) {
    return price * vatRate + price;
}

export function discountedPrice(price, discount) {
    return price - discount;
}