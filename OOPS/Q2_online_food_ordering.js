// Q2 – Online Food Ordering (map + error handling)

const menu = {
  pizza: 200,
  burger: 120,
  pasta: 150,
  fries: 80
};

function calculateBill(orderItems){
  try {
    const prices = orderItems.map(item=>{
      if(!menu[item]) throw new Error(`Invalid item ordered: ${item}`);
      return menu[item];
    });

    const total = prices.reduce((a,b)=>a+b,0);
    console.log("Total bill:", total);
    return total;
  } catch(err){
    console.error("Order Error:", err.message);
  }
}

// Test
calculateBill(["pizza","fries"]);
calculateBill(["pizza","samosa"]);  // invalid
