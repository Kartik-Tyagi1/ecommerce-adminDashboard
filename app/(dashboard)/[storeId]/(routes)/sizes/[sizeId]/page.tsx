import prismadb from "@/lib/prismadb";
import { SizeForm } from "./components/SizeForm";

/*
 *  In the billboard client we are passing "new" as the billboardId parameter
 *  what this allow us to do is that when we do our search for the billboard in prisma that will not return a billboard
 *  which means we will know to create a form to create a new billboard
 *
 *  On the other hand if the parameter in the url is a valid Id and a billboard is returned
 *  then we will know to generate a form to edit an exisiting billboard
 */

const SizeFormPage = async ({ params }: { params: { sizeId: string } }) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
};

export default SizeFormPage;
