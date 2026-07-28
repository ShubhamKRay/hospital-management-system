

import MainLayout from "../../layouts/MainLayout";
import DashboardCards from "./components/DashboardCards";

function Dashboard() {
  return (
    <MainLayout>
      <h1>Dashboard</h1>

      <DashboardCards />
    </MainLayout>
  );
}

export default Dashboard;