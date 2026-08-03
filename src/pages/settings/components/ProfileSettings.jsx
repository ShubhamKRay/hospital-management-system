import { useState } from "react";

import { Paper, Typography, TextField, Grid, Button, Box } from "@mui/material";

function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: "Admin",

    email: "admin@hospital.com",

    phone: "9876543210",

    password: "",

    confirmPassword: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (profile.password !== profile.confirmPassword) {
      alert("Password does not match");

      return;
    }

    console.log(profile);

    alert("Profile Updated Successfully");
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
        Admin Profile Settings
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="password"
              label="New Password"
              name="password"
              value={profile.password}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={profile.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Button sx={{ mt: 4 }} variant="contained" type="submit">
          Update Profile
        </Button>
      </Box>
    </Paper>
  );
}

export default ProfileSettings;
