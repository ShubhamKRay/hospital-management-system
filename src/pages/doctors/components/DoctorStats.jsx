

import { Grid, Paper, Typography } from "@mui/material";

function DoctorStats({ doctors }) {
  const totalDoctors = doctors.length;

  const availableDoctors = doctors.filter(
    (doctor) => doctor.status === "Available"
  ).length;

  const onLeaveDoctors = doctors.filter(
    (doctor) => doctor.status === "On Leave"
  ).length;

  const departments = [...new Set(doctors.map((doctor) => doctor.department))]
    .length;

  const stats = [
    {
      title: "Total Doctors",
      value: totalDoctors,
    },
    {
      title: "Available",
      value: availableDoctors,
    },
    {
      title: "On Leave",
      value: onLeaveDoctors,
    },
    {
      title: "Departments",
      value: departments,
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

export default DoctorStats;