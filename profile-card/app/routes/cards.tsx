import { Outlet } from "remix";
import ThePrimaryLayout from "~/components/layouts/ThePrimaryLayout";

const CardsPage = () => {
  return (
    <ThePrimaryLayout>
      <Outlet />
    </ThePrimaryLayout>
  );
};

export default CardsPage;
