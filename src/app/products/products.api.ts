export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function createProduct(productData: any) {
  const response = await fetch(`${BACKEND_URL}/api/v1/products`, {
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
  const data = await fetch(`${BACKEND_URL}/api/v1/products`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function getProduct(id: string) {
  const data = await fetch(`${BACKEND_URL}/api/v1/products/${id}`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function deleteProduct(productId: string) {
  const response = await fetch(`${BACKEND_URL}/api/v1/products/${productId}`, {
    method: "DELETE",
  });
  return await response.json();
}

export async function updateProduct(id: string, productData: any) {
  const response = await fetch(`${BACKEND_URL}/api/v1/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
    cache: "no-store",
  });
  return await response.json();
}
