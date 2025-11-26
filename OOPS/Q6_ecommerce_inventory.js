// Q6 – E-Commerce Inventory System

const products = [
  {id:1, name:"Laptop", category:"Electronics", price:50000, stock:5},
  {id:2, name:"Phone", category:"Electronics", price:20000, stock:2},
  {id:3, name:"Shoes", category:"Fashion", price:3000, stock:20},
  {id:4, name:"T-Shirt", category:"Fashion", price:800, stock:0}
];

function getLowStockProducts(){
  return products.filter(p=>p.stock < 5);
}

function sortProductsByPrice(){
  return [...products].sort((a,b)=>a.price-b.price);
}

function calculateTotalInventoryValue(){
  return products.reduce((sum,p)=>sum + p.price*p.stock, 0);
}

function groupByCategory(){
  return products.reduce((acc,p)=>{
    if(!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  },{});
}

// Test
console.log("Low stock:",getLowStockProducts());
console.log("Sorted:",sortProductsByPrice());
console.log("Total value:",calculateTotalInventoryValue());
console.log("Grouped:",groupByCategory());
