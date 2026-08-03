import { Paper, Typography, Divider, Grid, Chip, Button } from "@mui/material";

import { Edit } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function MedicineDetailsCard({ medicine }) {
  const navigate = useNavigate();

  if (!medicine) {
    return <Typography variant="h6">Medicine not found.</Typography>;
  }

  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Medicine Details
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Medicine Name</Typography>

          <Typography>{medicine.name}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Category</Typography>

          <Typography>{medicine.category}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Manufacturer</Typography>

          <Typography>{medicine.manufacturer}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Stock Quantity</Typography>

          <Typography>{medicine.stock}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Price</Typography>

          <Typography>₹ {medicine.price}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Expiry Date</Typography>

          <Typography>{medicine.expiryDate}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Status</Typography>

          <Chip
            label={medicine.status}
            color={
              medicine.status === "Available"
                ? "success"
                : medicine.status === "Low Stock"
                  ? "warning"
                  : "error"
            }
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Button
        variant="contained"
        startIcon={<Edit />}
        onClick={() => navigate(`/pharmacy/edit/${medicine.id}`)}
      >
        Edit Medicine
      </Button>
    </Paper>
  );
}

export default MedicineDetailsCard;
