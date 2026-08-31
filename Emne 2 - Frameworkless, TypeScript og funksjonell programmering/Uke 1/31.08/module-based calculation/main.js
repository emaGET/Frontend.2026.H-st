import { 
    addedVat, 
    discountedPrice 
} from "./priceUtils.js";

const price = 200; 

console.log(price);
console.log(addedVat(price));
console.log(discountedPrice(price, 50));