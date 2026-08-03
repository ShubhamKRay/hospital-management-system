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

function BillForm({ defaultValues = {}, mode = "add" }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const departments = ["Cardiology", "Neurology", "Orthopedics"];

  const paymentMethods = ["Cash", "Card", "UPI", "Insurance"];

  const statusList = ["Paid", "Pending"];

  const onSubmit = (data) => {
    console.log(data);

    alert(
      mode === "edit" ? "Bill Updated Successfully" : "Bill Added Successfully",
    );

    navigate("/billing");
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
        {mode === "edit" ? "Edit Bill" : "Add Bill"}
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
              fullWidth
              label="Doctor Name"
              {...register("doctor", {
                required: "Doctor name is required",
              })}
              error={Boolean(errors.doctor)}
              helperText={errors.doctor?.message}
            />
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
              {departments.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Bill Date */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="date"
              label="Bill Date"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("billDate", {
                required: "Bill date is required",
              })}
              error={Boolean(errors.billDate)}
              helperText={errors.billDate?.message}
            />
          </Grid>

          {/* Amount */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Amount"
              {...register("amount", {
                required: "Amount is required",
              })}
              error={Boolean(errors.amount)}
              helperText={errors.amount?.message}
            />
          </Grid>

          {/* Payment Method */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Payment Method"
              defaultValue={defaultValues.paymentMethod || ""}
              {...register("paymentMethod", {
                required: "Payment method is required",
              })}
              error={Boolean(errors.paymentMethod)}
              helperText={errors.paymentMethod?.message}
            >
              {paymentMethods.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Status */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Payment Status"
              defaultValue={defaultValues.status || ""}
              {...register("status", {
                required: "Status is required",
              })}
              error={Boolean(errors.status)}
              helperText={errors.status?.message}
            >
              {statusList.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
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
            {mode === "edit" ? "Update Bill" : "Save Bill"}
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/billing")}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default BillForm;
