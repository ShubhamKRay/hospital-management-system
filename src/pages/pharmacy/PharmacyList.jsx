import MainLayout from "../../layouts/MainLayout";

import { Box, Typography, Button } from "@mui/material";

import { Add } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import MedicineTable from "./components/MedicineTable";

function PharmacyList() {
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
            Pharmacy Management
          </Typography>

          <Typography color="text.secondary">
            Manage all medicines and stock
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/pharmacy/add")}
        >
          Add Medicine
        </Button>
      </Box>

      <MedicineTable />
    </MainLayout>
  );
}

export default PharmacyList;
