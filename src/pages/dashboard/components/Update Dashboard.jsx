

import MainLayout from "../../layouts/MainLayout";
import DashboardHeader from "./components/DashboardHeader";
import DashboardCards from "./components/DashboardCards";

function Dashboard() {
  return (
    <MainLayout>
      <DashboardHeader />

      <DashboardCards />
    </MainLayout>
  );
}

export default Dashboard;