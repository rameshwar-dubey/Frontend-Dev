// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Fetch from https://fakestoreapi.com/products
// Note: In Node.js you may need global fetch or node 18+; in browser it works directly.

async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Network response not ok');
    const products = await res.json();
    products.forEach(p => {
      console.log('Product:', p.title);
      console.log('Price: $' + p.price);
      console.log('Image:', p.image);
      console.log('-------------------------');
    });
    return products;
  } catch (err) {
    console.error('Failed to load products. Please try again.');
    throw err;
  }
}

// Optional: create product cards in browser (bonus)
// function renderProducts(products){ ... }
