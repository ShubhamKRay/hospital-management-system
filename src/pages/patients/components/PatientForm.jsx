import {
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Divider,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const genders = ["Male", "Female", "Other"];

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "General Medicine",
];

const doctors = [
  "Dr. Shivangi Yadav",
  "Dr. Amit",
  "Dr. Neha",
  "Dr. Raj",
  "Dr. Priya",
];

function PatientForm({ patient, mode = "add" }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const onSubmit = (data) => {
    console.log("Patient Data:", data);

    setSnackbar({
      open: true,
      message: "Patient added successfully",
      severity: "success",
    });
  };

  return (
    <Paper sx={{ p: 4, borderRadius: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          {mode === "edit" ? "Edit Patient" : "Add New Patient"}
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="h6" mb={2}>
          Personal Information
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="First Name"
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Last Name"
              {...register("lastName", {
                required: "Last name is required",
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Age"
              {...register("age", {
                required: "Age is required",
                min: {
                  value: 1,
                  message: "Age must be greater than 0",
                },
                max: {
                  value: 120,
                  message: "Age must be less than 120",
                },
              })}
              error={!!errors.age}
              helperText={errors.age?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Gender"
              defaultValue=""
              {...register("gender", {
                required: "Gender is required",
              })}
              error={!!errors.gender}
              helperText={errors.gender?.message}
            >
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField select fullWidth label="Blood Group">
              {bloodGroups.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Mobile Number"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid 10 digit mobile number",
                },
              })}
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Email Address"
              {...register("email", {
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter valid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField fullWidth multiline rows={3} label="Address" />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" mb={2}>
          Medical Information
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Disease"
              {...register("disease", {
                required: "Disease is required",
              })}
              error={!!errors.disease}
              helperText={errors.disease?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField select fullWidth label="Department">
              {departments.map((department) => (
                <MenuItem key={department} value={department}>
                  {department}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField select fullWidth label="Assigned Doctor">
              {doctors.map((doctor) => (
                <MenuItem key={doctor} value={doctor}>
                  {doctor}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

         <Grid size={{ xs: 12, md: 6 }}>
  <TextField
    fullWidth
    label="Admission Date"
    type="date"
    slotProps={{
      inputLabel: {
        shrink: true,
      },
    }}
    {...register("admissionDate", {
      required: "Admission date is required",
    })}
    error={!!errors.admissionDate}
    helperText={errors.admissionDate?.message}
  />
</Grid>

          <Grid size={{ xs: 12 }}>
            <TextField select fullWidth label="Status">
              <MenuItem value="Admitted">Admitted</MenuItem>
              <MenuItem value="Discharged">Discharged</MenuItem>
              <MenuItem value="Under Treatment">Under Treatment</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="outlined" onClick={() => window.history.back()}>
            Cancel
          </Button>

          <Button type="submit" variant="contained">
            Save Patient
          </Button>
        </Box>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() =>
          setSnackbar({
            ...snackbar,
            open: false,
          })
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default PatientForm;
