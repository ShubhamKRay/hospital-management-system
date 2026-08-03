import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import appointmentData from "./data/appointmentData";

import { Paper, Typography, Divider, Grid, Chip } from "@mui/material";

function ViewAppointment() {
  const { id } = useParams();

  const appointment = appointmentData.find((item) => item.id === Number(id));

  if (!appointment) {
    return (
      <MainLayout>
        <Typography variant="h6">Appointment not found.</Typography>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Paper
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Appointment Details
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontWeight="bold">Patient</Typography>

            <Typography>{appointment.patient}</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontWeight="bold">Doctor</Typography>

            <Typography>{appointment.doctor}</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontWeight="bold">Department</Typography>

            <Typography>{appointment.department}</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontWeight="bold">Date</Typography>

            <Typography>{appointment.date}</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontWeight="bold">Time</Typography>

            <Typography>{appointment.time}</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontWeight="bold">Status</Typography>

            <Chip
              label={appointment.status}
              color={
                appointment.status === "Completed"
                  ? "success"
                  : appointment.status === "Cancelled"
                    ? "error"
                    : "warning"
              }
            />
          </Grid>
        </Grid>
      </Paper>
    </MainLayout>
  );
}

export default ViewAppointment;
