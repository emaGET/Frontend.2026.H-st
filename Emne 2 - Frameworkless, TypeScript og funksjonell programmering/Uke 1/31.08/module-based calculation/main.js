import { 
    addVat, 
    applyFixedDiscount 
} from "./priceUtils.js";

const price = 200; 

console.log(price);
console.log(addVat(price));
console.log(applyFixedDiscount(price, 50));