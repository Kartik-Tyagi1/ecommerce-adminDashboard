import prismadb from "@/lib/prismadb";
import { CategoryForm } from "./components/CategoryForm";

/*
 *  In the category client we are passing "new" as the categoryID parameter
 *  what this allow us to do is that when we do our search for the category in prisma that will not return a category
 *  which means we will know to create a form to create a new category
 *
 *  On the other hand if the parameter in the url is a valid Id and a category is returned
 *  then we will know to generate a form to edit an exisiting category
 */

const CategoryFormPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm initialData={category} billboards={billboards} />
      </div>
    </div>
  );
};

export default CategoryFormPage;
