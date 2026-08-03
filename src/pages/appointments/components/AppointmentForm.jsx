import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

function AppointmentForm({ defaultValues = {}, mode = "add" }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const doctors = ["Dr Shivangi Yadav", "Dr. Neha", "Dr. Raj", "Dr. Amit"];

  const departments = ["Cardiology", "Neurology", "Orthopedics"];

  const statusList = ["Scheduled", "Completed", "Cancelled"];

  const onSubmit = (data) => {
    console.log(data);

    alert("Appointment Saved Successfully");

    navigate("/appointments");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={4}>
        {mode === "edit" ? "Edit Appointment" : "Add Appointment"}
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {/* Patient */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Patient Name"
              {...register("patient", {
                required: "Patient name is required",
              })}
              error={Boolean(errors.patient)}
              helperText={errors.patient?.message}
            />
          </Grid>

          {/* Doctor */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Doctor"
              defaultValue={defaultValues.doctor || ""}
              {...register("doctor", {
                required: "Doctor is required",
              })}
              error={Boolean(errors.doctor)}
              helperText={errors.doctor?.message}
            >
              {doctors.map((doctor) => (
                <MenuItem key={doctor} value={doctor}>
                  {doctor}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Department */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Department"
              defaultValue={defaultValues.department || ""}
              {...register("department", {
                required: "Department is required",
              })}
              error={Boolean(errors.department)}
              helperText={errors.department?.message}
            >
              {departments.map((department) => (
                <MenuItem key={department} value={department}>
                  {department}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Date */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Appointment Date"
              type="date"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              {...register("date", {
                required: "Date is required",
              })}
              error={Boolean(errors.date)}
              helperText={errors.date?.message}
            />
          </Grid>

          {/* Time */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="time"
              label="Appointment Time"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              {...register("time", {
                required: "Time is required",
              })}
              error={Boolean(errors.time)}
              helperText={errors.time?.message}
            />
          </Grid>

          {/* Status */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Status"
              defaultValue={defaultValues.status || ""}
              {...register("status", {
                required: "Status is required",
              })}
              error={Boolean(errors.status)}
              helperText={errors.status?.message}
            >
              {statusList.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            gap: 2,
          }}
        >
          <Button variant="contained" type="submit">
            {mode === "edit" ? "Update Appointment" : "Save Appointment"}
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/appointments")}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default AppointmentForm;
