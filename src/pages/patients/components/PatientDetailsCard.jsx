import {
  Paper,
  Typography,
  Grid,
  Divider,
  Chip,
  Button,
} from "@mui/material";

import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function PatientDetailsCard({ patient }) {
  const navigate = useNavigate();

  return (
    <Paper sx={{ p: 4, borderRadius: 3 }}>

      <Typography variant="h4" fontWeight="bold" mb={3}>
        Patient Details
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>

      <Grid container spacing={2} mb={4}>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Name:</strong> {patient.name}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Age:</strong> {patient.age}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Gender:</strong> {patient.gender}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Blood Group:</strong> O+</Typography>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography><strong>Phone:</strong> 9876543210</Typography>
        </Grid>

      </Grid>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h6" gutterBottom>
        Medical Information
      </Typography>

      <Grid container spacing={2}>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Disease:</strong> {patient.disease}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Doctor:</strong> {patient.doctor}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Department:</strong> General Medicine</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography>
            <strong>Status:</strong>{" "}
            <Chip
              label={patient.status}
              color={
                patient.status === "Admitted"
                  ? "success"
                  : patient.status === "Discharged"
                  ? "error"
                  : "warning"
              }
            />
          </Typography>
        </Grid>

      </Grid>

      <Divider sx={{ my: 4 }} />

      <Button
        variant="contained"
        startIcon={<Edit />}
        onClick={() => navigate(`/patients/edit/${patient.id}`)}
      >
        Edit Patient
      </Button>

    </Paper>
  );
}

export default PatientDetailsCard;