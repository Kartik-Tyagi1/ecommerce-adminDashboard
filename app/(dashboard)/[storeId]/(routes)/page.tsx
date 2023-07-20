import prismadb from "@/lib/prismadb";

interface IDashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<IDashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <div>
      <div>Active Store : {store?.name}</div>
    </div>
  );
};

export default DashboardPage;
