

import {
  Paper,
  Grid,
  Typography,
  Divider,
  Avatar,
  Chip,
} from "@mui/material";

import { useParams } from "react-router-dom";
import doctorData from "../data/doctorData";

function DoctorDetailsCard() {
  
const { id } = useParams();

const doctor = doctorData.find(
  (doctor) => doctor.id === Number(id)
);

if (!doctor) {
  return (
    <Typography variant="h5">
      Doctor not found
    </Typography>
  );
}

  return (
    <Paper sx={{ p: 4, borderRadius: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3} textAlign="center">
          <Avatar
            sx={{
              width: 140,
              height: 140,
              mx: "auto",
              fontSize: 40,
            }}
          >
            {doctor.name.charAt(0)}
          </Avatar>

          <Typography
            variant="h5"
            fontWeight="bold"
            mt={2}
          >
            {doctor.name}
          </Typography>

          <Chip
            sx={{ mt: 1 }}
            label={doctor.status}
            color={
              doctor.status === "Available"
                ? "success"
                : "warning"
            }
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography variant="h6" gutterBottom>
            Doctor Information
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>
                <strong>Specialization:</strong>
              </Typography>
              <Typography>
                {doctor.specialization}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>
                <strong>Department:</strong>
              </Typography>
              <Typography>
                {doctor.department}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>
                <strong>Experience:</strong>
              </Typography>
              <Typography>
                {doctor.experience} Years
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>
                <strong>Status:</strong>
              </Typography>
              <Typography>
                {doctor.status}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DoctorDetailsCard;