
import { Grid } from "@mui/material";

import MainLayout from "../../layouts/MainLayout";

import DashboardHeader from "./components/DashboardHeader";
import DashboardCards from "./components/DashboardCards";
import StatisticsChart from "./components/StatisticsChart";
import QuickActions from "./components/QuickActions";
import AppointmentTable from "./components/AppointmentTable";
import RecentPatients from "./components/RecentPatients";
import ActivityTimeline from "./components/ActivityTimeline";

function Dashboard() {
  return (
    <MainLayout>
      <DashboardHeader />

      <DashboardCards />

      {/* Chart & Quick Actions */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <StatisticsChart />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <QuickActions />
        </Grid>
      </Grid>

      {/* Appointment & Recent Patients */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <AppointmentTable />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <RecentPatients />
        </Grid>
      </Grid>

      {/* Activity Timeline */}
      <ActivityTimeline />
    </MainLayout>
  );
}

export default Dashboard;