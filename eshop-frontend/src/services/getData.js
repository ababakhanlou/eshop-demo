const hostname =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "https://eshop-demo-backend.herokuapp.com/";

export async function getStock() {
  const response = await fetch(`${hostname}/stock`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const stock = await response.json();
  return stock;
}

export async function getItemByProdId(prodId) {
  const stock = await getStock();
  const item = stock.find((item) => item.productId === prodId);
  return item;
}

export async function getItemById(id) {
  const stock = await getStock();
  const item = stock.find((item) => item._id === id);
  return item;
}

// for non express fetch
// const response = await fetch("./data/products.json");
// const stock = await response.json();
// return stock;
