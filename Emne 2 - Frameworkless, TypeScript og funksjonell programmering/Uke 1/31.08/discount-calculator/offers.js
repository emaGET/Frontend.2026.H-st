// 20% rabatt
const percentDiscount = price => price * 0.8; 

// Fast 50kr rabatt
const fixedDiscount = price => price - 50; 

// 40% rabatt, men maks. rabatt 100kr
const percentDiscountWithMax = price => Math.max(price * 0.6, price - 100);

export {
    percentDiscount,
    fixedDiscount,
    percentDiscountWithMax
}