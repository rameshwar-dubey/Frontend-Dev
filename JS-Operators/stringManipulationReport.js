let product = " wireless headphones PRO ";
let cleaned = product.trim().toLowerCase().split(" ").map(w=> w[0].toUpperCase()+ w.slice(1)).join(" ").replace("Pro","Pro Edition");
console.log(cleaned);
console.log("Length:", cleaned.length);
