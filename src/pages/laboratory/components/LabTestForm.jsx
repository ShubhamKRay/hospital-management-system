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

function LabTestForm({ defaultValues = {}, mode = "add" }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const categories = ["Pathology", "Radiology", "Microbiology", "Cardiology"];

  const doctors = ["Dr. Amit", "Dr. Neha", "Dr. Raj"];

  const statusList = ["Pending", "Completed", "Cancelled"];

  const onSubmit = (data) => {
    console.log(data);

    alert(
      mode === "edit"
        ? "Lab Test Updated Successfully"
        : "Lab Test Added Successfully",
    );

    navigate("/laboratory");
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
        {mode === "edit" ? "Edit Lab Test" : "Add Lab Test"}
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {/* Patient Name */}

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

          {/* Test Name */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Test Name"
              {...register("testName", {
                required: "Test name is required",
              })}
              error={Boolean(errors.testName)}
              helperText={errors.testName?.message}
            />
          </Grid>

          {/* Category */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Category"
              defaultValue={defaultValues.category || ""}
              {...register("category", {
                required: "Category is required",
              })}
              error={Boolean(errors.category)}
              helperText={errors.category?.message}
            >
              {categories.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
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

          {/* Date */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="date"
              label="Test Date"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("date", {
                required: "Date is required",
              })}
              error={Boolean(errors.date)}
              helperText={errors.date?.message}
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

          {/* Result */}

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Test Result"
              {...register("result")}
            />
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
            {mode === "edit" ? "Update Test" : "Save Test"}
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/laboratory")}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default LabTestForm;
