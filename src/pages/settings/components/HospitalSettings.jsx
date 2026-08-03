import { useState } from "react";

import { Paper, Typography, TextField, Grid, Button, Box } from "@mui/material";

function HospitalSettings() {
  const [hospital, setHospital] = useState({
    name: "City Care Hospital",

    address: "Main Road, Delhi",

    phone: "9876543210",

    email: "info@citycare.com",
  });

  const handleChange = (e) => {
    setHospital({
      ...hospital,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(hospital);

    alert("Hospital Settings Updated Successfully");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,

        borderRadius: 3,
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Hospital Information
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Hospital Name"
              name="name"
              value={hospital.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={hospital.phone}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={hospital.address}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={hospital.email}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Button sx={{ mt: 4 }} variant="contained" type="submit">
          Save Settings
        </Button>
      </Box>
    </Paper>
  );
}

export default HospitalSettings;
