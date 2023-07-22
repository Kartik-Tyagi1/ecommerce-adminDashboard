import prismadb from "@/lib/prismadb";
import { ProductForm } from "./components/ProductForm";

/*
 *  In the product client we are passing "new" as the productId parameter
 *  what this allow us to do is that when we do our search for the product in prisma that will not return a product
 *  which means we will know to create a form to create a new product
 *
 *  On the other hand if the parameter in the url is a valid Id and a product is returned
 *  then we will know to generate a form to edit an exisiting product
 */

const ProductFormPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          initialData={product}
          categories={categories}
          colors={colors}
          sizes={sizes}
        />
      </div>
    </div>
  );
};

export default ProductFormPage;
