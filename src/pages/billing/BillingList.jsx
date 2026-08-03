import MainLayout from "../../layouts/MainLayout";

import { Box, Typography, Button } from "@mui/material";

import { Add } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import BillTable from "./components/BillTable";

function BillingList() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Billing Management
          </Typography>

          <Typography color="text.secondary">
            Manage patient bills and payments
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/billing/add")}
        >
          Add Bill
        </Button>
      </Box>

      <BillTable />
    </MainLayout>
  );
}

export default BillingList;
