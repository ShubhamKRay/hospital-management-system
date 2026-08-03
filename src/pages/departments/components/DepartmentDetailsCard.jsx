import { Paper, Typography, Divider, Grid, Chip, Button } from "@mui/material";

import { Edit } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function DepartmentDetailsCard({ department }) {
  const navigate = useNavigate();

  if (!department) {
    return <Typography variant="h6">Department not found.</Typography>;
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Department Details
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Department Name</Typography>

          <Typography>{department.name}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Head Doctor</Typography>

          <Typography>{department.head}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Total Doctors</Typography>

          <Typography>{department.totalDoctors}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Total Patients</Typography>

          <Typography>{department.totalPatients}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Status</Typography>

          <Chip
            label={department.status}
            color={department.status === "Active" ? "success" : "error"}
          />
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
        onClick={() => navigate(`/departments/edit/${department.id}`)}
      >
        Edit Department
      </Button>
    </Paper>
  );
}

export default DepartmentDetailsCard;
