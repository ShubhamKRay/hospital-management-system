import { Paper, Typography, Grid, Divider, Chip, Button } from "@mui/material";

import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function AppointmentDetailsCard({ appointment }) {
  const navigate = useNavigate();

  if (!appointment) {
    return <Typography variant="h5">Appointment not found</Typography>;
  }

  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 3,
      }}
      elevation={3}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Appointment Details
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h6" gutterBottom>
        Appointment Information
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography>
            <strong>Patient Name:</strong> {appointment.patient}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography>
            <strong>Doctor:</strong> {appointment.doctor}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography>
            <strong>Department:</strong> {appointment.department}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography>
            <strong>Date:</strong> {appointment.date}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography>
            <strong>Time:</strong> {appointment.time}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography>
            <strong>Status:</strong>{" "}
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
          </Typography>
        </Grid>
      </Grid>

      <Divider
        sx={{
          my: 4,
        }}
      />

      <Button
        variant="contained"
        startIcon={<Edit />}
        onClick={() => navigate(`/appointments/edit/${appointment.id}`)}
      >
        Edit Appointment
      </Button>
    </Paper>
  );
}

export default AppointmentDetailsCard;
