import { getProduct } from "../products.api";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}
export default async function DetailProduct({ params }: Props) {
  const product = await getProduct(params.id);

  return (
    <div className="h-screen flex items-center justify-center">
      <Card>
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
          <Button className="mt-4" variant="destructive">
            Eliminar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
