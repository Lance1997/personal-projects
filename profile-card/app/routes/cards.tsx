import { Outlet } from "remix";
import ThePrimaryLayout from "~/components/layouts/ThePrimaryLayout";

const CardsPage = () => {
  return (
    <ThePrimaryLayout>
      <div className="px-2">
        <Outlet />
      </div>
    </ThePrimaryLayout>
  );
};

export default CardsPage;
