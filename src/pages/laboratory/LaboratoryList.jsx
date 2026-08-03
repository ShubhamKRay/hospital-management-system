import MainLayout from "../../layouts/MainLayout";

import { Box, Typography, Button } from "@mui/material";

import { Add } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import LabTestTable from "./components/LabTestTable";

function LaboratoryList() {
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
            Laboratory Management
          </Typography>

          <Typography color="text.secondary">
            Manage all laboratory tests
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/laboratory/add")}
        >
          Add Lab Test
        </Button>
      </Box>

      <LabTestTable />
    </MainLayout>
  );
}

export default LaboratoryList;
