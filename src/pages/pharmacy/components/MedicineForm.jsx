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

function MedicineForm({ defaultValues = {}, mode = "add" }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const categories = ["Tablet", "Capsule", "Injection", "Syrup", "Drops"];

  const statusList = ["Available", "Low Stock", "Out of Stock"];

  const onSubmit = (data) => {
    console.log(data);

    alert(
      mode === "edit"
        ? "Medicine Updated Successfully"
        : "Medicine Added Successfully",
    );

    navigate("/pharmacy");
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
        {mode === "edit" ? "Edit Medicine" : "Add Medicine"}
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {/* Medicine Name */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Medicine Name"
              {...register("name", {
                required: "Medicine name is required",
              })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
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

          {/* Manufacturer */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Manufacturer"
              {...register("manufacturer", {
                required: "Manufacturer is required",
              })}
              error={Boolean(errors.manufacturer)}
              helperText={errors.manufacturer?.message}
            />
          </Grid>

          {/* Stock */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Stock Quantity"
              {...register("stock", {
                required: "Stock is required",
              })}
              error={Boolean(errors.stock)}
              helperText={errors.stock?.message}
            />
          </Grid>

          {/* Price */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Price"
              {...register("price", {
                required: "Price is required",
              })}
              error={Boolean(errors.price)}
              helperText={errors.price?.message}
            />
          </Grid>

          {/* Expiry Date */}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="date"
              label="Expiry Date"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("expiryDate", {
                required: "Expiry date is required",
              })}
              error={Boolean(errors.expiryDate)}
              helperText={errors.expiryDate?.message}
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
            {mode === "edit" ? "Update Medicine" : "Save Medicine"}
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/pharmacy")}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default MedicineForm;
