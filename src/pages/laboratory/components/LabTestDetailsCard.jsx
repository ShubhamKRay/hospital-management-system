import { Paper, Typography, Divider, Grid, Chip, Button } from "@mui/material";

import { Edit } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function LabTestDetailsCard({ labTest }) {
  const navigate = useNavigate();

  if (!labTest) {
    return <Typography variant="h6">Lab Test not found.</Typography>;
  }

  return (
    <Paper
      sx={{
        p: 4,

        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Laboratory Test Details
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Patient</Typography>

          <Typography>{labTest.patient}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Test Name</Typography>

          <Typography>{labTest.testName}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Category</Typography>

          <Typography>{labTest.category}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Doctor</Typography>

          <Typography>{labTest.doctor}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Date</Typography>

          <Typography>{labTest.date}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Status</Typography>

          <Chip
            label={labTest.status}
            color={
              labTest.status === "Completed"
                ? "success"
                : labTest.status === "Pending"
                  ? "warning"
                  : "error"
            }
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography fontWeight="bold">Result</Typography>

          <Typography>{labTest.result || "No result available."}</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Button
        variant="contained"
        startIcon={<Edit />}
        onClick={() => navigate(`/laboratory/edit/${labTest.id}`)}
      >
        Edit Lab Test
      </Button>
    </Paper>
  );
}

export default LabTestDetailsCard;
