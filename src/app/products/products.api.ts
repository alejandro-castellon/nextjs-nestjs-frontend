export async function createProduct(productData: any) {
  const response = await fetch("http://localhost:4000/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  const data = await response.json();
  console.log(data);
}

export async function getProducts() {
  const data = await fetch("http://localhost:4000/api/v1/products");
  return await data.json();
}

export async function getProduct(id: string) {
  const data = await fetch(`http://localhost:4000/api/v1/products/${id}`);
  return await data.json();
}

export async function deleteProduct(productId: string) {
  const response = await fetch(
    `http://localhost:4000/api/v1/products/${productId}`,
    {
      method: "DELETE",
    }
  );
  return await response.json();
}
