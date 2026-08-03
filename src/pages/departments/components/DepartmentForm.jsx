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

function DepartmentForm({ defaultValues = {}, mode = "add" }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const doctors = ["Dr. Amit", "Dr. Neha", "Dr. Raj", "Dr. Sharma"];

  const statusList = ["Active", "Inactive"];

  const onSubmit = (data) => {
    console.log(data);

    alert(
      mode === "edit"
        ? "Department Updated Successfully"
        : "Department Added Successfully",
    );

    navigate("/departments");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        {mode === "edit" ? "Edit Department" : "Add Department"}
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {/* Department Name */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Department Name"
              {...register("name", {
                required: "Department name is required",
              })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
          </Grid>

          {/* Head Doctor */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Head Doctor"
              defaultValue={defaultValues.head || ""}
              {...register("head", {
                required: "Head doctor is required",
              })}
              error={Boolean(errors.head)}
              helperText={errors.head?.message}
            >
              {doctors.map((doctor) => (
                <MenuItem key={doctor} value={doctor}>
                  {doctor}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Total Doctors */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Total Doctors"
              {...register("totalDoctors", {
                required: "Total doctors is required",
              })}
              error={Boolean(errors.totalDoctors)}
              helperText={errors.totalDoctors?.message}
            />
          </Grid>

          {/* Total Patients */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Total Patients"
              {...register("totalPatients", {
                required: "Total patients is required",
              })}
              error={Boolean(errors.totalPatients)}
              helperText={errors.totalPatients?.message}
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
            {mode === "edit" ? "Update Department" : "Save Department"}
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/departments")}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default DepartmentForm;
