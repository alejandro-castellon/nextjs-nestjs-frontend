import { getProduct } from "../products.api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductForm from "@/components/products/product-form";

interface Props {
  params: Promise<{
    id: string;
  }>;
}
export default async function DetailProduct({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Edita tu producto</CardTitle>
          <CardDescription>Modifica tu producto.</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
}
