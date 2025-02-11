"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { deleteProduct } from "@/app/products/products.api";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: any) {
  const router = useRouter();
  async function handleRemoveProduct(id: string) {
    await deleteProduct(id);
    router.refresh();
  }

  return (
    <Card onClick={() => router.push(`/products/${product.id}`)}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {product.name}
          <span className="text-sm font-bold text-gray-500">
            ${product.price}
          </span>
        </CardTitle>
      </CardHeader>
      <Image src="/globe.svg" alt={product.name} width={200} height={200} />
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="mt-4">Comprar</Button>
        <Button
          className="mt-4"
          variant="destructive"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveProduct(product.id);
          }}
        >
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
}
