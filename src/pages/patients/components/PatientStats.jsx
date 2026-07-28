

import { Grid, Paper, Typography } from "@mui/material";

function PatientStats({ patients }) {
  const totalPatients = patients.length;

  const admitted = patients.filter(
    (patient) => patient.status === "Admitted"
  ).length;

  const discharged = patients.filter(
    (patient) => patient.status === "Discharged"
  ).length;

  const treatment = patients.filter(
    (patient) => patient.status === "Under Treatment"
  ).length;

  const stats = [
    {
      title: "Total Patients",
      value: totalPatients,
    },
    {
      title: "Admitted",
      value: admitted,
    },
    {
      title: "Discharged",
      value: discharged,
    },
    {
      title: "Under Treatment",
      value: treatment,
    },
  ];

  return (
    <Grid container spacing={3} mb={3}>
      {stats.map((item) => (
        <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
         <Paper
  elevation={2}
  sx={{
    p: 3,
    borderRadius: 3,
    textAlign: "center",
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: 6,
    },
  }}
>
            <Typography
              variant="body1"
              color="text.secondary"
            >
              {item.title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              mt={1}
            >
              {item.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default PatientStats;