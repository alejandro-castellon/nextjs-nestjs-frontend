import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductForm from "../../../components/products/product-form";

export default function NewProduct({ params }: any) {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Create product</CardTitle>
          <CardDescription>Crea tu producto.</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductForm product={null} />
        </CardContent>
      </Card>
    </div>
  );
}
