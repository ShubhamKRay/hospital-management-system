

import { Grid } from "@mui/material";
import {
  People,
  Person,
  Event,
  LocalHospital,
} from "@mui/icons-material";

import DashboardCard from "./DashboardCard";

function DashboardCards() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Total Patients"
          value="1250"
          icon={<People />}
          color="#1976d2"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Doctors"
          value="120"
          icon={<Person />}
          color="#2e7d32"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Appointments"
          value="340"
          icon={<Event />}
          color="#ed6c02"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Available Beds"
          value="58"
          icon={<LocalHospital />}
          color="#9c27b0"
        />
      </Grid>
    </Grid>
  );
}

export default DashboardCards;