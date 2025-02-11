import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/products.api";
import ProductCard from "@/components/products/product-card";

export default async function Home() {
  const products = await getProducts();
  console.log(products);

  return (
    <main>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Nest Next Products</h1>
        <Link href="/products/new" className={buttonVariants()}>
          Create Product
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
