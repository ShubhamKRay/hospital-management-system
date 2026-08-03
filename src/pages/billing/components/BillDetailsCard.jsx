import { Paper, Typography, Divider, Grid, Chip, Button } from "@mui/material";

import { Edit } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function BillDetailsCard({ bill }) {
  const navigate = useNavigate();

  if (!bill) {
    return <Typography variant="h6">Bill not found.</Typography>;
  }

  return (
    <Paper
      sx={{
        p: 4,

        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Bill Details
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Patient</Typography>

          <Typography>{bill.patient}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Doctor</Typography>

          <Typography>{bill.doctor}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Department</Typography>

          <Typography>{bill.department}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Bill Date</Typography>

          <Typography>{bill.billDate}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Amount</Typography>

          <Typography>₹ {bill.amount}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Payment Method</Typography>

          <Typography>{bill.paymentMethod}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight="bold">Status</Typography>

          <Chip
            label={bill.status}
            color={bill.status === "Paid" ? "success" : "warning"}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Button
        variant="contained"
        startIcon={<Edit />}
        onClick={() => navigate(`/billing/edit/${bill.id}`)}
      >
        Edit Bill
      </Button>
    </Paper>
  );
}

export default BillDetailsCard;
