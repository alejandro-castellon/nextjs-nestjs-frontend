"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createProduct, updateProduct } from "../../app/products/products.api";
import { useRouter } from "next/navigation";
import { parse } from "path";

function ProductForm({ product }: any) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: product?.name || "",
      price: product?.price || "",
      description: product?.description || "",
      image: product?.image || "",
    },
  });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (product) {
      await updateProduct(product.id, {
        ...data,
        price: parseFloat(data.price),
      });
    } else {
      await createProduct({ ...data, price: parseFloat(data.price) });
    }
    router.push("/");
  });

  const handleCancel = () => {
    console.log("Cancel");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input {...register("name")} placeholder="Name of your product" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="price">Price</Label>
          <Input {...register("price")} placeholder="Price of your product" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="description">Description</Label>
          <Input
            {...register("description")}
            placeholder="Description of your product"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="image">Image</Label>
          <Input
            {...register("image")}
            placeholder="Image url of your product"
          />
        </div>
        <div className="flex justify-between">
          <Button onClick={handleCancel} variant="outline" type="reset">
            Cancel
          </Button>
          <Button type="submit">{product ? "Update" : "Create"}</Button>
        </div>
      </div>
    </form>
  );
}
export default ProductForm;
