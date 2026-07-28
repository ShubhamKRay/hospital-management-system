


import { Paper, Typography, Grid, Button } from "@mui/material";
import {
  PersonAdd,
  MedicalServices,
  EventAvailable,
  Receipt,
} from "@mui/icons-material";

function QuickActions() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        height: "100%",
      }}
    >
      <Typography variant="h6" mb={3}>
        Quick Actions
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<PersonAdd />}
          >
            Add Patient
          </Button>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            startIcon={<MedicalServices />}
          >
            Add Doctor
          </Button>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Button
            variant="contained"
            color="warning"
            fullWidth
            startIcon={<EventAvailable />}
          >
            Book Appointment
          </Button>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={<Receipt />}
          >
            Generate Bill
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default QuickActions;