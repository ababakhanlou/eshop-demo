import { getItemById } from "./getData";

export async function updateStock(id, updQty) {
  const item = await getItemById(id);
  const itemQty = item.availQty;
  const newQty = itemQty + updQty;

  if (newQty < 0) {
    return false;
  }

  const URL = `http://localhost:3001/stock/update/${id}`;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const data = JSON.stringify({ availQty: newQty });

  const requestOptions = {
    method: "PATCH",
    headers: headers,
    body: data,
    redirect: "follow",
  };

  await fetch(URL, requestOptions)
    .then((response) => response.text())
    .catch((error) => console.log("error", error));

  return true;
}
